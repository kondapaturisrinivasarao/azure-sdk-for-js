// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how to extact text and layout information from a document
 */

import { FormRecognizerClient, AzureKeyCredential } from "@azure/ai-form-recognizer";
import * as fs from "fs";

// Load the .env file if it exists
require("dotenv").config();

export async function main() {
  // You will need to set these environment variables or edit the following values
  const endpoint = process.env["COGNITIVE_SERVICE_ENDPOINT"] || "<cognitive services endpoint>";
  const apiKey = process.env["COGNITIVE_SERVICE_API_KEY"] || "<api key>";
  const path = "../assets/Invoice_6.pdf";

  if (!fs.existsSync(path)) {
    throw new Error(`Expecting file ${path} exists`);
  }

  const readStream = fs.createReadStream(path);

  const client = new FormRecognizerClient(endpoint, new AzureKeyCredential(apiKey));
  const poller = await client.beginRecognizeContent(readStream);
  await poller.pollUntilDone();
  const response = poller.getResult();

  if (!response) {
    throw new Error("Expecting valid response!");
  }

  console.log(response.status);

  for (const page of response.pages!) {
    console.log(
      `Page ${page.pageNumber}: width ${page.width} and height ${page.height} with unit ${page.unit}`
    );
    for (const table of page.tables!) {
      for (const row of table.rows) {
        for (const cell of row.cells) {
          console.log(`cell [${cell.rowIndex},${cell.columnIndex}] has text ${cell.text}`);
        }
      }
    }
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
