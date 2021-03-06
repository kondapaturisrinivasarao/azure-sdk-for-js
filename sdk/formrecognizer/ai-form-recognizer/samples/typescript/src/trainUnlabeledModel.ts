// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how to train a custom model with unlabeled data.
 * See recognizeForm.ts to recognize forms using a custom model.
 */

import { FormRecognizerClient, AzureKeyCredential } from "@azure/ai-form-recognizer";

// Load the .env file if it exists
require("dotenv").config();

export async function main() {
  // You will need to set these environment variables or edit the following values
  const endpoint = process.env["COGNITIVE_SERVICE_ENDPOINT"] || "<cognitive services endpoint>";
  const apiKey = process.env["COGNITIVE_SERVICE_API_KEY"] || "<api key>";
  const containerSasUrl =
    process.env["UNLABELED_CONTAINER_SAS_URL"] ||
    "<url to Azure blob container storing the training documents>";

  const client = new FormRecognizerClient(endpoint, new AzureKeyCredential(apiKey));
  const trainingClient = client.getFormTrainingClient();

  const poller = await trainingClient.beginTraining(containerSasUrl, false, {
    onProgress: (state) => {
      console.log("training status: ");
      console.log(state);
    }
  });
  await poller.pollUntilDone();
  const response = poller.getResult();

  if (!response) {
    throw new Error("Expecting valid response!");
  }

  console.log(`Model ID: ${response.modelId}`);
  console.log(`Status: ${response.status}`);
  console.log(`Created on: ${response.createdOn}`);
  console.log(`Last modified: ${response.lastModified}`);

  if (response.models) {
    for (const submodel of response.models) {
      // since the training data is unlabeled, we are unable to return the accuracy of this model
      console.log("We have recognized the following fields");
      for (const key in submodel.fields) {
        const field = submodel.fields[key];
        console.log(`The model found field '${field.name}'`);
      }
    }
  }
  // Training document information
  if (response.trainingDocuments) {
    for (const doc of response.trainingDocuments) {
      console.log(`Document name: ${doc.documentName}`);
      console.log(`Document status: ${doc.status}`);
      console.log(`Document page count: ${doc.pageCount}`);
      console.log(`Document errors: ${doc.errors}`);
    }
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
