[![Build Status](https://travis-ci.org/IBM/schematics-node-sdk.svg?branch=main)](https://travis-ci.org/IBM/schematics-node-sdk)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
<!--
[![npm-version](https://img.shields.io/npm/v/IBM/schematics-node-sdk.svg)](https://www.npmjs.com/package/@ibm-cloud/ibm-schematics)
[![codecov](https://codecov.io/gh/IBM/schematics-node-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/IBM/schematics-node-sdk)
-->
# IBM Cloud Schematics Node.js SDK
Node.js client library to interact with various [“Schematics APIs](https://cloud.ibm.com/apidocs?category=schematics).

Disclaimer: this SDK is being released initially as a **pre-release** version.
Changes might occur which impact applications that use this SDK.

## Table of Contents

<!--
  The TOC below is generated using the `markdown-toc` node package.

      https://github.com/jonschlinkert/markdown-toc

  You should regenerate the TOC after making changes to this file.

      npx markdown-toc -i README.md
  -->

<!-- toc -->

- [IBM Cloud Schematics Node.js SDK](#ibm-cloud-schematics-nodejs-sdk)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Authentication](#authentication)
    - [Authenticate with environment variables](#authenticate-with-environment-variables)
    - [Authenticate with external configuration](#authenticate-with-external-configuration)
    - [Authenticate programmatically](#authenticate-programmatically)
  - [Getting Started](#getting-started)
  - [Error handling](#error-handling)
  - [Using the SDK](#using-the-sdk)
  - [Questions](#questions)
  - [Issues](#issues)
  - [Open source @ IBM](#open-source--ibm)
  - [Contributing](#contributing)
  - [License](#license)

<!-- tocstop -->

<!-- --------------------------------------------------------------- -->
## Overview

The IBM Cloud “Schematics Node.js SDK allows developers to programmatically interact with the following
IBM Cloud services:

Service Name | Import Path
--- | ---
[Schematics](https://cloud.ibm.com/apidocs/schematics) | @ibm-cloud/ibm-schematics/schematics/v1

## Prerequisites
* You need an [IBM Cloud][ibm-cloud-onboarding] account.
* **Node.js >=10**: This SDK is tested with Node.js versions 10 and up. It may work on previous versions but this is not officially supported.

[ibm-cloud-onboarding]: http://cloud.ibm.com/registration

## Installation

```sh
npm install @ibm-cloud/ibm-schematics
```

## Authentication

The library requires Identity and Access Management (IAM) to authenticate requests. There are several ways to set the properties for authentication

1. [As environment variables](#authenticate-with-environment-variables)
2. [The programmatic approach](#authenticate-programmatically)
3. [With an external credentials file](#authenticate-with-external-configuration)

### Authenticate with environment variables

For Schematics IAM authentication set the following environmental variables by replacing <apikey> with your proper service credentials.

```
SCHEMATICS_URL = https://schematics.cloud.ibm.com
SCHEMATICS_APIKEY = <apikey>
```

### Authenticate with external configuration

To use an external configuration file, see the related documentation in the [Node.js SDK Core document about authentication](https://github.com/IBM/ibm-cloud-sdk-common/blob/master/README.md).

### Authenticate programmatically

To learn more about how to use programmatic authentication, see the related documentation in the [Node.js SDK Core document about authentication](https://github.com/IBM/ibm-cloud-sdk-common/blob/master/README.md).

## Getting Started

A quick example to get you up and running with Schematics Node.js SDK service

```

// Create an IAM authenticator.
const authenticator = new IamAuthenticator({
  apikey: '<apiKey>',
});

// Construct the service client.
const schematicsService = new SchematicsV1({
  authenticator,                                  // required
  serviceUrl: 'https://schematics.cloud.ibm.com', // optional
});


schematicsService
  .getSchematicsVersion({})
  .then(schematicsVersion => {
    console.log(schematicsVersion.result)
  })
  .catch(err => {
    console.warn(err);
  });


```

## Error handling

For sample code on handling errors, please see [Schematics API docs](https://cloud.ibm.com/apidocs/schematics#error-handling).

## Using the SDK
For general SDK usage information, please see
[this link](https://github.com/IBM/ibm-cloud-sdk-common/blob/master/README.md)

## Questions

If you are having difficulties using this SDK or have a question about the IBM Cloud services,
please ask a question at
[Stack Overflow](http://stackoverflow.com/questions/ask?tags=ibm-cloud).

## Issues
If you encounter an issue with the SDK, you are welcome to submit
a [bug report](https://github.com/IBM/schematics-node-sdk/issues).
Before that, please search for similar issues. It's possible someone has
already encountered this issue.

## Open source @ IBM
Find more open source projects on the [IBM Github Page](http://ibm.github.io/)

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md).

## License

This project is released under the Apache 2.0 license.
The license's full text can be found in
[LICENSE](LICENSE).
