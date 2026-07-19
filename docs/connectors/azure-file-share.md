---
sidebar_position: 2
title: Azure File Share
description: File-based integration via Azure File Share - the simplest cloud-accessible file channel for D365FO.
---

# Azure File Share

Since D365FO is a cloud system, inbound and outbound files must live in a location the cloud can reach. **Azure File Share** is the simplest option: it is created in a few clicks in the Azure portal, can be mapped as a network drive on Windows, and is browsable with Azure Storage Explorer — convenient for both external systems and support engineers.

**Framework classes:** `DEVIntegMessagesLoadAzureFileShare` (inbound load), `DEVIntegAzureStorageConnectionHelper` (connection handling).

## How it works

1. The external system (or an `azcopy` script) drops files into an **Incoming** folder on the file share.
2. The *Load messages* batch job connects using the [Connection type](../forms/setup/connection-types.md), reads each file, creates an *Incoming messages* record with the file attached, and moves the file to the **Archive** folder.
3. There is no *Error* folder by design — failed files stay visible as messages in *Error* status with the details in the [message log](../forms/operations.md#incoming-messages).

Archive file naming (keep the original name or append a timestamp) is configured on the [Inbound message type](../forms/setup/inbound-message-types.md).

## Tutorials

- [How to implement file-based integration in D365FO using X++](https://denistrunin.com/xpptools-fileintegledger) — the foundational walk-through (ledger journals from CSV/Excel).
- [Import purchase orders from XML files](https://denistrunin.com/xpptools-integfilesharexmlpurch) — XML documents from a file share.
- [Multicompany DMF integration](https://denistrunin.com/xpptools-fileintegdmf) — file share as the channel for DMF-based imports.
