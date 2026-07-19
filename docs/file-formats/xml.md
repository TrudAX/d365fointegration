---
sidebar_position: 2
title: XML
description: Importing XML documents into D365FO with the XML read helper.
---

# XML

XML remains common in B2B document exchange. The framework provides **`DEVIntegXMLReadHelper`** to simplify parsing in X++: navigating nodes, reading typed values, and producing clear error messages when the structure is wrong (which surface in the [message log](../forms/operations.md#incoming-messages) like any other format error).

## Sample: purchase order confirmation import

Class `DEVIntegTutorialProcessPurchConfirmXML` imports purchase order confirmations from XML files on an [Azure File Share](../connectors/azure-file-share.md): the file is parsed into staging, validated, and the confirmation is applied to the matching purchase order.

Tutorial:

- [XppInteg – Import purchase orders from XML files into D365FO](https://denistrunin.com/xpptools-integfilesharexmlpurch)
