---
sidebar_position: 2
title: CSV / Excel
description: Importing CSV and Excel files into D365FO - file readers and the ledger journal sample.
---

# CSV / Excel

Comma-separated and Excel files are the most common file-based exchange formats. The framework reads both through the same reader interface, so one processing class can support both — the format is just a parameter on the [Inbound message type](../forms/setup/inbound-message-types.md).

**Reader classes** (in the `DEVCommon` model): `DEVFileReaderBase`, `DEVFileReaderCSV`, `DEVFileReaderExcel` (Excel reading is based on the bundled EPPlus library).

Reading is column-name based:

```xpp
while (fileReader.readNextRow())
{
    staging.MainAccount = fileReader.getStringByName('MainAccount');
    staging.Amount      = fileReader.getRealByName('Amount');
    staging.insert();
}
```

## Sample: ledger journal import

Class `DEVIntegTutorialImportLedgerJournal` imports a journal file, writes lines to staging, creates the journal via `LedgerJournalEngine` (so the result matches manual entry, including financial dimensions), and optionally posts it. The *Post journal* operation parameter can be switched off to inspect created journals during testing.

Tutorials:

- [How to read Excel and CSV files using X++](https://denistrunin.com/xpptools-readexcelfile) — the reader classes in isolation.
- [File-based integration for ledger journals](https://denistrunin.com/xpptools-fileintegledger) — the complete integration with error handling.
- [Performance: one million journal lines](https://denistrunin.com/xpptools-fileintegledgerperf) — parallel processing at scale.
