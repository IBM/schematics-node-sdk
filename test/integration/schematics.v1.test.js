/* eslint-disable no-console */
/**
 * (C) Copyright IBM Corp. 2020.
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

'use strict';
const SchematicsV1 = require('../../dist/schematics/v1');
const { readExternalSources } = require('ibm-cloud-sdk-core');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'schematics_v1.env';

const describe = authHelper.prepareTests(configFile);

describe('SchematicsV1_integration', () => {
  const schematicsService = SchematicsV1.newInstance({});

  const config = readExternalSources(SchematicsV1.DEFAULT_SERVICE_NAME);

  expect(schematicsService).not.toBeNull();
  expect(config).not.toBeNull();

  jest.setTimeout(timeout);

  test('listSchematicsLocation()', done => {
    schematicsService
      .listSchematicsLocation({})
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('listResourceGroup()', done => {
    schematicsService
      .listResourceGroup({})
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getSchematicsVersion()', done => {
    schematicsService
      .getSchematicsVersion({})
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('listWorkspaces()', done => {
    const params = {
      offset: 0,
      limit: 1,
    };

    schematicsService
      .listWorkspaces(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('createWorkspace()', done => {
    // Request models needed by this operation.

    // CatalogRef
    const catalogRefModel = {
      dry_run: true,
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
      offering_version: 'testString',
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
      folder: 'testString',
      init_state_file: 'testString',
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
      frozen_at: '2019-01-01T12:00:00',
      frozen_by: 'testString',
      locked: true,
      locked_by: 'testString',
      locked_time: '2019-01-01T12:00:00',
    };

    const params = {
      appliedShareddataIds: ['testString'],
      catalogRef: catalogRefModel,
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
      xGithubToken: 'testString',
    };

    schematicsService
      .createWorkspace(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspace()', done => {
    const params = {
      wId: 'testString',
    };

    schematicsService
      .getWorkspace(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('replaceWorkspace()', done => {
    // Request models needed by this operation.

    // CatalogRef
    const catalogRefModel = {
      dry_run: true,
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
      offering_version: 'testString',
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
      folder: 'testString',
      init_state_file: 'testString',
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
      frozen_at: '2019-01-01T12:00:00',
      frozen_by: 'testString',
      locked: true,
      locked_by: 'testString',
      locked_time: '2019-01-01T12:00:00',
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
      name: 'testString',
      sharedData: sharedTargetDataModel,
      tags: ['testString'],
      templateData: [templateSourceDataRequestModel],
      templateRepo: templateRepoUpdateRequestModel,
      type: ['testString'],
      workspaceStatus: workspaceStatusUpdateRequestModel,
      workspaceStatusMsg: workspaceStatusMessageModel,
    };

    schematicsService
      .replaceWorkspace(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('updateWorkspace()', done => {
    // Request models needed by this operation.

    // CatalogRef
    const catalogRefModel = {
      dry_run: true,
      item_icon_url: 'testString',
      item_id: 'testString',
      item_name: 'testString',
      item_readme_url: 'testString',
      item_url: 'testString',
      launch_url: 'testString',
      offering_version: 'testString',
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
      folder: 'testString',
      init_state_file: 'testString',
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
      frozen_at: '2019-01-01T12:00:00',
      frozen_by: 'testString',
      locked: true,
      locked_by: 'testString',
      locked_time: '2019-01-01T12:00:00',
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
      name: 'testString',
      sharedData: sharedTargetDataModel,
      tags: ['testString'],
      templateData: [templateSourceDataRequestModel],
      templateRepo: templateRepoUpdateRequestModel,
      type: ['testString'],
      workspaceStatus: workspaceStatusUpdateRequestModel,
      workspaceStatusMsg: workspaceStatusMessageModel,
    };

    schematicsService
      .updateWorkspace(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('uploadTemplateTar()', done => {
    const params = {
      wId: 'testString',
      tId: 'testString',
      file: Buffer.from('This is a mock file.'),
      fileContentType: 'testString',
    };

    schematicsService
      .uploadTemplateTar(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspaceReadme()', done => {
    const params = {
      wId: 'testString',
      ref: 'testString',
      formatted: 'markdown',
    };

    schematicsService
      .getWorkspaceReadme(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('listWorkspaceActivities()', done => {
    const params = {
      wId: 'testString',
      offset: 0,
      limit: 1,
    };

    schematicsService
      .listWorkspaceActivities(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspaceActivity()', done => {
    const params = {
      wId: 'testString',
      activityId: 'testString',
    };

    schematicsService
      .getWorkspaceActivity(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('applyWorkspaceCommand()', done => {
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
    };

    schematicsService
      .applyWorkspaceCommand(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('destroyWorkspaceCommand()', done => {
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
    };

    schematicsService
      .destroyWorkspaceCommand(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('planWorkspaceCommand()', done => {
    const params = {
      wId: 'testString',
      refreshToken: 'testString',
    };

    schematicsService
      .planWorkspaceCommand(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('refreshWorkspaceCommand()', done => {
    const params = {
      wId: 'testString',
      refreshToken: 'testString',
    };

    schematicsService
      .refreshWorkspaceCommand(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspaceInputs()', done => {
    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    schematicsService
      .getWorkspaceInputs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('replaceWorkspaceInputs()', done => {
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

    schematicsService
      .replaceWorkspaceInputs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getAllWorkspaceInputs()', done => {
    const params = {
      wId: 'testString',
    };

    schematicsService
      .getAllWorkspaceInputs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspaceInputMetadata()', done => {
    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    schematicsService
      .getWorkspaceInputMetadata(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspaceOutputs()', done => {
    const params = {
      wId: 'testString',
    };

    schematicsService
      .getWorkspaceOutputs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspaceResources()', done => {
    const params = {
      wId: 'testString',
    };

    schematicsService
      .getWorkspaceResources(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspaceState()', done => {
    const params = {
      wId: 'testString',
    };

    schematicsService
      .getWorkspaceState(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspaceTemplateState()', done => {
    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    schematicsService
      .getWorkspaceTemplateState(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspaceActivityLogs()', done => {
    const params = {
      wId: 'testString',
      activityId: 'testString',
    };

    schematicsService
      .getWorkspaceActivityLogs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspaceLogUrls()', done => {
    const params = {
      wId: 'testString',
    };

    schematicsService
      .getWorkspaceLogUrls(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getTemplateLogs()', done => {
    const params = {
      wId: 'testString',
      tId: 'testString',
      logTfCmd: true,
      logTfPrefix: true,
      logTfNullResource: true,
      logTfAnsible: true,
    };

    schematicsService
      .getTemplateLogs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getTemplateActivityLog()', done => {
    const params = {
      wId: 'testString',
      tId: 'testString',
      activityId: 'testString',
      logTfCmd: true,
      logTfPrefix: true,
      logTfNullResource: true,
      logTfAnsible: true,
    };

    schematicsService
      .getTemplateActivityLog(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('createWorkspaceDeletionJob()', done => {
    const params = {
      refreshToken: 'testString',
      newDeleteWorkspaces: true,
      newDestroyResources: true,
      newJob: 'testString',
      newVersion: 'testString',
      newWorkspaces: ['testString'],
      destroyResources: 'testString',
    };

    schematicsService
      .createWorkspaceDeletionJob(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspaceDeletionJobStatus()', done => {
    const params = {
      wjId: 'testString',
    };

    schematicsService
      .getWorkspaceDeletionJobStatus(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('createAction()', done => {
    // Request models needed by this operation.

    // UserState
    const userStateModel = {
      state: 'draft',
      set_by: 'testString',
      set_at: '2019-01-01T12:00:00',
    };

    // ExternalSourceGit
    const externalSourceGitModel = {
      git_repo_url: 'testString',
      git_token: 'testString',
      git_repo_folder: 'testString',
      git_release: 'testString',
      git_branch: 'testString',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'local',
      git: externalSourceGitModel,
    };

    // SystemLock
    const systemLockModel = {
      sys_locked: true,
      sys_locked_by: 'testString',
      sys_locked_at: '2019-01-01T12:00:00',
    };

    // TargetResourceset
    const targetResourcesetModel = {
      name: 'testString',
      type: 'testString',
      description: 'testString',
      resource_query: 'testString',
      credential: 'testString',
      sys_lock: systemLockModel,
    };

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      default_value: 'testString',
      secure: true,
      immutable: true,
      hidden: true,
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
      metadata: variableMetadataModel,
    };

    // ActionState
    const actionStateModel = {
      status_code: 'normal',
      status_message: 'testString',
    };

    const params = {
      name: 'Stop Action',
      description: 'This Action can be used to Stop the targets',
      location: 'us_south',
      resourceGroup: 'testString',
      tags: ['testString'],
      userState: userStateModel,
      sourceReadmeUrl: 'testString',
      source: externalSourceModel,
      sourceType: 'local',
      commandParameter: 'testString',
      bastion: targetResourcesetModel,
      targets: [targetResourcesetModel],
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      triggerRecordId: 'testString',
      state: actionStateModel,
      sysLock: systemLockModel,
      xGithubToken: 'testString',
    };

    schematicsService
      .createAction(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('listActions()', done => {
    const params = {
      offset: 0,
      limit: 1,
      sort: 'testString',
      profile: 'ids',
    };

    schematicsService
      .listActions(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getAction()', done => {
    const params = {
      actionId: 'testString',
      profile: 'summary',
    };

    schematicsService
      .getAction(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('updateAction()', done => {
    // Request models needed by this operation.

    // UserState
    const userStateModel = {
      state: 'draft',
      set_by: 'testString',
      set_at: '2019-01-01T12:00:00',
    };

    // ExternalSourceGit
    const externalSourceGitModel = {
      git_repo_url: 'testString',
      git_token: 'testString',
      git_repo_folder: 'testString',
      git_release: 'testString',
      git_branch: 'testString',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'local',
      git: externalSourceGitModel,
    };

    // SystemLock
    const systemLockModel = {
      sys_locked: true,
      sys_locked_by: 'testString',
      sys_locked_at: '2019-01-01T12:00:00',
    };

    // TargetResourceset
    const targetResourcesetModel = {
      name: 'testString',
      type: 'testString',
      description: 'testString',
      resource_query: 'testString',
      credential: 'testString',
      sys_lock: systemLockModel,
    };

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      default_value: 'testString',
      secure: true,
      immutable: true,
      hidden: true,
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
      metadata: variableMetadataModel,
    };

    // ActionState
    const actionStateModel = {
      status_code: 'normal',
      status_message: 'testString',
    };

    const params = {
      actionId: 'testString',
      name: 'Stop Action',
      description: 'This Action can be used to Stop the targets',
      location: 'us_south',
      resourceGroup: 'testString',
      tags: ['testString'],
      userState: userStateModel,
      sourceReadmeUrl: 'testString',
      source: externalSourceModel,
      sourceType: 'local',
      commandParameter: 'testString',
      bastion: targetResourcesetModel,
      targets: [targetResourcesetModel],
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      triggerRecordId: 'testString',
      state: actionStateModel,
      sysLock: systemLockModel,
      xGithubToken: 'testString',
    };

    schematicsService
      .updateAction(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('createJob()', done => {
    // Request models needed by this operation.

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      default_value: 'testString',
      secure: true,
      immutable: true,
      hidden: true,
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
      metadata: variableMetadataModel,
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
      updated_at: '2019-01-01T12:00:00',
    };

    // JobStatus
    const jobStatusModel = {
      action_job_status: jobStatusActionModel,
    };

    // JobDataAction
    const jobDataActionModel = {
      action_name: 'testString',
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      updated_at: '2019-01-01T12:00:00',
    };

    // JobData
    const jobDataModel = {
      job_type: 'repo_download_job',
      action_job_data: jobDataActionModel,
    };

    // SystemLock
    const systemLockModel = {
      sys_locked: true,
      sys_locked_by: 'testString',
      sys_locked_at: '2019-01-01T12:00:00',
    };

    // TargetResourceset
    const targetResourcesetModel = {
      name: 'testString',
      type: 'testString',
      description: 'testString',
      resource_query: 'testString',
      credential: 'testString',
      sys_lock: systemLockModel,
    };

    // JobLogSummaryRepoDownloadJob
    const jobLogSummaryRepoDownloadJobModel = {};

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

    // JobLogSummary
    const jobLogSummaryModel = {
      job_type: 'repo_download_job',
      repo_download_job: jobLogSummaryRepoDownloadJobModel,
      action_job: jobLogSummaryActionJobModel,
    };

    const params = {
      refreshToken: 'testString',
      commandObject: 'workspace',
      commandObjectId: 'testString',
      commandName: 'workspace_init_flow',
      commandParameter: 'testString',
      commandOptions: ['testString'],
      inputs: [variableDataModel],
      settings: [variableDataModel],
      tags: ['testString'],
      location: 'us_south',
      status: jobStatusModel,
      data: jobDataModel,
      bastion: targetResourcesetModel,
      logSummary: jobLogSummaryModel,
    };

    schematicsService
      .createJob(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('listJobs()', done => {
    const params = {
      offset: 0,
      limit: 1,
      sort: 'testString',
      profile: 'ids',
      resource: 'workspaces',
      actionId: 'testString',
      list: 'all',
    };

    schematicsService
      .listJobs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('replaceJob()', done => {
    // Request models needed by this operation.

    // VariableMetadata
    const variableMetadataModel = {
      type: 'boolean',
      aliases: ['testString'],
      description: 'testString',
      default_value: 'testString',
      secure: true,
      immutable: true,
      hidden: true,
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
      metadata: variableMetadataModel,
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
      updated_at: '2019-01-01T12:00:00',
    };

    // JobStatus
    const jobStatusModel = {
      action_job_status: jobStatusActionModel,
    };

    // JobDataAction
    const jobDataActionModel = {
      action_name: 'testString',
      inputs: [variableDataModel],
      outputs: [variableDataModel],
      settings: [variableDataModel],
      updated_at: '2019-01-01T12:00:00',
    };

    // JobData
    const jobDataModel = {
      job_type: 'repo_download_job',
      action_job_data: jobDataActionModel,
    };

    // SystemLock
    const systemLockModel = {
      sys_locked: true,
      sys_locked_by: 'testString',
      sys_locked_at: '2019-01-01T12:00:00',
    };

    // TargetResourceset
    const targetResourcesetModel = {
      name: 'testString',
      type: 'testString',
      description: 'testString',
      resource_query: 'testString',
      credential: 'testString',
      sys_lock: systemLockModel,
    };

    // JobLogSummaryRepoDownloadJob
    const jobLogSummaryRepoDownloadJobModel = {};

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

    // JobLogSummary
    const jobLogSummaryModel = {
      job_type: 'repo_download_job',
      repo_download_job: jobLogSummaryRepoDownloadJobModel,
      action_job: jobLogSummaryActionJobModel,
    };

    const params = {
      jobId: 'testString',
      refreshToken: 'testString',
      commandObject: 'workspace',
      commandObjectId: 'testString',
      commandName: 'workspace_init_flow',
      commandParameter: 'testString',
      commandOptions: ['testString'],
      inputs: [variableDataModel],
      settings: [variableDataModel],
      tags: ['testString'],
      location: 'us_south',
      status: jobStatusModel,
      data: jobDataModel,
      bastion: targetResourcesetModel,
      logSummary: jobLogSummaryModel,
    };

    schematicsService
      .replaceJob(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getJob()', done => {
    const params = {
      jobId: 'testString',
      profile: 'summary',
    };

    schematicsService
      .getJob(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('listJobLogs()', done => {
    const params = {
      jobId: 'testString',
    };

    schematicsService
      .listJobLogs(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('listJobStates()', done => {
    const params = {
      jobId: 'testString',
    };

    schematicsService
      .listJobStates(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('listSharedDatasets()', done => {
    schematicsService
      .listSharedDatasets({})
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('createSharedDataset()', done => {
    // Request models needed by this operation.

    // SharedDatasetData
    const sharedDatasetDataModel = {
      default_value: 'testString',
      description: 'testString',
      hidden: true,
      immutable: true,
      matches: 'testString',
      max_value: 'testString',
      max_value_len: 'testString',
      min_value: 'testString',
      min_value_len: 'testString',
      options: ['testString'],
      override_value: 'testString',
      secure: true,
      var_aliases: ['testString'],
      var_name: 'testString',
      var_ref: 'testString',
      var_type: 'testString',
    };

    const params = {
      autoPropagateChange: true,
      description: 'testString',
      effectedWorkspaceIds: ['testString'],
      resourceGroup: 'testString',
      sharedDatasetData: [sharedDatasetDataModel],
      sharedDatasetName: 'testString',
      sharedDatasetSourceName: 'testString',
      sharedDatasetType: ['testString'],
      tags: ['testString'],
      version: 'testString',
    };

    schematicsService
      .createSharedDataset(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getSharedDataset()', done => {
    const params = {
      sdId: 'testString',
    };

    schematicsService
      .getSharedDataset(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('replaceSharedDataset()', done => {
    // Request models needed by this operation.

    // SharedDatasetData
    const sharedDatasetDataModel = {
      default_value: 'testString',
      description: 'testString',
      hidden: true,
      immutable: true,
      matches: 'testString',
      max_value: 'testString',
      max_value_len: 'testString',
      min_value: 'testString',
      min_value_len: 'testString',
      options: ['testString'],
      override_value: 'testString',
      secure: true,
      var_aliases: ['testString'],
      var_name: 'testString',
      var_ref: 'testString',
      var_type: 'testString',
    };

    const params = {
      sdId: 'testString',
      autoPropagateChange: true,
      description: 'testString',
      effectedWorkspaceIds: ['testString'],
      resourceGroup: 'testString',
      sharedDatasetData: [sharedDatasetDataModel],
      sharedDatasetName: 'testString',
      sharedDatasetSourceName: 'testString',
      sharedDatasetType: ['testString'],
      tags: ['testString'],
      version: 'testString',
    };

    schematicsService
      .replaceSharedDataset(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getKmsSettings()', done => {
    const params = {
      location: 'testString',
    };

    schematicsService
      .getKmsSettings(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('replaceKmsSettings()', done => {
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

    schematicsService
      .replaceKmsSettings(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getDiscoveredKmsInstances()', done => {
    const params = {
      encryptionScheme: 'testString',
      location: 'testString',
      resourceGroup: 'testString',
      limit: 1,
      sort: 'testString',
    };

    schematicsService
      .getDiscoveredKmsInstances(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteWorkspaceActivity()', done => {
    const params = {
      wId: 'testString',
      activityId: 'testString',
    };

    schematicsService
      .deleteWorkspaceActivity(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteWorkspace()', done => {
    const params = {
      wId: 'testString',
      refreshToken: 'testString',
      destroyResources: 'testString',
    };

    schematicsService
      .deleteWorkspace(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteSharedDataset()', done => {
    const params = {
      sdId: 'testString',
    };

    schematicsService
      .deleteSharedDataset(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteJob()', done => {
    const params = {
      jobId: 'testString',
      refreshToken: 'testString',
      force: true,
      propagate: true,
    };

    schematicsService
      .deleteJob(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('deleteAction()', done => {
    const params = {
      actionId: 'testString',
      force: true,
      propagate: true,
    };

    schematicsService
      .deleteAction(params)
      .then(res => {
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
});
