---
title: "The Cluster Layer: kubeadm, Ansible, or Talos"
description: "Deciding how the Kubernetes nodes themselves get built and stay in sync — coming once the decision is made and proven, not just weighed."
date: 2026-08-15
tags: ["Homelab", "IaC", "Kubernetes", "Talos"]
draft: true
---

> **Coming once this is actually decided and running.**
>
> Two real options on the table: Terraform plus kubeadm/Ansible for node
> setup, which is the well-worn path — or Talos Linux, which removes SSH
> from the equation entirely and treats node configuration as versioned
> YAML applied through an API instead of a shell session. The second one
> is the more interesting bet, and the more current one, but it's a bigger
> departure from how the cluster runs today.
>
> This post gets written once one of those is actually the cluster's
> reality, not a comparison of options.
