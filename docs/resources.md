---
sidebar_position: 7
title: Resources
description: The full series of External Integration tutorials and blog posts on denistrunin.com.
---

# Resources

The framework is documented as a series of step-by-step tutorials on [denistrunin.com](https://denistrunin.com/tags/integration/). Each tutorial is a complete, reproducible scenario with source code in the [Samples model](https://github.com/TrudAX/XppTools/tree/master/DEVTutorial/DEVExternalIntegrationSamples).

## Design and methodology

- [How to design a successful integration](https://denistrunin.com/integration-checklist) *(2019)* — a checklist of what to consider when designing any D365FO integration: volumes, error handling, monitoring, ownership.

## Inbound tutorials

- [File-based integration for ledger journals](https://denistrunin.com/xpptools-fileintegledger) *(2020)* — the foundational tutorial: CSV/Excel from Azure File Share, staging, the four error types and how users recover from each.
- [Azure Service Bus integration](https://denistrunin.com/xpptools-integservbussalesjson) *(2021)* — sales orders from JSON queue messages.
- [Import purchase orders from XML files](https://denistrunin.com/xpptools-integfilesharexmlpurch) *(2022)* — XML parsing with `DEVIntegXMLReadHelper`.
- [Multicompany DMF integration](https://denistrunin.com/xpptools-fileintegdmf) *(2021)* — standard DMF projects wrapped with framework logging and multicompany support.
- [Import sales orders from an external web application](https://denistrunin.com/integration-inboundwebsales) *(2025)* — incremental REST polling, parent/child messages, mapping, full traceability.
- [Import purchase orders from PDF using AI](https://denistrunin.com/integration-importpurchpdf) *(2025)* — LLM-based document recognition with Google Gemini.

## Outbound tutorials

- [Periodic data export to SFTP](https://denistrunin.com/integration-outboundsftp) *(2024)* — no-code SQL exports, X++ export classes, incremental EDI invoices.
- [Event-based exports to external web services](https://denistrunin.com/integration-outboundweb) *(2024)* — document exports on business events, response processing, tracing, monitoring.

## Services

- [Service-based integration in D365FO](https://denistrunin.com/integration-services) *(2026)* — synchronous X++ services with standardized contracts, logging, and in-app testing.

## Performance and helpers

- [Performance: importing one million ledger journal lines](https://denistrunin.com/xpptools-fileintegledgerperf) *(2021)* — parallel processing at scale, with measurements.
- [How to read Excel and CSV files using X++](https://denistrunin.com/xpptools-readexcelfile) *(2019)* — the `DEVFileReader` classes used by the file-based scenarios.
