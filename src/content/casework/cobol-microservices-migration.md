---
title: "Decomposing a COBOL Mainframe Without Betting the Business On It"
hook: "How characterization tests and contract boundaries turned a high-risk mainframe rewrite into a controlled, verifiable migration."
sector: "Healthcare / Insurance"
client: "WPS Health Solutions"
stack: ["COBOL", "Java", "REST", "Microservices", "Contract testing"]
order: 2
status: "live"
---

## The situation

Health insurance claims logic is a bad place to guess. At WPS Health Solutions, the system of record was an IBM mainframe running COBOL, fronted by a Struts-based UI — years of accumulated business rules that nobody had fully documented, because the code itself was the documentation. The mandate was to move this onto a modern, Java-based microservices architecture with a JavaScript frontend, without breaking claims processing in the process.

This predates the current wave of AI-assisted modernization tooling by close to a decade. There was no LLM to summarize the COBOL for me. The only way through was discipline.

## What I built

Before touching a single line of the legacy system, I characterized it: built a suite of tests against the existing COBOL logic's actual observed behavior, not its intended behavior — capturing what the system really did, including its edge cases and undocumented quirks, so that any deviation during the rewrite would surface immediately rather than months later in production.

Then, as each piece of logic was extracted into a new service, I set contract and equivalency tests at that service's boundary — asserting that, given the same inputs the old system would receive, the new service produced the same outputs. This is what actually made safe decomposition possible: each new microservice could be built, tested, and trusted independently, because its correctness was being verified against ground truth from the system it was replacing, not against my own assumptions about what the COBOL was supposed to do.

The result was a full migration off the mainframe — COBOL and Struts replaced by Java microservices and a REST-backed JavaScript frontend — with claims logic that behaved identically to the system it replaced.

## Why this matters now

The industry's own data on modernization projects is not encouraging: a large share of large-scale rewrites run 2–3x over budget, and the common thread in the failures isn't usually the target architecture — it's that nobody could prove the new system matched the old one's behavior until it was already live. Characterization testing before you touch anything, and contract testing at every new boundary you create, is the difference between a modernization project that ships on schedule and one that turns into a multi-year, budget-eating slog with a production incident at the end of it.

This is the same discipline I bring to any legacy decomposition — mainframe, monolith, or otherwise: don't move logic you haven't first proven you understand.
