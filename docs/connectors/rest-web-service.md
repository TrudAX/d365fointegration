---
sidebar_position: 5
title: REST / Web service
description: Direct HTTP API integration - calling external web services from D365FO and polling APIs for inbound data.
---

# REST / Web service

The framework calls external HTTP APIs directly from X++ — for pushing documents out (event-based exports) and for polling data in (incremental inbound loads).

**Framework class:** `DEVIntegExternalServiceHttpClient` — a wrapper over `HttpClient` that applies the [Connection type](../forms/setup/connection-types.md) settings (URL, timeout, credentials) and standard logging.

## Outbound (push)

A business event (for example, purchase order confirmation) creates a record in the [Export document log](../forms/logs.md#export-document-log); the export class builds the payload **at export time** and posts it to the API. The response is processed — for example, storing a returned ID back on the D365FO document. Export runs either immediately in the user session or via a periodic batch job.

Connection reuse matters for throughput: the built-in [performance test](../forms/operations.md#performance-test) showed 700 exports/minute with a cached connection vs 350 with a new connection per call.

## Inbound (poll)

The load class requests data modified since the **Last date time** stored on the [Inbound message type](../forms/setup/inbound-message-types.md), with an *Overlap* to catch late commits and optional paging (*Offset*/*Limit*). The raw JSON response becomes a parent message; each contained document becomes a child message with staging data — giving full traceability from a created order back to the original API response.

## Tutorials

- [Event-based exports to external web services](https://denistrunin.com/integration-outboundweb) — outbound push with response processing, tracing, and performance testing.
- [Import sales orders from an external web application](https://denistrunin.com/integration-inboundwebsales) — incremental polling, parent/child messages, mapping, and error recovery.
