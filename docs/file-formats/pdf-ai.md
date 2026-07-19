---
sidebar_position: 4
title: PDF (AI)
description: Importing PDF documents into D365FO using LLM-based recognition.
---

# PDF (AI)

PDFs — supplier invoices, purchase orders received by email — carry no structure an X++ parser can rely on. The framework's approach: send the PDF to an [AI provider](../connectors/ai-llm.md) with a prompt describing the expected fields, get structured JSON back, and process that JSON like any other inbound document.

## Sample: purchase order import from PDF

Classes `DEVIntegTutorialPurchOrderOCRProcess` (processing) and `DEVIntegTutorialPurchOrderOCRManualImport` (user-driven import). The flow:

1. A user selects **New order import** and uploads the PDF.
2. The framework calls the configured [AI prompt](../forms/setup/ai-providers.md#ai-prompt-definitions-form) (Google Gemini in the sample) and receives header/lines JSON.
3. The JSON lands in staging tables where totals are validated against the document (total amount, total quantity) before a purchase order is created — the safeguard against recognition errors.

Operation parameters cover practical import questions, such as whether tax comes from the document or is calculated in D365FO.

Tutorial: [Import purchase orders from PDF using AI](https://denistrunin.com/integration-importpurchpdf) — including a full production prompt for multi-page invoices.
