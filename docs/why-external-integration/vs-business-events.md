---
sidebar_position: 2
title: vs Business Events
description: Where the External Integration Module has advantages over Business Events for event-driven exports.
---

# vs Business Events

| Capability | Business Events | External Integration |
|---|---|---|
| Data creation timing | Payload built at event time | ✅ Document created at the time of export |
| Event frequency and uniqueness | Duplicates possible | ✅ Messages are unique per document |
| Response processing | Fire-and-forget | ✅ The response can be processed and stored |
| Logging | No success logs | ✅ Full logs, including successful exports |

## Scenario: outbound event-based export

Every confirmed purchase order must be pushed to an external web service, with a reference stored back on the order.

- **With Business Events**, the payload is generated when the event fires. If the receiving side needs data as of export time (after later edits), or if the same document is confirmed twice, you get stale or duplicate payloads. There is no success log, and the response from the receiver cannot be processed.
- **With External Integration**, confirming an order writes a record to the [Export document log](../forms/logs.md#export-document-log); the payload is built **at export time**, records are unique per document, the web service response is processed (for example, storing the returned ID on the vendor reference), and both successes and failures are logged with the full message body when full logging is enabled.

Evidence: [Event-based exports to external web services](https://denistrunin.com/integration-outboundweb) — includes tracing a "successful" call that the receiver actually lost, which is not detectable with Business Events.

Business Events also do not cover **periodic bulk exports** — see the [Outbound Periodic message type](../message-types/outbound-periodic.md) for how the framework handles those, including no-code SQL exports.
