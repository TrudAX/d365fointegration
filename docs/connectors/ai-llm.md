---
sidebar_position: 6
title: AI (LLM)
description: Using large language models to read unstructured documents - PDF invoice and purchase order recognition in D365FO.
---

# AI (LLM)

The AI connector turns unstructured documents — primarily PDFs — into structured JSON that a normal processing class can consume. Instead of classic OCR templates, you describe the document in a plain-language prompt and let a large language model do the extraction.

**Framework classes:** `DEVIntegAIProviderBase` (provider contract), `DEVIntegAIProviderGemini` (Google Gemini implementation), `DEVIntegAICallStatistics` (token/duration statistics).

## How it works

1. Register a provider in the [AI providers](../forms/setup/ai-providers.md) form and store the endpoint and API key in a [Connection type](../forms/setup/connection-types.md).
2. Define and iterate on the extraction prompt in [AI prompt definitions](../forms/setup/ai-providers.md#ai-prompt-definitions-form) — the **Call API** button tests the prompt on a sample file and shows the response and statistics.
3. Link the prompt to an [Inbound message type](../forms/setup/inbound-message-types.md) whose processing class reads the returned JSON and creates the document via staging tables, with all the standard validation, error handling, and traceability.

The prompt can even implement simple mappings ("if the description is 37' TV, use item T0004"); numeric comparison logic is better kept in X++.

## Tutorial

- [Import purchase orders from PDF using AI](https://denistrunin.com/integration-importpurchpdf) — end-to-end setup with Google Gemini, prompt design for multi-page invoices, and staging validation.
