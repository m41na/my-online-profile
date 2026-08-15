---
title: "Start Here: The CafeAI Series"
description: "A field guide to the CafeAI series — what it is, why it exists, and where to jump in."
date: 2026-08-15
tags: ["CafeAI", "Java", "AI"]
draft: false
---

CafeAI is an opinionated, Express-style framework for building AI-native applications in Java — middleware pipelines, typed prompts, tiered memory, RAG, guardrails, multimodal input, structured output, and the production concerns (token budgets, retries, observability) that turn a working demo into something that survives contact with real traffic.

It exists because most of the Java ecosystem's answers to "how do we build with LLMs" bury the pipeline behind annotations and autowired beans until nobody can explain what happens between the request and the response. CafeAI takes the opposite bet: the framework assembles middleware, the developer writes intent, and every line has a reason you can point to.

This series documents building it — the design decisions, the places the framework's own assumptions broke against a real application, and what four capstone projects and 359 tests actually proved. Jump to whichever one matches the problem in front of you:

1. [Brewing AI in Java — Introducing CafeAI](/blog/01-brewing-ai-in-java/)
2. [The Middleware Pattern Meets Gen AI](/blog/02-middleware-pattern-meets-gen-ai/)
3. [Your First LLM Call Without Spring Boot](/blog/03-first-llm-call-without-spring-boot/)
4. [Prompt Engineering in Java](/blog/04-prompt-engineering-in-java/)
5. [Context Memory Without the Cloud Tax](/blog/05-context-memory-without-cloud-tax/)
6. [Building a RAG Pipeline in Java](/blog/06-building-rag-pipeline-in-java/)
7. [Ethical Guardrails as Middleware](/blog/08-ethical-guardrails-as-middleware/)
8. [Vision and Audio in Java](/blog/09-vision-and-audio-in-java/)
9. [Structured Output](/blog/10-structured-output/)
10. [Production-Grade AI](/blog/11-production-grade-ai/)
11. [The Capstone Series — What Four Applications Prove](/blog/12-the-capstone-series/)

Tool use — Java methods the LLM can invoke — is being rebuilt on the current LangChain4j API as part of the agent work in progress. That post lands once the implementation is solid, not before.

The code is real and public: [github.com/akilisha/cafeai](https://github.com/akilisha/cafeai).
