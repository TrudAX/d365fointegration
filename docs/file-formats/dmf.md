---
sidebar_position: 5
title: DMF
description: Processing files in standard data entity formats through the Data Management Framework, wrapped with External Integration logging and multicompany support.
---

# DMF

For files in **standard data entity formats** — vendors, customers, released products — there is no need to write a custom parser: Microsoft's Data Management Framework entities already implement the parsing and the business logic. In the External Integration module, DMF is simply one more way to process an incoming file: **`DEVIntegProcessDMF`** runs a DMF import project as the processing step of a normal [inbound message](../message-types/inbound.md).

What the wrapper adds on top of plain recurring DMF imports:

- the file is attached to an *Incoming messages* record, with the framework's [status model and error log](../forms/operations.md#incoming-messages),
- **multicompany** execution — one message type can import into multiple companies,
- unified monitoring in the [workspace](../forms/workspace.md) next to all other integrations.

## Sample scenario

A vendor import via a standard DMF data project, fed from files on an [Azure File Share](../connectors/azure-file-share.md).

## Tutorial

- [Multicompany DMF integration in Dynamics 365 FinOps using X++](https://denistrunin.com/xpptools-fileintegdmf)
