---
sidebar_position: 1
title: Overview
description: The four integration templates and their base classes - inbound messages, event-based exports, periodic exports, and services.
---

# Document types

A **document type** is the business side of an integration: what the payload contains and what should happen in D365FO. The framework separates it completely from the [connector](../connectors/index.md), and provides a base class for each of the four integration templates:

| Template | Base class | Direction |
|---|---|---|
| Inbound | `DEVIntegProcessMessageBase` | External system → D365FO |
| Outbound, event-based | `DEVIntegExportMessageBase` | D365FO → external, per document |
| Outbound, periodic (bulk) | `DEVIntegExportBulkBase` | D365FO → external, per run |
| Service | `DEVIntegServiceExportBase` | Synchronous request/response |

## Inbound processing

An inbound document type is one class extending `DEVIntegProcessMessageBase` with a single method to implement:

```xpp
abstract void processMessage(DEVIntegMessageTable        _messageTable,
                             DEVIntegMessageProcessResult _messageProcessResult)
{
    ...
}
```

The engine calls this method **outside a transaction**, so transaction control is up to the document type — one transaction per message, per journal, or per line. A typical implementation reads the payload into a staging table and then creates the target document:

```xpp
ttsbegin;

while (fileReader.readNextRow())
{
    linesStaging.clear();
    lineNum++;
    linesStaging.LineNumber   = lineNum;
    linesStaging.MainAccount  = fileReader.getStringByName('MainAccount');
    linesStaging.Amount       = fileReader.getRealByName('Amount');
    linesStaging.insert();
}

ttscommit;
```

The two-step staging approach is what enables the framework's support model: when processing fails, users see the parsed values in staging, fix the root cause (for example, create the missing master data), and reprocess — all from the [Incoming messages](../forms/operations.md#incoming-messages) form.

## Supported formats and samples

| Format / scenario | Page |
|---|---|
| CSV and Excel files | [CSV / Excel](./csv-excel.md) |
| XML documents | [XML](./xml.md) |
| JSON documents | [JSON](./json.md) |
| PDF via AI recognition | [PDF (AI)](./pdf-ai.md) |
| Standard entities via DMF | [DMF](./dmf.md) |
| Outbound exports (event-based and bulk) | [Outbound samples](./outbound-samples.md) |
| Synchronous services | [Services](./services.md) |

All sample implementations live in the `DEVExternalIntegrationSamples` model on [GitHub](https://github.com/TrudAX/XppTools/tree/master/DEVTutorial/DEVExternalIntegrationSamples).
