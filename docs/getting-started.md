---
sidebar_position: 2
title: Getting started
description: Install the External Integration Module in a D365FO development environment and run a first test import.
---

# Getting started

## Prerequisites

- A D365FO development environment (cloud-hosted or local VHD).
- Access to the [TrudAX/XppTools](https://github.com/TrudAX/XppTools) GitHub repository — the framework is free and open source, no licence keys required.

## Install the models

The framework consists of three models located in the `DEVTutorial` folder of the repository:

| Model | Required | Purpose |
|---|---|---|
| `DEVCommon` | Yes | Shared helpers (file readers, dimension helpers). |
| `DEVExternalIntegration` | Yes | The External Integration framework itself. |
| `DEVExternalIntegrationSamples` | Recommended | Tutorial classes, staging tables, and sample forms used by the step-by-step guides. |

Installation steps:

1. Clone or download the repository:

   ```powershell
   git clone https://github.com/TrudAX/XppTools.git
   ```

2. Copy the model folders (`DEVCommon`, `DEVExternalIntegration`, `DEVExternalIntegrationSamples`) into your `PackagesLocalDirectory`, or add them as a version-control mapping.

3. Build the three models (Visual Studio → *Extensions → Dynamics 365 → Build models*), then synchronize the database.

4. After the build, a new **External integration** module appears in the D365FO navigation pane, with **Setup**, **Inquiries**, and **Periodic** sections.

## Run a first test import

The fastest way to see the framework working is the ledger journal tutorial sample, which needs no external connector:

1. Open **External integration → Setup → Connection types** and create a *Manual* connection (no credentials needed).
2. Open **External integration → Setup → Inbound message types**, create a message type with the processing class `DEVIntegTutorialImportLedgerJournal`, and set its operation parameters (journal name, file type).
3. Use the **Import file** button to upload one of the test files provided in the repository (prepared for the standard Contoso demo data).
4. Check the result in **Incoming messages**: the message should reach the *Processed* status with a link to the created journal, staging data, and processing statistics.

The full walk-through, including error-handling scenarios, is in the tutorial: [How to implement file-based integration in D365FO using X++](https://denistrunin.com/xpptools-fileintegledger).

:::tip
Every inbound message type has an **Import file** button and a **Manual load** function — you can develop and test any integration end-to-end in a dev environment without access to the real external system. See [Operations forms](./forms/operations.md).
:::

## Next steps

- Read the [forms reference](./forms/setup/index.md) to understand the setup options.
- Pick the [connector](./connectors/index.md) and [document type](./document-types/index.md) closest to your scenario and follow its tutorial.
- Review the [integration design checklist](https://denistrunin.com/integration-checklist) before designing a production interface.
