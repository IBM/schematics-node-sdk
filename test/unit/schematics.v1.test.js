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

// need to import the whole package to mock getAuthenticatorFromEnvironment
const core = require('ibm-cloud-sdk-core');
const { NoAuthAuthenticator, unitTestUtils } = core;

const SchematicsV1 = require('../../dist/schematics/v1');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkUserHeader,
  checkForSuccessfulExecution,
} = unitTestUtils;

const service = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://schematics-dev.containers.appdomain.cloud',
};

const schematicsService = new SchematicsV1(service);

// dont actually create a request
const createRequestMock = jest.spyOn(schematicsService, 'createRequest');
createRequestMock.mockImplementation(() => Promise.resolve());

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(core, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

afterEach(() => {
  createRequestMock.mockClear();
  getAuthenticatorMock.mockClear();
});

describe('SchematicsV1', () => {
  describe('the newInstance method', () => {
    test('should use defaults when options not provided', () => {
      const testInstance = SchematicsV1.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(SchematicsV1.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(SchematicsV1.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(SchematicsV1);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = SchematicsV1.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(SchematicsV1);
    });
  });
  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new SchematicsV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new SchematicsV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(SchematicsV1.DEFAULT_SERVICE_URL);
    });
  });
  describe('listSchematicsLocation', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listSchematicsLocation
        const params = {};

        const listSchematicsLocationResult = schematicsService.listSchematicsLocation(params);

        // all methods should return a Promise
        expectToBePromise(listSchematicsLocationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/locations', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listSchematicsLocation(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listSchematicsLocation({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('listResourceGroup', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listResourceGroup
        const params = {};

        const listResourceGroupResult = schematicsService.listResourceGroup(params);

        // all methods should return a Promise
        expectToBePromise(listResourceGroupResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/resource_groups', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listResourceGroup(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listResourceGroup({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('getSchematicsVersion', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getSchematicsVersion
        const params = {};

        const getSchematicsVersionResult = schematicsService.getSchematicsVersion(params);

        // all methods should return a Promise
        expectToBePromise(getSchematicsVersionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/version', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getSchematicsVersion(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.getSchematicsVersion({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('listWorkspaces', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listWorkspaces
        const offset = 0;
        const limit = 1;
        const params = {
          offset: offset,
          limit: limit,
        };

        const listWorkspacesResult = schematicsService.listWorkspaces(params);

        // all methods should return a Promise
        expectToBePromise(listWorkspacesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['offset']).toEqual(offset);
        expect(options.qs['limit']).toEqual(limit);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listWorkspaces(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listWorkspaces({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('createWorkspace', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation createWorkspace
        const appliedShareddataIds = ['testString'];
        const catalogRef = catalogRefModel;
        const description = 'testString';
        const location = 'testString';
        const name = 'testString';
        const resourceGroup = 'testString';
        const sharedData = sharedTargetDataModel;
        const tags = ['testString'];
        const templateData = [templateSourceDataRequestModel];
        const templateRef = 'testString';
        const templateRepo = templateRepoRequestModel;
        const type = ['testString'];
        const workspaceStatus = workspaceStatusRequestModel;
        const xGithubToken = 'testString';
        const params = {
          appliedShareddataIds: appliedShareddataIds,
          catalogRef: catalogRef,
          description: description,
          location: location,
          name: name,
          resourceGroup: resourceGroup,
          sharedData: sharedData,
          tags: tags,
          templateData: templateData,
          templateRef: templateRef,
          templateRepo: templateRepo,
          type: type,
          workspaceStatus: workspaceStatus,
          xGithubToken: xGithubToken,
        };

        const createWorkspaceResult = schematicsService.createWorkspace(params);

        // all methods should return a Promise
        expectToBePromise(createWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(options.body['applied_shareddata_ids']).toEqual(appliedShareddataIds);
        expect(options.body['catalog_ref']).toEqual(catalogRef);
        expect(options.body['description']).toEqual(description);
        expect(options.body['location']).toEqual(location);
        expect(options.body['name']).toEqual(name);
        expect(options.body['resource_group']).toEqual(resourceGroup);
        expect(options.body['shared_data']).toEqual(sharedData);
        expect(options.body['tags']).toEqual(tags);
        expect(options.body['template_data']).toEqual(templateData);
        expect(options.body['template_ref']).toEqual(templateRef);
        expect(options.body['template_repo']).toEqual(templateRepo);
        expect(options.body['type']).toEqual(type);
        expect(options.body['workspace_status']).toEqual(workspaceStatus);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createWorkspace(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.createWorkspace({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('getWorkspace', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspace
        const wId = 'testString';
        const params = {
          wId: wId,
        };

        const getWorkspaceResult = schematicsService.getWorkspace(params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspace(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspacePromise = schematicsService.getWorkspace();
        expectToBePromise(getWorkspacePromise);

        getWorkspacePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('replaceWorkspace', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation replaceWorkspace
        const wId = 'testString';
        const catalogRef = catalogRefModel;
        const description = 'testString';
        const name = 'testString';
        const sharedData = sharedTargetDataModel;
        const tags = ['testString'];
        const templateData = [templateSourceDataRequestModel];
        const templateRepo = templateRepoUpdateRequestModel;
        const type = ['testString'];
        const workspaceStatus = workspaceStatusUpdateRequestModel;
        const workspaceStatusMsg = workspaceStatusMessageModel;
        const params = {
          wId: wId,
          catalogRef: catalogRef,
          description: description,
          name: name,
          sharedData: sharedData,
          tags: tags,
          templateData: templateData,
          templateRepo: templateRepo,
          type: type,
          workspaceStatus: workspaceStatus,
          workspaceStatusMsg: workspaceStatusMsg,
        };

        const replaceWorkspaceResult = schematicsService.replaceWorkspace(params);

        // all methods should return a Promise
        expectToBePromise(replaceWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['catalog_ref']).toEqual(catalogRef);
        expect(options.body['description']).toEqual(description);
        expect(options.body['name']).toEqual(name);
        expect(options.body['shared_data']).toEqual(sharedData);
        expect(options.body['tags']).toEqual(tags);
        expect(options.body['template_data']).toEqual(templateData);
        expect(options.body['template_repo']).toEqual(templateRepo);
        expect(options.body['type']).toEqual(type);
        expect(options.body['workspace_status']).toEqual(workspaceStatus);
        expect(options.body['workspace_status_msg']).toEqual(workspaceStatusMsg);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceWorkspace(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.replaceWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const replaceWorkspacePromise = schematicsService.replaceWorkspace();
        expectToBePromise(replaceWorkspacePromise);

        replaceWorkspacePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteWorkspace', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteWorkspace
        const wId = 'testString';
        const refreshToken = 'testString';
        const destroyResources = 'testString';
        const params = {
          wId: wId,
          refreshToken: refreshToken,
          destroyResources: destroyResources,
        };

        const deleteWorkspaceResult = schematicsService.deleteWorkspace(params);

        // all methods should return a Promise
        expectToBePromise(deleteWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(options.qs['destroy_resources']).toEqual(destroyResources);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteWorkspace(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.deleteWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteWorkspacePromise = schematicsService.deleteWorkspace();
        expectToBePromise(deleteWorkspacePromise);

        deleteWorkspacePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('updateWorkspace', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation updateWorkspace
        const wId = 'testString';
        const catalogRef = catalogRefModel;
        const description = 'testString';
        const name = 'testString';
        const sharedData = sharedTargetDataModel;
        const tags = ['testString'];
        const templateData = [templateSourceDataRequestModel];
        const templateRepo = templateRepoUpdateRequestModel;
        const type = ['testString'];
        const workspaceStatus = workspaceStatusUpdateRequestModel;
        const workspaceStatusMsg = workspaceStatusMessageModel;
        const params = {
          wId: wId,
          catalogRef: catalogRef,
          description: description,
          name: name,
          sharedData: sharedData,
          tags: tags,
          templateData: templateData,
          templateRepo: templateRepo,
          type: type,
          workspaceStatus: workspaceStatus,
          workspaceStatusMsg: workspaceStatusMsg,
        };

        const updateWorkspaceResult = schematicsService.updateWorkspace(params);

        // all methods should return a Promise
        expectToBePromise(updateWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['catalog_ref']).toEqual(catalogRef);
        expect(options.body['description']).toEqual(description);
        expect(options.body['name']).toEqual(name);
        expect(options.body['shared_data']).toEqual(sharedData);
        expect(options.body['tags']).toEqual(tags);
        expect(options.body['template_data']).toEqual(templateData);
        expect(options.body['template_repo']).toEqual(templateRepo);
        expect(options.body['type']).toEqual(type);
        expect(options.body['workspace_status']).toEqual(workspaceStatus);
        expect(options.body['workspace_status_msg']).toEqual(workspaceStatusMsg);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateWorkspace(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.updateWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const updateWorkspacePromise = schematicsService.updateWorkspace();
        expectToBePromise(updateWorkspacePromise);

        updateWorkspacePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('uploadTemplateTar', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation uploadTemplateTar
        const wId = 'testString';
        const tId = 'testString';
        const file = Buffer.from('This is a mock file.');
        const fileContentType = 'testString';
        const params = {
          wId: wId,
          tId: tId,
          file: file,
          fileContentType: fileContentType,
        };

        const uploadTemplateTarResult = schematicsService.uploadTemplateTar(params);

        // all methods should return a Promise
        expectToBePromise(uploadTemplateTarResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/workspaces/{w_id}/template_data/{t_id}/template_repo_upload',
          'PUT'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.formData['file'].data).toEqual(file);
        expect(options.formData['file'].contentType).toEqual(fileContentType);
        expect(options.path['w_id']).toEqual(wId);
        expect(options.path['t_id']).toEqual(tId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.uploadTemplateTar(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.uploadTemplateTar({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const uploadTemplateTarPromise = schematicsService.uploadTemplateTar();
        expectToBePromise(uploadTemplateTarPromise);

        uploadTemplateTarPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getWorkspaceReadme', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspaceReadme
        const wId = 'testString';
        const ref = 'testString';
        const formatted = 'markdown';
        const params = {
          wId: wId,
          ref: ref,
          formatted: formatted,
        };

        const getWorkspaceReadmeResult = schematicsService.getWorkspaceReadme(params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceReadmeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/templates/readme', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['ref']).toEqual(ref);
        expect(options.qs['formatted']).toEqual(formatted);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceReadme(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspaceReadme({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspaceReadmePromise = schematicsService.getWorkspaceReadme();
        expectToBePromise(getWorkspaceReadmePromise);

        getWorkspaceReadmePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listWorkspaceActivities', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listWorkspaceActivities
        const wId = 'testString';
        const offset = 0;
        const limit = 1;
        const params = {
          wId: wId,
          offset: offset,
          limit: limit,
        };

        const listWorkspaceActivitiesResult = schematicsService.listWorkspaceActivities(params);

        // all methods should return a Promise
        expectToBePromise(listWorkspaceActivitiesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/actions', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['offset']).toEqual(offset);
        expect(options.qs['limit']).toEqual(limit);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listWorkspaceActivities(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.listWorkspaceActivities({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listWorkspaceActivitiesPromise = schematicsService.listWorkspaceActivities();
        expectToBePromise(listWorkspaceActivitiesPromise);

        listWorkspaceActivitiesPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getWorkspaceActivity', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspaceActivity
        const wId = 'testString';
        const activityId = 'testString';
        const params = {
          wId: wId,
          activityId: activityId,
        };

        const getWorkspaceActivityResult = schematicsService.getWorkspaceActivity(params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceActivityResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/actions/{activity_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
        expect(options.path['activity_id']).toEqual(activityId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceActivity(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspaceActivity({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspaceActivityPromise = schematicsService.getWorkspaceActivity();
        expectToBePromise(getWorkspaceActivityPromise);

        getWorkspaceActivityPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteWorkspaceActivity', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteWorkspaceActivity
        const wId = 'testString';
        const activityId = 'testString';
        const params = {
          wId: wId,
          activityId: activityId,
        };

        const deleteWorkspaceActivityResult = schematicsService.deleteWorkspaceActivity(params);

        // all methods should return a Promise
        expectToBePromise(deleteWorkspaceActivityResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/actions/{activity_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
        expect(options.path['activity_id']).toEqual(activityId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteWorkspaceActivity(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.deleteWorkspaceActivity({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteWorkspaceActivityPromise = schematicsService.deleteWorkspaceActivity();
        expectToBePromise(deleteWorkspaceActivityPromise);

        deleteWorkspaceActivityPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('applyWorkspaceCommand', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // WorkspaceActivityOptionsTemplate
      const workspaceActivityOptionsTemplateModel = {
        target: ['testString'],
        tf_vars: ['testString'],
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation applyWorkspaceCommand
        const wId = 'testString';
        const refreshToken = 'testString';
        const actionOptions = workspaceActivityOptionsTemplateModel;
        const params = {
          wId: wId,
          refreshToken: refreshToken,
          actionOptions: actionOptions,
        };

        const applyWorkspaceCommandResult = schematicsService.applyWorkspaceCommand(params);

        // all methods should return a Promise
        expectToBePromise(applyWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/apply', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(options.body['action_options']).toEqual(actionOptions);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.applyWorkspaceCommand(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.applyWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const applyWorkspaceCommandPromise = schematicsService.applyWorkspaceCommand();
        expectToBePromise(applyWorkspaceCommandPromise);

        applyWorkspaceCommandPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('destroyWorkspaceCommand', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // WorkspaceActivityOptionsTemplate
      const workspaceActivityOptionsTemplateModel = {
        target: ['testString'],
        tf_vars: ['testString'],
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation destroyWorkspaceCommand
        const wId = 'testString';
        const refreshToken = 'testString';
        const actionOptions = workspaceActivityOptionsTemplateModel;
        const params = {
          wId: wId,
          refreshToken: refreshToken,
          actionOptions: actionOptions,
        };

        const destroyWorkspaceCommandResult = schematicsService.destroyWorkspaceCommand(params);

        // all methods should return a Promise
        expectToBePromise(destroyWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/destroy', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(options.body['action_options']).toEqual(actionOptions);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.destroyWorkspaceCommand(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.destroyWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const destroyWorkspaceCommandPromise = schematicsService.destroyWorkspaceCommand();
        expectToBePromise(destroyWorkspaceCommandPromise);

        destroyWorkspaceCommandPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('planWorkspaceCommand', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation planWorkspaceCommand
        const wId = 'testString';
        const refreshToken = 'testString';
        const params = {
          wId: wId,
          refreshToken: refreshToken,
        };

        const planWorkspaceCommandResult = schematicsService.planWorkspaceCommand(params);

        // all methods should return a Promise
        expectToBePromise(planWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/plan', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.planWorkspaceCommand(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.planWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const planWorkspaceCommandPromise = schematicsService.planWorkspaceCommand();
        expectToBePromise(planWorkspaceCommandPromise);

        planWorkspaceCommandPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('refreshWorkspaceCommand', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation refreshWorkspaceCommand
        const wId = 'testString';
        const refreshToken = 'testString';
        const params = {
          wId: wId,
          refreshToken: refreshToken,
        };

        const refreshWorkspaceCommandResult = schematicsService.refreshWorkspaceCommand(params);

        // all methods should return a Promise
        expectToBePromise(refreshWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/refresh', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.refreshWorkspaceCommand(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.refreshWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const refreshWorkspaceCommandPromise = schematicsService.refreshWorkspaceCommand();
        expectToBePromise(refreshWorkspaceCommandPromise);

        refreshWorkspaceCommandPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getWorkspaceInputs', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspaceInputs
        const wId = 'testString';
        const tId = 'testString';
        const params = {
          wId: wId,
          tId: tId,
        };

        const getWorkspaceInputsResult = schematicsService.getWorkspaceInputs(params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceInputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/template_data/{t_id}/values', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
        expect(options.path['t_id']).toEqual(tId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceInputs(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspaceInputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspaceInputsPromise = schematicsService.getWorkspaceInputs();
        expectToBePromise(getWorkspaceInputsPromise);

        getWorkspaceInputsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('replaceWorkspaceInputs', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation replaceWorkspaceInputs
        const wId = 'testString';
        const tId = 'testString';
        const envValues = [{ foo: 'bar' }];
        const values = 'testString';
        const variablestore = [workspaceVariableRequestModel];
        const params = {
          wId: wId,
          tId: tId,
          envValues: envValues,
          values: values,
          variablestore: variablestore,
        };

        const replaceWorkspaceInputsResult = schematicsService.replaceWorkspaceInputs(params);

        // all methods should return a Promise
        expectToBePromise(replaceWorkspaceInputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/template_data/{t_id}/values', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['env_values']).toEqual(envValues);
        expect(options.body['values']).toEqual(values);
        expect(options.body['variablestore']).toEqual(variablestore);
        expect(options.path['w_id']).toEqual(wId);
        expect(options.path['t_id']).toEqual(tId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceWorkspaceInputs(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.replaceWorkspaceInputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const replaceWorkspaceInputsPromise = schematicsService.replaceWorkspaceInputs();
        expectToBePromise(replaceWorkspaceInputsPromise);

        replaceWorkspaceInputsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getAllWorkspaceInputs', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getAllWorkspaceInputs
        const wId = 'testString';
        const params = {
          wId: wId,
        };

        const getAllWorkspaceInputsResult = schematicsService.getAllWorkspaceInputs(params);

        // all methods should return a Promise
        expectToBePromise(getAllWorkspaceInputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/templates/values', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getAllWorkspaceInputs(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getAllWorkspaceInputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getAllWorkspaceInputsPromise = schematicsService.getAllWorkspaceInputs();
        expectToBePromise(getAllWorkspaceInputsPromise);

        getAllWorkspaceInputsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getWorkspaceInputMetadata', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspaceInputMetadata
        const wId = 'testString';
        const tId = 'testString';
        const params = {
          wId: wId,
          tId: tId,
        };

        const getWorkspaceInputMetadataResult = schematicsService.getWorkspaceInputMetadata(params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceInputMetadataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/workspaces/{w_id}/template_data/{t_id}/values_metadata',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
        expect(options.path['t_id']).toEqual(tId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceInputMetadata(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspaceInputMetadata({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspaceInputMetadataPromise = schematicsService.getWorkspaceInputMetadata();
        expectToBePromise(getWorkspaceInputMetadataPromise);

        getWorkspaceInputMetadataPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getWorkspaceOutputs', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspaceOutputs
        const wId = 'testString';
        const params = {
          wId: wId,
        };

        const getWorkspaceOutputsResult = schematicsService.getWorkspaceOutputs(params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceOutputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/output_values', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceOutputs(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspaceOutputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspaceOutputsPromise = schematicsService.getWorkspaceOutputs();
        expectToBePromise(getWorkspaceOutputsPromise);

        getWorkspaceOutputsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getWorkspaceResources', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspaceResources
        const wId = 'testString';
        const params = {
          wId: wId,
        };

        const getWorkspaceResourcesResult = schematicsService.getWorkspaceResources(params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceResourcesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/resources', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceResources(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspaceResources({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspaceResourcesPromise = schematicsService.getWorkspaceResources();
        expectToBePromise(getWorkspaceResourcesPromise);

        getWorkspaceResourcesPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getWorkspaceState', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspaceState
        const wId = 'testString';
        const params = {
          wId: wId,
        };

        const getWorkspaceStateResult = schematicsService.getWorkspaceState(params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceStateResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/state_stores', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceState(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspaceState({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspaceStatePromise = schematicsService.getWorkspaceState();
        expectToBePromise(getWorkspaceStatePromise);

        getWorkspaceStatePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getWorkspaceTemplateState', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspaceTemplateState
        const wId = 'testString';
        const tId = 'testString';
        const params = {
          wId: wId,
          tId: tId,
        };

        const getWorkspaceTemplateStateResult = schematicsService.getWorkspaceTemplateState(params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceTemplateStateResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/runtime_data/{t_id}/state_store', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
        expect(options.path['t_id']).toEqual(tId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceTemplateState(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspaceTemplateState({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspaceTemplateStatePromise = schematicsService.getWorkspaceTemplateState();
        expectToBePromise(getWorkspaceTemplateStatePromise);

        getWorkspaceTemplateStatePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getWorkspaceActivityLogs', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspaceActivityLogs
        const wId = 'testString';
        const activityId = 'testString';
        const params = {
          wId: wId,
          activityId: activityId,
        };

        const getWorkspaceActivityLogsResult = schematicsService.getWorkspaceActivityLogs(params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceActivityLogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/actions/{activity_id}/logs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
        expect(options.path['activity_id']).toEqual(activityId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceActivityLogs(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspaceActivityLogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspaceActivityLogsPromise = schematicsService.getWorkspaceActivityLogs();
        expectToBePromise(getWorkspaceActivityLogsPromise);

        getWorkspaceActivityLogsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getWorkspaceLogUrls', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspaceLogUrls
        const wId = 'testString';
        const params = {
          wId: wId,
        };

        const getWorkspaceLogUrlsResult = schematicsService.getWorkspaceLogUrls(params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceLogUrlsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/log_stores', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['w_id']).toEqual(wId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceLogUrls(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspaceLogUrls({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspaceLogUrlsPromise = schematicsService.getWorkspaceLogUrls();
        expectToBePromise(getWorkspaceLogUrlsPromise);

        getWorkspaceLogUrlsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getTemplateLogs', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getTemplateLogs
        const wId = 'testString';
        const tId = 'testString';
        const logTfCmd = true;
        const logTfPrefix = true;
        const logTfNullResource = true;
        const logTfAnsible = true;
        const params = {
          wId: wId,
          tId: tId,
          logTfCmd: logTfCmd,
          logTfPrefix: logTfPrefix,
          logTfNullResource: logTfNullResource,
          logTfAnsible: logTfAnsible,
        };

        const getTemplateLogsResult = schematicsService.getTemplateLogs(params);

        // all methods should return a Promise
        expectToBePromise(getTemplateLogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspaces/{w_id}/runtime_data/{t_id}/log_store', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['log_tf_cmd']).toEqual(logTfCmd);
        expect(options.qs['log_tf_prefix']).toEqual(logTfPrefix);
        expect(options.qs['log_tf_null_resource']).toEqual(logTfNullResource);
        expect(options.qs['log_tf_ansible']).toEqual(logTfAnsible);
        expect(options.path['w_id']).toEqual(wId);
        expect(options.path['t_id']).toEqual(tId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getTemplateLogs(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getTemplateLogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getTemplateLogsPromise = schematicsService.getTemplateLogs();
        expectToBePromise(getTemplateLogsPromise);

        getTemplateLogsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getTemplateActivityLog', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getTemplateActivityLog
        const wId = 'testString';
        const tId = 'testString';
        const activityId = 'testString';
        const logTfCmd = true;
        const logTfPrefix = true;
        const logTfNullResource = true;
        const logTfAnsible = true;
        const params = {
          wId: wId,
          tId: tId,
          activityId: activityId,
          logTfCmd: logTfCmd,
          logTfPrefix: logTfPrefix,
          logTfNullResource: logTfNullResource,
          logTfAnsible: logTfAnsible,
        };

        const getTemplateActivityLogResult = schematicsService.getTemplateActivityLog(params);

        // all methods should return a Promise
        expectToBePromise(getTemplateActivityLogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v1/workspaces/{w_id}/runtime_data/{t_id}/log_store/actions/{activity_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['log_tf_cmd']).toEqual(logTfCmd);
        expect(options.qs['log_tf_prefix']).toEqual(logTfPrefix);
        expect(options.qs['log_tf_null_resource']).toEqual(logTfNullResource);
        expect(options.qs['log_tf_ansible']).toEqual(logTfAnsible);
        expect(options.path['w_id']).toEqual(wId);
        expect(options.path['t_id']).toEqual(tId);
        expect(options.path['activity_id']).toEqual(activityId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wId,
          tId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getTemplateActivityLog(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getTemplateActivityLog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getTemplateActivityLogPromise = schematicsService.getTemplateActivityLog();
        expectToBePromise(getTemplateActivityLogPromise);

        getTemplateActivityLogPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('createWorkspaceDeletionJob', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation createWorkspaceDeletionJob
        const refreshToken = 'testString';
        const newDeleteWorkspaces = true;
        const newDestroyResources = true;
        const newJob = 'testString';
        const newVersion = 'testString';
        const newWorkspaces = ['testString'];
        const destroyResources = 'testString';
        const params = {
          refreshToken: refreshToken,
          newDeleteWorkspaces: newDeleteWorkspaces,
          newDestroyResources: newDestroyResources,
          newJob: newJob,
          newVersion: newVersion,
          newWorkspaces: newWorkspaces,
          destroyResources: destroyResources,
        };

        const createWorkspaceDeletionJobResult = schematicsService.createWorkspaceDeletionJob(
          params
        );

        // all methods should return a Promise
        expectToBePromise(createWorkspaceDeletionJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspace_jobs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(options.body['delete_workspaces']).toEqual(newDeleteWorkspaces);
        expect(options.body['destroy_resources']).toEqual(newDestroyResources);
        expect(options.body['job']).toEqual(newJob);
        expect(options.body['version']).toEqual(newVersion);
        expect(options.body['workspaces']).toEqual(newWorkspaces);
        expect(options.qs['destroy_resources']).toEqual(destroyResources);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createWorkspaceDeletionJob(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.createWorkspaceDeletionJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const createWorkspaceDeletionJobPromise = schematicsService.createWorkspaceDeletionJob();
        expectToBePromise(createWorkspaceDeletionJobPromise);

        createWorkspaceDeletionJobPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getWorkspaceDeletionJobStatus', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getWorkspaceDeletionJobStatus
        const wjId = 'testString';
        const params = {
          wjId: wjId,
        };

        const getWorkspaceDeletionJobStatusResult = schematicsService.getWorkspaceDeletionJobStatus(
          params
        );

        // all methods should return a Promise
        expectToBePromise(getWorkspaceDeletionJobStatusResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/workspace_jobs/{wj_id}/status', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['wj_id']).toEqual(wjId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wjId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          wjId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceDeletionJobStatus(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getWorkspaceDeletionJobStatus({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getWorkspaceDeletionJobStatusPromise = schematicsService.getWorkspaceDeletionJobStatus();
        expectToBePromise(getWorkspaceDeletionJobStatusPromise);

        getWorkspaceDeletionJobStatusPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('createAction', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation createAction
        const name = 'Stop Action';
        const description = 'This Action can be used to Stop the targets';
        const location = 'us_south';
        const resourceGroup = 'testString';
        const tags = ['testString'];
        const userState = userStateModel;
        const sourceReadmeUrl = 'testString';
        const source = externalSourceModel;
        const sourceType = 'local';
        const commandParameter = 'testString';
        const bastion = targetResourcesetModel;
        const targets = [targetResourcesetModel];
        const inputs = [variableDataModel];
        const outputs = [variableDataModel];
        const settings = [variableDataModel];
        const triggerRecordId = 'testString';
        const state = actionStateModel;
        const sysLock = systemLockModel;
        const xGithubToken = 'testString';
        const params = {
          name: name,
          description: description,
          location: location,
          resourceGroup: resourceGroup,
          tags: tags,
          userState: userState,
          sourceReadmeUrl: sourceReadmeUrl,
          source: source,
          sourceType: sourceType,
          commandParameter: commandParameter,
          bastion: bastion,
          targets: targets,
          inputs: inputs,
          outputs: outputs,
          settings: settings,
          triggerRecordId: triggerRecordId,
          state: state,
          sysLock: sysLock,
          xGithubToken: xGithubToken,
        };

        const createActionResult = schematicsService.createAction(params);

        // all methods should return a Promise
        expectToBePromise(createActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/actions', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(options.body['name']).toEqual(name);
        expect(options.body['description']).toEqual(description);
        expect(options.body['location']).toEqual(location);
        expect(options.body['resource_group']).toEqual(resourceGroup);
        expect(options.body['tags']).toEqual(tags);
        expect(options.body['user_state']).toEqual(userState);
        expect(options.body['source_readme_url']).toEqual(sourceReadmeUrl);
        expect(options.body['source']).toEqual(source);
        expect(options.body['source_type']).toEqual(sourceType);
        expect(options.body['command_parameter']).toEqual(commandParameter);
        expect(options.body['bastion']).toEqual(bastion);
        expect(options.body['targets']).toEqual(targets);
        expect(options.body['inputs']).toEqual(inputs);
        expect(options.body['outputs']).toEqual(outputs);
        expect(options.body['settings']).toEqual(settings);
        expect(options.body['trigger_record_id']).toEqual(triggerRecordId);
        expect(options.body['state']).toEqual(state);
        expect(options.body['sys_lock']).toEqual(sysLock);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createAction(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.createAction({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('listActions', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listActions
        const offset = 0;
        const limit = 1;
        const sort = 'testString';
        const profile = 'ids';
        const params = {
          offset: offset,
          limit: limit,
          sort: sort,
          profile: profile,
        };

        const listActionsResult = schematicsService.listActions(params);

        // all methods should return a Promise
        expectToBePromise(listActionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/actions', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['offset']).toEqual(offset);
        expect(options.qs['limit']).toEqual(limit);
        expect(options.qs['sort']).toEqual(sort);
        expect(options.qs['profile']).toEqual(profile);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listActions(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listActions({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('getAction', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getAction
        const actionId = 'testString';
        const profile = 'summary';
        const params = {
          actionId: actionId,
          profile: profile,
        };

        const getActionResult = schematicsService.getAction(params);

        // all methods should return a Promise
        expectToBePromise(getActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/actions/{action_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['profile']).toEqual(profile);
        expect(options.path['action_id']).toEqual(actionId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const actionId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          actionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getAction(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getAction({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getActionPromise = schematicsService.getAction();
        expectToBePromise(getActionPromise);

        getActionPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteAction', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteAction
        const actionId = 'testString';
        const force = true;
        const propagate = true;
        const params = {
          actionId: actionId,
          force: force,
          propagate: propagate,
        };

        const deleteActionResult = schematicsService.deleteAction(params);

        // all methods should return a Promise
        expectToBePromise(deleteActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/actions/{action_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'force', force);
        checkUserHeader(createRequestMock, 'propagate', propagate);
        expect(options.path['action_id']).toEqual(actionId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const actionId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          actionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteAction(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.deleteAction({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteActionPromise = schematicsService.deleteAction();
        expectToBePromise(deleteActionPromise);

        deleteActionPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('updateAction', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation updateAction
        const actionId = 'testString';
        const name = 'Stop Action';
        const description = 'This Action can be used to Stop the targets';
        const location = 'us_south';
        const resourceGroup = 'testString';
        const tags = ['testString'];
        const userState = userStateModel;
        const sourceReadmeUrl = 'testString';
        const source = externalSourceModel;
        const sourceType = 'local';
        const commandParameter = 'testString';
        const bastion = targetResourcesetModel;
        const targets = [targetResourcesetModel];
        const inputs = [variableDataModel];
        const outputs = [variableDataModel];
        const settings = [variableDataModel];
        const triggerRecordId = 'testString';
        const state = actionStateModel;
        const sysLock = systemLockModel;
        const xGithubToken = 'testString';
        const params = {
          actionId: actionId,
          name: name,
          description: description,
          location: location,
          resourceGroup: resourceGroup,
          tags: tags,
          userState: userState,
          sourceReadmeUrl: sourceReadmeUrl,
          source: source,
          sourceType: sourceType,
          commandParameter: commandParameter,
          bastion: bastion,
          targets: targets,
          inputs: inputs,
          outputs: outputs,
          settings: settings,
          triggerRecordId: triggerRecordId,
          state: state,
          sysLock: sysLock,
          xGithubToken: xGithubToken,
        };

        const updateActionResult = schematicsService.updateAction(params);

        // all methods should return a Promise
        expectToBePromise(updateActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/actions/{action_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(options.body['name']).toEqual(name);
        expect(options.body['description']).toEqual(description);
        expect(options.body['location']).toEqual(location);
        expect(options.body['resource_group']).toEqual(resourceGroup);
        expect(options.body['tags']).toEqual(tags);
        expect(options.body['user_state']).toEqual(userState);
        expect(options.body['source_readme_url']).toEqual(sourceReadmeUrl);
        expect(options.body['source']).toEqual(source);
        expect(options.body['source_type']).toEqual(sourceType);
        expect(options.body['command_parameter']).toEqual(commandParameter);
        expect(options.body['bastion']).toEqual(bastion);
        expect(options.body['targets']).toEqual(targets);
        expect(options.body['inputs']).toEqual(inputs);
        expect(options.body['outputs']).toEqual(outputs);
        expect(options.body['settings']).toEqual(settings);
        expect(options.body['trigger_record_id']).toEqual(triggerRecordId);
        expect(options.body['state']).toEqual(state);
        expect(options.body['sys_lock']).toEqual(sysLock);
        expect(options.path['action_id']).toEqual(actionId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const actionId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          actionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateAction(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.updateAction({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const updateActionPromise = schematicsService.updateAction();
        expectToBePromise(updateActionPromise);

        updateActionPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('createJob', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation createJob
        const refreshToken = 'testString';
        const commandObject = 'workspace';
        const commandObjectId = 'testString';
        const commandName = 'workspace_init_flow';
        const commandParameter = 'testString';
        const commandOptions = ['testString'];
        const inputs = [variableDataModel];
        const settings = [variableDataModel];
        const tags = ['testString'];
        const location = 'us_south';
        const status = jobStatusModel;
        const data = jobDataModel;
        const bastion = targetResourcesetModel;
        const logSummary = jobLogSummaryModel;
        const params = {
          refreshToken: refreshToken,
          commandObject: commandObject,
          commandObjectId: commandObjectId,
          commandName: commandName,
          commandParameter: commandParameter,
          commandOptions: commandOptions,
          inputs: inputs,
          settings: settings,
          tags: tags,
          location: location,
          status: status,
          data: data,
          bastion: bastion,
          logSummary: logSummary,
        };

        const createJobResult = schematicsService.createJob(params);

        // all methods should return a Promise
        expectToBePromise(createJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/jobs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(options.body['command_object']).toEqual(commandObject);
        expect(options.body['command_object_id']).toEqual(commandObjectId);
        expect(options.body['command_name']).toEqual(commandName);
        expect(options.body['command_parameter']).toEqual(commandParameter);
        expect(options.body['command_options']).toEqual(commandOptions);
        expect(options.body['inputs']).toEqual(inputs);
        expect(options.body['settings']).toEqual(settings);
        expect(options.body['tags']).toEqual(tags);
        expect(options.body['location']).toEqual(location);
        expect(options.body['status']).toEqual(status);
        expect(options.body['data']).toEqual(data);
        expect(options.body['bastion']).toEqual(bastion);
        expect(options.body['log_summary']).toEqual(logSummary);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createJob(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.createJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const createJobPromise = schematicsService.createJob();
        expectToBePromise(createJobPromise);

        createJobPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listJobs', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listJobs
        const offset = 0;
        const limit = 1;
        const sort = 'testString';
        const profile = 'ids';
        const resource = 'workspaces';
        const actionId = 'testString';
        const list = 'all';
        const params = {
          offset: offset,
          limit: limit,
          sort: sort,
          profile: profile,
          resource: resource,
          actionId: actionId,
          list: list,
        };

        const listJobsResult = schematicsService.listJobs(params);

        // all methods should return a Promise
        expectToBePromise(listJobsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/jobs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['offset']).toEqual(offset);
        expect(options.qs['limit']).toEqual(limit);
        expect(options.qs['sort']).toEqual(sort);
        expect(options.qs['profile']).toEqual(profile);
        expect(options.qs['resource']).toEqual(resource);
        expect(options.qs['action_id']).toEqual(actionId);
        expect(options.qs['list']).toEqual(list);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listJobs(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listJobs({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('replaceJob', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation replaceJob
        const jobId = 'testString';
        const refreshToken = 'testString';
        const commandObject = 'workspace';
        const commandObjectId = 'testString';
        const commandName = 'workspace_init_flow';
        const commandParameter = 'testString';
        const commandOptions = ['testString'];
        const inputs = [variableDataModel];
        const settings = [variableDataModel];
        const tags = ['testString'];
        const location = 'us_south';
        const status = jobStatusModel;
        const data = jobDataModel;
        const bastion = targetResourcesetModel;
        const logSummary = jobLogSummaryModel;
        const params = {
          jobId: jobId,
          refreshToken: refreshToken,
          commandObject: commandObject,
          commandObjectId: commandObjectId,
          commandName: commandName,
          commandParameter: commandParameter,
          commandOptions: commandOptions,
          inputs: inputs,
          settings: settings,
          tags: tags,
          location: location,
          status: status,
          data: data,
          bastion: bastion,
          logSummary: logSummary,
        };

        const replaceJobResult = schematicsService.replaceJob(params);

        // all methods should return a Promise
        expectToBePromise(replaceJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/jobs/{job_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(options.body['command_object']).toEqual(commandObject);
        expect(options.body['command_object_id']).toEqual(commandObjectId);
        expect(options.body['command_name']).toEqual(commandName);
        expect(options.body['command_parameter']).toEqual(commandParameter);
        expect(options.body['command_options']).toEqual(commandOptions);
        expect(options.body['inputs']).toEqual(inputs);
        expect(options.body['settings']).toEqual(settings);
        expect(options.body['tags']).toEqual(tags);
        expect(options.body['location']).toEqual(location);
        expect(options.body['status']).toEqual(status);
        expect(options.body['data']).toEqual(data);
        expect(options.body['bastion']).toEqual(bastion);
        expect(options.body['log_summary']).toEqual(logSummary);
        expect(options.path['job_id']).toEqual(jobId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          jobId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceJob(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.replaceJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const replaceJobPromise = schematicsService.replaceJob();
        expectToBePromise(replaceJobPromise);

        replaceJobPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteJob', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteJob
        const jobId = 'testString';
        const refreshToken = 'testString';
        const force = true;
        const propagate = true;
        const params = {
          jobId: jobId,
          refreshToken: refreshToken,
          force: force,
          propagate: propagate,
        };

        const deleteJobResult = schematicsService.deleteJob(params);

        // all methods should return a Promise
        expectToBePromise(deleteJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/jobs/{job_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        checkUserHeader(createRequestMock, 'force', force);
        checkUserHeader(createRequestMock, 'propagate', propagate);
        expect(options.path['job_id']).toEqual(jobId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          jobId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteJob(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.deleteJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteJobPromise = schematicsService.deleteJob();
        expectToBePromise(deleteJobPromise);

        deleteJobPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getJob', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getJob
        const jobId = 'testString';
        const profile = 'summary';
        const params = {
          jobId: jobId,
          profile: profile,
        };

        const getJobResult = schematicsService.getJob(params);

        // all methods should return a Promise
        expectToBePromise(getJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/jobs/{job_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['profile']).toEqual(profile);
        expect(options.path['job_id']).toEqual(jobId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          jobId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getJob(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getJobPromise = schematicsService.getJob();
        expectToBePromise(getJobPromise);

        getJobPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listJobLogs', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listJobLogs
        const jobId = 'testString';
        const params = {
          jobId: jobId,
        };

        const listJobLogsResult = schematicsService.listJobLogs(params);

        // all methods should return a Promise
        expectToBePromise(listJobLogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/jobs/{job_id}/logs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['job_id']).toEqual(jobId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          jobId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listJobLogs(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.listJobLogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listJobLogsPromise = schematicsService.listJobLogs();
        expectToBePromise(listJobLogsPromise);

        listJobLogsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listJobStates', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listJobStates
        const jobId = 'testString';
        const params = {
          jobId: jobId,
        };

        const listJobStatesResult = schematicsService.listJobStates(params);

        // all methods should return a Promise
        expectToBePromise(listJobStatesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/jobs/{job_id}/states', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['job_id']).toEqual(jobId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          jobId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listJobStates(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.listJobStates({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listJobStatesPromise = schematicsService.listJobStates();
        expectToBePromise(listJobStatesPromise);

        listJobStatesPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listSharedDatasets', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listSharedDatasets
        const params = {};

        const listSharedDatasetsResult = schematicsService.listSharedDatasets(params);

        // all methods should return a Promise
        expectToBePromise(listSharedDatasetsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/shared_datasets', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listSharedDatasets(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listSharedDatasets({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('createSharedDataset', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation createSharedDataset
        const autoPropagateChange = true;
        const description = 'testString';
        const effectedWorkspaceIds = ['testString'];
        const resourceGroup = 'testString';
        const sharedDatasetData = [sharedDatasetDataModel];
        const sharedDatasetName = 'testString';
        const sharedDatasetSourceName = 'testString';
        const sharedDatasetType = ['testString'];
        const tags = ['testString'];
        const version = 'testString';
        const params = {
          autoPropagateChange: autoPropagateChange,
          description: description,
          effectedWorkspaceIds: effectedWorkspaceIds,
          resourceGroup: resourceGroup,
          sharedDatasetData: sharedDatasetData,
          sharedDatasetName: sharedDatasetName,
          sharedDatasetSourceName: sharedDatasetSourceName,
          sharedDatasetType: sharedDatasetType,
          tags: tags,
          version: version,
        };

        const createSharedDatasetResult = schematicsService.createSharedDataset(params);

        // all methods should return a Promise
        expectToBePromise(createSharedDatasetResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/shared_datasets', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['auto_propagate_change']).toEqual(autoPropagateChange);
        expect(options.body['description']).toEqual(description);
        expect(options.body['effected_workspace_ids']).toEqual(effectedWorkspaceIds);
        expect(options.body['resource_group']).toEqual(resourceGroup);
        expect(options.body['shared_dataset_data']).toEqual(sharedDatasetData);
        expect(options.body['shared_dataset_name']).toEqual(sharedDatasetName);
        expect(options.body['shared_dataset_source_name']).toEqual(sharedDatasetSourceName);
        expect(options.body['shared_dataset_type']).toEqual(sharedDatasetType);
        expect(options.body['tags']).toEqual(tags);
        expect(options.body['version']).toEqual(version);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createSharedDataset(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.createSharedDataset({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('getSharedDataset', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getSharedDataset
        const sdId = 'testString';
        const params = {
          sdId: sdId,
        };

        const getSharedDatasetResult = schematicsService.getSharedDataset(params);

        // all methods should return a Promise
        expectToBePromise(getSharedDatasetResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/shared_datasets/{sd_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['sd_id']).toEqual(sdId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const sdId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          sdId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getSharedDataset(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getSharedDataset({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getSharedDatasetPromise = schematicsService.getSharedDataset();
        expectToBePromise(getSharedDatasetPromise);

        getSharedDatasetPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('replaceSharedDataset', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation replaceSharedDataset
        const sdId = 'testString';
        const autoPropagateChange = true;
        const description = 'testString';
        const effectedWorkspaceIds = ['testString'];
        const resourceGroup = 'testString';
        const sharedDatasetData = [sharedDatasetDataModel];
        const sharedDatasetName = 'testString';
        const sharedDatasetSourceName = 'testString';
        const sharedDatasetType = ['testString'];
        const tags = ['testString'];
        const version = 'testString';
        const params = {
          sdId: sdId,
          autoPropagateChange: autoPropagateChange,
          description: description,
          effectedWorkspaceIds: effectedWorkspaceIds,
          resourceGroup: resourceGroup,
          sharedDatasetData: sharedDatasetData,
          sharedDatasetName: sharedDatasetName,
          sharedDatasetSourceName: sharedDatasetSourceName,
          sharedDatasetType: sharedDatasetType,
          tags: tags,
          version: version,
        };

        const replaceSharedDatasetResult = schematicsService.replaceSharedDataset(params);

        // all methods should return a Promise
        expectToBePromise(replaceSharedDatasetResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/shared_datasets/{sd_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['auto_propagate_change']).toEqual(autoPropagateChange);
        expect(options.body['description']).toEqual(description);
        expect(options.body['effected_workspace_ids']).toEqual(effectedWorkspaceIds);
        expect(options.body['resource_group']).toEqual(resourceGroup);
        expect(options.body['shared_dataset_data']).toEqual(sharedDatasetData);
        expect(options.body['shared_dataset_name']).toEqual(sharedDatasetName);
        expect(options.body['shared_dataset_source_name']).toEqual(sharedDatasetSourceName);
        expect(options.body['shared_dataset_type']).toEqual(sharedDatasetType);
        expect(options.body['tags']).toEqual(tags);
        expect(options.body['version']).toEqual(version);
        expect(options.path['sd_id']).toEqual(sdId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const sdId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          sdId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceSharedDataset(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.replaceSharedDataset({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const replaceSharedDatasetPromise = schematicsService.replaceSharedDataset();
        expectToBePromise(replaceSharedDatasetPromise);

        replaceSharedDatasetPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteSharedDataset', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteSharedDataset
        const sdId = 'testString';
        const params = {
          sdId: sdId,
        };

        const deleteSharedDatasetResult = schematicsService.deleteSharedDataset(params);

        // all methods should return a Promise
        expectToBePromise(deleteSharedDatasetResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/shared_datasets/{sd_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['sd_id']).toEqual(sdId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const sdId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          sdId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteSharedDataset(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.deleteSharedDataset({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteSharedDatasetPromise = schematicsService.deleteSharedDataset();
        expectToBePromise(deleteSharedDatasetPromise);

        deleteSharedDatasetPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getKmsSettings', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getKmsSettings
        const location = 'testString';
        const params = {
          location: location,
        };

        const getKmsSettingsResult = schematicsService.getKmsSettings(params);

        // all methods should return a Promise
        expectToBePromise(getKmsSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/settings/kms', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['location']).toEqual(location);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const location = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          location,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getKmsSettings(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getKmsSettings({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getKmsSettingsPromise = schematicsService.getKmsSettings();
        expectToBePromise(getKmsSettingsPromise);

        getKmsSettingsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('replaceKmsSettings', () => {
    describe('positive tests', () => {
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

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation replaceKmsSettings
        const location = 'testString';
        const encryptionScheme = 'testString';
        const resourceGroup = 'testString';
        const primaryCrk = kmsSettingsPrimaryCrkModel;
        const secondaryCrk = kmsSettingsSecondaryCrkModel;
        const params = {
          location: location,
          encryptionScheme: encryptionScheme,
          resourceGroup: resourceGroup,
          primaryCrk: primaryCrk,
          secondaryCrk: secondaryCrk,
        };

        const replaceKmsSettingsResult = schematicsService.replaceKmsSettings(params);

        // all methods should return a Promise
        expectToBePromise(replaceKmsSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/settings/kms', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['location']).toEqual(location);
        expect(options.body['encryption_scheme']).toEqual(encryptionScheme);
        expect(options.body['resource_group']).toEqual(resourceGroup);
        expect(options.body['primary_crk']).toEqual(primaryCrk);
        expect(options.body['secondary_crk']).toEqual(secondaryCrk);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceKmsSettings(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.replaceKmsSettings({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('getDiscoveredKmsInstances', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getDiscoveredKmsInstances
        const encryptionScheme = 'testString';
        const location = 'testString';
        const resourceGroup = 'testString';
        const limit = 1;
        const sort = 'testString';
        const params = {
          encryptionScheme: encryptionScheme,
          location: location,
          resourceGroup: resourceGroup,
          limit: limit,
          sort: sort,
        };

        const getDiscoveredKmsInstancesResult = schematicsService.getDiscoveredKmsInstances(params);

        // all methods should return a Promise
        expectToBePromise(getDiscoveredKmsInstancesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/settings/kms_instances', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['encryption_scheme']).toEqual(encryptionScheme);
        expect(options.qs['location']).toEqual(location);
        expect(options.qs['resource_group']).toEqual(resourceGroup);
        expect(options.qs['limit']).toEqual(limit);
        expect(options.qs['sort']).toEqual(sort);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const encryptionScheme = 'testString';
        const location = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          encryptionScheme,
          location,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getDiscoveredKmsInstances(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await schematicsService.getDiscoveredKmsInstances({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getDiscoveredKmsInstancesPromise = schematicsService.getDiscoveredKmsInstances();
        expectToBePromise(getDiscoveredKmsInstancesPromise);

        getDiscoveredKmsInstancesPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
});
