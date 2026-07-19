---
sidebar_position: 7
title: Outbound samples
description: Event-based and periodic export samples - purchase orders to a web service, onhand and EDI files to SFTP.
---

# Outbound samples

## Event-based: purchase orders to a web service

Classes `DEVIntegTutorialExportPurchOrder` (document export), `DEVIntegTutorialExportPurchLoad` (web service interaction), and contract classes `DEVIntegTutorialExportPurchContractHeader` / `...Line`.

When a purchase order is confirmed, a record lands in the [Export document log](../forms/logs.md#export-document-log) with status *To send*. The payload is built **at export time** and posted to the API — immediately in the user session or by a periodic batch job. The response is processed (the external ID is stored on the order), and the full send history per document supports [tracing](../forms/logs.md#export-document-log) mismatches between systems.

Tutorial: [Event-based exports to external web services](https://denistrunin.com/integration-outboundweb)

## Periodic (bulk): files to SFTP

For recurring full or incremental file exports, the base class is `DEVIntegExportBulkBase` (a `RunBaseBatch`). Three sample levels:

1. **No-code, SQL**: `DEVIntegExportBulkSQL` exports the result of a SQL statement configured directly in the [Outbound message type](../forms/setup/outbound-message-types.md):

   ```sql
   SELECT ITEMID, sum(availPhysical) as Qty, InventLocationId FROM INVENTSUM
   WHERE CLOSEDQTY = 0 AND DATAAREAID = 'USMF'
   GROUP BY ITEMID, InventLocationId
   HAVING sum(availPhysical) > 0
   ```

   The same approach works against data entity views (`CUSTCUSTOMERV3ENTITY` etc.) for entity-shaped exports without code.

2. **Simple X++**: `DEVIntegTutorialExportBulkInventOnhand` / `DEVIntegTutorialExportBulkOnhandPricesQuery` — a small class that builds the dataset in X++ and writes it through the base class helpers.

3. **Incremental EDI**: `DEVIntegTutorialExportBulkCustInvEDIInc` — exports customer invoices in an EDI file structure, tracking what was already sent.

Every run is recorded in the [Export log](../forms/logs.md#export-log-bulk) with line counts, duration, and warnings.

Tutorial: [Implement periodic data export from D365FO to SFTP](https://denistrunin.com/integration-outboundsftp)
