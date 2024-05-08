// const { IamAuthenticator } = require('@ibm-cloud/ibm-schematics/auth');
// const SchematicsV1 = require('../../dist/schematics/v1');

// // Create an IAM authenticator.
// const authenticator = new IamAuthenticator({
//   apikey: '<api_key>',
// });

// // Construct the service client.
// const schematicsService = new SchematicsV1({
//   authenticator,                                  // required
//   serviceUrl: 'https://schematics.cloud.ibm.com', // optional
// });

// // List all schematics workspaces
// schematicsService
//   .listWorkspaces()
//   .then(response => {
//     console.log(response.result);
//   })
//   .catch(err => {
//     console.warn(err);
//   });
