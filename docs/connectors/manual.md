---
sidebar_position: 7
title: Manual
description: The manual connector - importing files and payloads by hand for testing, troubleshooting, and user-driven scenarios.
---

# Manual

The **Manual** connector is a channel with no external system at all: users load files or paste payload text directly in the UI. It exists for three reasons:

- **Testing** — develop and test a complete integration in a dev environment before any real connectivity exists.
- **Troubleshooting** — reproduce a production issue by loading the exact payload of a failed message.
- **User-driven imports** — some integrations are legitimately manual (for example, [importing a PDF purchase order](https://denistrunin.com/integration-importpurchpdf) that arrived by email).

**Framework classes:** `DEVIntegManualFileImport`, `DEVIntegManualTextImport`.

## Entry points

- The **Import file** button on every [Inbound message type](../forms/setup/inbound-message-types.md) uploads a file from the user's computer.
- The [Manual load](../forms/operations.md#manual-load) function accepts payload text and processes it exactly as if it came from the real connector; the resulting message is marked *Manual* in the log.

Because every document type is connector-independent, anything built for File Share, Service Bus, or REST can also be run manually — this is the framework's answer to "how do we test an integration without the external system?".
