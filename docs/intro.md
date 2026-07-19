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
3. **Process data** — import documents from CSV, Excel, XML, JSON, or PDF using sample implementations for sales lines, ledger journals, purchase lines, and vendors. See [Message types](./message-types/index.md) and [File formats](./file-formats/index.md).
4. **Test** — run any document manually without a connector, and measure throughput with the built-in performance test (up to 1 million journal lines).

At the centre of the design is a **message**: every inbound file, queue item, or API response becomes a record in the *Incoming messages* table with an attached payload, a status, staging data, and a processing log. Outbound documents are tracked the same way in export logs. This is what makes the integrations transparent to operate: a support engineer can see, download, reprocess, or cancel any message from the UI.

## Where to go next

- [Getting started](./getting-started.md) — install the models and run a first test import.
- [Why External Integration](./why-external-integration/index.md) — comparison with DMF, Business Events, and Message Processor.
- [Forms reference](./forms/setup/index.md) — every form in the module, explained.
- [Resources](./resources.md) — the full series of step-by-step tutorials on denistrunin.com.
