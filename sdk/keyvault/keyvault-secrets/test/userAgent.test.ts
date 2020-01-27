// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as assert from "assert";
import { version } from "../package.json";
import { SDK_VERSION } from "../src/core/utils/constants";
import { packageVersion } from "../src/core/keyVaultClientContext";

describe("Secrets client's user agent", () => {
  // The tests follow

  it("the version at constants should be as expected", async function() {
    assert.equal(version, SDK_VERSION);
  });

  it("the version at KeyVaultClientContext should be as expected", async function() {
    assert.equal(version, packageVersion);
  });
});