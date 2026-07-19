---
sidebar_position: 8
title: Resources
description: The full series of External Integration tutorials and blog posts on denistrunin.com.
---

# Resources

The framework is documented as a series of step-by-step tutorials on [denistrunin.com](https://denistrunin.com/tags/integration/). Each tutorial is a complete, reproducible scenario with source code in the [Samples model](https://github.com/TrudAX/XppTools/tree/master/DEVTutorial/DEVExternalIntegrationSamples).

## Design and methodology

- [How to design a successful integration](https://denistrunin.com/integration-checklist) — a checklist of what to consider when designing any D365FO integration: volumes, error handling, monitoring, ownership.

## Inbound tutorials

- [File-based integration for ledger journals](https://denistrunin.com/xpptools-fileintegledger) — the foundational tutorial: CSV/Excel from Azure File Share, staging, the four error types and how users recover from each.
- [Azure Service Bus integration](https://denistrunin.com/xpptools-integservbussalesjson) — sales orders from JSON queue messages.
- [Import purchase orders from XML files](https://denistrunin.com/xpptools-integfilesharexmlpurch) — XML parsing with `DEVIntegXMLReadHelper`.
- [Multicompany DMF integration](https://denistrunin.com/xpptools-fileintegdmf) — standard DMF projects wrapped with framework logging and multicompany support.
- [Import sales orders from an external web application](https://denistrunin.com/integration-inboundwebsales) — incremental REST polling, parent/child messages, mapping, full traceability.
- [Import purchase orders from PDF using AI](https://denistrunin.com/integration-importpurchpdf) — LLM-based document recognition with Google Gemini.

## Outbound tutorials

- [Periodic data export to SFTP](https://denistrunin.com/integration-outboundsftp) — no-code SQL exports, X++ export classes, incremental EDI invoices.
- [Event-based exports to external web services](https://denistrunin.com/integration-outboundweb) — document exports on business events, response processing, tracing, monitoring.

## Services

- [Service-based integration in D365FO](https://denistrunin.com/integration-services) — synchronous X++ services with standardized contracts, logging, and in-app testing.

## Performance and helpers

- [Performance: importing one million ledger journal lines](https://denistrunin.com/xpptools-fileintegledgerperf) — parallel processing at scale, with measurements.
- [How to read Excel and CSV files using X++](https://denistrunin.com/xpptools-readexcelfile) — the `DEVFileReader` classes used by the file-based scenarios.
