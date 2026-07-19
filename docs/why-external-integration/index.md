---
title: Why External Integration
description: Advantages of the External Integration Module over the standard Microsoft Dynamics 365 integration tools - DMF, Business Events, and Message Processor.
---

# Why External Integration

D365FO already ships with several integration technologies, and they work well for the scenarios they were designed for. Production integrations, however, usually need more control over business logic, error handling, and troubleshooting. Standard tools optimize for *configuring* an integration; the External Integration framework optimizes for *operating* one: every interface gets the same message log, the same error model, the same reprocessing tools, and the same monitoring workspace.

Where the framework has advantages over each standard tool:

| Standard tool | External Integration adds | Details |
|---|---|---|
| **Data Management Framework (DMF)** | Custom transaction control, document linked to the original file, business logic not tied to data entities, a standard approach to error types | [vs DMF](./vs-dmf.md) |
| **Business Events** | Document created at export time, messages unique per document, response processing, full logs including successes | [vs Business Events](./vs-business-events.md) |
| **Message Processor** | Unlimited batch tasks, line-level statistics, tracing to resulting records, manual processing, testing support, processing flexibility, any format | [vs Message Processor](./vs-message-processor.md) |

Use the standard tools when their happy path matches your requirement exactly. Choose External Integration when the interface has custom logic, when support and troubleshooting matter, or when you want every integration in the system to look and operate the same way.
