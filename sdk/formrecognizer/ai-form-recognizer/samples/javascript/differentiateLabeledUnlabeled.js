// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates the differences in form recognition using custom
 * models trained with labeled and unlabeled data.
 */

const { FormRecognizerClient, AzureKeyCredential } = require("@azure/ai-form-recognizer");
const fs = require("fs");

// Load the .env file if it exists
require("dotenv").config();

async function main() {
  // You will need to set these environment variables or edit the following values
  const endpoint = process.env["COGNITIVE_SERVICE_ENDPOINT"] || "<cognitive services endpoint>";
  const apiKey = process.env["COGNITIVE_SERVICE_API_KEY"] || "<api key>";
  const labeledModelId = process.env["LABELED_CUSTOM_MODEL_ID"] || "<labeled custom model id>";
  const unlabeledModelId = process.env["UNLABELED_CUSTOM_MODEL_ID"] || "<unlabeled custom model id>";
  // The form you are recognizing must be of the same type as the forms the custom model was trained on
  const path = "./assets/Invoice_6.pdf";

  if (!fs.existsSync(path)) {
    throw new Error(`Expecting file ${path} exists`);
  }

  const labeledResponse = await recognizeCustomForm(path, endpoint, apiKey, labeledModelId);
  const unlabeledResponse = await recognizeCustomForm(path, endpoint, apiKey, unlabeledModelId);

  // The main difference is found in the labels of its fields
  // The form recognized with a labeled model will have the labels it was trained with,
  // the unlabeled one will be denoted with indices
  console.log("# Recognized fields using labeled custom model");
  for (const form of labeledResponse.forms || []) {
    for (const fieldName in form.fields) {
      // With your labeled custom model, you will not get back label data but will get back value data
      // This is because your custom model didn't have to use any machine learning to deduce the label,
      // the label was directly provided to it
      const field = form.fields[fieldName];
      console.log(
        `\tField ${fieldName} has value '${field.value}' with a confidence score of ${field.confidence}`
      );
    }
  }

  console.log("# Recognized fields using unlabeled custom model");
  for (const form of unlabeledResponse.forms || []) {
    for (const fieldName in form.fields) {
      // The recognized form fields with an unlabeled custom model will also include data about recognized labels.
      const field = form.fields[fieldName];
      console.log(
        `\tField ${fieldName} has label '${field.fieldLabel.text}' with a confidence score of ${field.confidence}`
      );
      console.log(
        `\tField ${fieldName} has value '${field.value}' with a confidence score of ${field.confidence}`
      );
    }
  }
}

async function recognizeCustomForm(path, endpoint, apiKey, labeledModelId) {
  console.log("# Recognizing...");
  const readStream = fs.createReadStream(path);
  const client = new FormRecognizerClient(endpoint, new AzureKeyCredential(apiKey));
  const poller = await client.beginRecognizeForms(labeledModelId, readStream, "application/pdf", {
    onProgress: (state) => {
      console.log(`\tstatus: ${state.status}`);
    }
  });
  await poller.pollUntilDone();
  const response = poller.getResult();
  if (!response) {
    throw new Error("Expecting valid response!");
  }
  return response;
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
