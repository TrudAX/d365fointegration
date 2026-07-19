---
title: Overview
description: Payload formats supported by the External Integration Module - CSV, Excel, XML, JSON, and PDF via AI.
---

# File formats

The format of a payload is independent from the [message type](../message-types/index.md) and the [connector](../connectors/index.md): the processing class parses the payload with format helpers, so any format can arrive over any channel.

| Format | Helper classes | Page |
|---|---|---|
| CSV / Excel | `DEVFileReaderCSV`, `DEVFileReaderExcel` (in `DEVCommon`) | [CSV / Excel](./csv-excel.md) |
| XML | `DEVIntegXMLReadHelper` | [XML](./xml.md) |
| JSON | `DEVIntegJObject`, `DEVIntegJsonWriter` | [JSON](./json.md) |
| PDF | AI recognition via `DEVIntegAIProviderGemini` | [PDF (AI)](./pdf-ai.md) |
| Standard entity formats | Processed by the DMF engine via `DEVIntegProcessDMF` | [DMF](./dmf.md) |
