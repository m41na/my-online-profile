---
title: "A Domain-Owned Data Platform Before 'Data Mesh' Was a Word"
hook: "Log-based CDC out of Postgres, materialized into live, purpose-built views for five different stakeholder groups — not a shared lake."
sector: "Insurance"
client: "DAIS Technology"
stack: ["Debezium", "Kafka Connect", "Kafka Streams", "CDC", "Postgres"]
duration: "1 year"
teamSize: 7
role: "Tech Lead / Senior Architect"
outcome: "Gave 100+ partner businesses a compliant, real-time view into shared claims data — closing a standing technical gap across the network."
order: 3
status: "live"
---

## The situation

At DAIS Technology, the problem was structural: over 100 separate businesses needed to participate in a shared jewelry insurance claims process, each with a different relationship to the same underlying data. A claim adjuster needs something different from what a fraud investigator needs, which is different again from what remittance, appeals, or denials teams need. Centralizing everyone onto one shared schema and one shared access pattern — the "data lake" approach — would have meant every team either waiting on a central team to build their view, or fighting over a one-size-fits-all model that served nobody well.

## What I built

I built a change-data-capture platform using Debezium reading directly off Postgres's write-ahead log — capturing every change as it happened, without touching application code or adding write-path latency. Kafka Connect handled reliable delivery of those change events into Kafka, and Kafka Streams did the real work: materializing multiple independent, purpose-built views of the same underlying claims data, each shaped for a specific stakeholder — claim adjusters, investigators, remittance, appeals, denials — all reading live, all derived from the same source of truth, none of them waiting on each other or stepping on each other's schema.

## Why this matters now

This is a domain-owned, event-driven data architecture — each consuming team gets its own materialized view, owned and shaped for its own use case, fed continuously from the same log rather than batch-loaded into a shared warehouse. That's the pattern the industry now calls data mesh: decentralized, domain-oriented data ownership as an alternative to the centralized lake. I built this before either "data mesh" or "CDC platform" were common industry terms — it was just the shape the jewelry insurance problem demanded.

It's also a deliberately advanced use of the Kafka ecosystem. Producing to a topic and consuming it downstream is commodity Kafka work. Log-based CDC into Kafka Connect for delivery guarantees, into Kafka Streams for live, stateful materialization across multiple independent consumer views — that's a different tier of system, and it's the clearest proof point I have that event-driven architecture, for me, goes well past "we use Kafka."
