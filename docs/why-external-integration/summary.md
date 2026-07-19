---
sidebar_position: 1
title: Comparison summary
description: Advantages of the External Integration Module over standard Microsoft Dynamics 365 integration tools - DMF, Business Events, and Message Processor.
---

# Why use External Integration?

D365FO already ships with several integration technologies. They work well for the scenarios they were designed for, but production integrations usually need more control over business logic, error handling, and troubleshooting. This page summarizes where the External Integration framework has advantages; the [detailed comparison](./detailed.md) walks through concrete scenarios.

## vs Data Management Framework (DMF)

| Capability | DMF | External Integration |
|---|---|---|
| Custom transaction control (per message, per journal, per line) | Limited to entity behaviour | ✅ Fully controlled in the processing class |
| Link a created document to the original file | Not available out of the box | ✅ Payload attached to every message |
| Custom business logic | Tied to data entities | ✅ Plain X++, no data entity required |
| External dependencies | Entity/DIXF infrastructure | ✅ Native X++ code only |
| Error handling | Varies by entity | ✅ A standard approach to error types (connection, format, data, posting) |

DMF still has its place — the framework even includes a [DMF-based scenario](https://denistrunin.com/xpptools-fileintegdmf) that wraps standard data projects with the framework's logging and multicompany support.

## vs Business Events

| Capability | Business Events | External Integration |
|---|---|---|
| Data creation timing | Payload built at event time | ✅ Document created at the time of export |
| Event frequency and uniqueness | Duplicates possible | ✅ Messages are unique per document |
| Response processing | Fire-and-forget | ✅ The response can be processed and stored |
| Logging | No success logs | ✅ Full logs, including successful exports |

## vs Message Processor

| Capability | Message Processor | External Integration |
|---|---|---|
| Logging | Basic | ✅ Enhanced logging with payload storage |
| Tracing | Limited | ✅ Full trace from document to original message |
| Manual message processing | Not supported | ✅ Manual load and reprocessing from the UI |
| Testing | — | ✅ Can run in a `ttsbegin`-`ttsabort` block for test scenarios |
| Processing and format flexibility | Fixed patterns | ✅ Any format, any processing logic |

## The main idea

Standard tools optimize for *configuring* an integration. The External Integration framework optimizes for *operating* one: every interface gets the same message log, the same error model, the same reprocessing tools, and the same monitoring workspace — so the support team learns the model once and applies it to every integration.

Continue to the [detailed comparison](./detailed.md) for scenario-based evidence.
