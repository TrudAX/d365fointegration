---
sidebar_position: 1
title: Overview
description: How connectors work in the External Integration Module - connection types, credentials, and the available channels.
---

# Connectors

A **connector** is the transport layer of an integration: the code that moves messages between D365FO and the external location. In the framework, a connector is configured as a [Connection type](../forms/setup/connection-types.md) and implemented by a load class (for inbound) or used by an export class (for outbound).

The framework ships with sample connectors for:

| Connector | Typical use | Tutorial |
|---|---|---|
| [Azure File Share](./azure-file-share.md) | File-based exchange with on-premises or legacy systems | [File-based integration](https://denistrunin.com/xpptools-fileintegledger) |
| [Azure Service Bus](./azure-service-bus.md) | Message/queue-based near-real-time integration | [Service Bus integration](https://denistrunin.com/xpptools-integservbussalesjson) |
| [SFTP](./sftp.md) | File exchange with external parties (EDI, banks, 3PL) | [Export to SFTP](https://denistrunin.com/integration-outboundsftp) |
| [REST / Web service](./rest-web-service.md) | Direct API integration, inbound and outbound | [Event-based export](https://denistrunin.com/integration-outboundweb), [Sales import](https://denistrunin.com/integration-inboundwebsales) |
| [AI (LLM)](./ai-llm.md) | Recognizing unstructured documents (PDF) | [PDF import with AI](https://denistrunin.com/integration-importpurchpdf) |
| [Manual](./manual.md) | Testing, troubleshooting, and user-driven imports | Used in every tutorial |

## Credentials

Every connection type stores its credentials in one of three modes: **Manual entry** (plain text, for development), **Encrypted**, or **Azure Key Vault** (recommended for production). See [Connection types](../forms/setup/connection-types.md).

## Adding your own connector

Inbound connectors extend the message load infrastructure (`DEVIntegMessagesLoad` / `DEVIntegMessagesLoadBaseType`): the load class reads from the source and creates *Incoming messages* records with the payload attached. Because processing is completely separated from loading, a new connector automatically works with every existing [document type](../document-types/index.md).
