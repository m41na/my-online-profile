---
title: "[Draft] JVM Performance Diagnosis — JFR, OpenTelemetry, and GC Behavior"
hook: "Either a JFR + OpenTelemetry trace-correlation write-up, or a GC-pause / allocation-hotspot diagnosis story — pick whichever has the sharper specifics."
sector: "TBD"
stack: ["JFR", "OpenTelemetry", "JVM tuning"]
order: 5
status: "draft"
---

## Notes for later

Two possible directions, worth writing up as a fifth case study once there's
bandwidth — this one carries less unique weight than #1–#4, but is still a
credible, differentiated proof point:

1. **JFR + OpenTelemetry trace correlation** — walk through a real incident
   where Java Flight Recorder data was correlated with distributed traces to
   pin down a production issue that logs and metrics alone didn't explain.
2. **GC-pause / allocation-hotspot diagnosis** — a specific case where GC
   behavior or allocation pressure was diagnosed and fixed, with before/after
   numbers if they're available.

This file is set to `status: draft`, so it won't appear on the live site
until it's filled in and flipped to `status: live`.
