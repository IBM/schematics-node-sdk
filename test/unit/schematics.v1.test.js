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

const schematicsServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://schematics.cloud.ibm.com',
};

const schematicsService = new SchematicsV1(schematicsServiceOptions);

let createRequestMock = null;
function mock_createRequest() {
  if (!createRequestMock) {
    createRequestMock = jest.spyOn(schematicsService, 'createRequest');
    createRequestMock.mockImplementation(() => Promise.resolve());
  }
}

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(core, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

describe('SchematicsV1', () => {

  beforeEach(() => {
    mock_createRequest();
  });

  afterEach(() => {
    if (createRequestMock) {
      createRequestMock.mockClear();
    }
    getAuthenticatorMock.mockClear();
  });
  
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
      function __listSchematicsLocationTest() {
        // Construct the params object for operation listSchematicsLocation
        const listSchematicsLocationParams = {};

        const listSchematicsLocationResult = schematicsService.listSchematicsLocation(listSchematicsLocationParams);

        // all methods should return a Promise
        expectToBePromise(listSchematicsLocationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/locations', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listSchematicsLocationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listSchematicsLocationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listSchematicsLocationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listSchematicsLocationParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listSchematicsLocation(listSchematicsLocationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listSchematicsLocation({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('listLocations', () => {
    describe('positive tests', () => {
      function __listLocationsTest() {
        // Construct the params object for operation listLocations
        const listLocationsParams = {};

        const listLocationsResult = schematicsService.listLocations(listLocationsParams);

        // all methods should return a Promise
        expectToBePromise(listLocationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/locations', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listLocationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listLocationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listLocationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listLocationsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listLocations(listLocationsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listLocations({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('listResourceGroup', () => {
    describe('positive tests', () => {
      function __listResourceGroupTest() {
        // Construct the params object for operation listResourceGroup
        const listResourceGroupParams = {};

        const listResourceGroupResult = schematicsService.listResourceGroup(listResourceGroupParams);

        // all methods should return a Promise
        expectToBePromise(listResourceGroupResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/resource_groups', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listResourceGroupTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listResourceGroupTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listResourceGroupTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listResourceGroupParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listResourceGroup(listResourceGroupParams);
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
      function __getSchematicsVersionTest() {
        // Construct the params object for operation getSchematicsVersion
        const getSchematicsVersionParams = {};

        const getSchematicsVersionResult = schematicsService.getSchematicsVersion(getSchematicsVersionParams);

        // all methods should return a Promise
        expectToBePromise(getSchematicsVersionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/version', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSchematicsVersionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getSchematicsVersionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getSchematicsVersionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSchematicsVersionParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getSchematicsVersion(getSchematicsVersionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.getSchematicsVersion({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('processTemplateMetaData', () => {
    describe('positive tests', () => {
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

      function __processTemplateMetaDataTest() {
        // Construct the params object for operation processTemplateMetaData
        const templateType = 'testString';
        const source = externalSourceModel;
        const region = 'testString';
        const sourceType = 'local';
        const xGithubToken = 'testString';
        const processTemplateMetaDataParams = {
          templateType,
          source,
          region,
          sourceType,
          xGithubToken,
        };

        const processTemplateMetaDataResult = schematicsService.processTemplateMetaData(processTemplateMetaDataParams);

        // all methods should return a Promise
        expectToBePromise(processTemplateMetaDataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/template_metadata_processor', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(mockRequestOptions.body.template_type).toEqual(templateType);
        expect(mockRequestOptions.body.source).toEqual(source);
        expect(mockRequestOptions.body.region).toEqual(region);
        expect(mockRequestOptions.body.source_type).toEqual(sourceType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __processTemplateMetaDataTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __processTemplateMetaDataTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __processTemplateMetaDataTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const templateType = 'testString';
        const source = externalSourceModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const processTemplateMetaDataParams = {
          templateType,
          source,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.processTemplateMetaData(processTemplateMetaDataParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.processTemplateMetaData({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.processTemplateMetaData();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listWorkspaces', () => {
    describe('positive tests', () => {
      function __listWorkspacesTest() {
        // Construct the params object for operation listWorkspaces
        const offset = 0;
        const limit = 1;
        const profile = 'ids';
        const listWorkspacesParams = {
          offset,
          limit,
          profile,
        };

        const listWorkspacesResult = schematicsService.listWorkspaces(listWorkspacesParams);

        // all methods should return a Promise
        expectToBePromise(listWorkspacesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listWorkspacesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listWorkspacesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listWorkspacesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listWorkspacesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listWorkspaces(listWorkspacesParams);
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

      function __createWorkspaceTest() {
        // Construct the params object for operation createWorkspace
        const appliedShareddataIds = ['testString'];
        const catalogRef = catalogRefModel;
        const dependencies = dependenciesModel;
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
        const agentId = 'testString';
        const xGithubToken = 'testString';
        const createWorkspaceParams = {
          appliedShareddataIds,
          catalogRef,
          dependencies,
          description,
          location,
          name,
          resourceGroup,
          sharedData,
          tags,
          templateData,
          templateRef,
          templateRepo,
          type,
          workspaceStatus,
          agentId,
          xGithubToken,
        };

        const createWorkspaceResult = schematicsService.createWorkspace(createWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(createWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(mockRequestOptions.body.applied_shareddata_ids).toEqual(appliedShareddataIds);
        expect(mockRequestOptions.body.catalog_ref).toEqual(catalogRef);
        expect(mockRequestOptions.body.dependencies).toEqual(dependencies);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.shared_data).toEqual(sharedData);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.template_data).toEqual(templateData);
        expect(mockRequestOptions.body.template_ref).toEqual(templateRef);
        expect(mockRequestOptions.body.template_repo).toEqual(templateRepo);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.workspace_status).toEqual(workspaceStatus);
        expect(mockRequestOptions.body.agent_id).toEqual(agentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createWorkspaceParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createWorkspace(createWorkspaceParams);
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
      function __getWorkspaceTest() {
        // Construct the params object for operation getWorkspace
        const wId = 'testString';
        const getWorkspaceParams = {
          wId,
        };

        const getWorkspaceResult = schematicsService.getWorkspace(getWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspace(getWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceWorkspace', () => {
    describe('positive tests', () => {
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

      function __replaceWorkspaceTest() {
        // Construct the params object for operation replaceWorkspace
        const wId = 'testString';
        const catalogRef = catalogRefModel;
        const description = 'testString';
        const dependencies = dependenciesModel;
        const name = 'testString';
        const sharedData = sharedTargetDataModel;
        const tags = ['testString'];
        const templateData = [templateSourceDataRequestModel];
        const templateRepo = templateRepoUpdateRequestModel;
        const type = ['testString'];
        const workspaceStatus = workspaceStatusUpdateRequestModel;
        const workspaceStatusMsg = workspaceStatusMessageModel;
        const agentId = 'testString';
        const xGithubToken = 'testString';
        const replaceWorkspaceParams = {
          wId,
          catalogRef,
          description,
          dependencies,
          name,
          sharedData,
          tags,
          templateData,
          templateRepo,
          type,
          workspaceStatus,
          workspaceStatusMsg,
          agentId,
          xGithubToken,
        };

        const replaceWorkspaceResult = schematicsService.replaceWorkspace(replaceWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(replaceWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(mockRequestOptions.body.catalog_ref).toEqual(catalogRef);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.dependencies).toEqual(dependencies);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.shared_data).toEqual(sharedData);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.template_data).toEqual(templateData);
        expect(mockRequestOptions.body.template_repo).toEqual(templateRepo);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.workspace_status).toEqual(workspaceStatus);
        expect(mockRequestOptions.body.workspace_status_msg).toEqual(workspaceStatusMsg);
        expect(mockRequestOptions.body.agent_id).toEqual(agentId);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __replaceWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __replaceWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceWorkspaceParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceWorkspace(replaceWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.replaceWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.replaceWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteWorkspace', () => {
    describe('positive tests', () => {
      function __deleteWorkspaceTest() {
        // Construct the params object for operation deleteWorkspace
        const refreshToken = 'testString';
        const wId = 'testString';
        const destroyResources = 'testString';
        const deleteWorkspaceParams = {
          refreshToken,
          wId,
          destroyResources,
        };

        const deleteWorkspaceResult = schematicsService.deleteWorkspace(deleteWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(deleteWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.qs.destroy_resources).toEqual(destroyResources);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const refreshToken = 'testString';
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteWorkspaceParams = {
          refreshToken,
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteWorkspace(deleteWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateWorkspace', () => {
    describe('positive tests', () => {
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

      function __updateWorkspaceTest() {
        // Construct the params object for operation updateWorkspace
        const wId = 'testString';
        const catalogRef = catalogRefModel;
        const description = 'testString';
        const dependencies = dependenciesModel;
        const name = 'testString';
        const sharedData = sharedTargetDataModel;
        const tags = ['testString'];
        const templateData = [templateSourceDataRequestModel];
        const templateRepo = templateRepoUpdateRequestModel;
        const type = ['testString'];
        const workspaceStatus = workspaceStatusUpdateRequestModel;
        const workspaceStatusMsg = workspaceStatusMessageModel;
        const agentId = 'testString';
        const updateWorkspaceParams = {
          wId,
          catalogRef,
          description,
          dependencies,
          name,
          sharedData,
          tags,
          templateData,
          templateRepo,
          type,
          workspaceStatus,
          workspaceStatusMsg,
          agentId,
        };

        const updateWorkspaceResult = schematicsService.updateWorkspace(updateWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(updateWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.catalog_ref).toEqual(catalogRef);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.dependencies).toEqual(dependencies);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.shared_data).toEqual(sharedData);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.template_data).toEqual(templateData);
        expect(mockRequestOptions.body.template_repo).toEqual(templateRepo);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.workspace_status).toEqual(workspaceStatus);
        expect(mockRequestOptions.body.workspace_status_msg).toEqual(workspaceStatusMsg);
        expect(mockRequestOptions.body.agent_id).toEqual(agentId);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __updateWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __updateWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateWorkspaceParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateWorkspace(updateWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.updateWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.updateWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceReadme', () => {
    describe('positive tests', () => {
      function __getWorkspaceReadmeTest() {
        // Construct the params object for operation getWorkspaceReadme
        const wId = 'testString';
        const ref = 'testString';
        const formatted = 'markdown';
        const getWorkspaceReadmeParams = {
          wId,
          ref,
          formatted,
        };

        const getWorkspaceReadmeResult = schematicsService.getWorkspaceReadme(getWorkspaceReadmeParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceReadmeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/templates/readme', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.ref).toEqual(ref);
        expect(mockRequestOptions.qs.formatted).toEqual(formatted);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceReadmeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceReadmeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceReadmeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceReadmeParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceReadme(getWorkspaceReadmeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceReadme({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceReadme();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('templateRepoUpload', () => {
    describe('positive tests', () => {
      function __templateRepoUploadTest() {
        // Construct the params object for operation templateRepoUpload
        const wId = 'testString';
        const tId = 'testString';
        const file = Buffer.from('This is a mock file.');
        const fileContentType = 'testString';
        const templateRepoUploadParams = {
          wId,
          tId,
          file,
          fileContentType,
        };

        const templateRepoUploadResult = schematicsService.templateRepoUpload(templateRepoUploadParams);

        // all methods should return a Promise
        expectToBePromise(templateRepoUploadResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/template_data/{t_id}/template_repo_upload', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.formData.file.data).toEqual(file);
        expect(mockRequestOptions.formData.file.contentType).toEqual(fileContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __templateRepoUploadTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __templateRepoUploadTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __templateRepoUploadTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const templateRepoUploadParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.templateRepoUpload(templateRepoUploadParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.templateRepoUpload({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.templateRepoUpload();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceInputs', () => {
    describe('positive tests', () => {
      function __getWorkspaceInputsTest() {
        // Construct the params object for operation getWorkspaceInputs
        const wId = 'testString';
        const tId = 'testString';
        const getWorkspaceInputsParams = {
          wId,
          tId,
        };

        const getWorkspaceInputsResult = schematicsService.getWorkspaceInputs(getWorkspaceInputsParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceInputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/template_data/{t_id}/values', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceInputsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceInputsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceInputsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceInputsParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceInputs(getWorkspaceInputsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceInputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceInputs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
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

      function __replaceWorkspaceInputsTest() {
        // Construct the params object for operation replaceWorkspaceInputs
        const wId = 'testString';
        const tId = 'testString';
        const envValues = [{ foo: 'bar' }];
        const values = 'testString';
        const variablestore = [workspaceVariableRequestModel];
        const replaceWorkspaceInputsParams = {
          wId,
          tId,
          envValues,
          values,
          variablestore,
        };

        const replaceWorkspaceInputsResult = schematicsService.replaceWorkspaceInputs(replaceWorkspaceInputsParams);

        // all methods should return a Promise
        expectToBePromise(replaceWorkspaceInputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/template_data/{t_id}/values', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.env_values).toEqual(envValues);
        expect(mockRequestOptions.body.values).toEqual(values);
        expect(mockRequestOptions.body.variablestore).toEqual(variablestore);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceWorkspaceInputsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __replaceWorkspaceInputsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __replaceWorkspaceInputsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceWorkspaceInputsParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceWorkspaceInputs(replaceWorkspaceInputsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.replaceWorkspaceInputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.replaceWorkspaceInputs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getAllWorkspaceInputs', () => {
    describe('positive tests', () => {
      function __getAllWorkspaceInputsTest() {
        // Construct the params object for operation getAllWorkspaceInputs
        const wId = 'testString';
        const getAllWorkspaceInputsParams = {
          wId,
        };

        const getAllWorkspaceInputsResult = schematicsService.getAllWorkspaceInputs(getAllWorkspaceInputsParams);

        // all methods should return a Promise
        expectToBePromise(getAllWorkspaceInputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/templates/values', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getAllWorkspaceInputsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getAllWorkspaceInputsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getAllWorkspaceInputsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getAllWorkspaceInputsParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getAllWorkspaceInputs(getAllWorkspaceInputsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getAllWorkspaceInputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getAllWorkspaceInputs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceInputMetadata', () => {
    describe('positive tests', () => {
      function __getWorkspaceInputMetadataTest() {
        // Construct the params object for operation getWorkspaceInputMetadata
        const wId = 'testString';
        const tId = 'testString';
        const getWorkspaceInputMetadataParams = {
          wId,
          tId,
        };

        const getWorkspaceInputMetadataResult = schematicsService.getWorkspaceInputMetadata(getWorkspaceInputMetadataParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceInputMetadataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/template_data/{t_id}/values_metadata', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceInputMetadataTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceInputMetadataTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceInputMetadataTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceInputMetadataParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceInputMetadata(getWorkspaceInputMetadataParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceInputMetadata({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceInputMetadata();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceOutputs', () => {
    describe('positive tests', () => {
      function __getWorkspaceOutputsTest() {
        // Construct the params object for operation getWorkspaceOutputs
        const wId = 'testString';
        const getWorkspaceOutputsParams = {
          wId,
        };

        const getWorkspaceOutputsResult = schematicsService.getWorkspaceOutputs(getWorkspaceOutputsParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceOutputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/output_values', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceOutputsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceOutputsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceOutputsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceOutputsParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceOutputs(getWorkspaceOutputsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceOutputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceOutputs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceResources', () => {
    describe('positive tests', () => {
      function __getWorkspaceResourcesTest() {
        // Construct the params object for operation getWorkspaceResources
        const wId = 'testString';
        const getWorkspaceResourcesParams = {
          wId,
        };

        const getWorkspaceResourcesResult = schematicsService.getWorkspaceResources(getWorkspaceResourcesParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceResourcesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/resources', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceResourcesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceResourcesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceResourcesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceResourcesParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceResources(getWorkspaceResourcesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceResources({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceResources();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceState', () => {
    describe('positive tests', () => {
      function __getWorkspaceStateTest() {
        // Construct the params object for operation getWorkspaceState
        const wId = 'testString';
        const getWorkspaceStateParams = {
          wId,
        };

        const getWorkspaceStateResult = schematicsService.getWorkspaceState(getWorkspaceStateParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceStateResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/state_stores', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceStateTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceStateTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceStateTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceStateParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceState(getWorkspaceStateParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceState({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceState();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceTemplateState', () => {
    describe('positive tests', () => {
      function __getWorkspaceTemplateStateTest() {
        // Construct the params object for operation getWorkspaceTemplateState
        const wId = 'testString';
        const tId = 'testString';
        const getWorkspaceTemplateStateParams = {
          wId,
          tId,
        };

        const getWorkspaceTemplateStateResult = schematicsService.getWorkspaceTemplateState(getWorkspaceTemplateStateParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceTemplateStateResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/runtime_data/{t_id}/state_store', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceTemplateStateTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceTemplateStateTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceTemplateStateTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceTemplateStateParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceTemplateState(getWorkspaceTemplateStateParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceTemplateState({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceTemplateState();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceActivityLogs', () => {
    describe('positive tests', () => {
      function __getWorkspaceActivityLogsTest() {
        // Construct the params object for operation getWorkspaceActivityLogs
        const wId = 'testString';
        const activityId = 'testString';
        const getWorkspaceActivityLogsParams = {
          wId,
          activityId,
        };

        const getWorkspaceActivityLogsResult = schematicsService.getWorkspaceActivityLogs(getWorkspaceActivityLogsParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceActivityLogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/actions/{activity_id}/logs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.activity_id).toEqual(activityId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceActivityLogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceActivityLogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceActivityLogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceActivityLogsParams = {
          wId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceActivityLogs(getWorkspaceActivityLogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceActivityLogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceActivityLogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceLogUrls', () => {
    describe('positive tests', () => {
      function __getWorkspaceLogUrlsTest() {
        // Construct the params object for operation getWorkspaceLogUrls
        const wId = 'testString';
        const getWorkspaceLogUrlsParams = {
          wId,
        };

        const getWorkspaceLogUrlsResult = schematicsService.getWorkspaceLogUrls(getWorkspaceLogUrlsParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceLogUrlsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/log_stores', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceLogUrlsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceLogUrlsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceLogUrlsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceLogUrlsParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceLogUrls(getWorkspaceLogUrlsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceLogUrls({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceLogUrls();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getTemplateLogs', () => {
    describe('positive tests', () => {
      function __getTemplateLogsTest() {
        // Construct the params object for operation getTemplateLogs
        const wId = 'testString';
        const tId = 'testString';
        const logTfCmd = true;
        const logTfPrefix = true;
        const logTfNullResource = true;
        const logTfAnsible = true;
        const getTemplateLogsParams = {
          wId,
          tId,
          logTfCmd,
          logTfPrefix,
          logTfNullResource,
          logTfAnsible,
        };

        const getTemplateLogsResult = schematicsService.getTemplateLogs(getTemplateLogsParams);

        // all methods should return a Promise
        expectToBePromise(getTemplateLogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/runtime_data/{t_id}/log_store', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.log_tf_cmd).toEqual(logTfCmd);
        expect(mockRequestOptions.qs.log_tf_prefix).toEqual(logTfPrefix);
        expect(mockRequestOptions.qs.log_tf_null_resource).toEqual(logTfNullResource);
        expect(mockRequestOptions.qs.log_tf_ansible).toEqual(logTfAnsible);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getTemplateLogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getTemplateLogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getTemplateLogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getTemplateLogsParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getTemplateLogs(getTemplateLogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getTemplateLogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getTemplateLogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getTemplateActivityLog', () => {
    describe('positive tests', () => {
      function __getTemplateActivityLogTest() {
        // Construct the params object for operation getTemplateActivityLog
        const wId = 'testString';
        const tId = 'testString';
        const activityId = 'testString';
        const logTfCmd = true;
        const logTfPrefix = true;
        const logTfNullResource = true;
        const logTfAnsible = true;
        const getTemplateActivityLogParams = {
          wId,
          tId,
          activityId,
          logTfCmd,
          logTfPrefix,
          logTfNullResource,
          logTfAnsible,
        };

        const getTemplateActivityLogResult = schematicsService.getTemplateActivityLog(getTemplateActivityLogParams);

        // all methods should return a Promise
        expectToBePromise(getTemplateActivityLogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/runtime_data/{t_id}/log_store/actions/{activity_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.log_tf_cmd).toEqual(logTfCmd);
        expect(mockRequestOptions.qs.log_tf_prefix).toEqual(logTfPrefix);
        expect(mockRequestOptions.qs.log_tf_null_resource).toEqual(logTfNullResource);
        expect(mockRequestOptions.qs.log_tf_ansible).toEqual(logTfAnsible);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
        expect(mockRequestOptions.path.activity_id).toEqual(activityId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getTemplateActivityLogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getTemplateActivityLogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getTemplateActivityLogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getTemplateActivityLogParams = {
          wId,
          tId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getTemplateActivityLog(getTemplateActivityLogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getTemplateActivityLog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getTemplateActivityLog();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listActions', () => {
    describe('positive tests', () => {
      function __listActionsTest() {
        // Construct the params object for operation listActions
        const offset = 0;
        const limit = 1;
        const sort = 'testString';
        const profile = 'ids';
        const listActionsParams = {
          offset,
          limit,
          sort,
          profile,
        };

        const listActionsResult = schematicsService.listActions(listActionsParams);

        // all methods should return a Promise
        expectToBePromise(listActionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.sort).toEqual(sort);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listActionsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listActionsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listActionsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listActionsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listActions(listActionsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listActions({});
        checkForSuccessfulExecution(createRequestMock);
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

      function __createActionTest() {
        // Construct the params object for operation createAction
        const name = 'Stop Action';
        const description = 'The description of your action. The description can be up to 2048 characters long in size. **Example** you can use the description to stop the targets.';
        const location = 'us-south';
        const resourceGroup = 'testString';
        const bastionConnectionType = 'ssh';
        const inventoryConnectionType = 'ssh';
        const tags = ['testString'];
        const userState = userStateModel;
        const sourceReadmeUrl = 'testString';
        const source = externalSourceModel;
        const sourceType = 'local';
        const commandParameter = 'testString';
        const inventory = 'testString';
        const credentials = [credentialVariableDataModel];
        const bastion = bastionResourceDefinitionModel;
        const bastionCredential = credentialVariableDataModel;
        const targetsIni = 'testString';
        const inputs = [variableDataModel];
        const outputs = [variableDataModel];
        const settings = [variableDataModel];
        const xGithubToken = 'testString';
        const createActionParams = {
          name,
          description,
          location,
          resourceGroup,
          bastionConnectionType,
          inventoryConnectionType,
          tags,
          userState,
          sourceReadmeUrl,
          source,
          sourceType,
          commandParameter,
          inventory,
          credentials,
          bastion,
          bastionCredential,
          targetsIni,
          inputs,
          outputs,
          settings,
          xGithubToken,
        };

        const createActionResult = schematicsService.createAction(createActionParams);

        // all methods should return a Promise
        expectToBePromise(createActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.bastion_connection_type).toEqual(bastionConnectionType);
        expect(mockRequestOptions.body.inventory_connection_type).toEqual(inventoryConnectionType);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.user_state).toEqual(userState);
        expect(mockRequestOptions.body.source_readme_url).toEqual(sourceReadmeUrl);
        expect(mockRequestOptions.body.source).toEqual(source);
        expect(mockRequestOptions.body.source_type).toEqual(sourceType);
        expect(mockRequestOptions.body.command_parameter).toEqual(commandParameter);
        expect(mockRequestOptions.body.inventory).toEqual(inventory);
        expect(mockRequestOptions.body.credentials).toEqual(credentials);
        expect(mockRequestOptions.body.bastion).toEqual(bastion);
        expect(mockRequestOptions.body.bastion_credential).toEqual(bastionCredential);
        expect(mockRequestOptions.body.targets_ini).toEqual(targetsIni);
        expect(mockRequestOptions.body.inputs).toEqual(inputs);
        expect(mockRequestOptions.body.outputs).toEqual(outputs);
        expect(mockRequestOptions.body.settings).toEqual(settings);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createActionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createActionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createActionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createActionParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createAction(createActionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.createAction({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getAction', () => {
    describe('positive tests', () => {
      function __getActionTest() {
        // Construct the params object for operation getAction
        const actionId = 'testString';
        const profile = 'summary';
        const getActionParams = {
          actionId,
          profile,
        };

        const getActionResult = schematicsService.getAction(getActionParams);

        // all methods should return a Promise
        expectToBePromise(getActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions/{action_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.path.action_id).toEqual(actionId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getActionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getActionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getActionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const actionId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getActionParams = {
          actionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getAction(getActionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getAction({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getAction();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteAction', () => {
    describe('positive tests', () => {
      function __deleteActionTest() {
        // Construct the params object for operation deleteAction
        const actionId = 'testString';
        const force = true;
        const propagate = true;
        const deleteActionParams = {
          actionId,
          force,
          propagate,
        };

        const deleteActionResult = schematicsService.deleteAction(deleteActionParams);

        // all methods should return a Promise
        expectToBePromise(deleteActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions/{action_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'force', force);
        checkUserHeader(createRequestMock, 'propagate', propagate);
        expect(mockRequestOptions.path.action_id).toEqual(actionId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteActionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteActionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteActionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const actionId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteActionParams = {
          actionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteAction(deleteActionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteAction({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteAction();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
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

      function __updateActionTest() {
        // Construct the params object for operation updateAction
        const actionId = 'testString';
        const name = 'Stop Action';
        const description = 'The description of your action. The description can be up to 2048 characters long in size. **Example** you can use the description to stop the targets.';
        const location = 'us-south';
        const resourceGroup = 'testString';
        const bastionConnectionType = 'ssh';
        const inventoryConnectionType = 'ssh';
        const tags = ['testString'];
        const userState = userStateModel;
        const sourceReadmeUrl = 'testString';
        const source = externalSourceModel;
        const sourceType = 'local';
        const commandParameter = 'testString';
        const inventory = 'testString';
        const credentials = [credentialVariableDataModel];
        const bastion = bastionResourceDefinitionModel;
        const bastionCredential = credentialVariableDataModel;
        const targetsIni = 'testString';
        const inputs = [variableDataModel];
        const outputs = [variableDataModel];
        const settings = [variableDataModel];
        const xGithubToken = 'testString';
        const updateActionParams = {
          actionId,
          name,
          description,
          location,
          resourceGroup,
          bastionConnectionType,
          inventoryConnectionType,
          tags,
          userState,
          sourceReadmeUrl,
          source,
          sourceType,
          commandParameter,
          inventory,
          credentials,
          bastion,
          bastionCredential,
          targetsIni,
          inputs,
          outputs,
          settings,
          xGithubToken,
        };

        const updateActionResult = schematicsService.updateAction(updateActionParams);

        // all methods should return a Promise
        expectToBePromise(updateActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions/{action_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.bastion_connection_type).toEqual(bastionConnectionType);
        expect(mockRequestOptions.body.inventory_connection_type).toEqual(inventoryConnectionType);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.user_state).toEqual(userState);
        expect(mockRequestOptions.body.source_readme_url).toEqual(sourceReadmeUrl);
        expect(mockRequestOptions.body.source).toEqual(source);
        expect(mockRequestOptions.body.source_type).toEqual(sourceType);
        expect(mockRequestOptions.body.command_parameter).toEqual(commandParameter);
        expect(mockRequestOptions.body.inventory).toEqual(inventory);
        expect(mockRequestOptions.body.credentials).toEqual(credentials);
        expect(mockRequestOptions.body.bastion).toEqual(bastion);
        expect(mockRequestOptions.body.bastion_credential).toEqual(bastionCredential);
        expect(mockRequestOptions.body.targets_ini).toEqual(targetsIni);
        expect(mockRequestOptions.body.inputs).toEqual(inputs);
        expect(mockRequestOptions.body.outputs).toEqual(outputs);
        expect(mockRequestOptions.body.settings).toEqual(settings);
        expect(mockRequestOptions.path.action_id).toEqual(actionId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateActionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __updateActionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __updateActionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const actionId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateActionParams = {
          actionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateAction(updateActionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.updateAction({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.updateAction();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('uploadTemplateTarAction', () => {
    describe('positive tests', () => {
      function __uploadTemplateTarActionTest() {
        // Construct the params object for operation uploadTemplateTarAction
        const actionId = 'testString';
        const file = Buffer.from('This is a mock file.');
        const fileContentType = 'testString';
        const uploadTemplateTarActionParams = {
          actionId,
          file,
          fileContentType,
        };

        const uploadTemplateTarActionResult = schematicsService.uploadTemplateTarAction(uploadTemplateTarActionParams);

        // all methods should return a Promise
        expectToBePromise(uploadTemplateTarActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions/{action_id}/template_repo_upload', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.formData.file.data).toEqual(file);
        expect(mockRequestOptions.formData.file.contentType).toEqual(fileContentType);
        expect(mockRequestOptions.path.action_id).toEqual(actionId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __uploadTemplateTarActionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __uploadTemplateTarActionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __uploadTemplateTarActionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const actionId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const uploadTemplateTarActionParams = {
          actionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.uploadTemplateTarAction(uploadTemplateTarActionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.uploadTemplateTarAction({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.uploadTemplateTarAction();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listWorkspaceActivities', () => {
    describe('positive tests', () => {
      function __listWorkspaceActivitiesTest() {
        // Construct the params object for operation listWorkspaceActivities
        const wId = 'testString';
        const offset = 0;
        const limit = 1;
        const listWorkspaceActivitiesParams = {
          wId,
          offset,
          limit,
        };

        const listWorkspaceActivitiesResult = schematicsService.listWorkspaceActivities(listWorkspaceActivitiesParams);

        // all methods should return a Promise
        expectToBePromise(listWorkspaceActivitiesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/actions', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listWorkspaceActivitiesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listWorkspaceActivitiesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listWorkspaceActivitiesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listWorkspaceActivitiesParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listWorkspaceActivities(listWorkspaceActivitiesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.listWorkspaceActivities({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.listWorkspaceActivities();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceActivity', () => {
    describe('positive tests', () => {
      function __getWorkspaceActivityTest() {
        // Construct the params object for operation getWorkspaceActivity
        const wId = 'testString';
        const activityId = 'testString';
        const getWorkspaceActivityParams = {
          wId,
          activityId,
        };

        const getWorkspaceActivityResult = schematicsService.getWorkspaceActivity(getWorkspaceActivityParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceActivityResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/actions/{activity_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.activity_id).toEqual(activityId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceActivityTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceActivityTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceActivityTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceActivityParams = {
          wId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceActivity(getWorkspaceActivityParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceActivity({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceActivity();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteWorkspaceActivity', () => {
    describe('positive tests', () => {
      function __deleteWorkspaceActivityTest() {
        // Construct the params object for operation deleteWorkspaceActivity
        const wId = 'testString';
        const activityId = 'testString';
        const deleteWorkspaceActivityParams = {
          wId,
          activityId,
        };

        const deleteWorkspaceActivityResult = schematicsService.deleteWorkspaceActivity(deleteWorkspaceActivityParams);

        // all methods should return a Promise
        expectToBePromise(deleteWorkspaceActivityResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/actions/{activity_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.activity_id).toEqual(activityId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteWorkspaceActivityTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteWorkspaceActivityTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteWorkspaceActivityTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteWorkspaceActivityParams = {
          wId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteWorkspaceActivity(deleteWorkspaceActivityParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteWorkspaceActivity({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteWorkspaceActivity();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('runWorkspaceCommands', () => {
    describe('positive tests', () => {
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

      function __runWorkspaceCommandsTest() {
        // Construct the params object for operation runWorkspaceCommands
        const wId = 'testString';
        const refreshToken = 'testString';
        const commands = [terraformCommandModel];
        const operationName = 'testString';
        const description = 'testString';
        const runWorkspaceCommandsParams = {
          wId,
          refreshToken,
          commands,
          operationName,
          description,
        };

        const runWorkspaceCommandsResult = schematicsService.runWorkspaceCommands(runWorkspaceCommandsParams);

        // all methods should return a Promise
        expectToBePromise(runWorkspaceCommandsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/commands', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.body.commands).toEqual(commands);
        expect(mockRequestOptions.body.operation_name).toEqual(operationName);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __runWorkspaceCommandsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __runWorkspaceCommandsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __runWorkspaceCommandsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const runWorkspaceCommandsParams = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.runWorkspaceCommands(runWorkspaceCommandsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.runWorkspaceCommands({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.runWorkspaceCommands();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
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

      function __applyWorkspaceCommandTest() {
        // Construct the params object for operation applyWorkspaceCommand
        const wId = 'testString';
        const refreshToken = 'testString';
        const actionOptions = workspaceActivityOptionsTemplateModel;
        const delegatedToken = 'testString';
        const applyWorkspaceCommandParams = {
          wId,
          refreshToken,
          actionOptions,
          delegatedToken,
        };

        const applyWorkspaceCommandResult = schematicsService.applyWorkspaceCommand(applyWorkspaceCommandParams);

        // all methods should return a Promise
        expectToBePromise(applyWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/apply', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        checkUserHeader(createRequestMock, 'delegated_token', delegatedToken);
        expect(mockRequestOptions.body.action_options).toEqual(actionOptions);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __applyWorkspaceCommandTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __applyWorkspaceCommandTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __applyWorkspaceCommandTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const applyWorkspaceCommandParams = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.applyWorkspaceCommand(applyWorkspaceCommandParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.applyWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.applyWorkspaceCommand();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
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

      function __destroyWorkspaceCommandTest() {
        // Construct the params object for operation destroyWorkspaceCommand
        const wId = 'testString';
        const refreshToken = 'testString';
        const actionOptions = workspaceActivityOptionsTemplateModel;
        const delegatedToken = 'testString';
        const destroyWorkspaceCommandParams = {
          wId,
          refreshToken,
          actionOptions,
          delegatedToken,
        };

        const destroyWorkspaceCommandResult = schematicsService.destroyWorkspaceCommand(destroyWorkspaceCommandParams);

        // all methods should return a Promise
        expectToBePromise(destroyWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/destroy', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        checkUserHeader(createRequestMock, 'delegated_token', delegatedToken);
        expect(mockRequestOptions.body.action_options).toEqual(actionOptions);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __destroyWorkspaceCommandTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __destroyWorkspaceCommandTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __destroyWorkspaceCommandTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const destroyWorkspaceCommandParams = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.destroyWorkspaceCommand(destroyWorkspaceCommandParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.destroyWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.destroyWorkspaceCommand();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('planWorkspaceCommand', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // WorkspaceActivityOptionsTemplate
      const workspaceActivityOptionsTemplateModel = {
        target: ['testString'],
        tf_vars: ['testString'],
      };

      function __planWorkspaceCommandTest() {
        // Construct the params object for operation planWorkspaceCommand
        const wId = 'testString';
        const refreshToken = 'testString';
        const actionOptions = workspaceActivityOptionsTemplateModel;
        const delegatedToken = 'testString';
        const planWorkspaceCommandParams = {
          wId,
          refreshToken,
          actionOptions,
          delegatedToken,
        };

        const planWorkspaceCommandResult = schematicsService.planWorkspaceCommand(planWorkspaceCommandParams);

        // all methods should return a Promise
        expectToBePromise(planWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/plan', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        checkUserHeader(createRequestMock, 'delegated_token', delegatedToken);
        expect(mockRequestOptions.body.action_options).toEqual(actionOptions);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __planWorkspaceCommandTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __planWorkspaceCommandTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __planWorkspaceCommandTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const planWorkspaceCommandParams = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.planWorkspaceCommand(planWorkspaceCommandParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.planWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.planWorkspaceCommand();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('refreshWorkspaceCommand', () => {
    describe('positive tests', () => {
      function __refreshWorkspaceCommandTest() {
        // Construct the params object for operation refreshWorkspaceCommand
        const wId = 'testString';
        const refreshToken = 'testString';
        const delegatedToken = 'testString';
        const refreshWorkspaceCommandParams = {
          wId,
          refreshToken,
          delegatedToken,
        };

        const refreshWorkspaceCommandResult = schematicsService.refreshWorkspaceCommand(refreshWorkspaceCommandParams);

        // all methods should return a Promise
        expectToBePromise(refreshWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/refresh', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        checkUserHeader(createRequestMock, 'delegated_token', delegatedToken);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __refreshWorkspaceCommandTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __refreshWorkspaceCommandTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __refreshWorkspaceCommandTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const refreshWorkspaceCommandParams = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.refreshWorkspaceCommand(refreshWorkspaceCommandParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.refreshWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.refreshWorkspaceCommand();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listJobs', () => {
    describe('positive tests', () => {
      function __listJobsTest() {
        // Construct the params object for operation listJobs
        const offset = 0;
        const limit = 1;
        const sort = 'testString';
        const profile = 'ids';
        const resource = 'workspaces';
        const resourceId = 'testString';
        const actionId = 'testString';
        const workspaceId = 'testString';
        const list = 'all';
        const listJobsParams = {
          offset,
          limit,
          sort,
          profile,
          resource,
          resourceId,
          actionId,
          workspaceId,
          list,
        };

        const listJobsResult = schematicsService.listJobs(listJobsParams);

        // all methods should return a Promise
        expectToBePromise(listJobsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.sort).toEqual(sort);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.qs.resource).toEqual(resource);
        expect(mockRequestOptions.qs.resource_id).toEqual(resourceId);
        expect(mockRequestOptions.qs.action_id).toEqual(actionId);
        expect(mockRequestOptions.qs.workspace_id).toEqual(workspaceId);
        expect(mockRequestOptions.qs.list).toEqual(list);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listJobsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listJobsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listJobsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listJobsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listJobs(listJobsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listJobs({});
        checkForSuccessfulExecution(createRequestMock);
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
      const jobLogSummaryRepoDownloadJobModel = {
      };

      // JobLogSummaryWorkspaceJob
      const jobLogSummaryWorkspaceJobModel = {
      };

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

      function __createJobTest() {
        // Construct the params object for operation createJob
        const refreshToken = 'testString';
        const commandObject = 'workspace';
        const commandObjectId = 'testString';
        const commandName = 'workspace_plan';
        const commandParameter = 'testString';
        const commandOptions = ['testString'];
        const inputs = [variableDataModel];
        const settings = [variableDataModel];
        const tags = ['testString'];
        const location = 'us-south';
        const status = jobStatusModel;
        const cartOrderData = [cartOrderDataModel];
        const data = jobDataModel;
        const bastion = bastionResourceDefinitionModel;
        const logSummary = jobLogSummaryModel;
        const agent = agentInfoModel;
        const createJobParams = {
          refreshToken,
          commandObject,
          commandObjectId,
          commandName,
          commandParameter,
          commandOptions,
          inputs,
          settings,
          tags,
          location,
          status,
          cartOrderData,
          data,
          bastion,
          logSummary,
          agent,
        };

        const createJobResult = schematicsService.createJob(createJobParams);

        // all methods should return a Promise
        expectToBePromise(createJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.body.command_object).toEqual(commandObject);
        expect(mockRequestOptions.body.command_object_id).toEqual(commandObjectId);
        expect(mockRequestOptions.body.command_name).toEqual(commandName);
        expect(mockRequestOptions.body.command_parameter).toEqual(commandParameter);
        expect(mockRequestOptions.body.command_options).toEqual(commandOptions);
        expect(mockRequestOptions.body.inputs).toEqual(inputs);
        expect(mockRequestOptions.body.settings).toEqual(settings);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.status).toEqual(status);
        expect(mockRequestOptions.body.cart_order_data).toEqual(cartOrderData);
        expect(mockRequestOptions.body.data).toEqual(data);
        expect(mockRequestOptions.body.bastion).toEqual(bastion);
        expect(mockRequestOptions.body.log_summary).toEqual(logSummary);
        expect(mockRequestOptions.body.agent).toEqual(agent);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createJobParams = {
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createJob(createJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.createJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.createJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getJob', () => {
    describe('positive tests', () => {
      function __getJobTest() {
        // Construct the params object for operation getJob
        const jobId = 'testString';
        const profile = 'summary';
        const getJobParams = {
          jobId,
          profile,
        };

        const getJobResult = schematicsService.getJob(getJobParams);

        // all methods should return a Promise
        expectToBePromise(getJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs/{job_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getJobParams = {
          jobId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getJob(getJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateJob', () => {
    describe('positive tests', () => {
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
      const jobLogSummaryRepoDownloadJobModel = {
      };

      // JobLogSummaryWorkspaceJob
      const jobLogSummaryWorkspaceJobModel = {
      };

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

      function __updateJobTest() {
        // Construct the params object for operation updateJob
        const jobId = 'testString';
        const refreshToken = 'testString';
        const commandObject = 'workspace';
        const commandObjectId = 'testString';
        const commandName = 'workspace_plan';
        const commandParameter = 'testString';
        const commandOptions = ['testString'];
        const inputs = [variableDataModel];
        const settings = [variableDataModel];
        const tags = ['testString'];
        const location = 'us-south';
        const status = jobStatusModel;
        const cartOrderData = [cartOrderDataModel];
        const data = jobDataModel;
        const bastion = bastionResourceDefinitionModel;
        const logSummary = jobLogSummaryModel;
        const agent = agentInfoModel;
        const updateJobParams = {
          jobId,
          refreshToken,
          commandObject,
          commandObjectId,
          commandName,
          commandParameter,
          commandOptions,
          inputs,
          settings,
          tags,
          location,
          status,
          cartOrderData,
          data,
          bastion,
          logSummary,
          agent,
        };

        const updateJobResult = schematicsService.updateJob(updateJobParams);

        // all methods should return a Promise
        expectToBePromise(updateJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs/{job_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.body.command_object).toEqual(commandObject);
        expect(mockRequestOptions.body.command_object_id).toEqual(commandObjectId);
        expect(mockRequestOptions.body.command_name).toEqual(commandName);
        expect(mockRequestOptions.body.command_parameter).toEqual(commandParameter);
        expect(mockRequestOptions.body.command_options).toEqual(commandOptions);
        expect(mockRequestOptions.body.inputs).toEqual(inputs);
        expect(mockRequestOptions.body.settings).toEqual(settings);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.status).toEqual(status);
        expect(mockRequestOptions.body.cart_order_data).toEqual(cartOrderData);
        expect(mockRequestOptions.body.data).toEqual(data);
        expect(mockRequestOptions.body.bastion).toEqual(bastion);
        expect(mockRequestOptions.body.log_summary).toEqual(logSummary);
        expect(mockRequestOptions.body.agent).toEqual(agent);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __updateJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __updateJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateJobParams = {
          jobId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateJob(updateJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.updateJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.updateJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteJob', () => {
    describe('positive tests', () => {
      function __deleteJobTest() {
        // Construct the params object for operation deleteJob
        const jobId = 'testString';
        const refreshToken = 'testString';
        const force = true;
        const propagate = true;
        const deleteJobParams = {
          jobId,
          refreshToken,
          force,
          propagate,
        };

        const deleteJobResult = schematicsService.deleteJob(deleteJobParams);

        // all methods should return a Promise
        expectToBePromise(deleteJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs/{job_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        checkUserHeader(createRequestMock, 'force', force);
        checkUserHeader(createRequestMock, 'propagate', propagate);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteJobParams = {
          jobId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteJob(deleteJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listJobLogs', () => {
    describe('positive tests', () => {
      function __listJobLogsTest() {
        // Construct the params object for operation listJobLogs
        const jobId = 'testString';
        const listJobLogsParams = {
          jobId,
        };

        const listJobLogsResult = schematicsService.listJobLogs(listJobLogsParams);

        // all methods should return a Promise
        expectToBePromise(listJobLogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs/{job_id}/logs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listJobLogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listJobLogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listJobLogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listJobLogsParams = {
          jobId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listJobLogs(listJobLogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.listJobLogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.listJobLogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getJobFiles', () => {
    describe('positive tests', () => {
      function __getJobFilesTest() {
        // Construct the params object for operation getJobFiles
        const jobId = 'testString';
        const fileType = 'template_repo';
        const getJobFilesParams = {
          jobId,
          fileType,
        };

        const getJobFilesResult = schematicsService.getJobFiles(getJobFilesParams);

        // all methods should return a Promise
        expectToBePromise(getJobFilesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs/{job_id}/files', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.file_type).toEqual(fileType);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getJobFilesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getJobFilesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getJobFilesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const fileType = 'template_repo';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getJobFilesParams = {
          jobId,
          fileType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getJobFiles(getJobFilesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getJobFiles({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getJobFiles();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createWorkspaceDeletionJob', () => {
    describe('positive tests', () => {
      function __createWorkspaceDeletionJobTest() {
        // Construct the params object for operation createWorkspaceDeletionJob
        const refreshToken = 'testString';
        const job = 'testString';
        const version = 'testString';
        const workspaces = ['testString'];
        const createWorkspaceDeletionJobParams = {
          refreshToken,
          job,
          version,
          workspaces,
        };

        const createWorkspaceDeletionJobResult = schematicsService.createWorkspaceDeletionJob(createWorkspaceDeletionJobParams);

        // all methods should return a Promise
        expectToBePromise(createWorkspaceDeletionJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspace_jobs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.body.job).toEqual(job);
        expect(mockRequestOptions.body.version).toEqual(version);
        expect(mockRequestOptions.body.workspaces).toEqual(workspaces);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createWorkspaceDeletionJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createWorkspaceDeletionJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createWorkspaceDeletionJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createWorkspaceDeletionJobParams = {
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createWorkspaceDeletionJob(createWorkspaceDeletionJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.createWorkspaceDeletionJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.createWorkspaceDeletionJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceDeletionJobStatus', () => {
    describe('positive tests', () => {
      function __getWorkspaceDeletionJobStatusTest() {
        // Construct the params object for operation getWorkspaceDeletionJobStatus
        const wjId = 'testString';
        const getWorkspaceDeletionJobStatusParams = {
          wjId,
        };

        const getWorkspaceDeletionJobStatusResult = schematicsService.getWorkspaceDeletionJobStatus(getWorkspaceDeletionJobStatusParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceDeletionJobStatusResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspace_jobs/{wj_id}/status', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.wj_id).toEqual(wjId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceDeletionJobStatusTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceDeletionJobStatusTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceDeletionJobStatusTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wjId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceDeletionJobStatusParams = {
          wjId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceDeletionJobStatus(getWorkspaceDeletionJobStatusParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceDeletionJobStatus({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceDeletionJobStatus();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listBlueprint', () => {
    describe('positive tests', () => {
      function __listBlueprintTest() {
        // Construct the params object for operation listBlueprint
        const offset = 0;
        const limit = 1;
        const listBlueprintParams = {
          offset,
          limit,
        };

        const listBlueprintResult = schematicsService.listBlueprint(listBlueprintParams);

        // all methods should return a Promise
        expectToBePromise(listBlueprintResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/blueprints', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listBlueprintTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listBlueprintTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listBlueprintTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listBlueprintParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listBlueprint(listBlueprintParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listBlueprint({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createBlueprint', () => {
    describe('positive tests', () => {
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
      const blueprintFlowModel = {
      };

      // UserState
      const userStateModel = {
        state: 'draft',
        set_by: 'testString',
        set_at: '2019-01-01T12:00:00.000Z',
      };

      function __createBlueprintTest() {
        // Construct the params object for operation createBlueprint
        const name = 'Toronto Dev Environtment';
        const schemaVersion = '1.0';
        const source = externalSourceModel;
        const config = [blueprintConfigItemModel];
        const description = 'Deploys dev environtment instance in Toronto Region';
        const resourceGroup = 'Default';
        const tags = ['blueprint:Tor-Dev'];
        const location = 'us-south';
        const inputs = [variableDataModel];
        const settings = [variableDataModel];
        const flow = blueprintFlowModel;
        const userState = userStateModel;
        const createBlueprintParams = {
          name,
          schemaVersion,
          source,
          config,
          description,
          resourceGroup,
          tags,
          location,
          inputs,
          settings,
          flow,
          userState,
        };

        const createBlueprintResult = schematicsService.createBlueprint(createBlueprintParams);

        // all methods should return a Promise
        expectToBePromise(createBlueprintResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/blueprints', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.schema_version).toEqual(schemaVersion);
        expect(mockRequestOptions.body.source).toEqual(source);
        expect(mockRequestOptions.body.config).toEqual(config);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.inputs).toEqual(inputs);
        expect(mockRequestOptions.body.settings).toEqual(settings);
        expect(mockRequestOptions.body.flow).toEqual(flow);
        expect(mockRequestOptions.body.user_state).toEqual(userState);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createBlueprintTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createBlueprintTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createBlueprintTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const name = 'Toronto Dev Environtment';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createBlueprintParams = {
          name,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createBlueprint(createBlueprintParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.createBlueprint({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.createBlueprint();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getBlueprint', () => {
    describe('positive tests', () => {
      function __getBlueprintTest() {
        // Construct the params object for operation getBlueprint
        const blueprintId = 'testString';
        const profile = 'ids';
        const getBlueprintParams = {
          blueprintId,
          profile,
        };

        const getBlueprintResult = schematicsService.getBlueprint(getBlueprintParams);

        // all methods should return a Promise
        expectToBePromise(getBlueprintResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/blueprints/{blueprint_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.path.blueprint_id).toEqual(blueprintId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getBlueprintTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getBlueprintTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getBlueprintTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const blueprintId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getBlueprintParams = {
          blueprintId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getBlueprint(getBlueprintParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getBlueprint({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getBlueprint();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceBlueprint', () => {
    describe('positive tests', () => {
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
      const blueprintFlowModel = {
      };

      // UserState
      const userStateModel = {
        state: 'draft',
        set_by: 'testString',
        set_at: '2019-01-01T12:00:00.000Z',
      };

      function __replaceBlueprintTest() {
        // Construct the params object for operation replaceBlueprint
        const blueprintId = 'testString';
        const name = 'Toronto Dev Environtment';
        const schemaVersion = '1.0';
        const source = externalSourceModel;
        const config = [blueprintConfigItemModel];
        const description = 'Deploys dev environtment instance in Toronto Region';
        const resourceGroup = 'Default';
        const tags = ['blueprint:Tor-Dev'];
        const location = 'us-south';
        const inputs = [variableDataModel];
        const settings = [variableDataModel];
        const flow = blueprintFlowModel;
        const userState = userStateModel;
        const profile = 'ids';
        const replaceBlueprintParams = {
          blueprintId,
          name,
          schemaVersion,
          source,
          config,
          description,
          resourceGroup,
          tags,
          location,
          inputs,
          settings,
          flow,
          userState,
          profile,
        };

        const replaceBlueprintResult = schematicsService.replaceBlueprint(replaceBlueprintParams);

        // all methods should return a Promise
        expectToBePromise(replaceBlueprintResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/blueprints/{blueprint_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.schema_version).toEqual(schemaVersion);
        expect(mockRequestOptions.body.source).toEqual(source);
        expect(mockRequestOptions.body.config).toEqual(config);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.inputs).toEqual(inputs);
        expect(mockRequestOptions.body.settings).toEqual(settings);
        expect(mockRequestOptions.body.flow).toEqual(flow);
        expect(mockRequestOptions.body.user_state).toEqual(userState);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.path.blueprint_id).toEqual(blueprintId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceBlueprintTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __replaceBlueprintTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __replaceBlueprintTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const blueprintId = 'testString';
        const name = 'Toronto Dev Environtment';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceBlueprintParams = {
          blueprintId,
          name,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceBlueprint(replaceBlueprintParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.replaceBlueprint({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.replaceBlueprint();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteBlueprint', () => {
    describe('positive tests', () => {
      function __deleteBlueprintTest() {
        // Construct the params object for operation deleteBlueprint
        const blueprintId = 'testString';
        const profile = 'ids';
        const destroy = 0;
        const deleteBlueprintParams = {
          blueprintId,
          profile,
          destroy,
        };

        const deleteBlueprintResult = schematicsService.deleteBlueprint(deleteBlueprintParams);

        // all methods should return a Promise
        expectToBePromise(deleteBlueprintResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/blueprints/{blueprint_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.qs.destroy).toEqual(destroy);
        expect(mockRequestOptions.path.blueprint_id).toEqual(blueprintId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteBlueprintTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteBlueprintTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteBlueprintTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const blueprintId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteBlueprintParams = {
          blueprintId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteBlueprint(deleteBlueprintParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteBlueprint({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteBlueprint();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('uploadTemplateTarBlueprint', () => {
    describe('positive tests', () => {
      function __uploadTemplateTarBlueprintTest() {
        // Construct the params object for operation uploadTemplateTarBlueprint
        const blueprintId = 'testString';
        const file = Buffer.from('This is a mock file.');
        const fileContentType = 'testString';
        const uploadTemplateTarBlueprintParams = {
          blueprintId,
          file,
          fileContentType,
        };

        const uploadTemplateTarBlueprintResult = schematicsService.uploadTemplateTarBlueprint(uploadTemplateTarBlueprintParams);

        // all methods should return a Promise
        expectToBePromise(uploadTemplateTarBlueprintResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/blueprints/{blueprint_id}/template_repo_upload', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.formData.file.data).toEqual(file);
        expect(mockRequestOptions.formData.file.contentType).toEqual(fileContentType);
        expect(mockRequestOptions.path.blueprint_id).toEqual(blueprintId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __uploadTemplateTarBlueprintTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __uploadTemplateTarBlueprintTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __uploadTemplateTarBlueprintTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const blueprintId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const uploadTemplateTarBlueprintParams = {
          blueprintId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.uploadTemplateTarBlueprint(uploadTemplateTarBlueprintParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.uploadTemplateTarBlueprint({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.uploadTemplateTarBlueprint();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listInventories', () => {
    describe('positive tests', () => {
      function __listInventoriesTest() {
        // Construct the params object for operation listInventories
        const offset = 0;
        const limit = 1;
        const sort = 'testString';
        const profile = 'ids';
        const listInventoriesParams = {
          offset,
          limit,
          sort,
          profile,
        };

        const listInventoriesResult = schematicsService.listInventories(listInventoriesParams);

        // all methods should return a Promise
        expectToBePromise(listInventoriesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/inventories', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.sort).toEqual(sort);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listInventoriesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listInventoriesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listInventoriesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listInventoriesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listInventories(listInventoriesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listInventories({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createInventory', () => {
    describe('positive tests', () => {
      function __createInventoryTest() {
        // Construct the params object for operation createInventory
        const name = 'testString';
        const description = 'testString';
        const location = 'us-south';
        const resourceGroup = 'testString';
        const inventoriesIni = 'testString';
        const resourceQueries = ['testString'];
        const createInventoryParams = {
          name,
          description,
          location,
          resourceGroup,
          inventoriesIni,
          resourceQueries,
        };

        const createInventoryResult = schematicsService.createInventory(createInventoryParams);

        // all methods should return a Promise
        expectToBePromise(createInventoryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/inventories', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.inventories_ini).toEqual(inventoriesIni);
        expect(mockRequestOptions.body.resource_queries).toEqual(resourceQueries);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createInventoryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createInventoryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createInventoryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createInventoryParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createInventory(createInventoryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.createInventory({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getInventory', () => {
    describe('positive tests', () => {
      function __getInventoryTest() {
        // Construct the params object for operation getInventory
        const inventoryId = 'testString';
        const profile = 'summary';
        const getInventoryParams = {
          inventoryId,
          profile,
        };

        const getInventoryResult = schematicsService.getInventory(getInventoryParams);

        // all methods should return a Promise
        expectToBePromise(getInventoryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/inventories/{inventory_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.path.inventory_id).toEqual(inventoryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getInventoryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getInventoryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getInventoryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const inventoryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getInventoryParams = {
          inventoryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getInventory(getInventoryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getInventory({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getInventory();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceInventory', () => {
    describe('positive tests', () => {
      function __replaceInventoryTest() {
        // Construct the params object for operation replaceInventory
        const inventoryId = 'testString';
        const name = 'testString';
        const description = 'testString';
        const location = 'us-south';
        const resourceGroup = 'testString';
        const inventoriesIni = 'testString';
        const resourceQueries = ['testString'];
        const replaceInventoryParams = {
          inventoryId,
          name,
          description,
          location,
          resourceGroup,
          inventoriesIni,
          resourceQueries,
        };

        const replaceInventoryResult = schematicsService.replaceInventory(replaceInventoryParams);

        // all methods should return a Promise
        expectToBePromise(replaceInventoryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/inventories/{inventory_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.inventories_ini).toEqual(inventoriesIni);
        expect(mockRequestOptions.body.resource_queries).toEqual(resourceQueries);
        expect(mockRequestOptions.path.inventory_id).toEqual(inventoryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceInventoryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __replaceInventoryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __replaceInventoryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const inventoryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceInventoryParams = {
          inventoryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceInventory(replaceInventoryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.replaceInventory({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.replaceInventory();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteInventory', () => {
    describe('positive tests', () => {
      function __deleteInventoryTest() {
        // Construct the params object for operation deleteInventory
        const inventoryId = 'testString';
        const force = true;
        const propagate = true;
        const deleteInventoryParams = {
          inventoryId,
          force,
          propagate,
        };

        const deleteInventoryResult = schematicsService.deleteInventory(deleteInventoryParams);

        // all methods should return a Promise
        expectToBePromise(deleteInventoryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/inventories/{inventory_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'force', force);
        checkUserHeader(createRequestMock, 'propagate', propagate);
        expect(mockRequestOptions.path.inventory_id).toEqual(inventoryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteInventoryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteInventoryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteInventoryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const inventoryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteInventoryParams = {
          inventoryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteInventory(deleteInventoryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteInventory({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteInventory();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listResourceQuery', () => {
    describe('positive tests', () => {
      function __listResourceQueryTest() {
        // Construct the params object for operation listResourceQuery
        const offset = 0;
        const limit = 1;
        const sort = 'testString';
        const profile = 'ids';
        const listResourceQueryParams = {
          offset,
          limit,
          sort,
          profile,
        };

        const listResourceQueryResult = schematicsService.listResourceQuery(listResourceQueryParams);

        // all methods should return a Promise
        expectToBePromise(listResourceQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.sort).toEqual(sort);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listResourceQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listResourceQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listResourceQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listResourceQueryParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listResourceQuery(listResourceQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listResourceQuery({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createResourceQuery', () => {
    describe('positive tests', () => {
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

      function __createResourceQueryTest() {
        // Construct the params object for operation createResourceQuery
        const type = 'vsi';
        const name = 'testString';
        const queries = [resourceQueryModel];
        const createResourceQueryParams = {
          type,
          name,
          queries,
        };

        const createResourceQueryResult = schematicsService.createResourceQuery(createResourceQueryParams);

        // all methods should return a Promise
        expectToBePromise(createResourceQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.queries).toEqual(queries);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createResourceQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createResourceQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createResourceQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createResourceQueryParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createResourceQuery(createResourceQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.createResourceQuery({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getResourcesQuery', () => {
    describe('positive tests', () => {
      function __getResourcesQueryTest() {
        // Construct the params object for operation getResourcesQuery
        const queryId = 'testString';
        const getResourcesQueryParams = {
          queryId,
        };

        const getResourcesQueryResult = schematicsService.getResourcesQuery(getResourcesQueryParams);

        // all methods should return a Promise
        expectToBePromise(getResourcesQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query/{query_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.query_id).toEqual(queryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getResourcesQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getResourcesQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getResourcesQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const queryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getResourcesQueryParams = {
          queryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getResourcesQuery(getResourcesQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getResourcesQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getResourcesQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceResourcesQuery', () => {
    describe('positive tests', () => {
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

      function __replaceResourcesQueryTest() {
        // Construct the params object for operation replaceResourcesQuery
        const queryId = 'testString';
        const type = 'vsi';
        const name = 'testString';
        const queries = [resourceQueryModel];
        const replaceResourcesQueryParams = {
          queryId,
          type,
          name,
          queries,
        };

        const replaceResourcesQueryResult = schematicsService.replaceResourcesQuery(replaceResourcesQueryParams);

        // all methods should return a Promise
        expectToBePromise(replaceResourcesQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query/{query_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.queries).toEqual(queries);
        expect(mockRequestOptions.path.query_id).toEqual(queryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceResourcesQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __replaceResourcesQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __replaceResourcesQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const queryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceResourcesQueryParams = {
          queryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceResourcesQuery(replaceResourcesQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.replaceResourcesQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.replaceResourcesQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('executeResourceQuery', () => {
    describe('positive tests', () => {
      function __executeResourceQueryTest() {
        // Construct the params object for operation executeResourceQuery
        const queryId = 'testString';
        const executeResourceQueryParams = {
          queryId,
        };

        const executeResourceQueryResult = schematicsService.executeResourceQuery(executeResourceQueryParams);

        // all methods should return a Promise
        expectToBePromise(executeResourceQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query/{query_id}', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.query_id).toEqual(queryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __executeResourceQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __executeResourceQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __executeResourceQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const queryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const executeResourceQueryParams = {
          queryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.executeResourceQuery(executeResourceQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.executeResourceQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.executeResourceQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteResourcesQuery', () => {
    describe('positive tests', () => {
      function __deleteResourcesQueryTest() {
        // Construct the params object for operation deleteResourcesQuery
        const queryId = 'testString';
        const force = true;
        const propagate = true;
        const deleteResourcesQueryParams = {
          queryId,
          force,
          propagate,
        };

        const deleteResourcesQueryResult = schematicsService.deleteResourcesQuery(deleteResourcesQueryParams);

        // all methods should return a Promise
        expectToBePromise(deleteResourcesQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query/{query_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'force', force);
        checkUserHeader(createRequestMock, 'propagate', propagate);
        expect(mockRequestOptions.path.query_id).toEqual(queryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteResourcesQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteResourcesQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteResourcesQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const queryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteResourcesQueryParams = {
          queryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteResourcesQuery(deleteResourcesQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteResourcesQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteResourcesQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listAgent', () => {
    describe('positive tests', () => {
      function __listAgentTest() {
        // Construct the params object for operation listAgent
        const offset = 0;
        const limit = 1;
        const profile = 'summary';
        const filter = 'all';
        const listAgentParams = {
          offset,
          limit,
          profile,
          filter,
        };

        const listAgentResult = schematicsService.listAgent(listAgentParams);

        // all methods should return a Promise
        expectToBePromise(listAgentResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/agents', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.qs.filter).toEqual(filter);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listAgentTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listAgentTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listAgentTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listAgentParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listAgent(listAgentParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listAgent({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('registerAgent', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // AgentUserState
      const agentUserStateModel = {
        state: 'enable',
      };

      function __registerAgentTest() {
        // Construct the params object for operation registerAgent
        const name = 'MyDevAgent';
        const agentLocation = 'us-south';
        const location = 'us-south';
        const profileId = 'testString';
        const description = 'Register agent';
        const resourceGroup = 'testString';
        const tags = ['testString'];
        const userState = agentUserStateModel;
        const registerAgentParams = {
          name,
          agentLocation,
          location,
          profileId,
          description,
          resourceGroup,
          tags,
          userState,
        };

        const registerAgentResult = schematicsService.registerAgent(registerAgentParams);

        // all methods should return a Promise
        expectToBePromise(registerAgentResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/agents', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.agent_location).toEqual(agentLocation);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.profile_id).toEqual(profileId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.user_state).toEqual(userState);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __registerAgentTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __registerAgentTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __registerAgentTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const name = 'MyDevAgent';
        const agentLocation = 'us-south';
        const location = 'us-south';
        const profileId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const registerAgentParams = {
          name,
          agentLocation,
          location,
          profileId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.registerAgent(registerAgentParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.registerAgent({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.registerAgent();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getAgent', () => {
    describe('positive tests', () => {
      function __getAgentTest() {
        // Construct the params object for operation getAgent
        const agentId = 'testString';
        const profile = 'summary';
        const getAgentParams = {
          agentId,
          profile,
        };

        const getAgentResult = schematicsService.getAgent(getAgentParams);

        // all methods should return a Promise
        expectToBePromise(getAgentResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/agents/{agent_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.path.agent_id).toEqual(agentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getAgentTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getAgentTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getAgentTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const agentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getAgentParams = {
          agentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getAgent(getAgentParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getAgent({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getAgent();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteAgent', () => {
    describe('positive tests', () => {
      function __deleteAgentTest() {
        // Construct the params object for operation deleteAgent
        const agentId = 'testString';
        const deleteAgentParams = {
          agentId,
        };

        const deleteAgentResult = schematicsService.deleteAgent(deleteAgentParams);

        // all methods should return a Promise
        expectToBePromise(deleteAgentResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/agents/{agent_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.agent_id).toEqual(agentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteAgentTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteAgentTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteAgentTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const agentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteAgentParams = {
          agentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteAgent(deleteAgentParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteAgent({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteAgent();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateAgentRegistration', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // AgentUserState
      const agentUserStateModel = {
        state: 'enable',
      };

      function __updateAgentRegistrationTest() {
        // Construct the params object for operation updateAgentRegistration
        const agentId = 'testString';
        const name = 'MyDevAgent';
        const agentLocation = 'us-south';
        const location = 'us-south';
        const profileId = 'testString';
        const description = 'Register agent';
        const resourceGroup = 'testString';
        const tags = ['testString'];
        const userState = agentUserStateModel;
        const updateAgentRegistrationParams = {
          agentId,
          name,
          agentLocation,
          location,
          profileId,
          description,
          resourceGroup,
          tags,
          userState,
        };

        const updateAgentRegistrationResult = schematicsService.updateAgentRegistration(updateAgentRegistrationParams);

        // all methods should return a Promise
        expectToBePromise(updateAgentRegistrationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/agents/{agent_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.agent_location).toEqual(agentLocation);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.profile_id).toEqual(profileId);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.user_state).toEqual(userState);
        expect(mockRequestOptions.path.agent_id).toEqual(agentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateAgentRegistrationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __updateAgentRegistrationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __updateAgentRegistrationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const agentId = 'testString';
        const name = 'MyDevAgent';
        const agentLocation = 'us-south';
        const location = 'us-south';
        const profileId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateAgentRegistrationParams = {
          agentId,
          name,
          agentLocation,
          location,
          profileId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateAgentRegistration(updateAgentRegistrationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.updateAgentRegistration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.updateAgentRegistration();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getKmsSettings', () => {
    describe('positive tests', () => {
      function __getKmsSettingsTest() {
        // Construct the params object for operation getKmsSettings
        const location = 'testString';
        const getKmsSettingsParams = {
          location,
        };

        const getKmsSettingsResult = schematicsService.getKmsSettings(getKmsSettingsParams);

        // all methods should return a Promise
        expectToBePromise(getKmsSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/kms', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.location).toEqual(location);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getKmsSettingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getKmsSettingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getKmsSettingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const location = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getKmsSettingsParams = {
          location,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getKmsSettings(getKmsSettingsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getKmsSettings({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getKmsSettings();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateKmsSettings', () => {
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

      function __updateKmsSettingsTest() {
        // Construct the params object for operation updateKmsSettings
        const location = 'testString';
        const encryptionScheme = 'testString';
        const resourceGroup = 'testString';
        const primaryCrk = kmsSettingsPrimaryCrkModel;
        const secondaryCrk = kmsSettingsSecondaryCrkModel;
        const updateKmsSettingsParams = {
          location,
          encryptionScheme,
          resourceGroup,
          primaryCrk,
          secondaryCrk,
        };

        const updateKmsSettingsResult = schematicsService.updateKmsSettings(updateKmsSettingsParams);

        // all methods should return a Promise
        expectToBePromise(updateKmsSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/kms', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.encryption_scheme).toEqual(encryptionScheme);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.primary_crk).toEqual(primaryCrk);
        expect(mockRequestOptions.body.secondary_crk).toEqual(secondaryCrk);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateKmsSettingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __updateKmsSettingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __updateKmsSettingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateKmsSettingsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateKmsSettings(updateKmsSettingsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.updateKmsSettings({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('listKms', () => {
    describe('positive tests', () => {
      function __listKmsTest() {
        // Construct the params object for operation listKms
        const encryptionScheme = 'testString';
        const location = 'testString';
        const resourceGroup = 'testString';
        const limit = 1;
        const sort = 'testString';
        const listKmsParams = {
          encryptionScheme,
          location,
          resourceGroup,
          limit,
          sort,
        };

        const listKmsResult = schematicsService.listKms(listKmsParams);

        // all methods should return a Promise
        expectToBePromise(listKmsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/kms_instances', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.encryption_scheme).toEqual(encryptionScheme);
        expect(mockRequestOptions.qs.location).toEqual(location);
        expect(mockRequestOptions.qs.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.sort).toEqual(sort);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listKmsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listKmsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listKmsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const encryptionScheme = 'testString';
        const location = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listKmsParams = {
          encryptionScheme,
          location,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listKms(listKmsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.listKms({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.listKms();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
