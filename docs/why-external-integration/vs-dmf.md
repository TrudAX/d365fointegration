---
sidebar_position: 1
title: vs Data Management Framework (DMF)
description: Where the External Integration Module has advantages over recurring DMF imports - and when DMF is still the right choice.
---

# vs Data Management Framework (DMF)

| Capability | DMF | External Integration |
|---|---|---|
| Custom transaction control (per message, per journal, per line) | Limited to entity behaviour | ✅ Fully controlled in the processing class |
| Link a created document to the original file | Not available out of the box | ✅ Payload attached to every message |
| Custom business logic | Tied to data entities | ✅ Plain X++, no data entity required |
| External dependencies | Entity/DIXF infrastructure | ✅ Native X++ code only |
| Error handling | Varies by entity | ✅ A standard approach to error types (connection, format, data, posting) |

## Scenario: inbound file processing

An external system drops ledger journal files (CSV/Excel) into a shared location several times a day. Journals must be created and posted, and accountants must be able to investigate any failure themselves.

- **With DMF**, the import logic is bound to a data entity. Custom validation, staging review, and "post or leave unposted" decisions require entity customization, and there is no built-in link from a created journal back to the file it came from.
- **With External Integration**, the processing class decides transaction scope, the original file is attached to the message, and all four typical error types — connection, file format, data, and posting errors — surface in one [Incoming messages](../forms/operations.md#incoming-messages) form with staging data for review.

Evidence: [File-based integration for ledger journals](https://denistrunin.com/xpptools-fileintegledger) — includes a walk-through of each error type and how a user recovers from it.

**Performance** is comparable to raw DMF batch imports: the framework's parallel processing imported **1 million journal lines** in a standard test. Evidence: [Periodic import of one million ledger journal lines](https://denistrunin.com/xpptools-fileintegledgerperf).

## When DMF is still the right choice

Standard master-data entities with no custom logic. The framework can even orchestrate DMF projects — adding its logging, error model, and multicompany execution on top: see the [DMF file format](../file-formats/dmf.md) and the [multicompany DMF tutorial](https://denistrunin.com/xpptools-fileintegdmf).
