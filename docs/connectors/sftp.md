---
sidebar_position: 4
title: SFTP
description: File exchange with external parties over SFTP - the standard channel for EDI, banks, and 3PL providers.
---

# SFTP

**SFTP** remains the standard exchange channel for EDI partners, banks, and logistics providers. The framework supports it for both loading inbound files and uploading outbound exports.

**Framework classes:** `DEVIntegMessagesLoadSFTP` (inbound load), `DEVIntegConnectionHelperSFTP` (connection handling, based on the `Renci.SshNet` library that ships with the model — no separate installation needed).

## Setup

The [Connection type](../forms/setup/connection-types.md) requires the hostname and user/password credentials; store the password encrypted or in Azure Key Vault for production. The **Test connection** button validates access, and any SFTP client (for example FileZilla) can be used to verify the folder structure independently.

Outbound message types add a target folder, a file name template with a `%d` date placeholder, and a CSV delimiter — see [Outbound message types](../forms/setup/outbound-message-types.md).

## Tutorial

- [Implement periodic data export from D365FO to SFTP](https://denistrunin.com/integration-outboundsftp) — covers SFTP server setup in Azure, no-code SQL exports, X++ export classes, and an incremental EDI invoice scenario.
