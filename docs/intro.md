---
sidebar_position: 1
title: Introduction
description: What the External Integration Module for Dynamics 365 Finance and Operations is, and when to use it.
---

# Introduction

**External Integration** is a free, open-source X++ framework for building reliable and easy to support integrations in Microsoft Dynamics 365 Finance and Operations (D365FO). It gives you one repeatable model for designing, processing, testing, and operating every interface — inbound and outbound.

The framework is distributed as the `DEVExternalIntegration` model (plus `DEVExternalIntegrationSamples` with ready-to-run examples) in the [TrudAX/XppTools](https://github.com/TrudAX/XppTools) GitHub repository.

## Key properties

- **Real-life, production-proven scenarios.** The templates and samples come from real production integrations, not demo code.
- **Focus on support and troubleshooting.** Message logs, error handling, tracing, reprocessing, and a monitoring workspace are part of the core design — most typical errors and all related data can be viewed in one place.
- **Fully written in X++.** No external components, services, or middleware. Install the model and everything stays inside your D365FO codebase.

## How it works

Every integration built with the framework follows the same four-step model:

1. **Design** — pick one of the ready-to-use templates: *Inbound*, *Outbound Event-based*, *Outbound Periodic*, or *Service-based*.
2. **Load data** — use a sample [connector](./connectors/index.md): Azure Service Bus, SFTP, Azure File Share, REST API, AI (LLM), or manual upload.
3. **Process data** — import documents from CSV, Excel, XML, JSON, or PDF using sample implementations for sales lines, ledger journals, purchase lines, and vendors. See [Document types](./document-types/index.md).
4. **Test** — run any document manually without a connector, and measure throughput with the built-in performance test (up to 1 million journal lines).

At the centre of the design is a **message**: every inbound file, queue item, or API response becomes a record in the *Incoming messages* table with an attached payload, a status, staging data, and a processing log. Outbound documents are tracked the same way in export logs. This is what makes the integrations transparent to operate: a support engineer can see, download, reprocess, or cancel any message from the UI.

## What's in the module

| Model | Contents |
|---|---|
| `DEVExternalIntegration` | The core framework: setup and operations [forms](./forms/setup/index.md), connector classes, base classes for processing, logging, and the monitoring workspace. |
| `DEVExternalIntegrationSamples` | Tutorial implementations: ledger journal import, sales order import (JSON/REST), purchase order import (XML, PDF via AI), periodic and event-based exports, service samples. |
| `DEVCommon` | Shared helpers, including the [Excel/CSV file readers](https://denistrunin.com/xpptools-readexcelfile) (required dependency). |

## Where to go next

- [Getting started](./getting-started.md) — install the models and run a first test import.
- [Why External Integration](./why-external-integration/summary.md) — comparison with DMF, Business Events, and Message Processor.
- [Forms reference](./forms/setup/index.md) — every form in the module, explained.
- [Resources](./resources.md) — the full series of step-by-step tutorials on denistrunin.com.
