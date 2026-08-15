---
title: "Same Pipeline, Two Deploy Targets"
description: "A self-hosted CI/CD pipeline that builds, scans, and promotes to Kubernetes or Docker Compose from one reusable workflow — no per-repo config."
date: 2026-08-15
tags: ["Homelab", "CI/CD", "Kubernetes", "Forgejo", "GitOps"]
draft: true
---

I run a small Proxmox cluster at home — three nodes, a mix of VMs and LXC containers — with a Kubernetes cluster (one control plane, three workers) sitting on top of it. Underneath the acronyms, the actual goal is boring and practical: `git push`, and have the right thing happen, whether "the right thing" is a Helm-based deploy to Kubernetes or a `docker compose pull` on a plain VM.

This is the pipeline that makes that happen, project by project, from a single shared workflow — not one pipeline per repo.

## The pieces

Built in this order, deliberately, because each piece needs the one before it to trust:

- **Forgejo, on its own LXC.** Get git hosting solid first, before anything depends on it. Every project's source lives here now.
- **A Forgejo Actions runner, on a separate small VM/LXC.** Self-hosted, with Docker, Trivy, and Semgrep installed on it directly rather than pulled fresh every run.
- **A deploy repo, plus Argo CD, inside the cluster.** The pipeline never talks to Kubernetes directly — it updates a values file in a Git repo, and Argo CD, watching that repo, reconciles the cluster on its own.
- **A separate Docker VM**, for anything that isn't on Kubernetes yet, reachable over SSH for the compose deploy path.

## One workflow, not one per repo

The actual pipeline lives in its own repo — `pipeline-templates` — as a single reusable `workflow_call`. Every project's own CI file is a couple of lines that just calls it. New repos don't configure a pipeline; they just have a Helm chart or a `docker-compose.yml`, and the shared workflow figures out the rest:

```yaml
- name: Detect deploy target
  id: detect
  run: |
    if [ -f "helm/Chart.yaml" ]; then
      echo "target=kubernetes" >> "$GITHUB_OUTPUT"
    elif [ -f "docker-compose.yml" ]; then
      echo "target=compose" >> "$GITHUB_OUTPUT"
    else
      echo "target=none" >> "$GITHUB_OUTPUT"
    fi
```

That's the whole "declaration" a new project makes — not a config flag, not a label in a dashboard, just the presence of a file that was already going to be there anyway. Everything upstream of this step is the same for every project: build the image, run Semgrep against the source and Trivy against the image, publish both result sets to DefectDojo for one place to review findings, then a hard quality gate — Trivy again, this time with `--exit-code 1` on CRITICAL/HIGH, unfixed issues excluded. Fail that, and nothing downstream runs. No image gets pushed, nothing gets deployed.

Once an image clears the gate and lands in the registry, the two deploy jobs are conditional on what `detect` found, and they don't look anything alike:

```yaml
deploy-kubernetes:
  needs: build-scan-push
  if: needs.build-scan-push.outputs.deploy_target == 'kubernetes'
  steps:
    - uses: actions/checkout@v4
      with:
        repository: myorg/gitops-deploy
    - name: Bump image tag in Helm values
      run: |
        yq -i ".image.tag = \"${{ needs.build-scan-push.outputs.image_tag }}\"" "$VALUES"
    - name: Commit and push
      run: |
        git commit -am "bump to ${{ needs.build-scan-push.outputs.image_tag }}"
        git push
        # Argo CD is watching this repo and reconciles the cluster automatically.

deploy-compose:
  needs: build-scan-push
  if: needs.build-scan-push.outputs.deploy_target == 'compose'
  steps:
    - name: SSH deploy to Docker VM
      uses: appleboy/ssh-action@v1
      with:
        script: |
          cd /opt/apps/${{ github.event.repository.name }}
          sed -i "s|^IMAGE_TAG=.*|IMAGE_TAG=${{ needs.build-scan-push.outputs.image_tag }}|" .env
          docker compose pull
          docker compose up -d
```

The Kubernetes path never runs `kubectl` at all — it edits a YAML file and pushes, and Argo CD does the actual work of reconciling. The compose path is the opposite: no GitOps layer, just SSH in and pull. Different philosophies, same trigger, same gate in front of both.

## What's actually proven, and what isn't yet

The infrastructure is real and running. The shared workflow is built, and each piece of it — the scan-and-gate stage, the Kubernetes path, the compose path — has been proven individually against a simple project. What hasn't happened yet is running one real, complicated project through the *entire* thing end to end, gate to running service, on both targets. That's next, and it's the kind of gap that only shows up once you stop testing with a hello-world container.

The longer-term goal is to make this fast enough to stand up a full demo environment on demand — deploy something, show it, tear it down — rather than something I run once and leave up. This pipeline is the part that has to exist first. It does now. Proving it end to end is what's left.
