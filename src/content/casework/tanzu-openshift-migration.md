---
title: "Moving 3,600 Projects Off VMware Tanzu — Without a Single Missed Deadline"
hook: "A platform migration bigger than most 'large enterprise' benchmarks account for, governed by a maturity model built years before 'platform engineering' had a name."
sector: "Financial Services"
client: "Discover Financial Services"
stack: ["Tanzu / PCF", "OpenShift", "CI/CD", "Policy-as-code", "Golden paths"]
duration: "2 years"
teamSize: 8
role: "Senior Engineering Manager"
outcome: "Cleared a mandated platform exit without missing the deadline — one of the organization's top compliance and technical priorities closed out."
order: 1
status: "live"
---

## The situation

Broadcom's acquisition of VMware reset the economics of Tanzu and VMware licensing overnight — enterprises are reporting renewal increases from the low hundreds of percent up past 1,000% depending on account size and negotiating leverage. The result is a live migration wave, not a hypothetical one: organizations that assumed their virtualization and platform layer was a stable, sunk cost are now re-litigating it under deadline pressure, and OpenShift has become one of the most common landing spots.

That's the environment I was already operating in. At Discover Financial Services, I led the migration of over 3,600 projects off a PCF/Tanzu platform — a scale past what most migration-sizing guides even model for. "Large enterprise" benchmarks typically top out around 500–2,000 VMs or services, with 12–24 months commonly cited as the expected timeline at that scale. This ran larger than that top benchmark, and on a fixed, zero-slip deadline that gave none of that usual runway.

## What I built

The part of this engagement that mattered most wasn't the migration mechanics — it was the governance layer that made moving 3,600 projects at once survivable instead of chaotic.

I designed and built a deployment maturity model: every project was placed into a tier — freshman, sophomore, junior, senior — that determined its deployment window and how much autonomy it got in the new platform. Placement wasn't a manual judgment call. It was gated by an automatically computed quality score, built from signals across naming conventions, code review discipline, test coverage, and security/dependency scanning. Projects that scored well earned faster, more autonomous deployment paths. Projects that didn't got more guardrails until they did.

Alongside the maturity model, I built the CI/CD platform underneath it — collapsing an existing sprawl of over 600 separate pipelines down to one unified, governed pipeline definition, with the audit and DORA-metric collection built in from the start rather than bolted on after.

## Why this matters now

In today's terms, what I built is a graduated golden path — a policy-as-code trust-tiering system that gives high-scoring teams a fast, self-service lane while keeping lower-maturity projects inside more supervision, without freezing everyone into the same rigid pipeline. That distinction matters more than it sounds like it should: DORA's own research on platform engineering warns explicitly against the "golden cage" failure mode — a single one-size-fits-all path that ignores how different teams actually work, which can quietly *reduce* throughput and change stability instead of improving it.

I built the tiered version of this before "platform engineering" was a job title. The freshman-to-senior framing wasn't a metaphor bolted on after the fact — it was the actual operating model, and it's the reason 3,600 projects could move on a fixed deadline without every team hitting the same bottleneck at once.

There's a practical hiring argument buried in the market data too: analysts covering this migration wave are already noting that successful moves to a new platform typically require skilled resources brought in to augment the existing team — capacity that most organizations don't have sitting idle, and can't grow fast enough through a normal hiring cycle to hit a deadline that isn't moving. An engagement that starts and ends around the migration is a faster path to that expertise than opening a req for it.

If your organization is staring down a forced Tanzu exit and trying to figure out how to move fast without losing control of quality or governance along the way, this is exactly the problem I've already solved — at a scale most migration playbooks don't account for.
