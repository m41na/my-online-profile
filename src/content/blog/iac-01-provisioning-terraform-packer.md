---
title: "Provisioning and Base Images: Terraform and Packer"
description: "Proxmox VMs and LXCs provisioned from a golden image, reviewed via PR — coming once the image pipeline and Terraform modules are proven, not just written."
date: 2026-08-15
tags: ["Homelab", "IaC", "Terraform", "Packer"]
draft: true
---

> **Coming once this is actually built.**
>
> The plan: `bpg/proxmox` for Terraform, so CPU, RAM, disk, and network for
> every VM/LXC are code, reviewed via pull request before anything is
> provisioned. Packer bakes the OS, Docker, and hardening into a golden
> image once; Terraform clones from it. The rule that matters most here
> isn't the tool choice — it's the discipline: a change means rebuilding
> the image and replacing the VM, never SSH-patching a box that's already
> running.
>
> This post gets written once that discipline is actually true of the lab,
> not just the plan for it.
