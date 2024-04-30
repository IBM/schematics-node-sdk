# Node SDK Local Testing

## Pre-rqeuisites
1) Re-generate the node SDK
2) Copy the v1.js file under schematics directory under root folder
3) Copy schematics.v1.test.js under examples directory from generated examples directory
4) Copy schematics.v1.test.js under test/unit from generated test/unit directory.

## How to test the SDK 

1) Provide the API key in index.js file 
```
apikey: '<api_key>' 
```

2) Run following command to generate the package.json file

```
npm init
```

Make sure package.json file has follwoing dependency block 

```
"dependencies": {
    "@ibm-cloud/ibm-code-engine-sdk": "^3.1.0",
    "@ibm-cloud/ibm-schematics": "^2.0.3"
  },
```

3) Run below command to generate the package-lock.json file & venodr the changes to node-modules directory

```
npm i
```

During the execution of above command if we encounter error like 

```
npm ERR! 404 Not Found - GET https://na.artifactory.swg-devops.com/artifactory/api/npm/wcp-tmp-ace-fr-team-npm-virtual/@ibm-cloud%2fibm-schematics - not_found
npm ERR! 404 
npm ERR! 404  '@ibm-cloud/ibm-schematics@^2.0.3' is not in this registry.
npm ERR! 404 
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.
```

then go to our home directory /usr/<user_name> and comment out the contents of `.npmrc` file

4) After step#3, directory structure looks like this

```
examples
|
|__local_sdk_test
     |_ node_modules directory
     |_ package-lock.json file
     |_ package.json
     |_ README.md
```

5) Run below command to execute the test case 

```
node index.js
```

6) Test output should list the workspaces, something like this

```
{
  offset: 0,
  limit: 100,
  count: 64,
  workspaces: [
    {
      id: 'us-south.workspace.ws_gitlab_clone_http.70204926',
      name: 'ws_gitlab_clone_http',
      crn: 'crn:v1:bluemix:public:schematics:us-south:a/fcdb764102154c7ea8e1b79d3a64afe0:03a6c97d-c37e-45d9-b08e-6c6071abbc84:workspace:us-south.workspace.ws_gitlab_clone_http.70204926',
      type: [Array],
      description: '',
      resource_group: 'Default',
      location: 'us-south',
      tags: [],
      created_at: '2024-02-27T11:37:27.761569383Z',
      created_by: 'umarali.nagoor@in.ibm.com',
      status: 'INACTIVE',
      failure_reason: '',
      workspace_status_msg: [Object],
      workspace_status: [Object],
      template_repo: [Object],
      template_data: [Array],
      runtime_data: [Array],
      shared_data: [Object],
      applied_shareddata_ids: null,
      updated_at: '0001-01-01T00:00:00Z',
      last_health_check_at: '0001-01-01T00:00:00Z',
      cart_id: '',
      last_action_name: 'WORKSPACE_CREATE',
      last_activity_id: 'a0a9b718d103a594b367aaada73d7ba1',
      last_job: [Object]
    },
    {
      id: 'us-south.workspace.ws_ansible_clone.9ef6fbe8',
      name: 'ws_ansible_clone',
      crn: 'crn:v1:bluemix:public:schematics:us-south:a/fcdb764102154c7ea8e1b79d3a64afe0:03a6c97d-c37e-45d9-b08e-6c6071abbc84:workspace:us-south.workspace.ws_ansible_clone.9ef6fbe8',
      type: [Array],
      description: '',
      resource_group: 'Default',
      location: 'us-south',
      tags: [],
      created_at: '2024-02-27T11:31:49.451052761Z',
```



