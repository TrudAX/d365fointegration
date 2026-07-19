---
sidebar_position: 2
title: Outbound Event-based
description: The event-based outbound message type - exporting one document per business event with full operational evidence.
---

# Outbound Event-based

An event-based outbound message type exports **one document per business event**: a purchase order confirmation, an invoice posting, a shipment. The document class extends `DEVIntegExportMessageBase`.

## How it works

1. The business event (for example, confirming a purchase order) creates a record in the [Export document log](../forms/logs.md#export-document-log) with status *To send* — nothing is built yet.
2. The payload is built **at export time** (not at event time, unlike Business Events) and sent to the target — immediately in the user session, or by the *Export messages from log* batch job.
3. The response is processed: for example, the ID returned by the web service is stored back on the D365FO document.
4. Successes and failures are both logged; with full logging enabled, the exact message body is stored, and the **Document ID** gives the complete send history of one document.

Records are unique per document, so a document confirmed twice produces one up-to-date export, not duplicates. A failed export stays in *To send* with an error log — alerting is a simple filter on records that stay too long.

The sample implementation (`DEVIntegTutorialExportPurchOrder`, `DEVIntegTutorialExportPurchLoad`, contract classes `DEVIntegTutorialExportPurchContractHeader`/`...Line`) exports purchase orders to a REST service via the [REST connector](../connectors/rest-web-service.md).

## Tutorial

- [Event-based exports to external web services](https://denistrunin.com/integration-outboundweb) — the full scenario: setup, initial export of existing documents, user-session vs batch export, error handling, tracing, monitoring, and performance testing.
