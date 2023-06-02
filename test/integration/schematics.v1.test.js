/**
 * (C) Copyright IBM Corp. 2023.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-console */

const { readExternalSources } = require('ibm-cloud-sdk-core');
const SchematicsV1 = require('../../dist/schematics/v1');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'schematics_v1.env';

const describe = authHelper.prepareTests(configFile);

describe('SchematicsV1_integration', () => {
  jest.setTimeout(timeout);

  // Service instance
  let schematicsService;

  test('Initialize service', async () => {
    schematicsService = SchematicsV1.newInstance();

    expect(schematicsService).not.toBeNull();

    const config = readExternalSources(SchematicsV1.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    schematicsService.enableRetries();
  });

  test('listSchematicsLocation()', async () => {
    const res = await schematicsService.listSchematicsLocation();
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listLocations()', async () => {
    const res = await schematicsService.listLocations();
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listResourceGroup()', async () => {
    const res = await schematicsService.listResourceGroup();
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getSchematicsVersion()', async () => {
    const res = await schematicsService.getSchematicsVersion();
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('processTemplateMetaData()', async () => {
    // Request models needed by this operation.

    // GitSource
    const gitSourceModel = {
      computed_git_repo_url: 'testString',
      git_repo_url: 'testString',
      git_token: 'testString',
      git_repo_folder: 'testString',
      git_release: 'testString',
      git_branch: 'testString',
    };

    // CatalogSource
    const catalogSourceModel = {
      catalog_name: 'testString',
      catalog_id: 'testString',
      offering_name: 'testString',
      offering_version: 'testString',
      offering_kind: 'testString',
      offering_target_kind: 'testString',
      offering_id: 'testString',
      offering_version_id: 'testString',
      offering_version_flavour_name: 'testString',
      offering_repo_url: 'testString',
      offering_provisioner_working_directory: 'testString',
      dry_run: true,
      owning_account: 'testString',
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'local',
      git: gitSourceModel,
      catalog: catalogSourceModel,
    };

    const params = {
      templateType: 'testString',
      source: externalSourceModel,
      region: 'testString',
      sourceType: 'local',
      xGithubToken: 'testString',
    };

    const res = await schematicsService.processTemplateMetaData(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listWorkspaces()', async () => {
    const params = {
      offset: 0,
      limit: 100,
      profile: 'ids',
    };

    const res = await schematicsService.listWorkspaces(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createWorkspace()', async () => {
    // Request models needed by this operation.

    // ServiceExtensions
    const serviceExtensionsModel = {
      name: 'flavor',
      value: 'standard',
      type: 'string',
    };

    // CatalogRef
    const catalogRefModel = {
      dry_run: true,
      owning_account: 'testString',
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
      offering_version: 'testString',
      service_extensions: [serviceExtensionsModel],
    };

    // Dependencies
    const dependenciesModel = {
      parents: ['testString'],
      children: ['testString'],
    };

    // SharedTargetData
    const sharedTargetDataModel = {
      cluster_created_on: 'testString',
      cluster_id: 'testString',
      cluster_name: 'testString',
      cluster_type: 'testString',
      entitlement_keys: [{ foo: 'bar' }],
      namespace: 'testString',
      region: 'testString',
      resource_group_id: 'testString',
      worker_count: 26,
      worker_machine_type: 'testString',
    };

    // EnvironmentValuesMetadata
    const environmentValuesMetadataModel = {
      hidden: true,
      name: 'testString',
      secure: true,
    };

    // InjectTerraformTemplateInnerTftParametersItem
    const injectTerraformTemplateInnerTftParametersItemModel = {
      name: 'testString',
      value: 'testString',
    };

    // InjectTerraformTemplateInner
    const injectTerraformTemplateInnerModel = {
      tft_git_url: 'testString',
      tft_git_token: 'testString',
      tft_prefix: 'testString',
      injection_type: 'testString',
      tft_name: 'testString',
      tft_parameters: [injectTerraformTemplateInnerTftParametersItemModel],
    };

    // WorkspaceVariableRequest
    const workspaceVariableRequestModel = {
      description: 'testString',
      name: 'testString',
      secure: true,
      type: 'testString',
      use_default: true,
      value: 'testString',
    };

    // TemplateSourceDataRequest
    const templateSourceDataRequestModel = {
      env_values: [{ foo: 'bar' }],
      env_values_metadata: [environmentValuesMetadataModel],
      folder: 'testString',
      compact: true,
      init_state_file: 'testString',
      injectors: [injectTerraformTemplateInnerModel],
      type: 'testString',
      uninstall_script_name: 'testString',
      values: 'testString',
      values_metadata: [{ foo: 'bar' }],
      variablestore: [workspaceVariableRequestModel],
    };

    // TemplateRepoRequest
    const templateRepoRequestModel = {
      branch: 'testString',
      release: 'testString',
      repo_sha_value: 'testString',
      repo_url: 'testString',
      url: 'testString',
    };

    // WorkspaceStatusRequest
    const workspaceStatusRequestModel = {
      frozen: true,
      frozen_at: '2019-01-01T12:00:00.000Z',
      frozen_by: 'testString',
      locked: true,
      locked_by: 'testString',
      locked_time: '2019-01-01T12:00:00.000Z',
    };

    const params = {
      appliedShareddataIds: ['testString'],
      catalogRef: catalogRefModel,
      dependencies: dependenciesModel,
      description: 'testString',
      location: 'testString',
      name: 'testString',
      resourceGroup: 'testString',
      sharedData: sharedTargetDataModel,
      tags: ['testString'],
      templateData: [templateSourceDataRequestModel],
      templateRef: 'testString',
      templateRepo: templateRepoRequestModel,
      type: ['testString'],
      workspaceStatus: workspaceStatusRequestModel,
      agentId: 'testString',
      xGithubToken: 'testString',
    };

    const res = await schematicsService.createWorkspace(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getWorkspace()', async () => {
    const params = {
      wId: 'testString',
    };

    const res = await schematicsService.getWorkspace(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replaceWorkspace()', async () => {
    // Request models needed by this operation.

    // ServiceExtensions
    const serviceExtensionsModel = {
      name: 'flavor',
      value: 'standard',
      type: 'string',
    };

    // CatalogRef
    const catalogRefModel = {
      dry_run: true,
      owning_account: 'testString',
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
      offering_version: 'testString',
      service_extensions: [serviceExtensionsModel],
    };

    // Dependencies
    const dependenciesModel = {
      parents: ['testString'],
      children: ['testString'],
    };

    // SharedTargetData
    const sharedTargetDataModel = {
      cluster_created_on: 'testString',
      cluster_id: 'testString',
      cluster_name: 'testString',
      cluster_type: 'testString',
      entitlement_keys: [{ foo: 'bar' }],
      namespace: 'testString',
      region: 'testString',
      resource_group_id: 'testString',
      worker_count: 26,
      worker_machine_type: 'testString',
    };

    // EnvironmentValuesMetadata
    const environmentValuesMetadataModel = {
      hidden: true,
      name: 'testString',
      secure: true,
    };

    // InjectTerraformTemplateInnerTftParametersItem
    const injectTerraformTemplateInnerTftParametersItemModel = {
      name: 'testString',
      value: 'testString',
    };

    // InjectTerraformTemplateInner
    const injectTerraformTemplateInnerModel = {
      tft_git_url: 'testString',
      tft_git_token: 'testString',
      tft_prefix: 'testString',
      injection_type: 'testString',
      tft_name: 'testString',
      tft_parameters: [injectTerraformTemplateInnerTftParametersItemModel],
    };

    // WorkspaceVariableRequest
    const workspaceVariableRequestModel = {
      description: 'testString',
      name: 'testString',
      secure: true,
      type: 'testString',
      use_default: true,
      value: 'testString',
    };

    // TemplateSourceDataRequest
    const templateSourceDataRequestModel = {
      env_values: [{ foo: 'bar' }],
      env_values_metadata: [environmentValuesMetadataModel],
      folder: 'testString',
      compact: true,
      init_state_file: 'testString',
      injectors: [injectTerraformTemplateInnerModel],
      type: 'testString',
      uninstall_script_name: 'testString',
      values: 'testString',
      values_metadata: [{ foo: 'bar' }],
      variablestore: [workspaceVariableRequestModel],
    };

    // TemplateRepoUpdateRequest
    const templateRepoUpdateRequestModel = {
      branch: 'testString',
      release: 'testString',
      repo_sha_value: 'testString',
      repo_url: 'testString',
      url: 'testString',
    };

    // WorkspaceStatusUpdateRequest
    const workspaceStatusUpdateRequestModel = {
      frozen: true,
      frozen_at: '2019-01-01T12:00:00.000Z',
      frozen_by: 'testString',
      locked: true,
      locked_by: 'testString',
      locked_time: '2019-01-01T12:00:00.000Z',
    };

    // WorkspaceStatusMessage
    const workspaceStatusMessageModel = {
      status_code: 'testString',
      status_msg: 'testString',
    };

    const params = {
      wId: 'testString',
      catalogRef: catalogRefModel,
      description: 'testString',
      dependencies: dependenciesModel,
      name: 'testString',
      sharedData: sharedTargetDataModel,
      tags: ['testString'],
      templateData: [templateSourceDataRequestModel],
      templateRepo: templateRepoUpdateRequestModel,
      type: ['testString'],
      workspaceStatus: workspaceStatusUpdateRequestModel,
      workspaceStatusMsg: workspaceStatusMessageModel,
      agentId: 'testString',
      xGithubToken: 'testString',
    };

    const res = await schematicsService.replaceWorkspace(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateWorkspace()', async () => {
    // Request models needed by this operation.

    // ServiceExtensions
    const serviceExtensionsModel = {
      name: 'flavor',
      value: 'standard',
      type: 'string',
    };

    // CatalogRef
    const catalogRefModel = {
      dry_run: true,
      owning_account: 'testString',
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
      offering_version: 'testString',
      service_extensions: [serviceExtensionsModel],
    };

    // Dependencies
    const dependenciesModel = {
      parents: ['testString'],
      children: ['testString'],
    };

    // SharedTargetData
    const sharedTargetDataModel = {
      cluster_created_on: 'testString',
      cluster_id: 'testString',
      cluster_name: 'testString',
      cluster_type: 'testString',
      entitlement_keys: [{ foo: 'bar' }],
      namespace: 'testString',
      region: 'testString',
      resource_group_id: 'testString',
      worker_count: 26,
      worker_machine_type: 'testString',
    };

    // EnvironmentValuesMetadata
    const environmentValuesMetadataModel = {
      hidden: true,
      name: 'testString',
      secure: true,
    };

    // InjectTerraformTemplateInnerTftParametersItem
    const injectTerraformTemplateInnerTftParametersItemModel = {
      name: 'testString',
      value: 'testString',
    };

    // InjectTerraformTemplateInner
    const injectTerraformTemplateInnerModel = {
      tft_git_url: 'testString',
      tft_git_token: 'testString',
      tft_prefix: 'testString',
      injection_type: 'testString',
      tft_name: 'testString',
      tft_parameters: [injectTerraformTemplateInnerTftParametersItemModel],
    };

    // WorkspaceVariableRequest
    const workspaceVariableRequestModel = {
      description: 'testString',
      name: 'testString',
      secure: true,
      type: 'testString',
      use_default: true,
      value: 'testString',
    };

    // TemplateSourceDataRequest
    const templateSourceDataRequestModel = {
      env_values: [{ foo: 'bar' }],
      env_values_metadata: [environmentValuesMetadataModel],
      folder: 'testString',
      compact: true,
      init_state_file: 'testString',
      injectors: [injectTerraformTemplateInnerModel],
      type: 'testString',
      uninstall_script_name: 'testString',
      values: 'testString',
      values_metadata: [{ foo: 'bar' }],
      variablestore: [workspaceVariableRequestModel],
    };

    // TemplateRepoUpdateRequest
    const templateRepoUpdateRequestModel = {
      branch: 'testString',
      release: 'testString',
      repo_sha_value: 'testString',
      repo_url: 'testString',
      url: 'testString',
    };

    // WorkspaceStatusUpdateRequest
    const workspaceStatusUpdateRequestModel = {
      frozen: true,
      frozen_at: '2019-01-01T12:00:00.000Z',
      frozen_by: 'testString',
      locked: true,
      locked_by: 'testString',
      locked_time: '2019-01-01T12:00:00.000Z',
    };

    // WorkspaceStatusMessage
    const workspaceStatusMessageModel = {
      status_code: 'testString',
      status_msg: 'testString',
    };

    const params = {
      wId: 'testString',
      catalogRef: catalogRefModel,
      description: 'testString',
      dependencies: dependenciesModel,
      name: 'testString',
      sharedData: sharedTargetDataModel,
      tags: ['testString'],
      templateData: [templateSourceDataRequestModel],
      templateRepo: templateRepoUpdateRequestModel,
      type: ['testString'],
      workspaceStatus: workspaceStatusUpdateRequestModel,
      workspaceStatusMsg: workspaceStatusMessageModel,
      agentId: 'testString',
    };

    const res = await schematicsService.updateWorkspace(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getWorkspaceReadme()', async () => {
    const params = {
      wId: 'testString',
      ref: 'testString',
      formatted: 'markdown',
    };

    const res = await schematicsService.getWorkspaceReadme(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('templateRepoUpload()', async () => {
    const params = {
      wId: 'testString',
      tId: 'testString',
      file: Buffer.from('This is a mock file.'),
      fileContentType: 'testString',
    };

    const res = await schematicsService.templateRepoUpload(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getWorkspaceInputs()', async () => {
    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    const res = await schematicsService.getWorkspaceInputs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replaceWorkspaceInputs()', async () => {
    // Request models needed by this operation.

    // WorkspaceVariableRequest
    const workspaceVariableRequestModel = {
      description: 'testString',
      name: 'testString',
      secure: true,
      type: 'testString',
      use_default: true,
      value: 'testString',
    };

    const params = {
      wId: 'testString',
      tId: 'testString',
      envValues: [{ foo: 'bar' }],
      values: 'testString',
      variablestore: [workspaceVariableRequestModel],
    };

    const res = await schematicsService.replaceWorkspaceInputs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getAllWorkspaceInputs()', async () => {
    const params = {
      wId: 'testString',
    };

    const res = await schematicsService.getAllWorkspaceInputs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getWorkspaceInputMetadata()', async () => {
    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    const res = await schematicsService.getWorkspaceInputMetadata(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getWorkspaceOutputs()', async () => {
    const params = {
      wId: 'testString',
    };

    const res = await schematicsService.getWorkspaceOutputs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getWorkspaceResources()', async () => {
    const params = {
      wId: 'testString',
    };

    const res = await schematicsService.getWorkspaceResources(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getWorkspaceState()', async () => {
    const params = {
      wId: 'testString',
    };

    const res = await schematicsService.getWorkspaceState(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getWorkspaceTemplateState()', async () => {
    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    const res = await schematicsService.getWorkspaceTemplateState(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getWorkspaceActivityLogs()', async () => {
    const params = {
      wId: 'testString',
      activityId: 'testString',
    };

    const res = await schematicsService.getWorkspaceActivityLogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getWorkspaceLogUrls()', async () => {
    const params = {
      wId: 'testString',
    };

    const res = await schematicsService.getWorkspaceLogUrls(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getTemplateLogs()', async () => {
    const params = {
      wId: 'testString',
      tId: 'testString',
      logTfCmd: true,
      logTfPrefix: true,
      logTfNullResource: true,
      logTfAnsible: true,
    };

    const res = await schematicsService.getTemplateLogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getTemplateActivityLog()', async () => {
    const params = {
      wId: 'testString',
      tId: 'testString',
      activityId: 'testString',
      logTfCmd: true,
      logTfPrefix: true,
      logTfNullResource: true,
      logTfAnsible: true,
    };

    const res = await schematicsService.getTemplateActivityLog(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listActions()', async () => {
    const params = {
      offset: 0,
      limit: 100,
      sort: 'testString',
      profile: 'ids',
    };

    const res = await schematicsService.listActions(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createAction()', async () => {
    // Request models needed by this operation.

    // UserState
    const userStateModel = {
      state: 'draft',
      set_by: 'testString',
      set_at: '2019-01-01T12:00:00.000Z',
    };

    // GitSource
    const gitSourceModel = {
      computed_git_repo_url: 'testString',
      git_repo_url: 'testString',
      git_token: 'testString',
      git_repo_folder: 'testString',
      git_release: 'testString',
      git_branch: 'testString',
    };

    // CatalogSource
    const catalogSourceModel = {
      catalog_name: 'testString',
      catalog_id: 'testString',
      offering_name: 'testString',
      offering_version: 'testString',
      offering_kind: 'testString',
      offering_target_kind: 'testString',
      offering_id: 'testString',
      offering_version_id: 'testString',
      offering_version_flavour_name: 'testString',
      offering_repo_url: 'testString',
      offering_provisioner_working_directory: 'testString',
      dry_run: true,
      owning_account: 'testString',
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'local',
      git: gitSourceModel,
      catalog: catalogSourceModel,
    };

    // CredentialVariableMetadata
    const credentialVariableMetadataModel = {
      type: 'string',
      aliases: ['testString'],
      description: 'testString',
      cloud_data_type: 'testString',
      default_value: 'testString',
      link_status: 'normal',
      immutable: true,
      hidden: true,
      required: true,
      position: 38,
      group_by: 'testString',
      source: 'testString',
    };

    // CredentialVariableData
    const credentialVariableDataModel = {
      name: 'testString',
      value: 'testString',
      use_default: true,
      metadata: credentialVariableMetadataModel,
    };

    // BastionResourceDefinition
    const bastionResourceDefinitionModel = {
      name: 'testString',
      host: 'testString',
    };

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      cloud_data_type: 'testString',
      default_value: 'testString',
      link_status: 'normal',
      secure: true,
      immutable: true,
      hidden: true,
      required: true,
      options: ['testString'],
      min_value: 38,
      max_value: 38,
      min_length: 38,
      max_length: 38,
      matches: 'testString',
      position: 38,
      group_by: 'testString',
      source: 'testString',
    };

    // VariableData
    const variableDataModel = {
      name: 'testString',
      value: 'testString',
      use_default: true,
      metadata: variableMetadataModel,
    };

    const params = {
      name: 'Stop Action',
      description:
        'The description of your action. The description can be up to 2048 characters long in size. **Example** you can use the description to stop the targets.',
      location: 'us-south',
      resourceGroup: 'testString',
      bastionConnectionType: 'ssh',
      inventoryConnectionType: 'ssh',
      tags: ['testString'],
      userState: userStateModel,
      sourceReadmeUrl: 'testString',
      source: externalSourceModel,
      sourceType: 'local',
      commandParameter: 'testString',
      inventory: 'testString',
      credentials: [credentialVariableDataModel],
      bastion: bastionResourceDefinitionModel,
      bastionCredential: credentialVariableDataModel,
      targetsIni: 'testString',
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      xGithubToken: 'testString',
    };

    const res = await schematicsService.createAction(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getAction()', async () => {
    const params = {
      actionId: 'testString',
      profile: 'summary',
    };

    const res = await schematicsService.getAction(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateAction()', async () => {
    // Request models needed by this operation.

    // UserState
    const userStateModel = {
      state: 'draft',
      set_by: 'testString',
      set_at: '2019-01-01T12:00:00.000Z',
    };

    // GitSource
    const gitSourceModel = {
      computed_git_repo_url: 'testString',
      git_repo_url: 'testString',
      git_token: 'testString',
      git_repo_folder: 'testString',
      git_release: 'testString',
      git_branch: 'testString',
    };

    // CatalogSource
    const catalogSourceModel = {
      catalog_name: 'testString',
      catalog_id: 'testString',
      offering_name: 'testString',
      offering_version: 'testString',
      offering_kind: 'testString',
      offering_target_kind: 'testString',
      offering_id: 'testString',
      offering_version_id: 'testString',
      offering_version_flavour_name: 'testString',
      offering_repo_url: 'testString',
      offering_provisioner_working_directory: 'testString',
      dry_run: true,
      owning_account: 'testString',
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'local',
      git: gitSourceModel,
      catalog: catalogSourceModel,
    };

    // CredentialVariableMetadata
    const credentialVariableMetadataModel = {
      type: 'string',
      aliases: ['testString'],
      description: 'testString',
      cloud_data_type: 'testString',
      default_value: 'testString',
      link_status: 'normal',
      immutable: true,
      hidden: true,
      required: true,
      position: 38,
      group_by: 'testString',
      source: 'testString',
    };

    // CredentialVariableData
    const credentialVariableDataModel = {
      name: 'testString',
      value: 'testString',
      use_default: true,
      metadata: credentialVariableMetadataModel,
    };

    // BastionResourceDefinition
    const bastionResourceDefinitionModel = {
      name: 'testString',
      host: 'testString',
    };

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      cloud_data_type: 'testString',
      default_value: 'testString',
      link_status: 'normal',
      secure: true,
      immutable: true,
      hidden: true,
      required: true,
      options: ['testString'],
      min_value: 38,
      max_value: 38,
      min_length: 38,
      max_length: 38,
      matches: 'testString',
      position: 38,
      group_by: 'testString',
      source: 'testString',
    };

    // VariableData
    const variableDataModel = {
      name: 'testString',
      value: 'testString',
      use_default: true,
      metadata: variableMetadataModel,
    };

    const params = {
      actionId: 'testString',
      name: 'Stop Action',
      description:
        'The description of your action. The description can be up to 2048 characters long in size. **Example** you can use the description to stop the targets.',
      location: 'us-south',
      resourceGroup: 'testString',
      bastionConnectionType: 'ssh',
      inventoryConnectionType: 'ssh',
      tags: ['testString'],
      userState: userStateModel,
      sourceReadmeUrl: 'testString',
      source: externalSourceModel,
      sourceType: 'local',
      commandParameter: 'testString',
      inventory: 'testString',
      credentials: [credentialVariableDataModel],
      bastion: bastionResourceDefinitionModel,
      bastionCredential: credentialVariableDataModel,
      targetsIni: 'testString',
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      xGithubToken: 'testString',
    };

    const res = await schematicsService.updateAction(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('uploadTemplateTarAction()', async () => {
    const params = {
      actionId: 'testString',
      file: Buffer.from('This is a mock file.'),
      fileContentType: 'testString',
    };

    const res = await schematicsService.uploadTemplateTarAction(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listWorkspaceActivities()', async () => {
    const params = {
      wId: 'testString',
      offset: 0,
      limit: 100,
    };

    const res = await schematicsService.listWorkspaceActivities(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getWorkspaceActivity()', async () => {
    const params = {
      wId: 'testString',
      activityId: 'testString',
    };

    const res = await schematicsService.getWorkspaceActivity(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('runWorkspaceCommands()', async () => {
    // Request models needed by this operation.

    // TerraformCommand
    const terraformCommandModel = {
      command: 'testString',
      command_params: 'testString',
      command_name: 'testString',
      command_desc: 'testString',
      command_on_error: 'testString',
      command_depends_on: 'testString',
      command_status: 'testString',
    };

    const params = {
      wId: 'testString',
      refreshToken: 'testString',
      commands: [terraformCommandModel],
      operationName: 'testString',
      description: 'testString',
    };

    const res = await schematicsService.runWorkspaceCommands(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('applyWorkspaceCommand()', async () => {
    // Request models needed by this operation.

    // WorkspaceActivityOptionsTemplate
    const workspaceActivityOptionsTemplateModel = {
      target: ['testString'],
      tf_vars: ['testString'],
    };

    const params = {
      wId: 'testString',
      refreshToken: 'testString',
      actionOptions: workspaceActivityOptionsTemplateModel,
      delegatedToken: 'testString',
    };

    const res = await schematicsService.applyWorkspaceCommand(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('destroyWorkspaceCommand()', async () => {
    // Request models needed by this operation.

    // WorkspaceActivityOptionsTemplate
    const workspaceActivityOptionsTemplateModel = {
      target: ['testString'],
      tf_vars: ['testString'],
    };

    const params = {
      wId: 'testString',
      refreshToken: 'testString',
      actionOptions: workspaceActivityOptionsTemplateModel,
      delegatedToken: 'testString',
    };

    const res = await schematicsService.destroyWorkspaceCommand(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('planWorkspaceCommand()', async () => {
    // Request models needed by this operation.

    // WorkspaceActivityOptionsTemplate
    const workspaceActivityOptionsTemplateModel = {
      target: ['testString'],
      tf_vars: ['testString'],
    };

    const params = {
      wId: 'testString',
      refreshToken: 'testString',
      actionOptions: workspaceActivityOptionsTemplateModel,
      delegatedToken: 'testString',
    };

    const res = await schematicsService.planWorkspaceCommand(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('refreshWorkspaceCommand()', async () => {
    const params = {
      wId: 'testString',
      refreshToken: 'testString',
      delegatedToken: 'testString',
    };

    const res = await schematicsService.refreshWorkspaceCommand(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('listJobs()', async () => {
    const params = {
      offset: 0,
      limit: 100,
      sort: 'testString',
      profile: 'ids',
      resource: 'workspaces',
      resourceId: 'testString',
      actionId: 'testString',
      workspaceId: 'testString',
      list: 'all',
    };

    const res = await schematicsService.listJobs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createJob()', async () => {
    // Request models needed by this operation.

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      cloud_data_type: 'testString',
      default_value: 'testString',
      link_status: 'normal',
      secure: true,
      immutable: true,
      hidden: true,
      required: true,
      options: ['testString'],
      min_value: 38,
      max_value: 38,
      min_length: 38,
      max_length: 38,
      matches: 'testString',
      position: 38,
      group_by: 'testString',
      source: 'testString',
    };

    // VariableData
    const variableDataModel = {
      name: 'testString',
      value: 'testString',
      use_default: true,
      metadata: variableMetadataModel,
    };

    // JobStatusWorkitem
    const jobStatusWorkitemModel = {
      workspace_id: 'testString',
      workspace_name: 'testString',
      job_id: 'testString',
      status_code: 'job_pending',
      status_message: 'testString',
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusFlow
    const jobStatusFlowModel = {
      flow_id: 'testString',
      flow_name: 'testString',
      status_code: 'job_pending',
      status_message: 'testString',
      workitems: [jobStatusWorkitemModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusTemplate
    const jobStatusTemplateModel = {
      template_id: 'testString',
      template_name: 'testString',
      flow_index: 38,
      status_code: 'job_pending',
      status_message: 'testString',
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusWorkspace
    const jobStatusWorkspaceModel = {
      workspace_name: 'testString',
      status_code: 'job_pending',
      status_message: 'testString',
      flow_status: jobStatusFlowModel,
      template_status: [jobStatusTemplateModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusAction
    const jobStatusActionModel = {
      action_name: 'testString',
      status_code: 'job_pending',
      status_message: 'testString',
      bastion_status_code: 'none',
      bastion_status_message: 'testString',
      targets_status_code: 'none',
      targets_status_message: 'testString',
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusSchematicsResources
    const jobStatusSchematicsResourcesModel = {
      status_code: 'job_pending',
      status_message: 'testString',
      schematics_resource_id: 'testString',
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusSystem
    const jobStatusSystemModel = {
      system_status_message: 'testString',
      system_status_code: 'job_pending',
      schematics_resource_status: [jobStatusSchematicsResourcesModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatus
    const jobStatusModel = {
      position_in_queue: 72.5,
      total_in_queue: 72.5,
      workspace_job_status: jobStatusWorkspaceModel,
      action_job_status: jobStatusActionModel,
      system_job_status: jobStatusSystemModel,
      flow_job_status: jobStatusFlowModel,
    };

    // CartOrderData
    const cartOrderDataModel = {
      name: 'testString',
      value: 'testString',
      type: 'testString',
      usage_kind: ['servicetags'],
    };

    // JobDataTemplate
    const jobDataTemplateModel = {
      template_id: 'testString',
      template_name: 'testString',
      flow_index: 38,
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobDataWorkspace
    const jobDataWorkspaceModel = {
      workspace_name: 'testString',
      flow_id: 'testString',
      flow_name: 'testString',
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      template_data: [jobDataTemplateModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // InventoryResourceRecord
    const inventoryResourceRecordModel = {
      name: 'testString',
      description: 'testString',
      location: 'us-south',
      resource_group: 'testString',
      inventories_ini: 'testString',
      resource_queries: ['testString'],
    };

    // JobDataAction
    const jobDataActionModel = {
      action_name: 'testString',
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      updated_at: '2019-01-01T12:00:00.000Z',
      inventory_record: inventoryResourceRecordModel,
      materialized_inventory: 'testString',
    };

    // JobDataSystem
    const jobDataSystemModel = {
      key_id: 'testString',
      schematics_resource_id: ['testString'],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // GitSource
    const gitSourceModel = {
      computed_git_repo_url: 'testString',
      git_repo_url: 'testString',
      git_token: 'testString',
      git_repo_folder: 'testString',
      git_release: 'testString',
      git_branch: 'testString',
    };

    // CatalogSource
    const catalogSourceModel = {
      catalog_name: 'testString',
      catalog_id: 'testString',
      offering_name: 'testString',
      offering_version: 'testString',
      offering_kind: 'testString',
      offering_target_kind: 'testString',
      offering_id: 'testString',
      offering_version_id: 'testString',
      offering_version_flavour_name: 'testString',
      offering_repo_url: 'testString',
      offering_provisioner_working_directory: 'testString',
      dry_run: true,
      owning_account: 'testString',
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'local',
      git: gitSourceModel,
      catalog: catalogSourceModel,
    };

    // JobDataWorkItemLastJob
    const jobDataWorkItemLastJobModel = {
      command_object: 'workspace',
      command_object_name: 'testString',
      command_object_id: 'testString',
      command_name: 'workspace_plan',
      job_id: 'testString',
      job_status: 'job_pending',
    };

    // JobDataWorkItem
    const jobDataWorkItemModel = {
      command_object_id: 'testString',
      command_object_name: 'testString',
      layers: 'testString',
      source_type: 'local',
      source: externalSourceModel,
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      last_job: jobDataWorkItemLastJobModel,
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobDataFlow
    const jobDataFlowModel = {
      flow_id: 'testString',
      flow_name: 'testString',
      workitems: [jobDataWorkItemModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobData
    const jobDataModel = {
      job_type: 'repo_download_job',
      workspace_job_data: jobDataWorkspaceModel,
      action_job_data: jobDataActionModel,
      system_job_data: jobDataSystemModel,
      flow_job_data: jobDataFlowModel,
    };

    // BastionResourceDefinition
    const bastionResourceDefinitionModel = {
      name: 'testString',
      host: 'testString',
    };

    // JobLogSummaryRepoDownloadJob
    const jobLogSummaryRepoDownloadJobModel = {};

    // JobLogSummaryWorkspaceJob
    const jobLogSummaryWorkspaceJobModel = {};

    // JobLogSummaryWorkitems
    const jobLogSummaryWorkitemsModel = {
      workspace_id: 'testString',
      job_id: 'testString',
      log_url: 'testString',
    };

    // JobLogSummaryFlowJob
    const jobLogSummaryFlowJobModel = {
      workitems: [jobLogSummaryWorkitemsModel],
    };

    // JobLogSummaryActionJobRecap
    const jobLogSummaryActionJobRecapModel = {
      target: ['testString'],
      ok: 72.5,
      changed: 72.5,
      failed: 72.5,
      skipped: 72.5,
      unreachable: 72.5,
    };

    // JobLogSummaryActionJob
    const jobLogSummaryActionJobModel = {
      recap: jobLogSummaryActionJobRecapModel,
    };

    // JobLogSummarySystemJob
    const jobLogSummarySystemJobModel = {
      success: 72.5,
      failed: 72.5,
    };

    // JobLogSummary
    const jobLogSummaryModel = {
      job_type: 'repo_download_job',
      repo_download_job: jobLogSummaryRepoDownloadJobModel,
      workspace_job: jobLogSummaryWorkspaceJobModel,
      flow_job: jobLogSummaryFlowJobModel,
      action_job: jobLogSummaryActionJobModel,
      system_job: jobLogSummarySystemJobModel,
    };

    // AgentInfo
    const agentInfoModel = {
      id: 'testString',
      name: 'testString',
      assignment_policy_id: 'testString',
    };

    const params = {
      refreshToken: 'testString',
      commandObject: 'workspace',
      commandObjectId: 'testString',
      commandName: 'workspace_plan',
      commandParameter: 'testString',
      commandOptions: ['testString'],
      inputs: [variableDataModel],
      settings: [variableDataModel],
      tags: ['testString'],
      location: 'us-south',
      status: jobStatusModel,
      cartOrderData: [cartOrderDataModel],
      data: jobDataModel,
      bastion: bastionResourceDefinitionModel,
      logSummary: jobLogSummaryModel,
      agent: agentInfoModel,
    };

    const res = await schematicsService.createJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getJob()', async () => {
    const params = {
      jobId: 'testString',
      profile: 'summary',
    };

    const res = await schematicsService.getJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateJob()', async () => {
    // Request models needed by this operation.

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      cloud_data_type: 'testString',
      default_value: 'testString',
      link_status: 'normal',
      secure: true,
      immutable: true,
      hidden: true,
      required: true,
      options: ['testString'],
      min_value: 38,
      max_value: 38,
      min_length: 38,
      max_length: 38,
      matches: 'testString',
      position: 38,
      group_by: 'testString',
      source: 'testString',
    };

    // VariableData
    const variableDataModel = {
      name: 'testString',
      value: 'testString',
      use_default: true,
      metadata: variableMetadataModel,
    };

    // JobStatusWorkitem
    const jobStatusWorkitemModel = {
      workspace_id: 'testString',
      workspace_name: 'testString',
      job_id: 'testString',
      status_code: 'job_pending',
      status_message: 'testString',
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusFlow
    const jobStatusFlowModel = {
      flow_id: 'testString',
      flow_name: 'testString',
      status_code: 'job_pending',
      status_message: 'testString',
      workitems: [jobStatusWorkitemModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusTemplate
    const jobStatusTemplateModel = {
      template_id: 'testString',
      template_name: 'testString',
      flow_index: 38,
      status_code: 'job_pending',
      status_message: 'testString',
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusWorkspace
    const jobStatusWorkspaceModel = {
      workspace_name: 'testString',
      status_code: 'job_pending',
      status_message: 'testString',
      flow_status: jobStatusFlowModel,
      template_status: [jobStatusTemplateModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusAction
    const jobStatusActionModel = {
      action_name: 'testString',
      status_code: 'job_pending',
      status_message: 'testString',
      bastion_status_code: 'none',
      bastion_status_message: 'testString',
      targets_status_code: 'none',
      targets_status_message: 'testString',
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusSchematicsResources
    const jobStatusSchematicsResourcesModel = {
      status_code: 'job_pending',
      status_message: 'testString',
      schematics_resource_id: 'testString',
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatusSystem
    const jobStatusSystemModel = {
      system_status_message: 'testString',
      system_status_code: 'job_pending',
      schematics_resource_status: [jobStatusSchematicsResourcesModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobStatus
    const jobStatusModel = {
      position_in_queue: 72.5,
      total_in_queue: 72.5,
      workspace_job_status: jobStatusWorkspaceModel,
      action_job_status: jobStatusActionModel,
      system_job_status: jobStatusSystemModel,
      flow_job_status: jobStatusFlowModel,
    };

    // CartOrderData
    const cartOrderDataModel = {
      name: 'testString',
      value: 'testString',
      type: 'testString',
      usage_kind: ['servicetags'],
    };

    // JobDataTemplate
    const jobDataTemplateModel = {
      template_id: 'testString',
      template_name: 'testString',
      flow_index: 38,
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobDataWorkspace
    const jobDataWorkspaceModel = {
      workspace_name: 'testString',
      flow_id: 'testString',
      flow_name: 'testString',
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      template_data: [jobDataTemplateModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // InventoryResourceRecord
    const inventoryResourceRecordModel = {
      name: 'testString',
      description: 'testString',
      location: 'us-south',
      resource_group: 'testString',
      inventories_ini: 'testString',
      resource_queries: ['testString'],
    };

    // JobDataAction
    const jobDataActionModel = {
      action_name: 'testString',
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      updated_at: '2019-01-01T12:00:00.000Z',
      inventory_record: inventoryResourceRecordModel,
      materialized_inventory: 'testString',
    };

    // JobDataSystem
    const jobDataSystemModel = {
      key_id: 'testString',
      schematics_resource_id: ['testString'],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // GitSource
    const gitSourceModel = {
      computed_git_repo_url: 'testString',
      git_repo_url: 'testString',
      git_token: 'testString',
      git_repo_folder: 'testString',
      git_release: 'testString',
      git_branch: 'testString',
    };

    // CatalogSource
    const catalogSourceModel = {
      catalog_name: 'testString',
      catalog_id: 'testString',
      offering_name: 'testString',
      offering_version: 'testString',
      offering_kind: 'testString',
      offering_target_kind: 'testString',
      offering_id: 'testString',
      offering_version_id: 'testString',
      offering_version_flavour_name: 'testString',
      offering_repo_url: 'testString',
      offering_provisioner_working_directory: 'testString',
      dry_run: true,
      owning_account: 'testString',
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'local',
      git: gitSourceModel,
      catalog: catalogSourceModel,
    };

    // JobDataWorkItemLastJob
    const jobDataWorkItemLastJobModel = {
      command_object: 'workspace',
      command_object_name: 'testString',
      command_object_id: 'testString',
      command_name: 'workspace_plan',
      job_id: 'testString',
      job_status: 'job_pending',
    };

    // JobDataWorkItem
    const jobDataWorkItemModel = {
      command_object_id: 'testString',
      command_object_name: 'testString',
      layers: 'testString',
      source_type: 'local',
      source: externalSourceModel,
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      last_job: jobDataWorkItemLastJobModel,
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobDataFlow
    const jobDataFlowModel = {
      flow_id: 'testString',
      flow_name: 'testString',
      workitems: [jobDataWorkItemModel],
      updated_at: '2019-01-01T12:00:00.000Z',
    };

    // JobData
    const jobDataModel = {
      job_type: 'repo_download_job',
      workspace_job_data: jobDataWorkspaceModel,
      action_job_data: jobDataActionModel,
      system_job_data: jobDataSystemModel,
      flow_job_data: jobDataFlowModel,
    };

    // BastionResourceDefinition
    const bastionResourceDefinitionModel = {
      name: 'testString',
      host: 'testString',
    };

    // JobLogSummaryRepoDownloadJob
    const jobLogSummaryRepoDownloadJobModel = {};

    // JobLogSummaryWorkspaceJob
    const jobLogSummaryWorkspaceJobModel = {};

    // JobLogSummaryWorkitems
    const jobLogSummaryWorkitemsModel = {
      workspace_id: 'testString',
      job_id: 'testString',
      log_url: 'testString',
    };

    // JobLogSummaryFlowJob
    const jobLogSummaryFlowJobModel = {
      workitems: [jobLogSummaryWorkitemsModel],
    };

    // JobLogSummaryActionJobRecap
    const jobLogSummaryActionJobRecapModel = {
      target: ['testString'],
      ok: 72.5,
      changed: 72.5,
      failed: 72.5,
      skipped: 72.5,
      unreachable: 72.5,
    };

    // JobLogSummaryActionJob
    const jobLogSummaryActionJobModel = {
      recap: jobLogSummaryActionJobRecapModel,
    };

    // JobLogSummarySystemJob
    const jobLogSummarySystemJobModel = {
      success: 72.5,
      failed: 72.5,
    };

    // JobLogSummary
    const jobLogSummaryModel = {
      job_type: 'repo_download_job',
      repo_download_job: jobLogSummaryRepoDownloadJobModel,
      workspace_job: jobLogSummaryWorkspaceJobModel,
      flow_job: jobLogSummaryFlowJobModel,
      action_job: jobLogSummaryActionJobModel,
      system_job: jobLogSummarySystemJobModel,
    };

    // AgentInfo
    const agentInfoModel = {
      id: 'testString',
      name: 'testString',
      assignment_policy_id: 'testString',
    };

    const params = {
      jobId: 'testString',
      refreshToken: 'testString',
      commandObject: 'workspace',
      commandObjectId: 'testString',
      commandName: 'workspace_plan',
      commandParameter: 'testString',
      commandOptions: ['testString'],
      inputs: [variableDataModel],
      settings: [variableDataModel],
      tags: ['testString'],
      location: 'us-south',
      status: jobStatusModel,
      cartOrderData: [cartOrderDataModel],
      data: jobDataModel,
      bastion: bastionResourceDefinitionModel,
      logSummary: jobLogSummaryModel,
      agent: agentInfoModel,
    };

    const res = await schematicsService.updateJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listJobLogs()', async () => {
    const params = {
      jobId: 'testString',
    };

    const res = await schematicsService.listJobLogs(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getJobFiles()', async () => {
    const params = {
      jobId: 'testString',
      fileType: 'template_repo',
    };

    const res = await schematicsService.getJobFiles(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createWorkspaceDeletionJob()', async () => {
    const params = {
      refreshToken: 'testString',
      job: 'testString',
      version: 'testString',
      workspaces: ['testString'],
    };

    const res = await schematicsService.createWorkspaceDeletionJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getWorkspaceDeletionJobStatus()', async () => {
    const params = {
      wjId: 'testString',
    };

    const res = await schematicsService.getWorkspaceDeletionJobStatus(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listBlueprint()', async () => {
    const params = {
      offset: 0,
      limit: 100,
    };

    const res = await schematicsService.listBlueprint(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createBlueprint()', async () => {
    // Request models needed by this operation.

    // GitSource
    const gitSourceModel = {
      computed_git_repo_url: 'testString',
      git_repo_url: 'testString',
      git_token: 'testString',
      git_repo_folder: 'testString',
      git_release: 'testString',
      git_branch: 'testString',
    };

    // CatalogSource
    const catalogSourceModel = {
      catalog_name: 'testString',
      catalog_id: 'testString',
      offering_name: 'testString',
      offering_version: 'testString',
      offering_kind: 'testString',
      offering_target_kind: 'testString',
      offering_id: 'testString',
      offering_version_id: 'testString',
      offering_version_flavour_name: 'testString',
      offering_repo_url: 'testString',
      offering_provisioner_working_directory: 'testString',
      dry_run: true,
      owning_account: 'testString',
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'local',
      git: gitSourceModel,
      catalog: catalogSourceModel,
    };

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      cloud_data_type: 'testString',
      default_value: 'testString',
      link_status: 'normal',
      secure: true,
      immutable: true,
      hidden: true,
      required: true,
      options: ['testString'],
      min_value: 38,
      max_value: 38,
      min_length: 38,
      max_length: 38,
      matches: 'testString',
      position: 38,
      group_by: 'testString',
      source: 'testString',
    };

    // VariableData
    const variableDataModel = {
      name: 'testString',
      value: 'testString',
      use_default: true,
      metadata: variableMetadataModel,
    };

    // BlueprintConfigItem
    const blueprintConfigItemModel = {
      name: 'testString',
      description: 'testString',
      source: externalSourceModel,
      inputs: [variableDataModel],
    };

    // BlueprintFlow
    const blueprintFlowModel = {};

    // UserState
    const userStateModel = {
      state: 'draft',
      set_by: 'testString',
      set_at: '2019-01-01T12:00:00.000Z',
    };

    const params = {
      name: 'Toronto Dev Environtment',
      schemaVersion: '1.0',
      source: externalSourceModel,
      config: [blueprintConfigItemModel],
      description: 'Deploys dev environtment instance in Toronto Region',
      resourceGroup: 'Default',
      tags: ['blueprint:Tor-Dev'],
      location: 'us-south',
      inputs: [variableDataModel],
      settings: [variableDataModel],
      flow: blueprintFlowModel,
      userState: userStateModel,
    };

    const res = await schematicsService.createBlueprint(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getBlueprint()', async () => {
    const params = {
      blueprintId: 'testString',
      profile: 'ids',
    };

    const res = await schematicsService.getBlueprint(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replaceBlueprint()', async () => {
    // Request models needed by this operation.

    // GitSource
    const gitSourceModel = {
      computed_git_repo_url: 'testString',
      git_repo_url: 'testString',
      git_token: 'testString',
      git_repo_folder: 'testString',
      git_release: 'testString',
      git_branch: 'testString',
    };

    // CatalogSource
    const catalogSourceModel = {
      catalog_name: 'testString',
      catalog_id: 'testString',
      offering_name: 'testString',
      offering_version: 'testString',
      offering_kind: 'testString',
      offering_target_kind: 'testString',
      offering_id: 'testString',
      offering_version_id: 'testString',
      offering_version_flavour_name: 'testString',
      offering_repo_url: 'testString',
      offering_provisioner_working_directory: 'testString',
      dry_run: true,
      owning_account: 'testString',
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'local',
      git: gitSourceModel,
      catalog: catalogSourceModel,
    };

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      cloud_data_type: 'testString',
      default_value: 'testString',
      link_status: 'normal',
      secure: true,
      immutable: true,
      hidden: true,
      required: true,
      options: ['testString'],
      min_value: 38,
      max_value: 38,
      min_length: 38,
      max_length: 38,
      matches: 'testString',
      position: 38,
      group_by: 'testString',
      source: 'testString',
    };

    // VariableData
    const variableDataModel = {
      name: 'testString',
      value: 'testString',
      use_default: true,
      metadata: variableMetadataModel,
    };

    // BlueprintConfigItem
    const blueprintConfigItemModel = {
      name: 'testString',
      description: 'testString',
      source: externalSourceModel,
      inputs: [variableDataModel],
    };

    // BlueprintFlow
    const blueprintFlowModel = {};

    // UserState
    const userStateModel = {
      state: 'draft',
      set_by: 'testString',
      set_at: '2019-01-01T12:00:00.000Z',
    };

    const params = {
      blueprintId: 'testString',
      name: 'Toronto Dev Environtment',
      schemaVersion: '1.0',
      source: externalSourceModel,
      config: [blueprintConfigItemModel],
      description: 'Deploys dev environtment instance in Toronto Region',
      resourceGroup: 'Default',
      tags: ['blueprint:Tor-Dev'],
      location: 'us-south',
      inputs: [variableDataModel],
      settings: [variableDataModel],
      flow: blueprintFlowModel,
      userState: userStateModel,
      profile: 'ids',
    };

    const res = await schematicsService.replaceBlueprint(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('uploadTemplateTarBlueprint()', async () => {
    const params = {
      blueprintId: 'testString',
      file: Buffer.from('This is a mock file.'),
      fileContentType: 'testString',
    };

    const res = await schematicsService.uploadTemplateTarBlueprint(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listInventories()', async () => {
    const params = {
      offset: 0,
      limit: 100,
      sort: 'testString',
      profile: 'ids',
    };

    const res = await schematicsService.listInventories(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createInventory()', async () => {
    const params = {
      name: 'testString',
      description: 'testString',
      location: 'us-south',
      resourceGroup: 'testString',
      inventoriesIni: 'testString',
      resourceQueries: ['testString'],
    };

    const res = await schematicsService.createInventory(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getInventory()', async () => {
    const params = {
      inventoryId: 'testString',
      profile: 'summary',
    };

    const res = await schematicsService.getInventory(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replaceInventory()', async () => {
    const params = {
      inventoryId: 'testString',
      name: 'testString',
      description: 'testString',
      location: 'us-south',
      resourceGroup: 'testString',
      inventoriesIni: 'testString',
      resourceQueries: ['testString'],
    };

    const res = await schematicsService.replaceInventory(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listResourceQuery()', async () => {
    const params = {
      offset: 0,
      limit: 100,
      sort: 'testString',
      profile: 'ids',
    };

    const res = await schematicsService.listResourceQuery(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createResourceQuery()', async () => {
    // Request models needed by this operation.

    // ResourceQueryParam
    const resourceQueryParamModel = {
      name: 'testString',
      value: 'testString',
      description: 'testString',
    };

    // ResourceQuery
    const resourceQueryModel = {
      query_type: 'workspaces',
      query_condition: [resourceQueryParamModel],
      query_select: ['testString'],
    };

    const params = {
      type: 'vsi',
      name: 'testString',
      queries: [resourceQueryModel],
    };

    const res = await schematicsService.createResourceQuery(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getResourcesQuery()', async () => {
    const params = {
      queryId: 'testString',
    };

    const res = await schematicsService.getResourcesQuery(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replaceResourcesQuery()', async () => {
    // Request models needed by this operation.

    // ResourceQueryParam
    const resourceQueryParamModel = {
      name: 'testString',
      value: 'testString',
      description: 'testString',
    };

    // ResourceQuery
    const resourceQueryModel = {
      query_type: 'workspaces',
      query_condition: [resourceQueryParamModel],
      query_select: ['testString'],
    };

    const params = {
      queryId: 'testString',
      type: 'vsi',
      name: 'testString',
      queries: [resourceQueryModel],
    };

    const res = await schematicsService.replaceResourcesQuery(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('executeResourceQuery()', async () => {
    const params = {
      queryId: 'testString',
    };

    const res = await schematicsService.executeResourceQuery(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listAgent()', async () => {
    const params = {
      offset: 0,
      limit: 100,
      profile: 'summary',
      filter: 'all',
    };

    const res = await schematicsService.listAgent(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('registerAgent()', async () => {
    // Request models needed by this operation.

    // AgentUserState
    const agentUserStateModel = {
      state: 'enable',
    };

    const params = {
      name: 'MyDevAgent',
      agentLocation: 'us-south',
      location: 'us-south',
      profileId: 'testString',
      description: 'Register agent',
      resourceGroup: 'testString',
      tags: ['testString'],
      userState: agentUserStateModel,
    };

    const res = await schematicsService.registerAgent(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getAgent()', async () => {
    const params = {
      agentId: 'testString',
      profile: 'summary',
    };

    const res = await schematicsService.getAgent(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateAgentRegistration()', async () => {
    // Request models needed by this operation.

    // AgentUserState
    const agentUserStateModel = {
      state: 'enable',
    };

    const params = {
      agentId: 'testString',
      name: 'MyDevAgent',
      agentLocation: 'us-south',
      location: 'us-south',
      profileId: 'testString',
      description: 'Register agent',
      resourceGroup: 'testString',
      tags: ['testString'],
      userState: agentUserStateModel,
    };

    const res = await schematicsService.updateAgentRegistration(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('listAgentData()', async () => {
    const params = {
      offset: 0,
      limit: 100,
      profile: 'summary',
      filter: 'all',
    };

    const res = await schematicsService.listAgentData(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createAgentData()', async () => {
    // Request models needed by this operation.

    // AgentInfrastructure
    const agentInfrastructureModel = {
      infra_type: 'ibm_kubernetes',
      cluster_id: 'testString',
      cluster_resource_group: 'testString',
      cos_instance_name: 'testString',
      cos_bucket_name: 'testString',
      cos_bucket_region: 'testString',
    };

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      cloud_data_type: 'testString',
      default_value: 'testString',
      link_status: 'normal',
      secure: true,
      immutable: true,
      hidden: true,
      required: true,
      options: ['testString'],
      min_value: 38,
      max_value: 38,
      min_length: 38,
      max_length: 38,
      matches: 'testString',
      position: 38,
      group_by: 'testString',
      source: 'testString',
    };

    // VariableData
    const variableDataModel = {
      name: 'testString',
      value: 'testString',
      use_default: true,
      metadata: variableMetadataModel,
    };

    // AgentUserState
    const agentUserStateModel = {
      state: 'enable',
    };

    // AgentKPIData
    const agentKpiDataModel = {
      availability_indicator: 'available',
      lifecycle_indicator: 'consistent',
      percent_usage_indicator: 'testString',
      application_indicators: ['testString'],
      infra_indicators: ['testString'],
    };

    const params = {
      name: 'MyDevAgent',
      resourceGroup: 'Default',
      version: 'v1.0.0',
      schematicsLocation: 'us-south',
      agentLocation: 'us-south',
      agentInfrastructure: agentInfrastructureModel,
      description: 'Create Agent',
      tags: ['testString'],
      agentInputs: [variableDataModel],
      userState: agentUserStateModel,
      agentKpi: agentKpiDataModel,
    };

    const res = await schematicsService.createAgentData(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getAgentData()', async () => {
    const params = {
      agentId: 'testString',
      profile: 'summary',
    };

    const res = await schematicsService.getAgentData(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateAgentData()', async () => {
    // Request models needed by this operation.

    // AgentInfrastructure
    const agentInfrastructureModel = {
      infra_type: 'ibm_kubernetes',
      cluster_id: 'testString',
      cluster_resource_group: 'testString',
      cos_instance_name: 'testString',
      cos_bucket_name: 'testString',
      cos_bucket_region: 'testString',
    };

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      cloud_data_type: 'testString',
      default_value: 'testString',
      link_status: 'normal',
      secure: true,
      immutable: true,
      hidden: true,
      required: true,
      options: ['testString'],
      min_value: 38,
      max_value: 38,
      min_length: 38,
      max_length: 38,
      matches: 'testString',
      position: 38,
      group_by: 'testString',
      source: 'testString',
    };

    // VariableData
    const variableDataModel = {
      name: 'testString',
      value: 'testString',
      use_default: true,
      metadata: variableMetadataModel,
    };

    // AgentUserState
    const agentUserStateModel = {
      state: 'enable',
    };

    // AgentKPIData
    const agentKpiDataModel = {
      availability_indicator: 'available',
      lifecycle_indicator: 'consistent',
      percent_usage_indicator: 'testString',
      application_indicators: ['testString'],
      infra_indicators: ['testString'],
    };

    const params = {
      agentId: 'testString',
      name: 'MyDevAgent',
      resourceGroup: 'Default',
      version: 'v1.0.0',
      schematicsLocation: 'us-south',
      agentLocation: 'us-south',
      agentInfrastructure: agentInfrastructureModel,
      description: 'Create Agent',
      tags: ['testString'],
      agentInputs: [variableDataModel],
      userState: agentUserStateModel,
      agentKpi: agentKpiDataModel,
    };

    const res = await schematicsService.updateAgentData(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getPrsAgentJob()', async () => {
    const params = {
      agentId: 'testString',
    };

    const res = await schematicsService.getPrsAgentJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('prsAgentJob()', async () => {
    const params = {
      agentId: 'testString',
      force: true,
    };

    const res = await schematicsService.prsAgentJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('getHealthCheckAgentJob()', async () => {
    const params = {
      agentId: 'testString',
    };

    const res = await schematicsService.getHealthCheckAgentJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('healthCheckAgentJob()', async () => {
    const params = {
      agentId: 'testString',
      force: true,
    };

    const res = await schematicsService.healthCheckAgentJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('getDeployAgentJob()', async () => {
    const params = {
      agentId: 'testString',
    };

    const res = await schematicsService.getDeployAgentJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('deployAgentJob()', async () => {
    const params = {
      agentId: 'testString',
      force: true,
    };

    const res = await schematicsService.deployAgentJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('getKmsSettings()', async () => {
    const params = {
      location: 'testString',
    };

    const res = await schematicsService.getKmsSettings(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('updateKmsSettings()', async () => {
    // Request models needed by this operation.

    // KMSSettingsPrimaryCrk
    const kmsSettingsPrimaryCrkModel = {
      kms_name: 'testString',
      kms_private_endpoint: 'testString',
      key_crn: 'testString',
    };

    // KMSSettingsSecondaryCrk
    const kmsSettingsSecondaryCrkModel = {
      kms_name: 'testString',
      kms_private_endpoint: 'testString',
      key_crn: 'testString',
    };

    const params = {
      location: 'testString',
      encryptionScheme: 'testString',
      resourceGroup: 'testString',
      primaryCrk: kmsSettingsPrimaryCrkModel,
      secondaryCrk: kmsSettingsSecondaryCrkModel,
    };

    const res = await schematicsService.updateKmsSettings(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listKms()', async () => {
    const params = {
      encryptionScheme: 'testString',
      location: 'testString',
      resourceGroup: 'testString',
      limit: 100,
      sort: 'testString',
    };

    const res = await schematicsService.listKms(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('deleteWorkspace()', async () => {
    const params = {
      refreshToken: 'testString',
      wId: 'testString',
      destroyResources: 'testString',
    };

    const res = await schematicsService.deleteWorkspace(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('deleteAction()', async () => {
    const params = {
      actionId: 'testString',
      force: true,
      propagate: true,
    };

    const res = await schematicsService.deleteAction(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteWorkspaceActivity()', async () => {
    const params = {
      wId: 'testString',
      activityId: 'testString',
    };

    const res = await schematicsService.deleteWorkspaceActivity(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(202);
    expect(res.result).toBeDefined();
  });

  test('deleteJob()', async () => {
    const params = {
      jobId: 'testString',
      refreshToken: 'testString',
      force: true,
      propagate: true,
    };

    const res = await schematicsService.deleteJob(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteBlueprint()', async () => {
    const params = {
      blueprintId: 'testString',
      profile: 'ids',
      destroy: 0,
    };

    const res = await schematicsService.deleteBlueprint(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteInventory()', async () => {
    const params = {
      inventoryId: 'testString',
      force: true,
      propagate: true,
    };

    const res = await schematicsService.deleteInventory(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteResourcesQuery()', async () => {
    const params = {
      queryId: 'testString',
      force: true,
      propagate: true,
    };

    const res = await schematicsService.deleteResourcesQuery(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteAgent()', async () => {
    const params = {
      agentId: 'testString',
    };

    const res = await schematicsService.deleteAgent(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });

  test('deleteAgentData()', async () => {
    const params = {
      agentId: 'testString',
    };

    const res = await schematicsService.deleteAgentData(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });
});
