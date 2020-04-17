/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const aggregationInterval: msRest.OperationQueryParameter = {
  parameterPath: "aggregationInterval",
  mapper: {
    required: true,
    serializedName: "aggregationInterval",
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-11-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2020-01-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion2: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-10-01',
    type: {
      name: "String"
    }
  }
};
export const country: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "country"
  ],
  mapper: {
    serializedName: "country",
    type: {
      name: "String"
    }
  }
};
export const endDateTimeUTC0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "endDateTimeUTC"
  ],
  mapper: {
    serializedName: "endDateTimeUTC",
    type: {
      name: "String"
    }
  }
};
export const endDateTimeUTC1: msRest.OperationQueryParameter = {
  parameterPath: "endDateTimeUTC",
  mapper: {
    required: true,
    serializedName: "endDateTimeUTC",
    type: {
      name: "DateTime"
    }
  }
};
export const endpoint: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "endpoint"
  ],
  mapper: {
    serializedName: "endpoint",
    type: {
      name: "String"
    }
  }
};
export const experimentName: msRest.OperationURLParameter = {
  parameterPath: "experimentName",
  mapper: {
    required: true,
    serializedName: "experimentName",
    constraints: {
      Pattern: /^[a-zA-Z0-9_\-\(\)\.]*[^\.]$/
    },
    type: {
      name: "String"
    }
  }
};
export const frontDoorName: msRest.OperationURLParameter = {
  parameterPath: "frontDoorName",
  mapper: {
    required: true,
    serializedName: "frontDoorName",
    constraints: {
      MaxLength: 64,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9]+([-a-zA-Z0-9]?[a-zA-Z0-9])*$/
    },
    type: {
      name: "String"
    }
  }
};
export const frontendEndpointName: msRest.OperationURLParameter = {
  parameterPath: "frontendEndpointName",
  mapper: {
    required: true,
    serializedName: "frontendEndpointName",
    constraints: {
      MaxLength: 255,
      MinLength: 1,
      Pattern: /^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/
    },
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const policyName: msRest.OperationURLParameter = {
  parameterPath: "policyName",
  mapper: {
    required: true,
    serializedName: "policyName",
    constraints: {
      MaxLength: 128
    },
    type: {
      name: "String"
    }
  }
};
export const profileName: msRest.OperationURLParameter = {
  parameterPath: "profileName",
  mapper: {
    required: true,
    serializedName: "profileName",
    constraints: {
      Pattern: /^[a-zA-Z0-9_\-\(\)\.]*[^\.]$/
    },
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 80,
      MinLength: 1,
      Pattern: /^[a-zA-Z0-9_\-\(\)\.]*[^\.]$/
    },
    type: {
      name: "String"
    }
  }
};
export const rulesEngineName: msRest.OperationURLParameter = {
  parameterPath: "rulesEngineName",
  mapper: {
    required: true,
    serializedName: "rulesEngineName",
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/
    },
    type: {
      name: "String"
    }
  }
};
export const startDateTimeUTC: msRest.OperationQueryParameter = {
  parameterPath: "startDateTimeUTC",
  mapper: {
    required: true,
    serializedName: "startDateTimeUTC",
    type: {
      name: "DateTime"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const timeseriesType: msRest.OperationQueryParameter = {
  parameterPath: "timeseriesType",
  mapper: {
    required: true,
    serializedName: "timeseriesType",
    type: {
      name: "String"
    }
  }
};
