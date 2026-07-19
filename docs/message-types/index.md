---
title: Overview
description: The four message type templates of the External Integration Module - inbound, outbound event-based, outbound periodic, and service.
---

# Message types

A **message type** is one configured integration: what the payload contains, where it comes from or goes to, and what should happen in D365FO. Every integration built with the framework is one of four templates, each with its own base class and setup form:

| Template | Base class | Direction | Setup form |
|---|---|---|---|
| [Inbound](./inbound.md) | `DEVIntegProcessMessageBase` | External system → D365FO | [Inbound message types](../forms/setup/inbound-message-types.md) |
| [Outbound Event-based](./outbound-event-based.md) | `DEVIntegExportMessageBase` | D365FO → external, per document | [Outbound message types](../forms/setup/outbound-message-types.md) |
| [Outbound Periodic](./outbound-periodic.md) | `DEVIntegExportBulkBase` | D365FO → external, per run | [Outbound message types](../forms/setup/outbound-message-types.md) |
| [Service-based](./service.md) | `DEVIntegServiceExportBase` | Synchronous request/response | [Service message types](../forms/setup/service-message-types.md) |

The message type is completely separated from the [connector](../connectors/index.md) (transport) and the [file format](../file-formats/index.md) (payload parsing) — the same business logic works over any channel, including [manual load](../connectors/manual.md) for testing.

All sample implementations live in the `DEVExternalIntegrationSamples` model on [GitHub](https://github.com/TrudAX/XppTools/tree/master/DEVTutorial/DEVExternalIntegrationSamples).
