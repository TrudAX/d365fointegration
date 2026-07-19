---
sidebar_position: 3
title: Azure Service Bus
description: Queue-based integration with Azure Service Bus for near-real-time message exchange with D365FO.
---

# Azure Service Bus

**Azure Service Bus** is the channel of choice when the external side pushes individual messages (typically JSON) and expects near-real-time processing — for example, sales orders coming from an e-commerce platform.

**Framework class:** `DEVIntegMessagesLoadAzureServiceBus` (inbound load).

## How it works

1. The external system posts messages to a Service Bus queue.
2. The *Load messages* batch job reads the queue via the [Connection type](../forms/setup/connection-types.md), creating one *Incoming messages* record per queue message with the payload attached.
3. Processing then follows the standard model — staging, document creation, and full logging in the [message log](../forms/operations.md#incoming-messages).

Because the payload is stored on the message, a lost or malformed queue message can be reproduced later with [Manual load](../forms/operations.md#manual-load) — something a raw queue consumer cannot do.

For queue inspection during development, [Service Bus Explorer](https://github.com/paolosalvatori/ServiceBusExplorer/releases) is a useful companion tool.

## Tutorial

- [XppInteg – Azure Service Bus integration for D365 FinOps](https://denistrunin.com/xpptools-integservbussalesjson) — imports sales orders from JSON messages, including contract classes and error handling.
