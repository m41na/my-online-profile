---
title: "What I'm Not Automating"
description: "Proxmox Backup Server retention and pruning is staying a documented runbook instead of being forced into Terraform — and why that's the right call, not a shortcut."
date: 2026-08-15
tags: ["Homelab", "IaC", "Backups"]
draft: true
---

> **Coming once there's a real runbook to show, not just an opinion.**
>
> Backup job scheduling can reasonably go through Ansible. Retention and
> pruning policy is a different kind of decision — one with enough
> judgment and edge cases in it that forcing it into Terraform mostly just
> hides that judgment behind a resource block instead of removing the
> need for it. The bet here is that a clear, versioned runbook is more
> honest than IaC-for-its-own-sake, and that knowing where to draw that
> line is itself part of the skill, not a gap in it.
>
> This post gets written once the runbook actually exists and has been
> exercised for real, not just argued for.
