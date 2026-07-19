---
sidebar_position: 4
title: JSON
description: Importing and producing JSON documents in D365FO - contract classes, JSON helpers, and the sales order samples.
---

# JSON

JSON is the default format for queue- and API-based integrations. The framework includes **`DEVIntegJObject`** for parsing and **`DEVIntegJsonWriter`** for producing JSON in X++, typically together with contract classes describing the document (for example `DEVIntegTutorialSOHeaderContract` / `DEVIntegTutorialSOHeaderLinesContract`).

## Sample: sales orders from Azure Service Bus

Sales orders arrive as JSON messages in a Service Bus queue; each message is parsed into staging and a sales order is created. Tutorial: [Azure Service Bus integration](https://denistrunin.com/xpptools-integservbussalesjson).

## Sample: sales orders from a web API

Classes `DEVIntegTutorialWebSalesLoad` / `DEVIntegTutorialWebSalesProcess` poll an external REST API incrementally. The raw response becomes a **parent message**; every order in it becomes a **child message** with staging data, processed in parallel batch tasks. This gives order-level error isolation (one bad order doesn't block the batch) and full traceability from the sales order back to the original API response.

Tutorial: [Import sales orders from an external web application](https://denistrunin.com/integration-inboundwebsales) — includes [mapping setup](../forms/setup/mapping-setup.md) between external accounts and D365FO customers.
