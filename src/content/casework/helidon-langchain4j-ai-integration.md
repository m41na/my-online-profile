---
title: "Making an LLM Integration Boring Enough to Trust in Production"
hook: "The hard part of Java + AI isn't calling the model. It's making that call observable, recoverable, and reliable enough to ship."
sector: "Food & Beverage / Payments"
client: "Oracle Corporation"
stack: ["Helidon", "LangChain4j", "RAG", "Vector DB", "MCP", "Observability"]
duration: "1 year"
teamSize: 7
role: "Principal Architect"
outcome: "Shipped the payments platform and stood up the org's first production AI integration — two separate top-level enterprise goals delivered in the same year."
order: 4
status: "live"
---

## The situation

At Oracle's food and beverage division, the core product was a payments processing API serving web and mobile clients — the kind of system where "the AI call is a little flaky sometimes" isn't an acceptable operating mode. My mandate was to pilot AI integration into the development workflow and the service itself, on top of Oracle's Helidon framework, without introducing the kind of unpredictability that payments infrastructure can't tolerate.

## What I built

I chose Helidon as the backbone because it's lightweight, fast to start, and well suited to the kind of service-level composition this needed — it doesn't fight you when you want tight control over what's happening on the request path. LangChain4j handled the LLM orchestration layer: structuring prompts, managing message flow, and coordinating tool use through MCP and Helidon's own AI services integration.

Underneath that, I wired in a vector database for retrieval-augmented generation, so the model was grounded in relevant context rather than answering from parametric memory alone, and used Redis alongside a foreign-function-and-memory-based memory API for context propagation — keeping conversational and task state coherent across calls without leaking it across requests or losing it between them.

But the part of this engagement that actually mattered was making the whole thing observable and recoverable. Every LLM call was logged and instrumented the same way any other critical downstream dependency would be — visibility into latency, failure modes, and retry behavior, dashboards that made metrics legible to the team rather than just the logs, and defined fallback behavior for when the model call didn't come back clean. The goal wasn't "the AI feature works in the demo." It was "this behaves like a production dependency, because it is one."

## Why this matters now

This one's a different kind of proof than the rest of the work here. The other engagements were about solving a problem before the industry had a name for it. This one's the opposite: LLM reliability is being figured out in real time, right now, by everyone at once — there's no years-later vindication to point to, because the industry hasn't caught up yet. What sets this apart isn't timing, it's that most people racing to ship AI features are still stuck on "does the call work," and this was already answering "does the call behave like a production dependency."

Everyone can wire an LLM call into a Java service this year — the SDKs make that trivial. What's still genuinely hard, and still underserved, is making that call behave the way the rest of your production system behaves: instrumented, bounded, recoverable, and boring when it needs to be. That's the difference between an AI feature that survives its first bad day in production and one that becomes the thing your on-call engineer dreads.

If you're trying to get AI features past the proof-of-concept stage in a JVM shop and need someone who treats "the model didn't respond" as an engineering problem rather than a shrug, this is the exact gap I closed here.
