---
title: "Tool Use in Java"
description: "Registering Java methods the LLM can invoke, with trust levels and observability built in — coming once the agent rebuild lands."
date: 2026-04-19
tags: ['AI', 'Java', 'Tool Use']
draft: true
---

> **Coming in ROADMAP-17.**
>
> Tool use — Java methods the LLM can invoke, registered via `@CafeAITool` —
> is being rebuilt on the current LangChain4j API as part of the agent work
> in ROADMAP-17. This post will be written once the implementation is solid.
>
> The design intent: annotate a method, register the object, the framework
> handles schema generation, invocation, and the tool-calling loop.
> Trust levels (INTERNAL for Java tools, EXTERNAL for MCP) and observability
> traces are part of the design.
