---
title: "Start Here: The Home Lab as Code Series"
description: "A running series on turning a home lab into real infrastructure as code, one layer at a time — published as each layer is actually built, not written in advance."
date: 2026-08-15
tags: ["Homelab", "IaC", "Kubernetes", "Terraform"]
draft: false
---

Every enterprise I've worked in — legacy shops fighting years of configuration drift, and greenfield teams trying to avoid repeating that mistake — eventually runs into the same question: how much of the infrastructure is actually in git, versioned, reviewed, and reproducible, versus how much only exists because someone remembers what they clicked. That question doesn't care how old the organization is.

This series is that discipline applied to my own home lab, layer by layer — provisioning, base images, the cluster itself, workloads, secrets, dashboards, even backups. Some of these genuinely belong in infrastructure as code. A couple deliberately don't, and part of the point of this series is being honest about which is which instead of forcing everything into the same shape because it's fashionable to automate all of it.

Posts land here as each layer is actually built and proven — not written in advance of the work. Where a row below doesn't link anywhere yet, it's next, not done.

| Layer | Component | Status |
|---|---|---|
| Workloads | Helm charts, Argo CD Applications | **Done** — one pipeline, two deploy targets, GitOps by construction |
| Provisioning | Proxmox VMs/LXCs | Next — Terraform, reviewed via PR like any other change |
| Base image | VM golden image | Next — Packer; a change means rebuild and replace, never SSH-patch a live box |
| Cluster | Kubernetes nodes | Next — Terraform + kubeadm/Ansible, or Talos Linux |
| Meta | Argo CD's own config | Planned — app-of-apps, so it manages its own upgrades declaratively |
| Non-k8s apps | Forgejo, DefectDojo, Grafana, the runner itself | Planned — the same compose deploy path already ships user apps; no second mechanism needed for infra apps |
| Dashboards | Grafana panels | Planned — dashboards as code, not hand-edited panels nobody remembers changing |
| Secrets | K8s and VM-level secrets | Planned — Sealed Secrets for the cluster, SOPS-encrypted files in git for the rest |
| Rules | Semgrep custom rulesets | Planned — its own repo, versioned, reviewed like code |
| Backups | Proxmox Backup Server jobs | Deliberately partial — scheduling can be Ansible; retention and pruning is arguably better as a documented runbook than forced into Terraform |

The deploy pipeline — the "Workloads" row above — already exists and is written up on its own. The rest of this series is that same bar applied to everything underneath it, one proven layer at a time.
