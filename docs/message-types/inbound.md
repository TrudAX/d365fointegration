---
sidebar_position: 1
title: Inbound
description: The inbound message type - loading external data into D365FO through messages, staging, and document creation.
---

# Inbound

An inbound message type brings external data into D365FO. Every received file, queue item, or API response becomes a record in the [Incoming messages](../forms/operations.md#incoming-messages) log with the payload attached, then a processing class turns it into a D365FO document.

## How it works

An inbound document type is one class extending `DEVIntegProcessMessageBase` with a single method to implement:

```xpp
abstract void processMessage(DEVIntegMessageTable        _messageTable,
                             DEVIntegMessageProcessResult _messageProcessResult)
{
    ...
}
```

The engine calls this method **outside a transaction**, so transaction control is up to the message type — one transaction per message, per journal, or per line. A typical implementation reads the payload into a staging table and then creates the target document:

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

The two-step staging approach is what enables the framework's support model: when processing fails, users see the parsed values in staging, fix the root cause (for example, create the missing master data or a [mapping](../forms/setup/mapping-setup.md)), and reprocess — all from the message log, without a developer.

The payload can be in any [file format](../file-formats/index.md) — including standard entity formats processed [via DMF](../file-formats/dmf.md) instead of custom X++.

## Tutorials

- [File-based integration for ledger journals](https://denistrunin.com/xpptools-fileintegledger) — the foundational walk-through: CSV/Excel from Azure File Share, staging, and the four error types.
- [Azure Service Bus integration](https://denistrunin.com/xpptools-integservbussalesjson) — sales orders from JSON queue messages.
- [Import purchase orders from XML files](https://denistrunin.com/xpptools-integfilesharexmlpurch) — XML documents from a file share.
- [Import sales orders from an external web application](https://denistrunin.com/integration-inboundwebsales) — incremental REST polling, parent/child messages, mapping, full traceability.
- [Import purchase orders from PDF using AI](https://denistrunin.com/integration-importpurchpdf) — LLM-based document recognition.
- [Multicompany DMF integration](https://denistrunin.com/xpptools-fileintegdmf) — the DMF variation described above.
- [Performance: one million journal lines](https://denistrunin.com/xpptools-fileintegledgerperf) — parallel processing at scale.
