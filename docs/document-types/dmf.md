---
sidebar_position: 6
title: DMF
description: Wrapping standard Data Management Framework imports with External Integration logging and multicompany support.
---

# DMF

For standard master data — vendors, customers, released products — Microsoft's Data Management Framework entities already implement the business logic. The framework doesn't replace them: **`DEVIntegProcessDMF`** runs a DMF import project as the processing step of a normal inbound message.

What the wrapper adds on top of plain recurring DMF imports:

- the file is attached to an *Incoming messages* record, with the framework's [status model and error log](../forms/operations.md#incoming-messages),
- **multicompany** execution — one message type can import into multiple companies,
- unified monitoring in the [workspace](../forms/workspace.md) next to all other integrations.

## Sample scenario

A vendor import via a standard DMF data project, fed from files on an [Azure File Share](../connectors/azure-file-share.md).

Tutorial: [Multicompany DMF integration in Dynamics 365 FinOps using X++](https://denistrunin.com/xpptools-fileintegdmf)
