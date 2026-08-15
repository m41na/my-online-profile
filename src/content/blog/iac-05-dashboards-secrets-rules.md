---
title: "Dashboards, Secrets, and Rules as Code"
description: "Grafana panels, Kubernetes/VM secrets, and Semgrep rulesets — three smaller layers that all fail the same way when they're not versioned."
date: 2026-08-15
tags: ["Homelab", "IaC", "Secrets", "Grafana", "Semgrep"]
draft: true
---

> **Coming once these are actually versioned.**
>
> Three layers that are individually small but share the same failure
> mode: a Grafana panel edited by hand that nobody remembers changing, a
> Kubernetes secret that only exists because someone typed it into
> `kubectl` once, a Semgrep rule tweaked locally and never committed
> anywhere. The plan is dashboards as code (JSON model or the Grafana
> Terraform provider), Sealed Secrets for the cluster and SOPS-encrypted
> files in git for everything else, and Semgrep's custom rules in their
> own versioned repo, referenced by version from the pipeline rather than
> edited in place.
>
> This post gets written once all three are actually living in git, not
> just planned to.
