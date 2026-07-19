---
sidebar_position: 3
title: Outbound Periodic
description: The periodic outbound message type - recurring bulk exports of files from D365FO, from no-code SQL to custom X++.
---

# Outbound Periodic

A periodic outbound message type produces a recurring **bulk export** — a daily on-hand file, a customer list, an EDI invoice batch — delivered through a [connector](../connectors/index.md) such as [SFTP](../connectors/sftp.md) or Azure File Share. The export class extends `DEVIntegExportBulkBase` (a `RunBaseBatch` subclass), and the [Outbound message type](../forms/setup/outbound-message-types.md) defines the connection, file name template, and schedule-ready operation.

## Three implementation levels

1. **No-code, SQL**: `DEVIntegExportBulkSQL` exports the result of a SQL statement configured directly in the message type setup:

   ```sql
   SELECT ITEMID, sum(availPhysical) as Qty, InventLocationId FROM INVENTSUM
   WHERE CLOSEDQTY = 0 AND DATAAREAID = 'USMF'
   GROUP BY ITEMID, InventLocationId
   HAVING sum(availPhysical) > 0
   ```

   The same approach works against data entity views (`CUSTCUSTOMERV3ENTITY` etc.) for entity-shaped exports without code.

2. **Simple X++**: a small class that builds the dataset in X++ and writes it through the base class helpers (`DEVIntegTutorialExportBulkInventOnhand`, `DEVIntegTutorialExportBulkOnhandPricesQuery`).

3. **Incremental**: tracking what was already sent — `DEVIntegTutorialExportBulkCustInvEDIInc` exports customer invoices in an EDI file structure.

Every run is recorded in the [Export log](../forms/logs.md#export-log-bulk) with line counts, duration, and warning/skipped counters.

## Tutorial

- [Implement periodic data export from D365FO to SFTP](https://denistrunin.com/integration-outboundsftp) — SFTP setup in Azure, all three implementation levels, and export monitoring.
