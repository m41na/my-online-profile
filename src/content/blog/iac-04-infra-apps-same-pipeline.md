---
title: "Infra Apps Through the Same Pipeline"
description: "Forgejo, DefectDojo, and Grafana deployed through the same compose path that already ships user projects — no second mechanism needed."
date: 2026-08-15
tags: ["Homelab", "IaC", "CI/CD", "GitOps"]
draft: true
---

> **Coming once this is actually running that way.**
>
> The pipeline already has a working compose deploy path — it was built
> for user projects, but there's no real reason "infra" apps like Forgejo,
> DefectDojo, Grafana, and the Actions runner itself need a different
> mechanism. If a docker-compose.yml in git is enough to promote and
> deploy someone else's project, it's enough to promote and deploy the
> tools running the pipeline too. This is probably the shortest gap to
> close in this whole series — most of the machinery already exists.
>
> This post gets written once the infra apps are actually going through
> it, not just eligible to.
