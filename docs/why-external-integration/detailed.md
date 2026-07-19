---
sidebar_position: 2
title: Detailed comparison
description: Scenario-based comparison of the External Integration Module with DMF, Business Events, and Message Processor, with links to working examples.
---

# Detailed comparison

This page goes through typical integration scenarios and shows how the standard tools and the External Integration framework behave in each. Every claim links to a published, working example you can reproduce.

## Inbound file processing

**Scenario:** an external system drops ledger journal files (CSV/Excel) into a shared location several times a day. Journals must be created and posted, and accountants must be able to investigate any failure themselves.

- **With DMF**, the import logic is bound to a data entity. Custom validation, staging review, and "post or leave unposted" decisions require entity customization, and there is no built-in link from a created journal back to the file it came from.
- **With External Integration**, the processing class decides transaction scope (one transaction per message, per journal, or per line), the original file is attached to the message, and all four typical error types — connection, file format, data, and posting errors — surface in one *Incoming messages* form with staging data for review.

Evidence: [File-based integration for ledger journals](https://denistrunin.com/xpptools-fileintegledger) — includes a walk-through of each error type and how a user recovers from it.

**Performance** is comparable to raw DMF batch imports: the framework's parallel processing imported **1 million journal lines** in a standard test. Evidence: [Periodic import of one million ledger journal lines](https://denistrunin.com/xpptools-fileintegledgerperf).

**When DMF is still the right choice:** standard master-data entities with no custom logic. The framework can even orchestrate DMF projects — adding its logging, error model, and multicompany execution on top: [Multicompany DMF integration](https://denistrunin.com/xpptools-fileintegdmf).

## Outbound event-based export

**Scenario:** every confirmed purchase order must be pushed to an external web service, with a reference stored back on the order.

- **With Business Events**, the payload is generated when the event fires. If the receiving side needs data as of export time (after later edits), or if the same document is confirmed twice, you get stale or duplicate payloads. There is no success log, and the response from the receiver cannot be processed.
- **With External Integration**, confirming an order writes a record to the *Export document log*; the payload is built **at export time**, records are unique per document, the web service response is processed (for example, storing the returned ID on the vendor reference), and both successes and failures are logged with the full message body when full logging is enabled.

Evidence: [Event-based exports to external web services](https://denistrunin.com/integration-outboundweb) — includes tracing a "successful" call that the receiver actually lost, which is not detectable with Business Events.

## Outbound periodic export

**Scenario:** send daily on-hand, customer, or EDI invoice files to an SFTP server.

Business Events do not cover periodic bulk exports. With the framework, simple cases are **no-code** (a SQL statement or data entity query in the *Outbound message types* form), and complex cases are a small X++ class extending `DEVIntegExportBulkBase`, with file naming templates, company ranges, and an export log with line counts and durations.

Evidence: [Periodic data export from D365FO to SFTP](https://denistrunin.com/integration-outboundsftp).

## Message-based processing and support

**Scenario:** an operations team supports 20 interfaces and must resolve stuck messages daily without developer help.

- **With Message Processor** (the standard framework used by some Microsoft features), logging is minimal, messages cannot be loaded manually, and there is no simple way to re-run one message in isolation.
- **With External Integration**, every message can be viewed, downloaded, reprocessed, or cancelled from the UI; the *Manual load* function processes pasted payloads exactly as if they came from the connector; a *Processing attempts* counter prevents endless retries; and processing can be run inside a `ttsbegin`-`ttsabort` block for safe testing in production-like environments.

Evidence: [Import sales orders from an external web application](https://denistrunin.com/integration-inboundwebsales) — shows full traceability from a sales order back to the original JSON request, and recovery flows for parsing, mapping, and repeated errors.

## Synchronous services

**Scenario:** an external system needs to query D365FO data synchronously with flexible parameters.

Standard custom services work, but every developer invents their own logging, error contract, and testing approach. The framework standardizes the response contract (dataset + success flag + error message), adds configurable logging (statistics-only, errors, request, full), and provides an in-D365FO test form — no Postman needed.

Evidence: [Service-based integration in D365FO](https://denistrunin.com/integration-services).

## Summary

Use the standard tools when their happy path matches your requirement exactly. Choose External Integration when the interface has custom logic, when support and troubleshooting matter, or when you want every integration in the system to look and operate the same way.
