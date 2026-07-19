---
title: Setup forms
description: Overview of the External Integration setup forms in D365FO - connections, message types, mapping, and AI configuration.
---

# Setup forms

All setup forms live under **External integration → Setup** in the D365FO navigation pane. A new integration is always described by the same two objects: a **connection type** (where the data lives) and a **message type** (what to do with it).

| Form | Purpose |
|---|---|
| [Connection types](./connection-types.md) | Registry of external endpoints — file shares, queues, SFTP, web services, AI — with credentials. |
| [Inbound message types](./inbound-message-types.md) | Configuration of inbound integrations: source, processing class, operation parameters. |
| [Outbound message types](./outbound-message-types.md) | Configuration of outbound integrations — periodic (bulk) and event-based exports. |
| [Service message types](./service-message-types.md) | Registration of synchronous X++ service classes with logging and testing. |
| [Mapping setup](./mapping-setup.md) | Code/value mapping between external systems and D365FO. |
| [AI providers](./ai-providers.md) | AI/LLM providers and prompt definitions for document recognition. |
