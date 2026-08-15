---
title: "Who Deploys the Deployer: Argo CD's Own Config"
description: "Managing Argo CD's own upgrades and configuration declaratively instead of by hand — coming once the app-of-apps setup is real."
date: 2026-08-15
tags: ["Homelab", "IaC", "Kubernetes", "Argo CD", "GitOps"]
draft: true
---

> **Coming once this is actually built.**
>
> Argo CD manages the deployment of everything else in the cluster
> declaratively — the plan is for it to manage itself the same way, via
> the app-of-apps pattern, rather than its own notification config, RBAC,
> and upgrades happening through ad hoc `kubectl apply`. It's a small
> question with an outsized amount of chicken-and-egg to it: the thing
> responsible for GitOps has to actually practice it on itself.
>
> This post gets written once Argo CD's own config lives in git the same
> way everything it deploys already does.
