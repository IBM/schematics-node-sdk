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

/**
 * IBM OpenAPI SDK Code Generator Version: 3.72.1-43bf8bf6-20230525-193151
 */

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import {
  Authenticator,
  BaseService,
  getAuthenticatorFromEnvironment,
  validateParams,
  UserOptions,
} from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';
import { getNewLogger, SDKLogger } from 'ibm-cloud-sdk-core';

/**
 * IBM Cloud Schematics service is to provide the capability to manage resources  of cloud provider infrastructure by
 * using file based configurations.  With the IBM Cloud Schematics service you can specify the  required set of
 * resources and the configuration in `config files`,  and then pass the config files to the service to fulfill it by
 * calling the necessary actions on the infrastructure.  This principle is known as Infrastructure as Code.  For more
 * information, refer to [Getting started with IBM Cloud Schematics]
 * (https://cloud.ibm.com/docs/schematics?topic=schematics-getting-started).
 *
 * API Version: 1.0
 */

class SchematicsV1 extends BaseService {
  static _logger: SDKLogger = getNewLogger('SchematicsV1');

  static DEFAULT_SERVICE_URL: string = 'https://schematics.cloud.ibm.com';

  static DEFAULT_SERVICE_NAME: string = 'schematics';

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of SchematicsV1 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The URL for the service
   * @returns {SchematicsV1}
   */

  public static newInstance(options: UserOptions): SchematicsV1 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new SchematicsV1(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }

  /**
   * Construct a SchematicsV1 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service. The base url may differ between IBM Cloud regions.
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {SchematicsV1}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    } else {
      this.setServiceUrl(SchematicsV1.DEFAULT_SERVICE_URL);
    }
  }

  /*************************
   * util
   ************************/

  /**
   * List supported schematics locations.
   *
   * Retrieve a list of IBM Cloud locations where you can create the Schematics workspace or action. workspaces.
   *
   *   <h3>Authorization</h3>
   *
   *   Schematics support generic authorization for its resources.
   *   For more information, about Schematics access and permissions,
   *   see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.SchematicsLocations[]>>}
   */
  public listSchematicsLocation(
    params?: SchematicsV1.ListSchematicsLocationParams
  ): Promise<SchematicsV1.Response<SchematicsV1.SchematicsLocations[]>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'listSchematicsLocation'
    );

    const parameters = {
      options: {
        url: '/v1/locations',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List supported locations.
   *
   * Retrieve a list of IBM Cloud locations where you can work with the Schematics objects.
   *
   *   <h3>Authorization</h3>
   *
   *   Schematics support generic authorization for its resources.
   *   For more information, about Schematics access and permissions,
   *   see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.SchematicsLocationsList>>}
   */
  public listLocations(
    params?: SchematicsV1.ListLocationsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.SchematicsLocationsList>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listLocations');

    const parameters = {
      options: {
        url: '/v2/locations',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List resource groups.
   *
   * Retrieve a list of IBM Cloud resource groups that your account has access to.
   *
   *   <h3>Authorization</h3>
   *
   *   Schematics support generic authorization for its resources.
   *   For more information, about Schematics access and permissions,
   *   see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceGroupResponse[]>>}
   */
  public listResourceGroup(
    params?: SchematicsV1.ListResourceGroupParams
  ): Promise<SchematicsV1.Response<SchematicsV1.ResourceGroupResponse[]>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listResourceGroup');

    const parameters = {
      options: {
        url: '/v1/resource_groups',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get Schematics API information.
   *
   * Retrieve detailed information about the IBM Cloud Schematics API version and the version of the provider plug-ins
   * that the API uses.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.VersionResponse>>}
   */
  public getSchematicsVersion(
    params?: SchematicsV1.GetSchematicsVersionParams
  ): Promise<SchematicsV1.Response<SchematicsV1.VersionResponse>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getSchematicsVersion'
    );

    const parameters = {
      options: {
        url: '/v1/version',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get variable metadata by parsing the template.
   *
   * Get the variable metadata from the template. This metadata can be passed in the payload during Schematics workspace
   * create or update API call.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.templateType - Template type such as **terraform**, **ansible**, **helm**, **cloudpak**, or
   * **bash script**.
   * @param {ExternalSource} params.source - Source of templates, playbooks, or controls.
   * @param {string} [params.region] - Region on which request should process. Applicable only on global endpoint.
   * @param {string} [params.sourceType] - Type of source for the Template.
   * @param {string} [params.xGithubToken] - The personal access token to authenticate with your private GitHub or
   * GitLab repository and access your Terraform template.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateMetaDataResponse>>}
   */
  public processTemplateMetaData(
    params: SchematicsV1.ProcessTemplateMetaDataParams
  ): Promise<SchematicsV1.Response<SchematicsV1.TemplateMetaDataResponse>> {
    const _params = { ...params };
    const _requiredParams = ['templateType', 'source'];
    const _validParams = [
      'templateType',
      'source',
      'region',
      'sourceType',
      'xGithubToken',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'template_type': _params.templateType,
      'source': _params.source,
      'region': _params.region,
      'source_type': _params.sourceType,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'processTemplateMetaData'
    );

    const parameters = {
      options: {
        url: '/v2/template_metadata_processor',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Github-token': _params.xGithubToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * workspaces
   ************************/

  /**
   * List workspaces.
   *
   * Retrieve a list of Schematics workspaces from your IBM Cloud account that you have access to. The list of
   * workspaces that is returned depends on the API endpoint that you use. For example, if you use an API endpoint for a
   * geography, such as North America, only workspaces that are created in `us-south` or `us-east` are returned.
   *
   *  For more information about supported API endpoints, see [API endpoints](/apidocs/schematics#api-endpoints).
   *
   *   <h3>Authorization</h3>
   *
   *   Schematics support generic authorization for its resources.
   *   For more information, about Schematics access and permissions,
   *   see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
   * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
   * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
   * `2-6`, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
   * `offset` option. Negative numbers are not supported and are ignored.
   * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
   * integer between 1 and 2000. If no value is provided, 100 is used by default.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponseList>>}
   */
  public listWorkspaces(
    params?: SchematicsV1.ListWorkspacesParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponseList>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['offset', 'limit', 'profile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'offset': _params.offset,
      'limit': _params.limit,
      'profile': _params.profile,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listWorkspaces');

    const parameters = {
      options: {
        url: '/v1/workspaces',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create a workspace.
   *
   * Create an IBM Cloud Schematics workspace that points to the source repository where your Terraform template or the
   * IBM Cloud software template is stored. You can decide to create your workspace without connecting it to a GitHub or
   * GitLab repository. Your workspace is then created with a **Draft** state. To later connect your workspace to a
   * GitHub or GitLab repository, you must use the `PUT /v1/workspaces/{id}` API to update the workspace or use the
   * `/v1/workspaces/{id}/templates/{template_id}/template_repo_upload` API to upload a TAR file instead.
   *
   *  **Getting API endpoint**:-
   *
   *  * The Schematics API endpoint that you use to create the workspace determines where your Schematics actions run
   * and your data is stored. See [API endpoints](/apidocs/schematics#api-endpoints) for more information.
   *  * If you use the API endpoint for a geography and not a specific location, such as North America, you can specify
   * the location in your API request body.
   *  * If you do not specify the location in the request body, Schematics determines your workspace location based on
   * availability.
   *  * If you use an API endpoint for a specific location, such as Frankfurt, the location that you enter in your API
   * request body must match your API endpoint.
   *  * You also have the option to not specify a location in your API request body if you use a location-specific API
   * endpoint.
   *
   *  **Getting IAM access token** :-
   *  * Before you create Schematics workspace, you need to create the IAM access token for your IBM Cloud Account.
   *  * To create IAM access token, use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>` and execute `curl -X POST
   * "https://iam.cloud.ibm.com/identity/token" -H "Content-Type= application/x-www-form-urlencoded" -d
   * "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`. For more information, about
   * creating IAM access token and API Docs, see [IAM access token](/apidocs/iam-identity-token-api#gettoken-password)
   * and [Create API key](/apidocs/iam-identity-token-api#create-api-key).
   *  * You can set the environment values  `export ACCESS_TOKEN=<access_token>` and `export
   * REFRESH_TOKEN=<refresh_token>`.
   *  * You can use the obtained IAM access token in create workspace `curl` command.
   *
   *   <h3>Authorization</h3>
   *
   *   Schematics support generic authorization for its resources.
   *   For more information, about Schematics access and permissions,
   *   see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string[]} [params.appliedShareddataIds] - Deprecated: List of applied shared dataset ID.
   * @param {CatalogRef} [params.catalogRef] - Information about the software template that you chose from the IBM Cloud
   * catalog. This information is returned for IBM Cloud catalog offerings only.
   * @param {Dependencies} [params.dependencies] - Workspace dependencies.
   * @param {string} [params.description] - The description of the workspace.
   * @param {string} [params.location] - The location where you want to create your Schematics workspace and run the
   * Schematics jobs. The location that you enter must match the API endpoint that you use. For example, if you use the
   * Frankfurt API endpoint, you must specify `eu-de` as your location. If you use an API endpoint for a geography and
   * you do not specify a location, Schematics determines the location based on availability.
   * @param {string} [params.name] - The name of your workspace. The name can be up to 128 characters long and can
   * include alphanumeric characters, spaces, dashes, and underscores. When you create a workspace for your own
   * Terraform template, consider including the microservice component that you set up with your Terraform template and
   * the IBM Cloud environment where you want to deploy your resources in your name.
   * @param {string} [params.resourceGroup] - The ID of the resource group where you want to provision the workspace.
   * @param {SharedTargetData} [params.sharedData] - Information about the Target used by the templates originating from
   * the  IBM Cloud catalog offerings. This information is not relevant for workspace created using your own Terraform
   * template.
   * @param {string[]} [params.tags] - A list of tags that are associated with the workspace.
   * @param {TemplateSourceDataRequest[]} [params.templateData] - Input data for the Template.
   * @param {string} [params.templateRef] - Workspace template ref.
   * @param {TemplateRepoRequest} [params.templateRepo] - Input variables for the Template repoository, while creating a
   * workspace.
   * @param {string[]} [params.type] - List of Workspace type.
   * @param {WorkspaceStatusRequest} [params.workspaceStatus] - WorkspaceStatusRequest -.
   * @param {string} [params.agentId] - agent id which is binded to with the workspace.
   * @param {string} [params.xGithubToken] - The personal access token to authenticate with your private GitHub or
   * GitLab repository and access your Terraform template.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>>}
   */
  public createWorkspace(
    params?: SchematicsV1.CreateWorkspaceParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'appliedShareddataIds',
      'catalogRef',
      'dependencies',
      'description',
      'location',
      'name',
      'resourceGroup',
      'sharedData',
      'tags',
      'templateData',
      'templateRef',
      'templateRepo',
      'type',
      'workspaceStatus',
      'agentId',
      'xGithubToken',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'applied_shareddata_ids': _params.appliedShareddataIds,
      'catalog_ref': _params.catalogRef,
      'dependencies': _params.dependencies,
      'description': _params.description,
      'location': _params.location,
      'name': _params.name,
      'resource_group': _params.resourceGroup,
      'shared_data': _params.sharedData,
      'tags': _params.tags,
      'template_data': _params.templateData,
      'template_ref': _params.templateRef,
      'template_repo': _params.templateRepo,
      'type': _params.type,
      'workspace_status': _params.workspaceStatus,
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createWorkspace');

    const parameters = {
      options: {
        url: '/v1/workspaces',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Github-token': _params.xGithubToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get workspace details.
   *
   * Retrieve detailed information for a workspace in your IBM Cloud account.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see [Schematics service access
   *  roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>>}
   */
  public getWorkspace(
    params: SchematicsV1.GetWorkspaceParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>> {
    const _params = { ...params };
    const _requiredParams = ['wId'];
    const _validParams = ['wId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspace');

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update workspace.
   *
   * Use this API to update or replace the entire workspace, including the Terraform template (`template_repo`) or IBM
   * Cloud catalog software template (`catalog_ref`) that your workspace points to.
   *
   *  **Tip**:- If you want to update workspace metadata, use the `PATCH /v1/workspaces/{id}` API.
   *  To update workspace variables, use the `PUT /v1/workspaces/{id}/template_data/{template_id}/values` API.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {CatalogRef} [params.catalogRef] - Information about the software template that you chose from the IBM Cloud
   * catalog. This information is returned for IBM Cloud catalog offerings only.
   * @param {string} [params.description] - The description of the workspace.
   * @param {Dependencies} [params.dependencies] - Workspace dependencies.
   * @param {string} [params.name] - The name of the workspace.
   * @param {SharedTargetData} [params.sharedData] - Information about the Target used by the templates originating from
   * the  IBM Cloud catalog offerings. This information is not relevant for workspace created using your own Terraform
   * template.
   * @param {string[]} [params.tags] - A list of tags that you want to associate with your workspace.
   * @param {TemplateSourceDataRequest[]} [params.templateData] - Input data for the Template.
   * @param {TemplateRepoUpdateRequest} [params.templateRepo] - Input to update the template repository data.
   * @param {string[]} [params.type] - List of Workspace type.
   * @param {WorkspaceStatusUpdateRequest} [params.workspaceStatus] - Input to update the workspace status.
   * @param {WorkspaceStatusMessage} [params.workspaceStatusMsg] - Information about the last job that ran against the
   * workspace. -.
   * @param {string} [params.agentId] - agent id that process workspace jobs.
   * @param {string} [params.xGithubToken] - The personal access token to authenticate with your private GitHub or
   * GitLab repository and access your Terraform template.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>>}
   */
  public replaceWorkspace(
    params: SchematicsV1.ReplaceWorkspaceParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>> {
    const _params = { ...params };
    const _requiredParams = ['wId'];
    const _validParams = [
      'wId',
      'catalogRef',
      'description',
      'dependencies',
      'name',
      'sharedData',
      'tags',
      'templateData',
      'templateRepo',
      'type',
      'workspaceStatus',
      'workspaceStatusMsg',
      'agentId',
      'xGithubToken',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_ref': _params.catalogRef,
      'description': _params.description,
      'dependencies': _params.dependencies,
      'name': _params.name,
      'shared_data': _params.sharedData,
      'tags': _params.tags,
      'template_data': _params.templateData,
      'template_repo': _params.templateRepo,
      'type': _params.type,
      'workspace_status': _params.workspaceStatus,
      'workspace_status_msg': _params.workspaceStatusMsg,
      'agent_id': _params.agentId,
    };

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'replaceWorkspace');

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Github-token': _params.xGithubToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete a workspace.
   *
   * Deletes a workspace from IBM Cloud Schematics. Deleting a workspace does not automatically remove the IBM Cloud
   * resources that the workspace manages. To remove all resources that are associated with the workspace, use the
   * `DELETE /v1/workspaces/{id}?destroy_resources=true` API.
   *
   *  **Note**: If you delete a workspace without deleting the resources,
   *  you must manage your resources with the resource dashboard or CLI afterwards.
   *  You cannot use IBM Cloud Schematics anymore to manage your resources.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.refreshToken - The IAM refresh token for the user or service identity. The IAM refresh token
   * is required only if you want to destroy the Terraform resources before deleting the Schematics workspace. If you
   * want to delete the workspace only and keep all your Terraform resources, refresh token is not required.
   *
   *   **Retrieving refresh token**:
   *   * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
   * "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
   * "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
   *   * For more information, about creating IAM access token and API Docs, refer, [IAM access
   * token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
   * key](/apidocs/iam-identity-token-api#create-api-key).
   *
   *   **Limitation**:
   *   * If the token is expired, you can use `refresh token` to get a new IAM access token.
   *   * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
   *   * When the IAM access token is about to expire, use the API key to create a new access token.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} [params.destroyResources] - If set to `true`, refresh_token header configuration is required to
   * delete all the Terraform resources, and the Schematics workspace. If set to `false`, you can remove only the
   * workspace. Your Terraform resources are still available and must be managed with the resource dashboard or CLI.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<string>>}
   */
  public deleteWorkspace(
    params: SchematicsV1.DeleteWorkspaceParams
  ): Promise<SchematicsV1.Response<string>> {
    const _params = { ...params };
    const _requiredParams = ['refreshToken', 'wId'];
    const _validParams = ['refreshToken', 'wId', 'destroyResources', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'destroy_resources': _params.destroyResources,
    };

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteWorkspace');

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'refresh_token': _params.refreshToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update workspace metadata.
   *
   * Use this API to update the following workspace metadata:
   *
   *  * Workspace name (`name`) - **Note**: Updating the workspace name does not update the ID of the workspace.
   *  * Workspace description (`description`)
   *  * Tags (`tags[]`)
   *  * Resource group (`resource_group`)
   *  * Workspace status (`workspace_status.frozen`)
   *
   *
   *  **Tip**: If you want to update information about the Terraform template
   *  or IBM Cloud catalog software template that your workspace points to,
   *  use the `PUT /v1/workspaces/{id}` API. To update workspace variables,
   *  use the `PUT /v1/workspaces/{id}/template_data/{template_id}/values` API.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {CatalogRef} [params.catalogRef] - Information about the software template that you chose from the IBM Cloud
   * catalog. This information is returned for IBM Cloud catalog offerings only.
   * @param {string} [params.description] - The description of the workspace.
   * @param {Dependencies} [params.dependencies] - Workspace dependencies.
   * @param {string} [params.name] - The name of the workspace.
   * @param {SharedTargetData} [params.sharedData] - Information about the Target used by the templates originating from
   * the  IBM Cloud catalog offerings. This information is not relevant for workspace created using your own Terraform
   * template.
   * @param {string[]} [params.tags] - A list of tags that you want to associate with your workspace.
   * @param {TemplateSourceDataRequest[]} [params.templateData] - Input data for the Template.
   * @param {TemplateRepoUpdateRequest} [params.templateRepo] - Input to update the template repository data.
   * @param {string[]} [params.type] - List of Workspace type.
   * @param {WorkspaceStatusUpdateRequest} [params.workspaceStatus] - Input to update the workspace status.
   * @param {WorkspaceStatusMessage} [params.workspaceStatusMsg] - Information about the last job that ran against the
   * workspace. -.
   * @param {string} [params.agentId] - agent id that process workspace jobs.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>>}
   */
  public updateWorkspace(
    params: SchematicsV1.UpdateWorkspaceParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>> {
    const _params = { ...params };
    const _requiredParams = ['wId'];
    const _validParams = [
      'wId',
      'catalogRef',
      'description',
      'dependencies',
      'name',
      'sharedData',
      'tags',
      'templateData',
      'templateRepo',
      'type',
      'workspaceStatus',
      'workspaceStatusMsg',
      'agentId',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'catalog_ref': _params.catalogRef,
      'description': _params.description,
      'dependencies': _params.dependencies,
      'name': _params.name,
      'shared_data': _params.sharedData,
      'tags': _params.tags,
      'template_data': _params.templateData,
      'template_repo': _params.templateRepo,
      'type': _params.type,
      'workspace_status': _params.workspaceStatus,
      'workspace_status_msg': _params.workspaceStatusMsg,
      'agent_id': _params.agentId,
    };

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'updateWorkspace');

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Show workspace template readme.
   *
   * Retrieve the `README.md` file of the Terraform of IBM Cloud catalog template that your workspace points to.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} [params.ref] - The GitHub or GitLab branch where the `README.md` file is stored,  or the commit ID
   * or tag that references the `README.md` file that you want to retrieve.  If you do not specify this option, the
   * `README.md` file is retrieved from the master branch by default.
   * @param {string} [params.formatted] - The format of the readme file.  Value ''markdown'' will give markdown,
   * otherwise html.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateReadme>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public getWorkspaceReadme(
    params: SchematicsV1.GetWorkspaceReadmeParams
  ): Promise<SchematicsV1.Response<SchematicsV1.TemplateReadme>> {
    SchematicsV1._logger.warn('A deprecated operation has been invoked: getWorkspaceReadme');
    const _params = { ...params };
    const _requiredParams = ['wId'];
    const _validParams = ['wId', 'ref', 'formatted', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'ref': _params.ref,
      'formatted': _params.formatted,
    };

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceReadme');

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/templates/readme',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Upload a TAR file to your workspace.
   *
   * Provide your Terraform template by uploading a TAR file from your local machine. Before you use this API, you must
   * create a workspace without a link to a GitHub or GitLab repository with the `POST /v1/workspaces` API.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace where you want to upload your `.tar` file. To find the
   * workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} params.tId - The ID of the Terraform template in your workspace. When you create a workspace, a
   * unique ID is assigned to your Terraform template, even if no template was provided during workspace creation. To
   * find this ID, use the `GET /v1/workspaces` API and review the `template_data.id` value.
   * @param {NodeJS.ReadableStream | Buffer} [params.file] - Template tar file.
   * @param {string} [params.fileContentType] - The content type of file.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateRepoTarUploadResponse>>}
   */
  public templateRepoUpload(
    params: SchematicsV1.TemplateRepoUploadParams
  ): Promise<SchematicsV1.Response<SchematicsV1.TemplateRepoTarUploadResponse>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'tId'];
    const _validParams = ['wId', 'tId', 'file', 'fileContentType', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'file': {
        data: _params.file,
        contentType: _params.fileContentType,
      },
    };

    const path = {
      'w_id': _params.wId,
      't_id': _params.tId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'templateRepoUpload');

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/template_data/{t_id}/template_repo_upload',
        method: 'PUT',
        path,
        formData,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List workspace input variables.
   *
   * Retrieve a list of input variables that are declared in your Terraform or IBM Cloud catalog template.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} params.tId - The ID of the Terraform template in your workspace.  When you create a workspace, the
   * Terraform template that  your workspace points to is assigned a unique ID. Use the `GET /v1/workspaces` to look up
   * the workspace IDs  and template IDs or `template_data.id` in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateValues>>}
   */
  public getWorkspaceInputs(
    params: SchematicsV1.GetWorkspaceInputsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.TemplateValues>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'tId'];
    const _validParams = ['wId', 'tId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
      't_id': _params.tId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceInputs');

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/template_data/{t_id}/values',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Replace workspace input variables.
   *
   * Replace or Update the input variables for the template that your workspace points to.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} params.tId - The ID of the Terraform template in your workspace.  When you create a workspace, the
   * Terraform template that  your workspace points to is assigned a unique ID. Use the `GET /v1/workspaces` to look up
   * the workspace IDs  and template IDs or `template_data.id` in your IBM Cloud account.
   * @param {JsonObject[]} [params.envValues] - A list of environment variables that you want to apply during the
   * execution of a bash script or Terraform job. This field must be provided as a list of key-value pairs, for example,
   * **TF_LOG=debug**. Each entry will be a map with one entry where `key is the environment variable name and value is
   * value`. You can define environment variables for IBM Cloud catalog offerings that are provisioned by using a bash
   * script. See [example to use special environment
   * variable](https://cloud.ibm.com/docs/schematics?topic=schematics-set-parallelism#parallelism-example)  that are
   * supported by Schematics.
   * @param {string} [params.values] - User values.
   * @param {WorkspaceVariableRequest[]} [params.variablestore] - VariablesRequest -.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.UserValues>>}
   */
  public replaceWorkspaceInputs(
    params: SchematicsV1.ReplaceWorkspaceInputsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.UserValues>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'tId'];
    const _validParams = ['wId', 'tId', 'envValues', 'values', 'variablestore', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'env_values': _params.envValues,
      'values': _params.values,
      'variablestore': _params.variablestore,
    };

    const path = {
      'w_id': _params.wId,
      't_id': _params.tId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'replaceWorkspaceInputs'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/template_data/{t_id}/values',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get workspace template details.
   *
   * Retrieve detailed information about the Terraform template that your workspace points to.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace for which you want to retrieve input parameters and  values.
   * To find the workspace ID, use the `GET /workspaces` API.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceTemplateValuesResponse>>}
   */
  public getAllWorkspaceInputs(
    params: SchematicsV1.GetAllWorkspaceInputsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceTemplateValuesResponse>> {
    const _params = { ...params };
    const _requiredParams = ['wId'];
    const _validParams = ['wId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getAllWorkspaceInputs'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/templates/values',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List workspace variable metadata.
   *
   * Retrieve the metadata for all the workspace input variables that are declared in the template that your workspace
   * points to.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace for which you want to retrieve the metadata of the input
   * variables that are declared in the template. To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} params.tId - The ID of the Terraform template for which you want to retrieve the metadata of your
   * input variables. When you create a workspace, the Terraform template that your workspace points to is assigned a
   * unique ID. To find this ID, use the `GET /v1/workspaces` API and review the `template_data.id` value.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.JsonObject[]>>}
   */
  public getWorkspaceInputMetadata(
    params: SchematicsV1.GetWorkspaceInputMetadataParams
  ): Promise<SchematicsV1.Response<SchematicsV1.JsonObject[]>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'tId'];
    const _validParams = ['wId', 'tId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
      't_id': _params.tId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getWorkspaceInputMetadata'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/template_data/{t_id}/values_metadata',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List workspace output values.
   *
   * Retrieve a list of Terraform output variables. You define output values in your Terraform template to include
   * information that you want to make accessible for other Terraform templates.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace for which you want to retrieve output parameters and  values.
   * To find the workspace ID, use the `GET /workspaces` API.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.OutputValuesInner[]>>}
   */
  public getWorkspaceOutputs(
    params: SchematicsV1.GetWorkspaceOutputsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.OutputValuesInner[]>> {
    const _params = { ...params };
    const _requiredParams = ['wId'];
    const _validParams = ['wId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getWorkspaceOutputs'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/output_values',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List workspace resources.
   *
   * Retrieve a list of IBM Cloud resources that you created with your workspace.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateResources[]>>}
   */
  public getWorkspaceResources(
    params: SchematicsV1.GetWorkspaceResourcesParams
  ): Promise<SchematicsV1.Response<SchematicsV1.TemplateResources[]>> {
    const _params = { ...params };
    const _requiredParams = ['wId'];
    const _validParams = ['wId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getWorkspaceResources'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/resources',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get Terraform statefile URL.
   *
   * This API is deprecated, and is replaced by the `GET /v2/jobs/{job_id}/files`, with `file_type` equal `state_file`.
   * Retrieve the URL to the Terraform statefile (`terraform.tfstate`). You use the URL to access the Terraform
   * statefile. The Terraform statefile includes detailed information about the IBM Cloud resources that you provisioned
   * with IBM Cloud Schematics and Schematics uses the file to determine future create, modify, or delete actions for
   * your resources. To show the content of the Terraform statefile, use the `GET
   * /v1/workspaces/{id}/runtime_data/{template_id}/state_store` API.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace for which you want to retrieve the Terraform statefile.  To
   * find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.StateStoreResponseList>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public getWorkspaceState(
    params: SchematicsV1.GetWorkspaceStateParams
  ): Promise<SchematicsV1.Response<SchematicsV1.StateStoreResponseList>> {
    SchematicsV1._logger.warn('A deprecated operation has been invoked: getWorkspaceState');
    const _params = { ...params };
    const _requiredParams = ['wId'];
    const _validParams = ['wId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceState');

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/state_stores',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Show Terraform statefile content.
   *
   * This API is deprecated, and is replaced by the `GET /v2/jobs/{job_id}/files`, with `file_type` equal `state_file`.
   * Show the content of the Terraform statefile (`terraform.tfstate`) that was created when your Terraform template was
   * applied in IBM Cloud. The statefile holds detailed information about the IBM Cloud resources that were created by
   * IBM Cloud Schematics and Schematics uses the file to determine future create, modify, or delete actions for your
   * resources.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace for which you want to retrieve the Terraform statefile.  To
   * find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} params.tId - The ID of the Terraform template for which you want to retrieve the Terraform
   * statefile.  When you create a workspace, the Terraform template that your workspace points to is assigned a unique
   * ID.  To find this ID, use the `GET /v1/workspaces` API and review the template_data.id value.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateStateStore>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public getWorkspaceTemplateState(
    params: SchematicsV1.GetWorkspaceTemplateStateParams
  ): Promise<SchematicsV1.Response<SchematicsV1.TemplateStateStore>> {
    SchematicsV1._logger.warn('A deprecated operation has been invoked: getWorkspaceTemplateState');
    const _params = { ...params };
    const _requiredParams = ['wId', 'tId'];
    const _validParams = ['wId', 'tId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
      't_id': _params.tId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getWorkspaceTemplateState'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/runtime_data/{t_id}/state_store',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get workspace job log URL.
   *
   * Get the Terraform log file URL for a workspace job. You can retrieve the log URL for jobs that were created with
   * the `PUT /v1/workspaces/{id}/apply`, `POST /v1/workspaces/{id}/plan`, or `DELETE /v1/workspaces/{id}/destroy` API.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace for which you want to retrieve the Terraform statefile.  To
   * find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} params.activityId - The ID of the activity or job, for which you want to retrieve details.  To find
   * the job ID, use the `GET /v1/workspaces/{id}/actions` API.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityLogs>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public getWorkspaceActivityLogs(
    params: SchematicsV1.GetWorkspaceActivityLogsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityLogs>> {
    SchematicsV1._logger.warn('A deprecated operation has been invoked: getWorkspaceActivityLogs');
    const _params = { ...params };
    const _requiredParams = ['wId', 'activityId'];
    const _validParams = ['wId', 'activityId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
      'activity_id': _params.activityId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getWorkspaceActivityLogs'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/actions/{activity_id}/logs',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get latest workspace job log URL for all workspace templates.
   *
   * Retrieve the log file URL for the latest job of a template that ran against your workspace. You use this URL to
   * retrieve detailed logs for the latest job.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.LogStoreResponseList>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public getWorkspaceLogUrls(
    params: SchematicsV1.GetWorkspaceLogUrlsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.LogStoreResponseList>> {
    SchematicsV1._logger.warn('A deprecated operation has been invoked: getWorkspaceLogUrls');
    const _params = { ...params };
    const _requiredParams = ['wId'];
    const _validParams = ['wId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getWorkspaceLogUrls'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/log_stores',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Show latest logs for a workspace template.
   *
   * Show the Terraform logs for the most recent job of a template that ran against your workspace.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} params.tId - The ID of the Terraform template or IBM Cloud catalog software template in the
   * workspace.  Use the `GET /v1/workspaces` to look up the workspace IDs and template IDs or `template_data.id`.
   * @param {boolean} [params.logTfCmd] - Enter false to replace the first line in each Terraform command section, such
   * as Terraform INIT or Terraform PLAN, with Schematics INIT (Schematics PLAN) in your log output.  In addition, the
   * log lines Starting command: terraform init -input=false -no-color and Starting command: terraform apply
   * -state=terraform.tfstate -var-file=schematics.tfvars -auto-approve -no-color are suppressed.  All subsequent
   * command lines still use the Terraform command prefix. To remove this prefix, use the log_tf_prefix option.
   * @param {boolean} [params.logTfPrefix] - `false` will hide all the terraform command prefix in the log statements.
   * @param {boolean} [params.logTfNullResource] - `false` will hide all the null resource prefix in the log statements.
   * @param {boolean} [params.logTfAnsible] - `true` will format all logs to withhold the original format  of ansible
   * output in the log statements.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<string>>}
   */
  public getTemplateLogs(
    params: SchematicsV1.GetTemplateLogsParams
  ): Promise<SchematicsV1.Response<string>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'tId'];
    const _validParams = [
      'wId',
      'tId',
      'logTfCmd',
      'logTfPrefix',
      'logTfNullResource',
      'logTfAnsible',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'log_tf_cmd': _params.logTfCmd,
      'log_tf_prefix': _params.logTfPrefix,
      'log_tf_null_resource': _params.logTfNullResource,
      'log_tf_ansible': _params.logTfAnsible,
    };

    const path = {
      'w_id': _params.wId,
      't_id': _params.tId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getTemplateLogs');

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/runtime_data/{t_id}/log_store',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Show logs for a workspace job.
   *
   * Show the Terraform logs for an job that ran against your workspace.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} params.tId - The ID of the Terraform template or IBM Cloud catalog software template in the
   * workspace.  Use the `GET /v1/workspaces` to look up the workspace IDs and template IDs or `template_data.id`.
   * @param {string} params.activityId - The ID of the activity or job, for which you want to retrieve details.  To find
   * the job ID, use the `GET /v1/workspaces/{id}/actions` API.
   * @param {boolean} [params.logTfCmd] - Enter false to replace the first line in each Terraform command section, such
   * as Terraform INIT or Terraform PLAN, with Schematics INIT (Schematics PLAN) in your log output.  In addition, the
   * log lines Starting command: terraform init -input=false -no-color and Starting command: terraform apply
   * -state=terraform.tfstate -var-file=schematics.tfvars -auto-approve -no-color are suppressed.  All subsequent
   * command lines still use the Terraform command prefix. To remove this prefix, use the log_tf_prefix option.
   * @param {boolean} [params.logTfPrefix] - `false` will hide all the terraform command prefix in the log statements.
   * @param {boolean} [params.logTfNullResource] - `false` will hide all the null resource prefix in the log statements.
   * @param {boolean} [params.logTfAnsible] - `true` will format all logs to withhold the original format  of ansible
   * output in the log statements.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<string>>}
   */
  public getTemplateActivityLog(
    params: SchematicsV1.GetTemplateActivityLogParams
  ): Promise<SchematicsV1.Response<string>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'tId', 'activityId'];
    const _validParams = [
      'wId',
      'tId',
      'activityId',
      'logTfCmd',
      'logTfPrefix',
      'logTfNullResource',
      'logTfAnsible',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'log_tf_cmd': _params.logTfCmd,
      'log_tf_prefix': _params.logTfPrefix,
      'log_tf_null_resource': _params.logTfNullResource,
      'log_tf_ansible': _params.logTfAnsible,
    };

    const path = {
      'w_id': _params.wId,
      't_id': _params.tId,
      'activity_id': _params.activityId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getTemplateActivityLog'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/runtime_data/{t_id}/log_store/actions/{activity_id}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * actions
   ************************/

  /**
   * List actions.
   *
   * Retrieve a list of all Schematics actions that depends on the API endpoint that you have access. For example, if
   * you use an API endpoint for a geography, such as North America, only actions that are created in `us-south` or
   * `us-east` are retrieved.
   *
   *  For more information, about supported API endpoints, see
   * [API endpoints](/apidocs/schematics#api-endpoints).
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
   * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
   * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
   * `2-6`, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
   * `offset` option. Negative numbers are not supported and are ignored.
   * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
   * integer between 1 and 2000. If no value is provided, 100 is used by default.
   * @param {string} [params.sort] - Name of the field to sort-by;  Use the '.' character to delineate sub-resources and
   * sub-fields (eg. owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending'
   * (default is ascending)   Ignore unrecognized or unsupported sort field.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ActionList>>}
   */
  public listActions(
    params?: SchematicsV1.ListActionsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.ActionList>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['offset', 'limit', 'sort', 'profile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'offset': _params.offset,
      'limit': _params.limit,
      'sort': _params.sort,
      'profile': _params.profile,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listActions');

    const parameters = {
      options: {
        url: '/v2/actions',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create an action.
   *
   * Create an IBM Cloud Schematics action to run on a single target or groups of target hosts, roles, policies, or
   * steps to deploy your resources in the target hosts. You can run the IBM Cloud resources the order in which you want
   * to execute them. **Note** If your Git repository already contains a host file. Schematics does not overwrite the
   * host file already present in your Git repository. For sample templates, see IBM Cloud Automation
   * [templates](https://github.com/Cloud-Schematics).
   *
   *  The Schematics action API now supports bastion host connection with `non-root` user, and bastion connection type
   * is marked as optional, when inventory connection type is set as [Windows Remote
   * Management](https://www.ibm.com/docs/en/license-metric-tool?topic=v-configuring-winrm-hyper-hosts)(`winrm`).
   *
   *  For more information, about the Schematics create action,
   *  see [ibmcloud schematics action
   * create](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-create-action).
   *  **Note** you cannot update the location and region once an action is created.
   *  Also, make sure your IP addresses are in the
   * [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](/docs/schematics?topic=schematics-access#action-permissions).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.name] - The unique name of your action. The name can be up to 128 characters long and can
   * include alphanumeric characters, spaces, dashes, and underscores. **Example** you can use the name to stop action.
   * @param {string} [params.description] - Action description.
   * @param {string} [params.location] - List of locations supported by IBM Cloud Schematics service.  While creating
   * your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the
   * location of the IBM Cloud resources, provisioned using Schematics.
   * @param {string} [params.resourceGroup] - Resource-group name for an action. By default, an action is created in
   * `Default` resource group.
   * @param {string} [params.bastionConnectionType] - Type of connection to be used when connecting to bastion host.  If
   * the `inventory_connection_type=winrm`, then `bastion_connection_type` is not supported.
   * @param {string} [params.inventoryConnectionType] - Type of connection to be used when connecting to remote host.
   * **Note** Currently, WinRM supports only Windows system with the public IPs and do not support Bastion host.
   * @param {string[]} [params.tags] - Action tags.
   * @param {UserState} [params.userState] - User defined status of the Schematics object.
   * @param {string} [params.sourceReadmeUrl] - URL of the `README` file, for the source URL.
   * @param {ExternalSource} [params.source] - Source of templates, playbooks, or controls.
   * @param {string} [params.sourceType] - Type of source for the Template.
   * @param {string} [params.commandParameter] - Schematics job command parameter (playbook-name).
   * @param {string} [params.inventory] - Target inventory record ID, used by the action or ansible playbook.
   * @param {CredentialVariableData[]} [params.credentials] - credentials of the Action.
   * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
   * @param {CredentialVariableData} [params.bastionCredential] - User editable credential variable data and system
   * generated reference to the value.
   * @param {string} [params.targetsIni] - Inventory of host and host group for the playbook in `INI` file format. For
   * example, `"targets_ini": "[webserverhost]
   *  172.22.192.6
   *  [dbhost]
   *  172.22.192.5"`. For more information, about an inventory host group syntax, see [Inventory host
   * groups](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-inventory-host-grps).
   * @param {VariableData[]} [params.inputs] - Input variables for the Action.
   * @param {VariableData[]} [params.outputs] - Output variables for the Action.
   * @param {VariableData[]} [params.settings] - Environment variables for the Action.
   * @param {string} [params.xGithubToken] - The personal access token to authenticate with your private GitHub or
   * GitLab repository and access your Terraform template.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Action>>}
   */
  public createAction(
    params?: SchematicsV1.CreateActionParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Action>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'name',
      'description',
      'location',
      'resourceGroup',
      'bastionConnectionType',
      'inventoryConnectionType',
      'tags',
      'userState',
      'sourceReadmeUrl',
      'source',
      'sourceType',
      'commandParameter',
      'inventory',
      'credentials',
      'bastion',
      'bastionCredential',
      'targetsIni',
      'inputs',
      'outputs',
      'settings',
      'xGithubToken',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'description': _params.description,
      'location': _params.location,
      'resource_group': _params.resourceGroup,
      'bastion_connection_type': _params.bastionConnectionType,
      'inventory_connection_type': _params.inventoryConnectionType,
      'tags': _params.tags,
      'user_state': _params.userState,
      'source_readme_url': _params.sourceReadmeUrl,
      'source': _params.source,
      'source_type': _params.sourceType,
      'command_parameter': _params.commandParameter,
      'inventory': _params.inventory,
      'credentials': _params.credentials,
      'bastion': _params.bastion,
      'bastion_credential': _params.bastionCredential,
      'targets_ini': _params.targetsIni,
      'inputs': _params.inputs,
      'outputs': _params.outputs,
      'settings': _params.settings,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createAction');

    const parameters = {
      options: {
        url: '/v2/actions',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Github-token': _params.xGithubToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get action details.
   *
   * Retrieve the detailed information of an actions from your IBM Cloud account.  This API returns a URL to the log
   * file that you can retrieve by using  the `GET /v2/actions/{action_id}/logs` API.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.actionId - Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud
   * account.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Action>>}
   */
  public getAction(
    params: SchematicsV1.GetActionParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Action>> {
    const _params = { ...params };
    const _requiredParams = ['actionId'];
    const _validParams = ['actionId', 'profile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'profile': _params.profile,
    };

    const path = {
      'action_id': _params.actionId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getAction');

    const parameters = {
      options: {
        url: '/v2/actions/{action_id}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete an action.
   *
   * Delete a Schematics action and specify the Ansible playbook that you want to run against your IBM Cloud resources.
   * **Note** you cannot delete or stop the job activity from an ongoing execution of an action defined in the playbook.
   * You can repeat the execution of same job, whenever you patch the actions. For more information, about the
   * Schematics action state, see  [Schematics action state
   * diagram](https://cloud.ibm.com/docs/schematics?topic=schematics-action-setup#action-state-diagram).
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.actionId - Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud
   * account.
   * @param {boolean} [params.force] - Equivalent to -force options in the command line.
   * @param {boolean} [params.propagate] - Auto propagate the chaange or deletion to the dependent resources.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>>}
   */
  public deleteAction(
    params: SchematicsV1.DeleteActionParams
  ): Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['actionId'];
    const _validParams = ['actionId', 'force', 'propagate', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'action_id': _params.actionId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteAction');

    const parameters = {
      options: {
        url: '/v2/actions/{action_id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'force': _params.force,
            'propagate': _params.propagate,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update an action.
   *
   * Update or replace an action to change the action state from the critical state to normal state, or pending state to
   * the normal state for a successful execution.  For more information, about the Schematics action state, see
   * [Schematics action state
   * diagram](https://cloud.ibm.com/docs/schematics?topic=schematics-action-setup#action-state-diagram).
   *
   *  The Schematics action API now supports bastion host connection with `non-root` user, and bastion connection type
   * is marked as optional, when inventory connection type is set as [Windows Remote
   * Management](https://www.ibm.com/docs/en/license-metric-tool?topic=v-configuring-winrm-hyper-hosts)(`winrm`).
   *
   *  **Note** you cannot update the location and region once an action is created. Also, make sure your IP addresses
   * are in the [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses].
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.actionId - Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud
   * account.
   * @param {string} [params.name] - The unique name of your action. The name can be up to 128 characters long and can
   * include alphanumeric characters, spaces, dashes, and underscores. **Example** you can use the name to stop action.
   * @param {string} [params.description] - Action description.
   * @param {string} [params.location] - List of locations supported by IBM Cloud Schematics service.  While creating
   * your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the
   * location of the IBM Cloud resources, provisioned using Schematics.
   * @param {string} [params.resourceGroup] - Resource-group name for an action. By default, an action is created in
   * `Default` resource group.
   * @param {string} [params.bastionConnectionType] - Type of connection to be used when connecting to bastion host.  If
   * the `inventory_connection_type=winrm`, then `bastion_connection_type` is not supported.
   * @param {string} [params.inventoryConnectionType] - Type of connection to be used when connecting to remote host.
   * **Note** Currently, WinRM supports only Windows system with the public IPs and do not support Bastion host.
   * @param {string[]} [params.tags] - Action tags.
   * @param {UserState} [params.userState] - User defined status of the Schematics object.
   * @param {string} [params.sourceReadmeUrl] - URL of the `README` file, for the source URL.
   * @param {ExternalSource} [params.source] - Source of templates, playbooks, or controls.
   * @param {string} [params.sourceType] - Type of source for the Template.
   * @param {string} [params.commandParameter] - Schematics job command parameter (playbook-name).
   * @param {string} [params.inventory] - Target inventory record ID, used by the action or ansible playbook.
   * @param {CredentialVariableData[]} [params.credentials] - credentials of the Action.
   * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
   * @param {CredentialVariableData} [params.bastionCredential] - User editable credential variable data and system
   * generated reference to the value.
   * @param {string} [params.targetsIni] - Inventory of host and host group for the playbook in `INI` file format. For
   * example, `"targets_ini": "[webserverhost]
   *  172.22.192.6
   *  [dbhost]
   *  172.22.192.5"`. For more information, about an inventory host group syntax, see [Inventory host
   * groups](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-inventory-host-grps).
   * @param {VariableData[]} [params.inputs] - Input variables for the Action.
   * @param {VariableData[]} [params.outputs] - Output variables for the Action.
   * @param {VariableData[]} [params.settings] - Environment variables for the Action.
   * @param {string} [params.xGithubToken] - The personal access token to authenticate with your private GitHub or
   * GitLab repository and access your Terraform template.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Action>>}
   */
  public updateAction(
    params: SchematicsV1.UpdateActionParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Action>> {
    const _params = { ...params };
    const _requiredParams = ['actionId'];
    const _validParams = [
      'actionId',
      'name',
      'description',
      'location',
      'resourceGroup',
      'bastionConnectionType',
      'inventoryConnectionType',
      'tags',
      'userState',
      'sourceReadmeUrl',
      'source',
      'sourceType',
      'commandParameter',
      'inventory',
      'credentials',
      'bastion',
      'bastionCredential',
      'targetsIni',
      'inputs',
      'outputs',
      'settings',
      'xGithubToken',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'description': _params.description,
      'location': _params.location,
      'resource_group': _params.resourceGroup,
      'bastion_connection_type': _params.bastionConnectionType,
      'inventory_connection_type': _params.inventoryConnectionType,
      'tags': _params.tags,
      'user_state': _params.userState,
      'source_readme_url': _params.sourceReadmeUrl,
      'source': _params.source,
      'source_type': _params.sourceType,
      'command_parameter': _params.commandParameter,
      'inventory': _params.inventory,
      'credentials': _params.credentials,
      'bastion': _params.bastion,
      'bastion_credential': _params.bastionCredential,
      'targets_ini': _params.targetsIni,
      'inputs': _params.inputs,
      'outputs': _params.outputs,
      'settings': _params.settings,
    };

    const path = {
      'action_id': _params.actionId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'updateAction');

    const parameters = {
      options: {
        url: '/v2/actions/{action_id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Github-token': _params.xGithubToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Upload a TAR file to an action.
   *
   * Update your template by uploading tape archive file (.tar) file from  your local machine. Before you use this API,
   * you must create an action  without a link to a GitHub or GitLab repository with the `POST /v2/actions` API.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](/docs/schematics?topic=schematics-access#action-permissions).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.actionId - Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud
   * account.
   * @param {NodeJS.ReadableStream | Buffer} [params.file] - Template tar file.
   * @param {string} [params.fileContentType] - The content type of file.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateRepoTarUploadResponse>>}
   */
  public uploadTemplateTarAction(
    params: SchematicsV1.UploadTemplateTarActionParams
  ): Promise<SchematicsV1.Response<SchematicsV1.TemplateRepoTarUploadResponse>> {
    const _params = { ...params };
    const _requiredParams = ['actionId'];
    const _validParams = ['actionId', 'file', 'fileContentType', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'file': {
        data: _params.file,
        contentType: _params.fileContentType,
      },
    };

    const path = {
      'action_id': _params.actionId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'uploadTemplateTarAction'
    );

    const parameters = {
      options: {
        url: '/v2/actions/{action_id}/template_repo_upload',
        method: 'PUT',
        path,
        formData,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * jobs
   ************************/

  /**
   * List workspace jobs.
   *
   * Retrieve a list of all jobs that ran against a workspace. Jobs are generated when you use the `apply`, `plan`,
   * `destroy`, and `refresh`,   command API.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
   * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
   * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
   * `2-6`, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
   * `offset` option. Negative numbers are not supported and are ignored.
   * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
   * integer between 1 and 2000. If no value is provided, 100 is used by default.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivities>>}
   */
  public listWorkspaceActivities(
    params: SchematicsV1.ListWorkspaceActivitiesParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivities>> {
    const _params = { ...params };
    const _requiredParams = ['wId'];
    const _validParams = ['wId', 'offset', 'limit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'offset': _params.offset,
      'limit': _params.limit,
    };

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'listWorkspaceActivities'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/actions',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get workspace job details.
   *
   * Get the details for a workspace job that ran against the workspace. This API returns the job status and a URL to
   * the log file that you can  retrieve by using the `GET /v1/workspaces/{id}/actions/{action_id}/logs` API.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} params.activityId - The ID of the activity or job, for which you want to retrieve details.  To find
   * the job ID, use the `GET /v1/workspaces/{id}/actions` API.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivity>>}
   */
  public getWorkspaceActivity(
    params: SchematicsV1.GetWorkspaceActivityParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivity>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'activityId'];
    const _validParams = ['wId', 'activityId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
      'activity_id': _params.activityId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getWorkspaceActivity'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/actions/{activity_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Stop the workspace job.
   *
   * Stop an ongoing schematics job that runs against your workspace.
   * **Note**: If you remove the Schematics apply job that runs against your workspace,  any changes to your IBM Cloud
   * resources that are already applied are not reverted.  If a creation, update, or deletion is currently in progress,
   * Schematics waits for  the job to be completed first. Then, any other resource creations, updates, or  deletions
   * that are included in your Terraform template file are ignored.
   * <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} params.activityId - The ID of the activity or job, for which you want to retrieve details.  To find
   * the job ID, use the `GET /v1/workspaces/{id}/actions` API.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityApplyResult>>}
   */
  public deleteWorkspaceActivity(
    params: SchematicsV1.DeleteWorkspaceActivityParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityApplyResult>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'activityId'];
    const _validParams = ['wId', 'activityId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
      'activity_id': _params.activityId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'deleteWorkspaceActivity'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/actions/{activity_id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Run Terraform Commands.
   *
   * Run Terraform state commands to modify the workspace state file, by using the IBM Cloud Schematics API.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
   * @param {string} params.refreshToken - The IAM refresh token for the user or service identity.
   *
   *   **Retrieving refresh token**:
   *   * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
   * "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
   * "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
   *   * For more information, about creating IAM access token and API Docs, refer, [IAM access
   * token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
   * key](/apidocs/iam-identity-token-api#create-api-key).
   *
   *   **Limitation**:
   *   * If the token is expired, you can use `refresh token` to get a new IAM access token.
   *   * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
   *   * When the IAM access token is about to expire, use the API key to create a new access token.
   * @param {TerraformCommand[]} [params.commands] - List of commands.  You can execute single set of commands or
   * multiple commands.  For more information, about the payload of the multiple commands,  refer to
   * [Commands](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#commands).
   * @param {string} [params.operationName] - Command name.
   * @param {string} [params.description] - Command description.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityCommandResult>>}
   */
  public runWorkspaceCommands(
    params: SchematicsV1.RunWorkspaceCommandsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityCommandResult>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'refreshToken'];
    const _validParams = [
      'wId',
      'refreshToken',
      'commands',
      'operationName',
      'description',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'commands': _params.commands,
      'operation_name': _params.operationName,
      'description': _params.description,
    };

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'runWorkspaceCommands'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/commands',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Perform a Schematics `apply` job.
   *
   * Run a Schematics `apply` job against your workspace. An `apply` job provisions, modifies, or removes the IBM Cloud
   * resources that you described in the Terraform template that your workspace points to. Depending on the type and
   * number of resources that you want to provision or modify, this process might take a few minutes, or even up to
   * hours to complete. During this time, you cannot make changes to your workspace. After all updates are applied, the
   * state of the files is [persisted](https://cloud.ibm.com/docs/schematics?topic=schematics-persist-files) to
   * determine what resources exist in your IBM Cloud account.
   *
   *
   *  **Important**: Your workspace must be in an `Inactive`, `Active`, `Failed`, or
   *  `Stopped` state to perform a Schematics `apply` job. After all updates are applied,
   *  the state of the files is [persisted](https://cloud.ibm.com/docs/schematics?topic=schematics-persist-files)
   *  to determine what resources exist in your IBM Cloud account.
   *
   *
   *  **Note**: This API returns an activity or job ID that you use to retrieve the
   *  log URL with the `GET /v1/workspaces/{id}/actions/{action_id}/logs` API.
   *
   *
   *  **Important:** Applying a template might incur costs. Make sure to review
   *  the pricing information for the resources that you specified in your
   *  templates before you apply the template in IBM Cloud.
   *  To find a summary of job that Schematics is about to perform,
   *  create a Terraform execution plan with the `POST /v1/workspaces/{id}/plan` API.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace for which you want to run a Schematics `apply` job.  To find
   * the workspace ID, use the `GET /workspaces` API.
   * @param {string} params.refreshToken - The IAM refresh token for the user or service identity.
   *
   *   **Retrieving refresh token**:
   *   * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
   * "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
   * "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
   *   * For more information, about creating IAM access token and API Docs, refer, [IAM access
   * token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
   * key](/apidocs/iam-identity-token-api#create-api-key).
   *
   *   **Limitation**:
   *   * If the token is expired, you can use `refresh token` to get a new IAM access token.
   *   * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
   *   * When the IAM access token is about to expire, use the API key to create a new access token.
   * @param {WorkspaceActivityOptionsTemplate} [params.actionOptions] - Workspace job options template.
   * @param {string} [params.delegatedToken] - The IAM delegated token for your IBM Cloud account.  This token is
   * required for requests that are sent via the UI only.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityApplyResult>>}
   */
  public applyWorkspaceCommand(
    params: SchematicsV1.ApplyWorkspaceCommandParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityApplyResult>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'refreshToken'];
    const _validParams = ['wId', 'refreshToken', 'actionOptions', 'delegatedToken', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'action_options': _params.actionOptions,
    };

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'applyWorkspaceCommand'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/apply',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken,
            'delegated_token': _params.delegatedToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Perform a Schematics `destroy` job.
   *
   * Run a Schematics `destroy` job against your workspace. A `destroy` job removes all IBM Cloud resources that are
   * associated with your workspace. Removing your resources does not delete the Schematics workspace. To delete the
   * workspace, use the `DELETE /v1/workspaces/{id}` API. This API returns an activity or job ID that you use to
   * retrieve the URL to the log file with the `GET /v1/workspaces/{id}/actions/{action_id}/logs` API.
   *
   *
   *  **Important**: Your workspace must be in an `Active`, `Failed`, or `Stopped` state to perform a Schematics
   * `destroy` job.
   *
   *
   *  **Note**: Deleting IBM Cloud resources cannot be undone. Make sure that you back up any required data before you
   * remove your resources.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace for which you want to perform a Schematics `destroy` job.  To
   * find the workspace ID, use the `GET /workspaces` API.
   * @param {string} params.refreshToken - The IAM refresh token for the user or service identity.
   *
   *   **Retrieving refresh token**:
   *   * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
   * "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
   * "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
   *   * For more information, about creating IAM access token and API Docs, refer, [IAM access
   * token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
   * key](/apidocs/iam-identity-token-api#create-api-key).
   *
   *   **Limitation**:
   *   * If the token is expired, you can use `refresh token` to get a new IAM access token.
   *   * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
   *   * When the IAM access token is about to expire, use the API key to create a new access token.
   * @param {WorkspaceActivityOptionsTemplate} [params.actionOptions] - Workspace job options template.
   * @param {string} [params.delegatedToken] - The IAM delegated token for your IBM Cloud account.  This token is
   * required for requests that are sent via the UI only.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityDestroyResult>>}
   */
  public destroyWorkspaceCommand(
    params: SchematicsV1.DestroyWorkspaceCommandParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityDestroyResult>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'refreshToken'];
    const _validParams = ['wId', 'refreshToken', 'actionOptions', 'delegatedToken', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'action_options': _params.actionOptions,
    };

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'destroyWorkspaceCommand'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/destroy',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken,
            'delegated_token': _params.delegatedToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Perform a Schematics `plan` job.
   *
   * Run a Schematics `plan` job against your workspace. The `plan` job creates a summary of IBM Cloud resources that
   * must be created, modified, or deleted to achieve the state that is described in the Terraform or IBM Cloud catalog
   * template that your workspace points to. During this time, you cannot make changes to your workspace. You can use
   * the summary to verify your changes before you apply the template in IBM Cloud.
   *
   *
   *  **Important**: Your workspace must be in an `Inactive`, `Active`, `Failed`, or `Stopped` state to perform a
   * Schematics `plan` job.
   *
   *
   *  **Note**: This API returns an activity or job ID that you use to retrieve the URL to the log file with the `GET
   * /v1/workspaces/{id}/actions/{action_id}/logs` API.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace, for which you want to run a Schematics `plan` job.  To find
   * the ID of your workspace, use the `GET /v1/workspaces` API.
   * @param {string} params.refreshToken - The IAM refresh token for the user or service identity.
   *
   *   **Retrieving refresh token**:
   *   * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
   * "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
   * "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
   *   * For more information, about creating IAM access token and API Docs, refer, [IAM access
   * token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
   * key](/apidocs/iam-identity-token-api#create-api-key).
   *
   *   **Limitation**:
   *   * If the token is expired, you can use `refresh token` to get a new IAM access token.
   *   * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
   *   * When the IAM access token is about to expire, use the API key to create a new access token.
   * @param {WorkspaceActivityOptionsTemplate} [params.actionOptions] - Workspace job options template.
   * @param {string} [params.delegatedToken] - The IAM delegated token for your IBM Cloud account.  This token is
   * required for requests that are sent via the UI only.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityPlanResult>>}
   */
  public planWorkspaceCommand(
    params: SchematicsV1.PlanWorkspaceCommandParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityPlanResult>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'refreshToken'];
    const _validParams = ['wId', 'refreshToken', 'actionOptions', 'delegatedToken', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'action_options': _params.actionOptions,
    };

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'planWorkspaceCommand'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/plan',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken,
            'delegated_token': _params.delegatedToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Perform a Schematics `refresh` job.
   *
   * Run a Schematics `refresh` job against your workspace. A `refresh` job validates the IBM Cloud resources in your
   * account against the state that is stored in the Terraform statefile of your workspace. If differences are found,
   * the Terraform statefile is updated accordingly. This API returns an activity or job ID that you use to retrieve the
   * URL to the log file with the `GET /v1/workspaces/{id}/actions/{action_id}/logs` API.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions,
   *  see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The ID of the workspace, for which you want to run a Schematics `refresh` job.  To
   * find the ID of your workspace, use the `GET /v1/workspaces` API.
   * @param {string} params.refreshToken - The IAM refresh token for the user or service identity.
   *
   *   **Retrieving refresh token**:
   *   * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
   * "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
   * "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
   *   * For more information, about creating IAM access token and API Docs, refer, [IAM access
   * token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
   * key](/apidocs/iam-identity-token-api#create-api-key).
   *
   *   **Limitation**:
   *   * If the token is expired, you can use `refresh token` to get a new IAM access token.
   *   * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
   *   * When the IAM access token is about to expire, use the API key to create a new access token.
   * @param {string} [params.delegatedToken] - The IAM delegated token for your IBM Cloud account.  This token is
   * required for requests that are sent via the UI only.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityRefreshResult>>}
   */
  public refreshWorkspaceCommand(
    params: SchematicsV1.RefreshWorkspaceCommandParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityRefreshResult>> {
    const _params = { ...params };
    const _requiredParams = ['wId', 'refreshToken'];
    const _validParams = ['wId', 'refreshToken', 'delegatedToken', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'w_id': _params.wId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'refreshWorkspaceCommand'
    );

    const parameters = {
      options: {
        url: '/v1/workspaces/{w_id}/refresh',
        method: 'PUT',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'refresh_token': _params.refreshToken,
            'delegated_token': _params.delegatedToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List jobs.
   *
   * Retrieve a list of all Schematics jobs.  The job displays a list of jobs with the status as `pending`,
   * `in_progess`,  `success`, or `failed`. Jobs are generated when you use the  `POST /v2/jobs`, `PUT
   * /v2/jobs/{job_id}`, or `DELETE /v2/jobs/{job_id}`.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
   * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
   * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
   * `2-6`, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
   * `offset` option. Negative numbers are not supported and are ignored.
   * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
   * integer between 1 and 2000. If no value is provided, 100 is used by default.
   * @param {string} [params.sort] - Name of the field to sort-by;  Use the '.' character to delineate sub-resources and
   * sub-fields (eg. owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending'
   * (default is ascending)   Ignore unrecognized or unsupported sort field.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {string} [params.resource] - Name of the resource (workspaces, actions, environment or controls).
   * @param {string} [params.resourceId] - The Resource Id. It could be an Action-id or Workspace-id.
   * @param {string} [params.actionId] - Action Id.
   * @param {string} [params.workspaceId] - Workspace Id.
   * @param {string} [params.list] - list jobs.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.JobList>>}
   */
  public listJobs(
    params?: SchematicsV1.ListJobsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.JobList>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'offset',
      'limit',
      'sort',
      'profile',
      'resource',
      'resourceId',
      'actionId',
      'workspaceId',
      'list',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'offset': _params.offset,
      'limit': _params.limit,
      'sort': _params.sort,
      'profile': _params.profile,
      'resource': _params.resource,
      'resource_id': _params.resourceId,
      'action_id': _params.actionId,
      'workspace_id': _params.workspaceId,
      'list': _params.list,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listJobs');

    const parameters = {
      options: {
        url: '/v2/jobs',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create a job.
   *
   * Create & launch the Schematics job. It can be used to launch an Ansible playbook against a target hosts.  The job
   * displays a list of jobs with the status as `pending`, `in_progess`, `success`, or `failed`.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.refreshToken - The IAM refresh token for the user or service identity.
   *
   *   **Retrieving refresh token**:
   *   * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
   * "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
   * "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
   *   * For more information, about creating IAM access token and API Docs, refer, [IAM access
   * token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
   * key](/apidocs/iam-identity-token-api#create-api-key).
   *
   *   **Limitation**:
   *   * If the token is expired, you can use `refresh token` to get a new IAM access token.
   *   * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
   *   * When the IAM access token is about to expire, use the API key to create a new access token.
   * @param {string} [params.commandObject] - Name of the Schematics automation resource.
   * @param {string} [params.commandObjectId] - Job command object id (workspace-id, action-id).
   * @param {string} [params.commandName] - Schematics job command name.
   * @param {string} [params.commandParameter] - Schematics job command parameter (playbook-name).
   * @param {string[]} [params.commandOptions] - Command line options for the command.
   * @param {VariableData[]} [params.inputs] - Job inputs used by Action or Workspace.
   * @param {VariableData[]} [params.settings] - Environment variables used by the Job while performing Action or
   * Workspace.
   * @param {string[]} [params.tags] - User defined tags, while running the job.
   * @param {string} [params.location] - List of locations supported by IBM Cloud Schematics service.  While creating
   * your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the
   * location of the IBM Cloud resources, provisioned using Schematics.
   * @param {JobStatus} [params.status] - Job Status.
   * @param {CartOrderData[]} [params.cartOrderData] - Contains the cart order data which can be used for different
   * purpose for eg. service tagging.
   * @param {JobData} [params.data] - Job data.
   * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
   * @param {JobLogSummary} [params.logSummary] - Job log summary record.
   * @param {AgentInfo} [params.agent] - Agent name, Agent id and associated policy ID information.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Job>>}
   */
  public createJob(
    params: SchematicsV1.CreateJobParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Job>> {
    const _params = { ...params };
    const _requiredParams = ['refreshToken'];
    const _validParams = [
      'refreshToken',
      'commandObject',
      'commandObjectId',
      'commandName',
      'commandParameter',
      'commandOptions',
      'inputs',
      'settings',
      'tags',
      'location',
      'status',
      'cartOrderData',
      'data',
      'bastion',
      'logSummary',
      'agent',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'command_object': _params.commandObject,
      'command_object_id': _params.commandObjectId,
      'command_name': _params.commandName,
      'command_parameter': _params.commandParameter,
      'command_options': _params.commandOptions,
      'inputs': _params.inputs,
      'settings': _params.settings,
      'tags': _params.tags,
      'location': _params.location,
      'status': _params.status,
      'cart_order_data': _params.cartOrderData,
      'data': _params.data,
      'bastion': _params.bastion,
      'log_summary': _params.logSummary,
      'agent': _params.agent,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createJob');

    const parameters = {
      options: {
        url: '/v2/jobs',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get a job.
   *
   * Retrieve the detailed information of Job
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - Job Id. Use `GET /v2/jobs` API to look up the Job Ids in your IBM Cloud account.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Job>>}
   */
  public getJob(
    params: SchematicsV1.GetJobParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Job>> {
    const _params = { ...params };
    const _requiredParams = ['jobId'];
    const _validParams = ['jobId', 'profile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'profile': _params.profile,
    };

    const path = {
      'job_id': _params.jobId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getJob');

    const parameters = {
      options: {
        url: '/v2/jobs/{job_id}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update a job.
   *
   * Creates a copy of the Schematics job and relaunches an existing job  by updating the information of an existing
   * Schematics job.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - Job Id. Use `GET /v2/jobs` API to look up the Job Ids in your IBM Cloud account.
   * @param {string} params.refreshToken - The IAM refresh token for the user or service identity.
   *
   *   **Retrieving refresh token**:
   *   * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
   * "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
   * "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
   *   * For more information, about creating IAM access token and API Docs, refer, [IAM access
   * token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
   * key](/apidocs/iam-identity-token-api#create-api-key).
   *
   *   **Limitation**:
   *   * If the token is expired, you can use `refresh token` to get a new IAM access token.
   *   * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
   *   * When the IAM access token is about to expire, use the API key to create a new access token.
   * @param {string} [params.commandObject] - Name of the Schematics automation resource.
   * @param {string} [params.commandObjectId] - Job command object id (workspace-id, action-id).
   * @param {string} [params.commandName] - Schematics job command name.
   * @param {string} [params.commandParameter] - Schematics job command parameter (playbook-name).
   * @param {string[]} [params.commandOptions] - Command line options for the command.
   * @param {VariableData[]} [params.inputs] - Job inputs used by Action or Workspace.
   * @param {VariableData[]} [params.settings] - Environment variables used by the Job while performing Action or
   * Workspace.
   * @param {string[]} [params.tags] - User defined tags, while running the job.
   * @param {string} [params.location] - List of locations supported by IBM Cloud Schematics service.  While creating
   * your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the
   * location of the IBM Cloud resources, provisioned using Schematics.
   * @param {JobStatus} [params.status] - Job Status.
   * @param {CartOrderData[]} [params.cartOrderData] - Contains the cart order data which can be used for different
   * purpose for eg. service tagging.
   * @param {JobData} [params.data] - Job data.
   * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
   * @param {JobLogSummary} [params.logSummary] - Job log summary record.
   * @param {AgentInfo} [params.agent] - Agent name, Agent id and associated policy ID information.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Job>>}
   */
  public updateJob(
    params: SchematicsV1.UpdateJobParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Job>> {
    const _params = { ...params };
    const _requiredParams = ['jobId', 'refreshToken'];
    const _validParams = [
      'jobId',
      'refreshToken',
      'commandObject',
      'commandObjectId',
      'commandName',
      'commandParameter',
      'commandOptions',
      'inputs',
      'settings',
      'tags',
      'location',
      'status',
      'cartOrderData',
      'data',
      'bastion',
      'logSummary',
      'agent',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'command_object': _params.commandObject,
      'command_object_id': _params.commandObjectId,
      'command_name': _params.commandName,
      'command_parameter': _params.commandParameter,
      'command_options': _params.commandOptions,
      'inputs': _params.inputs,
      'settings': _params.settings,
      'tags': _params.tags,
      'location': _params.location,
      'status': _params.status,
      'cart_order_data': _params.cartOrderData,
      'data': _params.data,
      'bastion': _params.bastion,
      'log_summary': _params.logSummary,
      'agent': _params.agent,
    };

    const path = {
      'job_id': _params.jobId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'updateJob');

    const parameters = {
      options: {
        url: '/v2/jobs/{job_id}',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Stop the running Job, and delete the Job.
   *
   * Stop the running Job, and delete the Job.  **Note** You cannot delete or stop the job activity from an ongoing
   * execution of an action defined in the playbook.  You can repeat the execution of same job, whenever you patch or
   * update the action or workspace.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - Job Id. Use `GET /v2/jobs` API to look up the Job Ids in your IBM Cloud account.
   * @param {string} params.refreshToken - The IAM refresh token for the user or service identity.
   *
   *   **Retrieving refresh token**:
   *   * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
   * "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
   * "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
   *   * For more information, about creating IAM access token and API Docs, refer, [IAM access
   * token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
   * key](/apidocs/iam-identity-token-api#create-api-key).
   *
   *   **Limitation**:
   *   * If the token is expired, you can use `refresh token` to get a new IAM access token.
   *   * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
   *   * When the IAM access token is about to expire, use the API key to create a new access token.
   * @param {boolean} [params.force] - Equivalent to -force options in the command line.
   * @param {boolean} [params.propagate] - Auto propagate the chaange or deletion to the dependent resources.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>>}
   */
  public deleteJob(
    params: SchematicsV1.DeleteJobParams
  ): Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['jobId', 'refreshToken'];
    const _validParams = ['jobId', 'refreshToken', 'force', 'propagate', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'job_id': _params.jobId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteJob');

    const parameters = {
      options: {
        url: '/v2/jobs/{job_id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'refresh_token': _params.refreshToken,
            'force': _params.force,
            'propagate': _params.propagate,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get job logs.
   *
   * Retrieve the job logs <h3>Authorization</h3> Schematics support generic authorization for its resources. For more
   * information, about Schematics access and permissions, see [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - Job Id. Use `GET /v2/jobs` API to look up the Job Ids in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.JobLog>>}
   */
  public listJobLogs(
    params: SchematicsV1.ListJobLogsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.JobLog>> {
    const _params = { ...params };
    const _requiredParams = ['jobId'];
    const _validParams = ['jobId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'job_id': _params.jobId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listJobLogs');

    const parameters = {
      options: {
        url: '/v2/jobs/{job_id}/logs',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get output files from the Job record.
   *
   * Get output files from the Job record. For more information, about the Schematics job status, download job logs, and
   * download the output files, see [Download Schematics
   * Job](https://cloud.ibm.com/docs/schematics?topic=schematics-job-download).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - Job Id. Use `GET /v2/jobs` API to look up the Job Ids in your IBM Cloud account.
   * @param {string} params.fileType - The type of file you want to download eg.state_file, plan_json.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.JobFileData>>}
   */
  public getJobFiles(
    params: SchematicsV1.GetJobFilesParams
  ): Promise<SchematicsV1.Response<SchematicsV1.JobFileData>> {
    const _params = { ...params };
    const _requiredParams = ['jobId', 'fileType'];
    const _validParams = ['jobId', 'fileType', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'file_type': _params.fileType,
    };

    const path = {
      'job_id': _params.jobId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getJobFiles');

    const parameters = {
      options: {
        url: '/v2/jobs/{job_id}/files',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * bulkJobs
   ************************/

  /**
   * Delete one or more workspace.
   *
   * Delete one or multiple Schematics workspace. Deleting a workspace does not destroy the resources from the
   * Schematics workspace.
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see
   *    [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.refreshToken - The IAM refresh token for the user or service identity.
   *
   *   **Retrieving refresh token**:
   *   * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
   * "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
   * "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
   *   * For more information, about creating IAM access token and API Docs, refer, [IAM access
   * token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
   * key](/apidocs/iam-identity-token-api#create-api-key).
   *
   *   **Limitation**:
   *   * If the token is expired, you can use `refresh token` to get a new IAM access token.
   *   * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
   *   * When the IAM access token is about to expire, use the API key to create a new access token.
   * @param {string} [params.job] - Job type such as delete of a batch operation.
   * @param {string} [params.version] - A version of the terraform template.
   * @param {string[]} [params.workspaces] - The List of workspaces to be deleted.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceBulkDeleteResponse>>}
   */
  public createWorkspaceDeletionJob(
    params: SchematicsV1.CreateWorkspaceDeletionJobParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceBulkDeleteResponse>> {
    const _params = { ...params };
    const _requiredParams = ['refreshToken'];
    const _validParams = ['refreshToken', 'job', 'version', 'workspaces', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'job': _params.job,
      'version': _params.version,
      'workspaces': _params.workspaces,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'createWorkspaceDeletionJob'
    );

    const parameters = {
      options: {
        url: '/v1/workspace_jobs',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get the workspace deletion job status.
   *
   * Retrieve detailed information for a workspace deletion job status.
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see
   *    [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wjId - The workspace job ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceJobResponse>>}
   */
  public getWorkspaceDeletionJobStatus(
    params: SchematicsV1.GetWorkspaceDeletionJobStatusParams
  ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceJobResponse>> {
    const _params = { ...params };
    const _requiredParams = ['wjId'];
    const _validParams = ['wjId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'wj_id': _params.wjId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getWorkspaceDeletionJobStatus'
    );

    const parameters = {
      options: {
        url: '/v1/workspace_jobs/{wj_id}/status',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * blueprint
   ************************/

  /**
   * List blueprint.
   *
   * Retrieve a list of Schematics Blueprints from your IBM Cloud account that you have access to. The list of
   * blueprints that is returned depends on the API endpoint that you use. For example, if you use an API endpoint for a
   * geography, such as North America, only blueprints that are created in us-south or us-east are returned. </b> </b>
   * For more information about supported API endpoints, see [API
   * endpoints](https://cloud.ibm.com/apidocs/schematics/schematics#api-endpoints).
   *
   *   <h3>Authorization</h3>
   *
   *   Schematics support generic authorization for its resources.
   *   For more information, about Schematics access and permissions, see [Schematics service access
   *   roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
   * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
   * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
   * `2-6`, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
   * `offset` option. Negative numbers are not supported and are ignored.
   * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
   * integer between 1 and 2000. If no value is provided, 100 is used by default.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.BlueprintList>>}
   */
  public listBlueprint(
    params?: SchematicsV1.ListBlueprintParams
  ): Promise<SchematicsV1.Response<SchematicsV1.BlueprintList>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['offset', 'limit', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'offset': _params.offset,
      'limit': _params.limit,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listBlueprint');

    const parameters = {
      options: {
        url: '/v2/blueprints',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create a blueprint.
   *
   * Deploying an IBM Cloud Schematics Blueprint environment and cloud resources by using a blueprint template is a
   * two-step process. The first step is create a blueprint configuration in Schematics, the second step deploys the
   * configuration by using blueprint apply operation. </br></br> Create an IBM Cloud Schematics Blueprint that points
   * to the blueprint configuration where your blueprint template are stored. The blueprint config specifies the Git
   * source and release of the blueprint template, input files, and any input values that are used to create cloud
   * resources. Blueprint creates a blueprint module resource in Schematics for each module definition in the template.
   * Blueprint module resources are initialized with the Terraform module source from the Git repository specified in
   * the module definition, and module inputs. </br></br>Blueprint apply create, or update resources in a blueprint
   * environment. For more information about apply blueprint configuration changes to an environment, see [blueprint
   * apply](https://cloud.ibm.com/docs/schematics?topic=schematics-apply-blueprint&interface=api).
   *
   *   <h3>Authorization</h3>
   *
   *   Schematics support generic authorization for its resources.
   *   For more information, about Schematics access and permissions, see [Schematics service access
   *   roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.name - Blueprint name (unique for an account).
   * @param {string} [params.schemaVersion] - Schema version.
   * @param {ExternalSource} [params.source] - Source of templates, playbooks, or controls.
   * @param {BlueprintConfigItem[]} [params.config] - Blueprint input configuration definition.
   * @param {string} [params.description] - Blueprint description.
   * @param {string} [params.resourceGroup] - Resource-group name for the blueprint.  By default, blueprint will be
   * created in Default Resource Group.
   * @param {string[]} [params.tags] - Blueprint instance tags.
   * @param {string} [params.location] - List of locations supported by IBM Cloud Schematics service.  While creating
   * your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the
   * location of the IBM Cloud resources, provisioned using Schematics.
   * @param {VariableData[]} [params.inputs] - Additional inputs configuration for the blueprint.
   * @param {VariableData[]} [params.settings] - Input environemnt settings for blueprint.
   * @param {BlueprintFlow} [params.flow] - Flow definitions for all the blueprint command.
   * @param {UserState} [params.userState] - User defined status of the Schematics object.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Blueprint>>}
   */
  public createBlueprint(
    params: SchematicsV1.CreateBlueprintParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Blueprint>> {
    const _params = { ...params };
    const _requiredParams = ['name'];
    const _validParams = [
      'name',
      'schemaVersion',
      'source',
      'config',
      'description',
      'resourceGroup',
      'tags',
      'location',
      'inputs',
      'settings',
      'flow',
      'userState',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'schema_version': _params.schemaVersion,
      'source': _params.source,
      'config': _params.config,
      'description': _params.description,
      'resource_group': _params.resourceGroup,
      'tags': _params.tags,
      'location': _params.location,
      'inputs': _params.inputs,
      'settings': _params.settings,
      'flow': _params.flow,
      'user_state': _params.userState,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createBlueprint');

    const parameters = {
      options: {
        url: '/v2/blueprints',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get a blueprint.
   *
   * Retrieve detailed information for a blueprint in your IBM Cloud account. For more information about displaying
   * blueprint example, see [displaying
   * blueprint](https://cloud.ibm.com/docs/schematics?topic=schematics-list-blueprint&interface=api).
   *
   *   <h3>Authorization</h3>
   *
   *   Schematics support generic authorization for its resources.
   *   For more information, about Schematics access and permissions, see [Schematics service access
   *   roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.blueprintId - Environment Id.  Use `GET /v2/blueprints` API to look up the order ids in your
   * IBM Cloud account.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Blueprint>>}
   */
  public getBlueprint(
    params: SchematicsV1.GetBlueprintParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Blueprint>> {
    const _params = { ...params };
    const _requiredParams = ['blueprintId'];
    const _validParams = ['blueprintId', 'profile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'profile': _params.profile,
    };

    const path = {
      'blueprint_id': _params.blueprintId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getBlueprint');

    const parameters = {
      options: {
        url: '/v2/blueprints/{blueprint_id}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update a blueprint.
   *
   * Use this API to update or replace the entire blueprint, including the blueprint configuration or module resources
   * that your blueprint points to. For more information about update blueprint example, see [Update blueprint
   * configuration](https://cloud.ibm.com/docs/schematics?topic=schematics-update-blueprint&interface=api).
   *
   *   <h3>Authorization</h3>
   *
   *   Schematics support generic authorization for its resources.
   *   For more information, about Schematics access and permissions, see [Schematics service access
   *   roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.blueprintId - Environment Id.  Use `GET /v2/blueprints` API to look up the order ids in your
   * IBM Cloud account.
   * @param {string} params.name - Blueprint name (unique for an account).
   * @param {string} [params.schemaVersion] - Schema version.
   * @param {ExternalSource} [params.source] - Source of templates, playbooks, or controls.
   * @param {BlueprintConfigItem[]} [params.config] - Blueprint input configuration definition.
   * @param {string} [params.description] - Blueprint description.
   * @param {string} [params.resourceGroup] - Resource-group name for the blueprint.  By default, blueprint will be
   * created in Default Resource Group.
   * @param {string[]} [params.tags] - Blueprint instance tags.
   * @param {string} [params.location] - List of locations supported by IBM Cloud Schematics service.  While creating
   * your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the
   * location of the IBM Cloud resources, provisioned using Schematics.
   * @param {VariableData[]} [params.inputs] - Additional inputs configuration for the blueprint.
   * @param {VariableData[]} [params.settings] - Input environemnt settings for blueprint.
   * @param {BlueprintFlow} [params.flow] - Flow definitions for all the blueprint command.
   * @param {UserState} [params.userState] - User defined status of the Schematics object.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Blueprint>>}
   */
  public replaceBlueprint(
    params: SchematicsV1.ReplaceBlueprintParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Blueprint>> {
    const _params = { ...params };
    const _requiredParams = ['blueprintId', 'name'];
    const _validParams = [
      'blueprintId',
      'name',
      'schemaVersion',
      'source',
      'config',
      'description',
      'resourceGroup',
      'tags',
      'location',
      'inputs',
      'settings',
      'flow',
      'userState',
      'profile',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'schema_version': _params.schemaVersion,
      'source': _params.source,
      'config': _params.config,
      'description': _params.description,
      'resource_group': _params.resourceGroup,
      'tags': _params.tags,
      'location': _params.location,
      'inputs': _params.inputs,
      'settings': _params.settings,
      'flow': _params.flow,
      'user_state': _params.userState,
    };

    const query = {
      'profile': _params.profile,
    };

    const path = {
      'blueprint_id': _params.blueprintId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'replaceBlueprint');

    const parameters = {
      options: {
        url: '/v2/blueprints/{blueprint_id}',
        method: 'PUT',
        body,
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete a blueprint.
   *
   * Deleting a blueprint environment is a two stage process that first destroys all the associated cloud resources and
   * second deletes the blueprint configuration in IBM Cloud Schematics. </br> </br>For more information about destroy
   * blueprint and delete blueprint, see [destroying blueprint
   * environment](https://cloud.ibm.com/docs/schematics?topic=schematics-destroy-blueprint&interface=api) and [deleting
   * blueprint configuration](https://cloud.ibm.com/docs/schematics?topic=schematics-delete-blueprint&interface=api).
   *
   *   <h3>Authorization</h3>
   *
   *   Schematics support generic authorization for its resources.
   *   For more information, about Schematics access and permissions, see [Schematics service access
   *   roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.blueprintId - Environment Id.  Use `GET /v2/blueprints` API to look up the order ids in your
   * IBM Cloud account.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {boolean} [params.destroy] - Destroy the resources before deleting the blueprint.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>>}
   */
  public deleteBlueprint(
    params: SchematicsV1.DeleteBlueprintParams
  ): Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['blueprintId'];
    const _validParams = ['blueprintId', 'profile', 'destroy', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'profile': _params.profile,
      'destroy': _params.destroy,
    };

    const path = {
      'blueprint_id': _params.blueprintId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteBlueprint');

    const parameters = {
      options: {
        url: '/v2/blueprints/{blueprint_id}',
        method: 'DELETE',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Upload a TAR file to a blueprint.
   *
   * Update your blueprint configuration by uploading tape archive file (.tar) file from your local machine.
   *
   *   <h3>Authorization</h3>
   *
   *   Schematics support generic authorization for its resources.
   *   For more information, about Schematics access and permissions, see [Schematics service access
   *   roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.blueprintId - Environment Id.  Use `GET /v2/blueprints` API to look up the order ids in your
   * IBM Cloud account.
   * @param {NodeJS.ReadableStream | Buffer} [params.file] - Template tar file.
   * @param {string} [params.fileContentType] - The content type of file.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.BlueprintTemplateRepoTarUploadResponse>>}
   */
  public uploadTemplateTarBlueprint(
    params: SchematicsV1.UploadTemplateTarBlueprintParams
  ): Promise<SchematicsV1.Response<SchematicsV1.BlueprintTemplateRepoTarUploadResponse>> {
    const _params = { ...params };
    const _requiredParams = ['blueprintId'];
    const _validParams = ['blueprintId', 'file', 'fileContentType', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const formData = {
      'file': {
        data: _params.file,
        contentType: _params.fileContentType,
      },
    };

    const path = {
      'blueprint_id': _params.blueprintId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'uploadTemplateTarBlueprint'
    );

    const parameters = {
      options: {
        url: '/v2/blueprints/{blueprint_id}/template_repo_upload',
        method: 'PUT',
        path,
        formData,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * inventory
   ************************/

  /**
   * List inventory definitions.
   *
   * Retrieve a list of all Schematics inventories that depends on the API endpoint that you have access. For example,
   * if you use an API endpoint for a geography, such as North America, only inventories that are created in `us-south`
   * or `us-east` are retrieved. For more information, about supported API endpoints, see
   * [APIendpoints](/apidocs/schematics#api-endpoints).
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
   * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
   * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
   * `2-6`, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
   * `offset` option. Negative numbers are not supported and are ignored.
   * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
   * integer between 1 and 2000. If no value is provided, 100 is used by default.
   * @param {string} [params.sort] - Name of the field to sort-by;  Use the '.' character to delineate sub-resources and
   * sub-fields (eg. owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending'
   * (default is ascending)   Ignore unrecognized or unsupported sort field.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecordList>>}
   */
  public listInventories(
    params?: SchematicsV1.ListInventoriesParams
  ): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecordList>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['offset', 'limit', 'sort', 'profile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'offset': _params.offset,
      'limit': _params.limit,
      'sort': _params.sort,
      'profile': _params.profile,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listInventories');

    const parameters = {
      options: {
        url: '/v2/inventories',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create an inventory definition.
   *
   * Create an IBM Cloud Schematics inventory as a single IBM Cloud resource where you want to run Ansible playbook by
   * using Schematics actions. For more information, about inventory host groups, refer to [creating static and dynamic
   * inventory for Schematics actions](https://cloud.ibm.com/docs/schematics?topic=schematics-inventories-setup).
   *
   *  **Note** you cannot update the location and region, resource group once an action is created. Also, make sure your
   * IP addresses are in the [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
   *  If your Git repository already contains a host file. Schematics does not overwrite the host file already present
   * in your Git repository.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.name] - The unique name of your Inventory definition. The name can be up to 128 characters
   * long and can include alphanumeric characters, spaces, dashes, and underscores.
   * @param {string} [params.description] - The description of your Inventory definition. The description can be up to
   * 2048 characters long in size.
   * @param {string} [params.location] - List of locations supported by IBM Cloud Schematics service.  While creating
   * your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the
   * location of the IBM Cloud resources, provisioned using Schematics.
   * @param {string} [params.resourceGroup] - Resource-group name for the Inventory definition.   By default, Inventory
   * definition will be created in Default Resource Group.
   * @param {string} [params.inventoriesIni] - Input inventory of host and host group for the playbook, in the `.ini`
   * file format.
   * @param {string[]} [params.resourceQueries] - Input resource query definitions that is used to dynamically generate
   * the inventory of host and host group for the playbook.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>>}
   */
  public createInventory(
    params?: SchematicsV1.CreateInventoryParams
  ): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'name',
      'description',
      'location',
      'resourceGroup',
      'inventoriesIni',
      'resourceQueries',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'description': _params.description,
      'location': _params.location,
      'resource_group': _params.resourceGroup,
      'inventories_ini': _params.inventoriesIni,
      'resource_queries': _params.resourceQueries,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createInventory');

    const parameters = {
      options: {
        url: '/v2/inventories',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get an inventory definition.
   *
   * Use this API to retrieve the detailed information for a resource inventory definition used to target an action in
   * your IBM Cloud account. For more information, about inventory get, refer to [ibmcloud schematics inventory
   * get](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-get-inv).
   *
   *  **Note** you can fetch only the location and region, resource group from where your inventory is created.
   *  Also, make sure your IP addresses are in the
   * [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.inventoryId - Resource Inventory Id.  Use `GET /v2/inventories` API to look up the Resource
   * Inventory definition Ids  in your IBM Cloud account.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>>}
   */
  public getInventory(
    params: SchematicsV1.GetInventoryParams
  ): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>> {
    const _params = { ...params };
    const _requiredParams = ['inventoryId'];
    const _validParams = ['inventoryId', 'profile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'profile': _params.profile,
    };

    const path = {
      'inventory_id': _params.inventoryId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getInventory');

    const parameters = {
      options: {
        url: '/v2/inventories/{inventory_id}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update an inventory definition.
   *
   * Use this API to update the inventory definition resource used to target an action. For more information, about
   * inventory update, refer to [ibmcloud schematics inventory
   * update](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-update-inv).
   *
   *  **Note** you cannot update the location and region, resource group once an action is created.
   *  Also, make sure your IP addresses are in the
   * [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.inventoryId - Resource Inventory Id.  Use `GET /v2/inventories` API to look up the Resource
   * Inventory definition Ids  in your IBM Cloud account.
   * @param {string} [params.name] - The unique name of your Inventory definition. The name can be up to 128 characters
   * long and can include alphanumeric characters, spaces, dashes, and underscores.
   * @param {string} [params.description] - The description of your Inventory definition. The description can be up to
   * 2048 characters long in size.
   * @param {string} [params.location] - List of locations supported by IBM Cloud Schematics service.  While creating
   * your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the
   * location of the IBM Cloud resources, provisioned using Schematics.
   * @param {string} [params.resourceGroup] - Resource-group name for the Inventory definition.   By default, Inventory
   * definition will be created in Default Resource Group.
   * @param {string} [params.inventoriesIni] - Input inventory of host and host group for the playbook, in the `.ini`
   * file format.
   * @param {string[]} [params.resourceQueries] - Input resource query definitions that is used to dynamically generate
   * the inventory of host and host group for the playbook.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>>}
   */
  public replaceInventory(
    params: SchematicsV1.ReplaceInventoryParams
  ): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>> {
    const _params = { ...params };
    const _requiredParams = ['inventoryId'];
    const _validParams = [
      'inventoryId',
      'name',
      'description',
      'location',
      'resourceGroup',
      'inventoriesIni',
      'resourceQueries',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'description': _params.description,
      'location': _params.location,
      'resource_group': _params.resourceGroup,
      'inventories_ini': _params.inventoriesIni,
      'resource_queries': _params.resourceQueries,
    };

    const path = {
      'inventory_id': _params.inventoryId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'replaceInventory');

    const parameters = {
      options: {
        url: '/v2/inventories/{inventory_id}',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete an inventory definition.
   *
   * Use this API to delete the resource inventory definition by using the inventory ID that you want to run against.
   * For more information, about inventory delete, refer to [ibmcloud schematics inventory
   * delete](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-delete-inventory).
   *
   *  **Note** you cannot delete the location and region, resource group from where your inventory is created. Also,
   * make sure your IP addresses are in the
   * [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.inventoryId - Resource Inventory Id.  Use `GET /v2/inventories` API to look up the Resource
   * Inventory definition Ids  in your IBM Cloud account.
   * @param {boolean} [params.force] - Equivalent to -force options in the command line.
   * @param {boolean} [params.propagate] - Auto propagate the chaange or deletion to the dependent resources.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>>}
   */
  public deleteInventory(
    params: SchematicsV1.DeleteInventoryParams
  ): Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['inventoryId'];
    const _validParams = ['inventoryId', 'force', 'propagate', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'inventory_id': _params.inventoryId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteInventory');

    const parameters = {
      options: {
        url: '/v2/inventories/{inventory_id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'force': _params.force,
            'propagate': _params.propagate,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List resource queries.
   *
   * Retrieve the list of resource query definitions that you have access to.  The list of resource queries that is
   * returned depends on the API  endpoint that you use. For example, if you use an API endpoint for a geography, such
   * as North America, only resource query definitions that are created in `us-south` or `us-east` are retrieved. For
   * more information, about supported API endpoints, see [API endpoints](/apidocs/schematics#api-endpoints).
   * <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
   * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
   * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
   * `2-6`, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
   * `offset` option. Negative numbers are not supported and are ignored.
   * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
   * integer between 1 and 2000. If no value is provided, 100 is used by default.
   * @param {string} [params.sort] - Name of the field to sort-by;  Use the '.' character to delineate sub-resources and
   * sub-fields (eg. owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending'
   * (default is ascending)   Ignore unrecognized or unsupported sort field.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecordList>>}
   */
  public listResourceQuery(
    params?: SchematicsV1.ListResourceQueryParams
  ): Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecordList>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['offset', 'limit', 'sort', 'profile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'offset': _params.offset,
      'limit': _params.limit,
      'sort': _params.sort,
      'profile': _params.profile,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listResourceQuery');

    const parameters = {
      options: {
        url: '/v2/resources_query',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create resource query.
   *
   * Use this API to create a resource query definition that will be used to select an IBM Cloud resource or a group of
   * resources as the dynamic inventory for the Schematics Actions.  For more information, about resource query
   * commands, refer to  [ibmcloud schematics resource query
   * create](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-create-rq).
   * **Note** you cannot update the location and region, resource group  once an action is created. Also, make sure your
   * IP addresses are  in the [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
   * If your Git repository already contains a host file.  Schematics does not overwrite the host file already present
   * in your Git repository.
   * <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.type] - Resource type (cluster, vsi, icd, vpc).
   * @param {string} [params.name] - Resource query name.
   * @param {ResourceQuery[]} [params.queries] -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>>}
   */
  public createResourceQuery(
    params?: SchematicsV1.CreateResourceQueryParams
  ): Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['type', 'name', 'queries', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'type': _params.type,
      'name': _params.name,
      'queries': _params.queries,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'createResourceQuery'
    );

    const parameters = {
      options: {
        url: '/v2/resources_query',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get resources query.
   *
   * Use this API to retrieve the information resource query by Id.  For more information, about resource query
   * commands, refer to  [ibmcloud schematics resource query
   * get](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-get-rq).
   * <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.queryId - Resource query Id.  Use `GET /v2/resource_query` API to look up the Resource query
   * definition Ids  in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>>}
   */
  public getResourcesQuery(
    params: SchematicsV1.GetResourcesQueryParams
  ): Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>> {
    const _params = { ...params };
    const _requiredParams = ['queryId'];
    const _validParams = ['queryId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'query_id': _params.queryId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getResourcesQuery');

    const parameters = {
      options: {
        url: '/v2/resources_query/{query_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update resources query definition.
   *
   * Use this API to update the resource query definition used to build  the dynamic inventory for the Schematics
   * Action.  For more information, about resource query commands, refer to [ibmcloud schematics resource query
   * update](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-update-rq).
   * **Note** you cannot update the location and region, resource group  once a resource query is created. Also, make
   * sure your IP addresses  are in the
   * [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
   * <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.queryId - Resource query Id.  Use `GET /v2/resource_query` API to look up the Resource query
   * definition Ids  in your IBM Cloud account.
   * @param {string} [params.type] - Resource type (cluster, vsi, icd, vpc).
   * @param {string} [params.name] - Resource query name.
   * @param {ResourceQuery[]} [params.queries] -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>>}
   */
  public replaceResourcesQuery(
    params: SchematicsV1.ReplaceResourcesQueryParams
  ): Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>> {
    const _params = { ...params };
    const _requiredParams = ['queryId'];
    const _validParams = ['queryId', 'type', 'name', 'queries', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'type': _params.type,
      'name': _params.name,
      'queries': _params.queries,
    };

    const path = {
      'query_id': _params.queryId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'replaceResourcesQuery'
    );

    const parameters = {
      options: {
        url: '/v2/resources_query/{query_id}',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Run the resource query.
   *
   * Run the resource query.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.queryId - Resource query Id.  Use `GET /v2/resource_query` API to look up the Resource query
   * definition Ids  in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryResponseRecord>>}
   */
  public executeResourceQuery(
    params: SchematicsV1.ExecuteResourceQueryParams
  ): Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryResponseRecord>> {
    const _params = { ...params };
    const _requiredParams = ['queryId'];
    const _validParams = ['queryId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'query_id': _params.queryId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'executeResourceQuery'
    );

    const parameters = {
      options: {
        url: '/v2/resources_query/{query_id}',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete resources query.
   *
   * Use this API to delete the resource query definition by Id.  For more information, about resource query commands,
   * refer to  [ibmcloud schematics resource query
   * delete](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-delete-resource-query).
   *
   * <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.queryId - Resource query Id.  Use `GET /v2/resource_query` API to look up the Resource query
   * definition Ids  in your IBM Cloud account.
   * @param {boolean} [params.force] - Equivalent to -force options in the command line.
   * @param {boolean} [params.propagate] - Auto propagate the chaange or deletion to the dependent resources.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>>}
   */
  public deleteResourcesQuery(
    params: SchematicsV1.DeleteResourcesQueryParams
  ): Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['queryId'];
    const _validParams = ['queryId', 'force', 'propagate', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'query_id': _params.queryId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'deleteResourcesQuery'
    );

    const parameters = {
      options: {
        url: '/v2/resources_query/{query_id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'force': _params.force,
            'propagate': _params.propagate,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * agent
   ************************/

  /**
   * Get all registered/unregistered agents in the Account.
   *
   * Get all registered or unregistered agents, in the Account.
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see [Schematics service access
   *    roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
   * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
   * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
   * `2-6`, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
   * `offset` option. Negative numbers are not supported and are ignored.
   * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
   * integer between 1 and 2000. If no value is provided, 100 is used by default.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {string} [params.filter] - Use `new` to get all unregistered agents; use `saved` to get all registered
   * agents.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.AgentList>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public listAgent(
    params?: SchematicsV1.ListAgentParams
  ): Promise<SchematicsV1.Response<SchematicsV1.AgentList>> {
    SchematicsV1._logger.warn('A deprecated operation has been invoked: listAgent');
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['offset', 'limit', 'profile', 'filter', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'offset': _params.offset,
      'limit': _params.limit,
      'profile': _params.profile,
      'filter': _params.filter,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listAgent');

    const parameters = {
      options: {
        url: '/v2/settings/agents',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Register the agent with schematics.
   *
   * Register the agent with schematics
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see [Schematics service access
   *    roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.name - The name of the agent (must be unique, for an account).
   * @param {string} params.agentLocation - The location where agent is deployed in the user environment.
   * @param {string} params.location - List of locations supported by IBM Cloud Schematics service.  While creating your
   * workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location
   * of the IBM Cloud resources, provisioned using Schematics.
   * @param {string} params.profileId - The IAM trusted profile id, used by the Agent instance.
   * @param {string} [params.description] - Agent description.
   * @param {string} [params.resourceGroup] - The resource-group name for the agent.  By default, Agent will be
   * registered in Default Resource Group.
   * @param {string[]} [params.tags] - Tags for the agent.
   * @param {AgentUserState} [params.userState] - User defined status of the agent.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Agent>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public registerAgent(
    params: SchematicsV1.RegisterAgentParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Agent>> {
    SchematicsV1._logger.warn('A deprecated operation has been invoked: registerAgent');
    const _params = { ...params };
    const _requiredParams = ['name', 'agentLocation', 'location', 'profileId'];
    const _validParams = [
      'name',
      'agentLocation',
      'location',
      'profileId',
      'description',
      'resourceGroup',
      'tags',
      'userState',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'agent_location': _params.agentLocation,
      'location': _params.location,
      'profile_id': _params.profileId,
      'description': _params.description,
      'resource_group': _params.resourceGroup,
      'tags': _params.tags,
      'user_state': _params.userState,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'registerAgent');

    const parameters = {
      options: {
        url: '/v2/settings/agents',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get the registered agent details.
   *
   * Reterive list the registered agent details
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see [Schematics service access
   *    roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Agent>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public getAgent(
    params: SchematicsV1.GetAgentParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Agent>> {
    SchematicsV1._logger.warn('A deprecated operation has been invoked: getAgent');
    const _params = { ...params };
    const _requiredParams = ['agentId'];
    const _validParams = ['agentId', 'profile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'profile': _params.profile,
    };

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getAgent');

    const parameters = {
      options: {
        url: '/v2/settings/agents/{agent_id}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Deregister the agent.
   *
   * Deregistering an agent.
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see [Schematics service access
   *    roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public deleteAgent(
    params: SchematicsV1.DeleteAgentParams
  ): Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>> {
    SchematicsV1._logger.warn('A deprecated operation has been invoked: deleteAgent');
    const _params = { ...params };
    const _requiredParams = ['agentId'];
    const _validParams = ['agentId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteAgent');

    const parameters = {
      options: {
        url: '/v2/settings/agents/{agent_id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {}, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update the agent registration.
   *
   * Update the agent registeration.
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see [Schematics service access
   *    roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {string} params.name - The name of the agent (must be unique, for an account).
   * @param {string} params.agentLocation - The location where agent is deployed in the user environment.
   * @param {string} params.location - List of locations supported by IBM Cloud Schematics service.  While creating your
   * workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location
   * of the IBM Cloud resources, provisioned using Schematics.
   * @param {string} params.profileId - The IAM trusted profile id, used by the Agent instance.
   * @param {string} [params.description] - Agent description.
   * @param {string} [params.resourceGroup] - The resource-group name for the agent.  By default, Agent will be
   * registered in Default Resource Group.
   * @param {string[]} [params.tags] - Tags for the agent.
   * @param {AgentUserState} [params.userState] - User defined status of the agent.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Agent>>}
   * @deprecated this method is deprecated and may be removed in a future release
   */
  public updateAgentRegistration(
    params: SchematicsV1.UpdateAgentRegistrationParams
  ): Promise<SchematicsV1.Response<SchematicsV1.Agent>> {
    SchematicsV1._logger.warn('A deprecated operation has been invoked: updateAgentRegistration');
    const _params = { ...params };
    const _requiredParams = ['agentId', 'name', 'agentLocation', 'location', 'profileId'];
    const _validParams = [
      'agentId',
      'name',
      'agentLocation',
      'location',
      'profileId',
      'description',
      'resourceGroup',
      'tags',
      'userState',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'agent_location': _params.agentLocation,
      'location': _params.location,
      'profile_id': _params.profileId,
      'description': _params.description,
      'resource_group': _params.resourceGroup,
      'tags': _params.tags,
      'user_state': _params.userState,
    };

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'updateAgentRegistration'
    );

    const parameters = {
      options: {
        url: '/v2/settings/agents/{agent_id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get all agents in the Account.
   *
   * Get all registered or unregistered agents, in the Account.
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see [Schematics service access
   *    roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
   * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
   * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
   * `2-6`, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
   * `offset` option. Negative numbers are not supported and are ignored.
   * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
   * integer between 1 and 2000. If no value is provided, 100 is used by default.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {string} [params.filter] - Use `new` to get all unregistered agents; use `saved` to get all registered
   * agents.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.AgentDataList>>}
   */
  public listAgentData(
    params?: SchematicsV1.ListAgentDataParams
  ): Promise<SchematicsV1.Response<SchematicsV1.AgentDataList>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = ['offset', 'limit', 'profile', 'filter', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'offset': _params.offset,
      'limit': _params.limit,
      'profile': _params.profile,
      'filter': _params.filter,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listAgentData');

    const parameters = {
      options: {
        url: '/v2/agents',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Create an agent.
   *
   * Create an agent using schematics
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see [Schematics service access
   *    roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.name - The name of the agent (must be unique, for an account).
   * @param {string} params.resourceGroup - The resource-group name for the agent.  By default, agent will be registered
   * in Default Resource Group.
   * @param {string} params.version - Agent version.
   * @param {string} params.schematicsLocation - List of locations supported by IBM Cloud Schematics service.  While
   * creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit
   * the location of the IBM Cloud resources, provisioned using Schematics.
   * @param {string} params.agentLocation - The location where agent is deployed in the user environment.
   * @param {AgentInfrastructure} params.agentInfrastructure - The infrastructure parameters used by the agent.
   * @param {string} [params.description] - Agent description.
   * @param {string[]} [params.tags] - Tags for the agent.
   * @param {VariableData[]} [params.agentInputs] - Additional input variables for the agent.
   * @param {AgentUserState} [params.userState] - User defined status of the agent.
   * @param {AgentKPIData} [params.agentKpi] - Schematics Agent key performance indicators.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.AgentData>>}
   */
  public createAgentData(
    params: SchematicsV1.CreateAgentDataParams
  ): Promise<SchematicsV1.Response<SchematicsV1.AgentData>> {
    const _params = { ...params };
    const _requiredParams = [
      'name',
      'resourceGroup',
      'version',
      'schematicsLocation',
      'agentLocation',
      'agentInfrastructure',
    ];
    const _validParams = [
      'name',
      'resourceGroup',
      'version',
      'schematicsLocation',
      'agentLocation',
      'agentInfrastructure',
      'description',
      'tags',
      'agentInputs',
      'userState',
      'agentKpi',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'resource_group': _params.resourceGroup,
      'version': _params.version,
      'schematics_location': _params.schematicsLocation,
      'agent_location': _params.agentLocation,
      'agent_infrastructure': _params.agentInfrastructure,
      'description': _params.description,
      'tags': _params.tags,
      'agent_inputs': _params.agentInputs,
      'user_state': _params.userState,
      'agent_kpi': _params.agentKpi,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createAgentData');

    const parameters = {
      options: {
        url: '/v2/agents',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get the agent details.
   *
   * Reterive the agent details
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see [Schematics service access
   *    roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.AgentData>>}
   */
  public getAgentData(
    params: SchematicsV1.GetAgentDataParams
  ): Promise<SchematicsV1.Response<SchematicsV1.AgentData>> {
    const _params = { ...params };
    const _requiredParams = ['agentId'];
    const _validParams = ['agentId', 'profile', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'profile': _params.profile,
    };

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getAgentData');

    const parameters = {
      options: {
        url: '/v2/agents/{agent_id}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update the agent.
   *
   * Update the agent.
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see [Schematics service access
   *    roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {string} params.name - The name of the agent (must be unique, for an account).
   * @param {string} params.resourceGroup - The resource-group name for the agent.  By default, agent will be registered
   * in Default Resource Group.
   * @param {string} params.version - Agent version.
   * @param {string} params.schematicsLocation - List of locations supported by IBM Cloud Schematics service.  While
   * creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit
   * the location of the IBM Cloud resources, provisioned using Schematics.
   * @param {string} params.agentLocation - The location where agent is deployed in the user environment.
   * @param {AgentInfrastructure} params.agentInfrastructure - The infrastructure parameters used by the agent.
   * @param {string} [params.description] - Agent description.
   * @param {string[]} [params.tags] - Tags for the agent.
   * @param {VariableData[]} [params.agentInputs] - Additional input variables for the agent.
   * @param {AgentUserState} [params.userState] - User defined status of the agent.
   * @param {AgentKPIData} [params.agentKpi] - Schematics Agent key performance indicators.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.AgentData>>}
   */
  public updateAgentData(
    params: SchematicsV1.UpdateAgentDataParams
  ): Promise<SchematicsV1.Response<SchematicsV1.AgentData>> {
    const _params = { ...params };
    const _requiredParams = [
      'agentId',
      'name',
      'resourceGroup',
      'version',
      'schematicsLocation',
      'agentLocation',
      'agentInfrastructure',
    ];
    const _validParams = [
      'agentId',
      'name',
      'resourceGroup',
      'version',
      'schematicsLocation',
      'agentLocation',
      'agentInfrastructure',
      'description',
      'tags',
      'agentInputs',
      'userState',
      'agentKpi',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'name': _params.name,
      'resource_group': _params.resourceGroup,
      'version': _params.version,
      'schematics_location': _params.schematicsLocation,
      'agent_location': _params.agentLocation,
      'agent_infrastructure': _params.agentInfrastructure,
      'description': _params.description,
      'tags': _params.tags,
      'agent_inputs': _params.agentInputs,
      'user_state': _params.userState,
      'agent_kpi': _params.agentKpi,
    };

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'updateAgentData');

    const parameters = {
      options: {
        url: '/v2/agents/{agent_id}',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete the agent.
   *
   * Delete an agent.
   *
   *    <h3>Authorization</h3>
   *
   *    Schematics support generic authorization for its resources.
   *    For more information, about Schematics access and permissions, see [Schematics service access
   *    roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>>}
   */
  public deleteAgentData(
    params: SchematicsV1.DeleteAgentDataParams
  ): Promise<SchematicsV1.Response<SchematicsV1.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['agentId'];
    const _validParams = ['agentId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteAgentData');

    const parameters = {
      options: {
        url: '/v2/agents/{agent_id}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {}, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get pre-requisite scanner job status.
   *
   * Get pre-requisite scanner job status.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.AgentPRSJob>>}
   */
  public getPrsAgentJob(
    params: SchematicsV1.GetPrsAgentJobParams
  ): Promise<SchematicsV1.Response<SchematicsV1.AgentPRSJob>> {
    const _params = { ...params };
    const _requiredParams = ['agentId'];
    const _validParams = ['agentId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getPrsAgentJob');

    const parameters = {
      options: {
        url: '/v2/agents/{agent_id}/prs',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Run pre-requisite scanner job before deploying agent.
   *
   * Run pre-requisite scanner job before deploying agent.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {boolean} [params.force] - Equivalent to -force options in the command line, default is false.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.AgentPRSJob>>}
   */
  public prsAgentJob(
    params: SchematicsV1.PrsAgentJobParams
  ): Promise<SchematicsV1.Response<SchematicsV1.AgentPRSJob>> {
    const _params = { ...params };
    const _requiredParams = ['agentId'];
    const _validParams = ['agentId', 'force', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'force': _params.force,
    };

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'prsAgentJob');

    const parameters = {
      options: {
        url: '/v2/agents/{agent_id}/prs',
        method: 'PUT',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get the agent health check job status.
   *
   * Get the agent health check job status.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.AgentHealthJob>>}
   */
  public getHealthCheckAgentJob(
    params: SchematicsV1.GetHealthCheckAgentJobParams
  ): Promise<SchematicsV1.Response<SchematicsV1.AgentHealthJob>> {
    const _params = { ...params };
    const _requiredParams = ['agentId'];
    const _validParams = ['agentId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'getHealthCheckAgentJob'
    );

    const parameters = {
      options: {
        url: '/v2/agents/{agent_id}/health',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Run the health check job for the agent.
   *
   * Run the health check job for the agent.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {boolean} [params.force] - Equivalent to -force options in the command line, default is false.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.AgentHealthJob>>}
   */
  public healthCheckAgentJob(
    params: SchematicsV1.HealthCheckAgentJobParams
  ): Promise<SchematicsV1.Response<SchematicsV1.AgentHealthJob>> {
    const _params = { ...params };
    const _requiredParams = ['agentId'];
    const _validParams = ['agentId', 'force', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'force': _params.force,
    };

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(
      SchematicsV1.DEFAULT_SERVICE_NAME,
      'v1',
      'healthCheckAgentJob'
    );

    const parameters = {
      options: {
        url: '/v2/agents/{agent_id}/health',
        method: 'PUT',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get the agent deployment job status.
   *
   * Get the agent deployment job status.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.AgentDeployJob>>}
   */
  public getDeployAgentJob(
    params: SchematicsV1.GetDeployAgentJobParams
  ): Promise<SchematicsV1.Response<SchematicsV1.AgentDeployJob>> {
    const _params = { ...params };
    const _requiredParams = ['agentId'];
    const _validParams = ['agentId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getDeployAgentJob');

    const parameters = {
      options: {
        url: '/v2/agents/{agent_id}/deploy',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Run the agent deployment job.
   *
   * Run the agent deployment job.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.agentId - Agent ID to get the details of agent.
   * @param {boolean} [params.force] - Equivalent to -force options in the command line, default is false.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.AgentDeployJob>>}
   */
  public deployAgentJob(
    params: SchematicsV1.DeployAgentJobParams
  ): Promise<SchematicsV1.Response<SchematicsV1.AgentDeployJob>> {
    const _params = { ...params };
    const _requiredParams = ['agentId'];
    const _validParams = ['agentId', 'force', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'force': _params.force,
    };

    const path = {
      'agent_id': _params.agentId,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deployAgentJob');

    const parameters = {
      options: {
        url: '/v2/agents/{agent_id}/deploy',
        method: 'PUT',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * settingsKms
   ************************/

  /**
   * Get a KMS settings.
   *
   * Retrieve the kms instance that is integrated with Schematics for the **byok** and **kyok**. For each geographic
   * location supported in Schematics we can have different kms settings. For example `US` and `EU` will have different
   * kms settings.
   * <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.location - The location of the Resource.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.KMSSettings>>}
   */
  public getKmsSettings(
    params: SchematicsV1.GetKmsSettingsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.KMSSettings>> {
    const _params = { ...params };
    const _requiredParams = ['location'];
    const _validParams = ['location', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'location': _params.location,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getKmsSettings');

    const parameters = {
      options: {
        url: '/v2/settings/kms',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update a KMS settings.
   *
   * Replace or Update kms settings for a given location can be updated.
   * **Note** you can update the kms settings only once. For example, if you use an API endpoint for a geography, such
   * as North America, only kms settings for that region can be retrieved.
   * <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.location] - The location to integrate kms instance. For example, location can be `US` and
   * `EU`.
   * @param {string} [params.encryptionScheme] - The encryption scheme values. **Allowable values** [`byok`,`kyok`].
   * @param {string} [params.resourceGroup] - The kms instance resource group to integrate.
   * @param {KMSSettingsPrimaryCrk} [params.primaryCrk] - The primary kms instance details.
   * @param {KMSSettingsSecondaryCrk} [params.secondaryCrk] - The secondary kms instance details.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.KMSSettings>>}
   */
  public updateKmsSettings(
    params?: SchematicsV1.UpdateKmsSettingsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.KMSSettings>> {
    const _params = { ...params };
    const _requiredParams = [];
    const _validParams = [
      'location',
      'encryptionScheme',
      'resourceGroup',
      'primaryCrk',
      'secondaryCrk',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'location': _params.location,
      'encryption_scheme': _params.encryptionScheme,
      'resource_group': _params.resourceGroup,
      'primary_crk': _params.primaryCrk,
      'secondary_crk': _params.secondaryCrk,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'updateKmsSettings');

    const parameters = {
      options: {
        url: '/v2/settings/kms',
        method: 'PUT',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * List KMS instances.
   *
   * Lists the kms instances of your IBM Cloud account to find your Key Protect or Hyper Protect Crypto Services by
   * using the location and encrypted scheme.
   *
   *  <h3>Authorization</h3>
   *
   *  Schematics support generic authorization for its resources.
   *  For more information, about Schematics access and permissions, see
   *  [Schematics service access roles and required
   * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.encryptionScheme - The encryption scheme to be used.
   * @param {string} params.location - The location of the Resource.
   * @param {string} [params.resourceGroup] - The resource group (by default, fetch from all resource groups).
   * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
   * integer between 1 and 2000. If no value is provided, 100 is used by default.
   * @param {string} [params.sort] - Name of the field to sort-by;  Use the '.' character to delineate sub-resources and
   * sub-fields (eg. owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending'
   * (default is ascending)   Ignore unrecognized or unsupported sort field.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.KMSDiscovery>>}
   */
  public listKms(
    params: SchematicsV1.ListKmsParams
  ): Promise<SchematicsV1.Response<SchematicsV1.KMSDiscovery>> {
    const _params = { ...params };
    const _requiredParams = ['encryptionScheme', 'location'];
    const _validParams = [
      'encryptionScheme',
      'location',
      'resourceGroup',
      'limit',
      'sort',
      'headers',
    ];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'encryption_scheme': _params.encryptionScheme,
      'location': _params.location,
      'resource_group': _params.resourceGroup,
      'limit': _params.limit,
      'sort': _params.sort,
    };

    const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listKms');

    const parameters = {
      options: {
        url: '/v2/settings/kms_instances',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
}

/*************************
 * interfaces
 ************************/

namespace SchematicsV1 {
  /** An operation response. */
  export interface Response<T = any> {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface EmptyObject {}

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `listSchematicsLocation` operation. */
  export interface ListSchematicsLocationParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listLocations` operation. */
  export interface ListLocationsParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listResourceGroup` operation. */
  export interface ListResourceGroupParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getSchematicsVersion` operation. */
  export interface GetSchematicsVersionParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `processTemplateMetaData` operation. */
  export interface ProcessTemplateMetaDataParams {
    /** Template type such as **terraform**, **ansible**, **helm**, **cloudpak**, or **bash script**. */
    templateType: string;
    /** Source of templates, playbooks, or controls. */
    source: ExternalSource;
    /** Region on which request should process. Applicable only on global endpoint. */
    region?: string;
    /** Type of source for the Template. */
    sourceType?: ProcessTemplateMetaDataConstants.SourceType | string;
    /** The personal access token to authenticate with your private GitHub or GitLab repository and access your
     *  Terraform template.
     */
    xGithubToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `processTemplateMetaData` operation. */
  export namespace ProcessTemplateMetaDataConstants {
    /** Type of source for the Template. */
    export enum SourceType {
      LOCAL = 'local',
      GIT_HUB = 'git_hub',
      GIT_HUB_ENTERPRISE = 'git_hub_enterprise',
      GIT_LAB = 'git_lab',
      IBM_GIT_LAB = 'ibm_git_lab',
      IBM_CLOUD_CATALOG = 'ibm_cloud_catalog',
    }
  }

  /** Parameters for the `listWorkspaces` operation. */
  export interface ListWorkspacesParams {
    /** The starting position of the item in the list of items. For example, if you have three workspaces in your
     *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
     *  and so forth. If you have 6 workspaces and you want to list the details for workspaces `2-6`, enter 1. To limit
     *  the number of workspaces that is returned, use the `limit` option in addition to the `offset` option. Negative
     *  numbers are not supported and are ignored.
     */
    offset?: number;
    /** The maximum number of items that you want to list. The number must be a positive integer between 1 and 2000.
     *  If no value is provided, 100 is used by default.
     */
    limit?: number;
    /** Level of details returned by the get method. */
    profile?: ListWorkspacesConstants.Profile | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listWorkspaces` operation. */
  export namespace ListWorkspacesConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      IDS = 'ids',
      SUMMARY = 'summary',
    }
  }

  /** Parameters for the `createWorkspace` operation. */
  export interface CreateWorkspaceParams {
    /** Deprecated: List of applied shared dataset ID. */
    appliedShareddataIds?: string[];
    /** Information about the software template that you chose from the IBM Cloud catalog. This information is
     *  returned for IBM Cloud catalog offerings only.
     */
    catalogRef?: CatalogRef;
    /** Workspace dependencies. */
    dependencies?: Dependencies;
    /** The description of the workspace. */
    description?: string;
    /** The location where you want to create your Schematics workspace and run the Schematics jobs. The location
     *  that you enter must match the API endpoint that you use. For example, if you use the Frankfurt API endpoint, you
     *  must specify `eu-de` as your location. If you use an API endpoint for a geography and you do not specify a
     *  location, Schematics determines the location based on availability.
     */
    location?: string;
    /** The name of your workspace. The name can be up to 128 characters long and can include alphanumeric
     *  characters, spaces, dashes, and underscores. When you create a workspace for your own Terraform template,
     *  consider including the microservice component that you set up with your Terraform template and the IBM Cloud
     *  environment where you want to deploy your resources in your name.
     */
    name?: string;
    /** The ID of the resource group where you want to provision the workspace. */
    resourceGroup?: string;
    /** Information about the Target used by the templates originating from the  IBM Cloud catalog offerings. This
     *  information is not relevant for workspace created using your own Terraform template.
     */
    sharedData?: SharedTargetData;
    /** A list of tags that are associated with the workspace. */
    tags?: string[];
    /** Input data for the Template. */
    templateData?: TemplateSourceDataRequest[];
    /** Workspace template ref. */
    templateRef?: string;
    /** Input variables for the Template repoository, while creating a workspace. */
    templateRepo?: TemplateRepoRequest;
    /** List of Workspace type. */
    type?: string[];
    /** WorkspaceStatusRequest -. */
    workspaceStatus?: WorkspaceStatusRequest;
    /** agent id which is binded to with the workspace. */
    agentId?: string;
    /** The personal access token to authenticate with your private GitHub or GitLab repository and access your
     *  Terraform template.
     */
    xGithubToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspace` operation. */
  export interface GetWorkspaceParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceWorkspace` operation. */
  export interface ReplaceWorkspaceParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** Information about the software template that you chose from the IBM Cloud catalog. This information is
     *  returned for IBM Cloud catalog offerings only.
     */
    catalogRef?: CatalogRef;
    /** The description of the workspace. */
    description?: string;
    /** Workspace dependencies. */
    dependencies?: Dependencies;
    /** The name of the workspace. */
    name?: string;
    /** Information about the Target used by the templates originating from the  IBM Cloud catalog offerings. This
     *  information is not relevant for workspace created using your own Terraform template.
     */
    sharedData?: SharedTargetData;
    /** A list of tags that you want to associate with your workspace. */
    tags?: string[];
    /** Input data for the Template. */
    templateData?: TemplateSourceDataRequest[];
    /** Input to update the template repository data. */
    templateRepo?: TemplateRepoUpdateRequest;
    /** List of Workspace type. */
    type?: string[];
    /** Input to update the workspace status. */
    workspaceStatus?: WorkspaceStatusUpdateRequest;
    /** Information about the last job that ran against the workspace. -. */
    workspaceStatusMsg?: WorkspaceStatusMessage;
    /** agent id that process workspace jobs. */
    agentId?: string;
    /** The personal access token to authenticate with your private GitHub or GitLab repository and access your
     *  Terraform template.
     */
    xGithubToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteWorkspace` operation. */
  export interface DeleteWorkspaceParams {
    /** The IAM refresh token for the user or service identity. The IAM refresh token is required only if you want
     *  to destroy the Terraform resources before deleting the Schematics workspace. If you want to delete the workspace
     *  only and keep all your Terraform resources, refresh token is not required.
     *
     *    **Retrieving refresh token**:
     *    * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
     *  "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
     *  "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
     *    * For more information, about creating IAM access token and API Docs, refer, [IAM access
     *  token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
     *  key](/apidocs/iam-identity-token-api#create-api-key).
     *
     *    **Limitation**:
     *    * If the token is expired, you can use `refresh token` to get a new IAM access token.
     *    * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
     *    * When the IAM access token is about to expire, use the API key to create a new access token.
     */
    refreshToken: string;
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** If set to `true`, refresh_token header configuration is required to delete all the Terraform resources, and
     *  the Schematics workspace. If set to `false`, you can remove only the workspace. Your Terraform resources are
     *  still available and must be managed with the resource dashboard or CLI.
     */
    destroyResources?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateWorkspace` operation. */
  export interface UpdateWorkspaceParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** Information about the software template that you chose from the IBM Cloud catalog. This information is
     *  returned for IBM Cloud catalog offerings only.
     */
    catalogRef?: CatalogRef;
    /** The description of the workspace. */
    description?: string;
    /** Workspace dependencies. */
    dependencies?: Dependencies;
    /** The name of the workspace. */
    name?: string;
    /** Information about the Target used by the templates originating from the  IBM Cloud catalog offerings. This
     *  information is not relevant for workspace created using your own Terraform template.
     */
    sharedData?: SharedTargetData;
    /** A list of tags that you want to associate with your workspace. */
    tags?: string[];
    /** Input data for the Template. */
    templateData?: TemplateSourceDataRequest[];
    /** Input to update the template repository data. */
    templateRepo?: TemplateRepoUpdateRequest;
    /** List of Workspace type. */
    type?: string[];
    /** Input to update the workspace status. */
    workspaceStatus?: WorkspaceStatusUpdateRequest;
    /** Information about the last job that ran against the workspace. -. */
    workspaceStatusMsg?: WorkspaceStatusMessage;
    /** agent id that process workspace jobs. */
    agentId?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceReadme` operation. */
  export interface GetWorkspaceReadmeParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** The GitHub or GitLab branch where the `README.md` file is stored,  or the commit ID or tag that references
     *  the `README.md` file that you want to retrieve.  If you do not specify this option, the `README.md` file is
     *  retrieved from the master branch by default.
     */
    ref?: string;
    /** The format of the readme file.  Value ''markdown'' will give markdown, otherwise html. */
    formatted?: GetWorkspaceReadmeConstants.Formatted | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getWorkspaceReadme` operation. */
  export namespace GetWorkspaceReadmeConstants {
    /** The format of the readme file.  Value ''markdown'' will give markdown, otherwise html. */
    export enum Formatted {
      MARKDOWN = 'markdown',
      HTML = 'html',
    }
  }

  /** Parameters for the `templateRepoUpload` operation. */
  export interface TemplateRepoUploadParams {
    /** The ID of the workspace where you want to upload your `.tar` file. To find the workspace ID, use the `GET
     *  /v1/workspaces` API.
     */
    wId: string;
    /** The ID of the Terraform template in your workspace. When you create a workspace, a unique ID is assigned to
     *  your Terraform template, even if no template was provided during workspace creation. To find this ID, use the
     *  `GET /v1/workspaces` API and review the `template_data.id` value.
     */
    tId: string;
    /** Template tar file. */
    file?: NodeJS.ReadableStream | Buffer;
    /** The content type of file. */
    fileContentType?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceInputs` operation. */
  export interface GetWorkspaceInputsParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** The ID of the Terraform template in your workspace.  When you create a workspace, the Terraform template
     *  that  your workspace points to is assigned a unique ID. Use the `GET /v1/workspaces` to look up the workspace
     *  IDs  and template IDs or `template_data.id` in your IBM Cloud account.
     */
    tId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceWorkspaceInputs` operation. */
  export interface ReplaceWorkspaceInputsParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** The ID of the Terraform template in your workspace.  When you create a workspace, the Terraform template
     *  that  your workspace points to is assigned a unique ID. Use the `GET /v1/workspaces` to look up the workspace
     *  IDs  and template IDs or `template_data.id` in your IBM Cloud account.
     */
    tId: string;
    /** A list of environment variables that you want to apply during the execution of a bash script or Terraform
     *  job. This field must be provided as a list of key-value pairs, for example, **TF_LOG=debug**. Each entry will be
     *  a map with one entry where `key is the environment variable name and value is value`. You can define environment
     *  variables for IBM Cloud catalog offerings that are provisioned by using a bash script. See [example to use
     *  special environment
     *  variable](https://cloud.ibm.com/docs/schematics?topic=schematics-set-parallelism#parallelism-example)  that are
     *  supported by Schematics.
     */
    envValues?: JsonObject[];
    /** User values. */
    values?: string;
    /** VariablesRequest -. */
    variablestore?: WorkspaceVariableRequest[];
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getAllWorkspaceInputs` operation. */
  export interface GetAllWorkspaceInputsParams {
    /** The ID of the workspace for which you want to retrieve input parameters and  values. To find the workspace
     *  ID, use the `GET /workspaces` API.
     */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceInputMetadata` operation. */
  export interface GetWorkspaceInputMetadataParams {
    /** The ID of the workspace for which you want to retrieve the metadata of the input variables that are declared
     *  in the template. To find the workspace ID, use the `GET /v1/workspaces` API.
     */
    wId: string;
    /** The ID of the Terraform template for which you want to retrieve the metadata of your input variables. When
     *  you create a workspace, the Terraform template that your workspace points to is assigned a unique ID. To find
     *  this ID, use the `GET /v1/workspaces` API and review the `template_data.id` value.
     */
    tId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceOutputs` operation. */
  export interface GetWorkspaceOutputsParams {
    /** The ID of the workspace for which you want to retrieve output parameters and  values. To find the workspace
     *  ID, use the `GET /workspaces` API.
     */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceResources` operation. */
  export interface GetWorkspaceResourcesParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceState` operation. */
  export interface GetWorkspaceStateParams {
    /** The ID of the workspace for which you want to retrieve the Terraform statefile.  To find the workspace ID,
     *  use the `GET /v1/workspaces` API.
     */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceTemplateState` operation. */
  export interface GetWorkspaceTemplateStateParams {
    /** The ID of the workspace for which you want to retrieve the Terraform statefile.  To find the workspace ID,
     *  use the `GET /v1/workspaces` API.
     */
    wId: string;
    /** The ID of the Terraform template for which you want to retrieve the Terraform statefile.  When you create a
     *  workspace, the Terraform template that your workspace points to is assigned a unique ID.  To find this ID, use
     *  the `GET /v1/workspaces` API and review the template_data.id value.
     */
    tId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceActivityLogs` operation. */
  export interface GetWorkspaceActivityLogsParams {
    /** The ID of the workspace for which you want to retrieve the Terraform statefile.  To find the workspace ID,
     *  use the `GET /v1/workspaces` API.
     */
    wId: string;
    /** The ID of the activity or job, for which you want to retrieve details.  To find the job ID, use the `GET
     *  /v1/workspaces/{id}/actions` API.
     */
    activityId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceLogUrls` operation. */
  export interface GetWorkspaceLogUrlsParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getTemplateLogs` operation. */
  export interface GetTemplateLogsParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** The ID of the Terraform template or IBM Cloud catalog software template in the workspace.  Use the `GET
     *  /v1/workspaces` to look up the workspace IDs and template IDs or `template_data.id`.
     */
    tId: string;
    /** Enter false to replace the first line in each Terraform command section, such as Terraform INIT or Terraform
     *  PLAN, with Schematics INIT (Schematics PLAN) in your log output.  In addition, the log lines Starting command:
     *  terraform init -input=false -no-color and Starting command: terraform apply -state=terraform.tfstate
     *  -var-file=schematics.tfvars -auto-approve -no-color are suppressed.  All subsequent command lines still use the
     *  Terraform command prefix. To remove this prefix, use the log_tf_prefix option.
     */
    logTfCmd?: boolean;
    /** `false` will hide all the terraform command prefix in the log statements. */
    logTfPrefix?: boolean;
    /** `false` will hide all the null resource prefix in the log statements. */
    logTfNullResource?: boolean;
    /** `true` will format all logs to withhold the original format  of ansible output in the log statements. */
    logTfAnsible?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getTemplateActivityLog` operation. */
  export interface GetTemplateActivityLogParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** The ID of the Terraform template or IBM Cloud catalog software template in the workspace.  Use the `GET
     *  /v1/workspaces` to look up the workspace IDs and template IDs or `template_data.id`.
     */
    tId: string;
    /** The ID of the activity or job, for which you want to retrieve details.  To find the job ID, use the `GET
     *  /v1/workspaces/{id}/actions` API.
     */
    activityId: string;
    /** Enter false to replace the first line in each Terraform command section, such as Terraform INIT or Terraform
     *  PLAN, with Schematics INIT (Schematics PLAN) in your log output.  In addition, the log lines Starting command:
     *  terraform init -input=false -no-color and Starting command: terraform apply -state=terraform.tfstate
     *  -var-file=schematics.tfvars -auto-approve -no-color are suppressed.  All subsequent command lines still use the
     *  Terraform command prefix. To remove this prefix, use the log_tf_prefix option.
     */
    logTfCmd?: boolean;
    /** `false` will hide all the terraform command prefix in the log statements. */
    logTfPrefix?: boolean;
    /** `false` will hide all the null resource prefix in the log statements. */
    logTfNullResource?: boolean;
    /** `true` will format all logs to withhold the original format  of ansible output in the log statements. */
    logTfAnsible?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listActions` operation. */
  export interface ListActionsParams {
    /** The starting position of the item in the list of items. For example, if you have three workspaces in your
     *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
     *  and so forth. If you have 6 workspaces and you want to list the details for workspaces `2-6`, enter 1. To limit
     *  the number of workspaces that is returned, use the `limit` option in addition to the `offset` option. Negative
     *  numbers are not supported and are ignored.
     */
    offset?: number;
    /** The maximum number of items that you want to list. The number must be a positive integer between 1 and 2000.
     *  If no value is provided, 100 is used by default.
     */
    limit?: number;
    /** Name of the field to sort-by;  Use the '.' character to delineate sub-resources and sub-fields (eg.
     *  owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending' (default is
     *  ascending)   Ignore unrecognized or unsupported sort field.
     */
    sort?: string;
    /** Level of details returned by the get method. */
    profile?: ListActionsConstants.Profile | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listActions` operation. */
  export namespace ListActionsConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      IDS = 'ids',
      SUMMARY = 'summary',
    }
  }

  /** Parameters for the `createAction` operation. */
  export interface CreateActionParams {
    /** The unique name of your action. The name can be up to 128 characters long and can include alphanumeric
     *  characters, spaces, dashes, and underscores. **Example** you can use the name to stop action.
     */
    name?: string;
    /** Action description. */
    description?: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: CreateActionConstants.Location | string;
    /** Resource-group name for an action. By default, an action is created in `Default` resource group. */
    resourceGroup?: string;
    /** Type of connection to be used when connecting to bastion host.  If the `inventory_connection_type=winrm`,
     *  then `bastion_connection_type` is not supported.
     */
    bastionConnectionType?: CreateActionConstants.BastionConnectionType | string;
    /** Type of connection to be used when connecting to remote host.  **Note** Currently, WinRM supports only
     *  Windows system with the public IPs and do not support Bastion host.
     */
    inventoryConnectionType?: CreateActionConstants.InventoryConnectionType | string;
    /** Action tags. */
    tags?: string[];
    /** User defined status of the Schematics object. */
    userState?: UserState;
    /** URL of the `README` file, for the source URL. */
    sourceReadmeUrl?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Type of source for the Template. */
    sourceType?: CreateActionConstants.SourceType | string;
    /** Schematics job command parameter (playbook-name). */
    commandParameter?: string;
    /** Target inventory record ID, used by the action or ansible playbook. */
    inventory?: string;
    /** credentials of the Action. */
    credentials?: CredentialVariableData[];
    /** Describes a bastion resource. */
    bastion?: BastionResourceDefinition;
    /** User editable credential variable data and system generated reference to the value. */
    bastionCredential?: CredentialVariableData;
    /** Inventory of host and host group for the playbook in `INI` file format. For example, `"targets_ini":
     *  "[webserverhost]
     *   172.22.192.6
     *   [dbhost]
     *   172.22.192.5"`. For more information, about an inventory host group syntax, see [Inventory host
     *  groups](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-inventory-host-grps).
     */
    targetsIni?: string;
    /** Input variables for the Action. */
    inputs?: VariableData[];
    /** Output variables for the Action. */
    outputs?: VariableData[];
    /** Environment variables for the Action. */
    settings?: VariableData[];
    /** The personal access token to authenticate with your private GitHub or GitLab repository and access your
     *  Terraform template.
     */
    xGithubToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createAction` operation. */
  export namespace CreateActionConstants {
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
    /** Type of connection to be used when connecting to bastion host.  If the `inventory_connection_type=winrm`, then `bastion_connection_type` is not supported. */
    export enum BastionConnectionType {
      SSH = 'ssh',
    }
    /** Type of connection to be used when connecting to remote host.  **Note** Currently, WinRM supports only Windows system with the public IPs and do not support Bastion host. */
    export enum InventoryConnectionType {
      SSH = 'ssh',
      WINRM = 'winrm',
    }
    /** Type of source for the Template. */
    export enum SourceType {
      LOCAL = 'local',
      GIT_HUB = 'git_hub',
      GIT_HUB_ENTERPRISE = 'git_hub_enterprise',
      GIT_LAB = 'git_lab',
      IBM_GIT_LAB = 'ibm_git_lab',
      IBM_CLOUD_CATALOG = 'ibm_cloud_catalog',
    }
  }

  /** Parameters for the `getAction` operation. */
  export interface GetActionParams {
    /** Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud account. */
    actionId: string;
    /** Level of details returned by the get method. */
    profile?: GetActionConstants.Profile | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getAction` operation. */
  export namespace GetActionConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      SUMMARY = 'summary',
      DETAILED = 'detailed',
      IDS = 'ids',
    }
  }

  /** Parameters for the `deleteAction` operation. */
  export interface DeleteActionParams {
    /** Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud account. */
    actionId: string;
    /** Equivalent to -force options in the command line. */
    force?: boolean;
    /** Auto propagate the chaange or deletion to the dependent resources. */
    propagate?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateAction` operation. */
  export interface UpdateActionParams {
    /** Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud account. */
    actionId: string;
    /** The unique name of your action. The name can be up to 128 characters long and can include alphanumeric
     *  characters, spaces, dashes, and underscores. **Example** you can use the name to stop action.
     */
    name?: string;
    /** Action description. */
    description?: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: UpdateActionConstants.Location | string;
    /** Resource-group name for an action. By default, an action is created in `Default` resource group. */
    resourceGroup?: string;
    /** Type of connection to be used when connecting to bastion host.  If the `inventory_connection_type=winrm`,
     *  then `bastion_connection_type` is not supported.
     */
    bastionConnectionType?: UpdateActionConstants.BastionConnectionType | string;
    /** Type of connection to be used when connecting to remote host.  **Note** Currently, WinRM supports only
     *  Windows system with the public IPs and do not support Bastion host.
     */
    inventoryConnectionType?: UpdateActionConstants.InventoryConnectionType | string;
    /** Action tags. */
    tags?: string[];
    /** User defined status of the Schematics object. */
    userState?: UserState;
    /** URL of the `README` file, for the source URL. */
    sourceReadmeUrl?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Type of source for the Template. */
    sourceType?: UpdateActionConstants.SourceType | string;
    /** Schematics job command parameter (playbook-name). */
    commandParameter?: string;
    /** Target inventory record ID, used by the action or ansible playbook. */
    inventory?: string;
    /** credentials of the Action. */
    credentials?: CredentialVariableData[];
    /** Describes a bastion resource. */
    bastion?: BastionResourceDefinition;
    /** User editable credential variable data and system generated reference to the value. */
    bastionCredential?: CredentialVariableData;
    /** Inventory of host and host group for the playbook in `INI` file format. For example, `"targets_ini":
     *  "[webserverhost]
     *   172.22.192.6
     *   [dbhost]
     *   172.22.192.5"`. For more information, about an inventory host group syntax, see [Inventory host
     *  groups](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-inventory-host-grps).
     */
    targetsIni?: string;
    /** Input variables for the Action. */
    inputs?: VariableData[];
    /** Output variables for the Action. */
    outputs?: VariableData[];
    /** Environment variables for the Action. */
    settings?: VariableData[];
    /** The personal access token to authenticate with your private GitHub or GitLab repository and access your
     *  Terraform template.
     */
    xGithubToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `updateAction` operation. */
  export namespace UpdateActionConstants {
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
    /** Type of connection to be used when connecting to bastion host.  If the `inventory_connection_type=winrm`, then `bastion_connection_type` is not supported. */
    export enum BastionConnectionType {
      SSH = 'ssh',
    }
    /** Type of connection to be used when connecting to remote host.  **Note** Currently, WinRM supports only Windows system with the public IPs and do not support Bastion host. */
    export enum InventoryConnectionType {
      SSH = 'ssh',
      WINRM = 'winrm',
    }
    /** Type of source for the Template. */
    export enum SourceType {
      LOCAL = 'local',
      GIT_HUB = 'git_hub',
      GIT_HUB_ENTERPRISE = 'git_hub_enterprise',
      GIT_LAB = 'git_lab',
      IBM_GIT_LAB = 'ibm_git_lab',
      IBM_CLOUD_CATALOG = 'ibm_cloud_catalog',
    }
  }

  /** Parameters for the `uploadTemplateTarAction` operation. */
  export interface UploadTemplateTarActionParams {
    /** Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud account. */
    actionId: string;
    /** Template tar file. */
    file?: NodeJS.ReadableStream | Buffer;
    /** The content type of file. */
    fileContentType?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listWorkspaceActivities` operation. */
  export interface ListWorkspaceActivitiesParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** The starting position of the item in the list of items. For example, if you have three workspaces in your
     *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
     *  and so forth. If you have 6 workspaces and you want to list the details for workspaces `2-6`, enter 1. To limit
     *  the number of workspaces that is returned, use the `limit` option in addition to the `offset` option. Negative
     *  numbers are not supported and are ignored.
     */
    offset?: number;
    /** The maximum number of items that you want to list. The number must be a positive integer between 1 and 2000.
     *  If no value is provided, 100 is used by default.
     */
    limit?: number;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceActivity` operation. */
  export interface GetWorkspaceActivityParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** The ID of the activity or job, for which you want to retrieve details.  To find the job ID, use the `GET
     *  /v1/workspaces/{id}/actions` API.
     */
    activityId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteWorkspaceActivity` operation. */
  export interface DeleteWorkspaceActivityParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** The ID of the activity or job, for which you want to retrieve details.  To find the job ID, use the `GET
     *  /v1/workspaces/{id}/actions` API.
     */
    activityId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `runWorkspaceCommands` operation. */
  export interface RunWorkspaceCommandsParams {
    /** The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API. */
    wId: string;
    /** The IAM refresh token for the user or service identity.
     *
     *    **Retrieving refresh token**:
     *    * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
     *  "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
     *  "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
     *    * For more information, about creating IAM access token and API Docs, refer, [IAM access
     *  token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
     *  key](/apidocs/iam-identity-token-api#create-api-key).
     *
     *    **Limitation**:
     *    * If the token is expired, you can use `refresh token` to get a new IAM access token.
     *    * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
     *    * When the IAM access token is about to expire, use the API key to create a new access token.
     */
    refreshToken: string;
    /** List of commands.  You can execute single set of commands or multiple commands.  For more information, about
     *  the payload of the multiple commands,  refer to
     *  [Commands](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#commands).
     */
    commands?: TerraformCommand[];
    /** Command name. */
    operationName?: string;
    /** Command description. */
    description?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `applyWorkspaceCommand` operation. */
  export interface ApplyWorkspaceCommandParams {
    /** The ID of the workspace for which you want to run a Schematics `apply` job.  To find the workspace ID, use
     *  the `GET /workspaces` API.
     */
    wId: string;
    /** The IAM refresh token for the user or service identity.
     *
     *    **Retrieving refresh token**:
     *    * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
     *  "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
     *  "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
     *    * For more information, about creating IAM access token and API Docs, refer, [IAM access
     *  token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
     *  key](/apidocs/iam-identity-token-api#create-api-key).
     *
     *    **Limitation**:
     *    * If the token is expired, you can use `refresh token` to get a new IAM access token.
     *    * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
     *    * When the IAM access token is about to expire, use the API key to create a new access token.
     */
    refreshToken: string;
    /** Workspace job options template. */
    actionOptions?: WorkspaceActivityOptionsTemplate;
    /** The IAM delegated token for your IBM Cloud account.  This token is required for requests that are sent via
     *  the UI only.
     */
    delegatedToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `destroyWorkspaceCommand` operation. */
  export interface DestroyWorkspaceCommandParams {
    /** The ID of the workspace for which you want to perform a Schematics `destroy` job.  To find the workspace ID,
     *  use the `GET /workspaces` API.
     */
    wId: string;
    /** The IAM refresh token for the user or service identity.
     *
     *    **Retrieving refresh token**:
     *    * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
     *  "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
     *  "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
     *    * For more information, about creating IAM access token and API Docs, refer, [IAM access
     *  token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
     *  key](/apidocs/iam-identity-token-api#create-api-key).
     *
     *    **Limitation**:
     *    * If the token is expired, you can use `refresh token` to get a new IAM access token.
     *    * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
     *    * When the IAM access token is about to expire, use the API key to create a new access token.
     */
    refreshToken: string;
    /** Workspace job options template. */
    actionOptions?: WorkspaceActivityOptionsTemplate;
    /** The IAM delegated token for your IBM Cloud account.  This token is required for requests that are sent via
     *  the UI only.
     */
    delegatedToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `planWorkspaceCommand` operation. */
  export interface PlanWorkspaceCommandParams {
    /** The ID of the workspace, for which you want to run a Schematics `plan` job.  To find the ID of your
     *  workspace, use the `GET /v1/workspaces` API.
     */
    wId: string;
    /** The IAM refresh token for the user or service identity.
     *
     *    **Retrieving refresh token**:
     *    * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
     *  "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
     *  "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
     *    * For more information, about creating IAM access token and API Docs, refer, [IAM access
     *  token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
     *  key](/apidocs/iam-identity-token-api#create-api-key).
     *
     *    **Limitation**:
     *    * If the token is expired, you can use `refresh token` to get a new IAM access token.
     *    * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
     *    * When the IAM access token is about to expire, use the API key to create a new access token.
     */
    refreshToken: string;
    /** Workspace job options template. */
    actionOptions?: WorkspaceActivityOptionsTemplate;
    /** The IAM delegated token for your IBM Cloud account.  This token is required for requests that are sent via
     *  the UI only.
     */
    delegatedToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `refreshWorkspaceCommand` operation. */
  export interface RefreshWorkspaceCommandParams {
    /** The ID of the workspace, for which you want to run a Schematics `refresh` job.  To find the ID of your
     *  workspace, use the `GET /v1/workspaces` API.
     */
    wId: string;
    /** The IAM refresh token for the user or service identity.
     *
     *    **Retrieving refresh token**:
     *    * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
     *  "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
     *  "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
     *    * For more information, about creating IAM access token and API Docs, refer, [IAM access
     *  token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
     *  key](/apidocs/iam-identity-token-api#create-api-key).
     *
     *    **Limitation**:
     *    * If the token is expired, you can use `refresh token` to get a new IAM access token.
     *    * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
     *    * When the IAM access token is about to expire, use the API key to create a new access token.
     */
    refreshToken: string;
    /** The IAM delegated token for your IBM Cloud account.  This token is required for requests that are sent via
     *  the UI only.
     */
    delegatedToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listJobs` operation. */
  export interface ListJobsParams {
    /** The starting position of the item in the list of items. For example, if you have three workspaces in your
     *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
     *  and so forth. If you have 6 workspaces and you want to list the details for workspaces `2-6`, enter 1. To limit
     *  the number of workspaces that is returned, use the `limit` option in addition to the `offset` option. Negative
     *  numbers are not supported and are ignored.
     */
    offset?: number;
    /** The maximum number of items that you want to list. The number must be a positive integer between 1 and 2000.
     *  If no value is provided, 100 is used by default.
     */
    limit?: number;
    /** Name of the field to sort-by;  Use the '.' character to delineate sub-resources and sub-fields (eg.
     *  owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending' (default is
     *  ascending)   Ignore unrecognized or unsupported sort field.
     */
    sort?: string;
    /** Level of details returned by the get method. */
    profile?: ListJobsConstants.Profile | string;
    /** Name of the resource (workspaces, actions, environment or controls). */
    resource?: ListJobsConstants.Resource | string;
    /** The Resource Id. It could be an Action-id or Workspace-id. */
    resourceId?: string;
    /** Action Id. */
    actionId?: string;
    /** Workspace Id. */
    workspaceId?: string;
    /** list jobs. */
    list?: ListJobsConstants.List | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listJobs` operation. */
  export namespace ListJobsConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      IDS = 'ids',
      SUMMARY = 'summary',
    }
    /** Name of the resource (workspaces, actions, environment or controls). */
    export enum Resource {
      WORKSPACES = 'workspaces',
      ACTION = 'action',
      ACTIONS = 'actions',
      ENVIRONMENT = 'environment',
    }
    /** list jobs. */
    export enum List {
      ALL = 'all',
    }
  }

  /** Parameters for the `createJob` operation. */
  export interface CreateJobParams {
    /** The IAM refresh token for the user or service identity.
     *
     *    **Retrieving refresh token**:
     *    * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
     *  "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
     *  "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
     *    * For more information, about creating IAM access token and API Docs, refer, [IAM access
     *  token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
     *  key](/apidocs/iam-identity-token-api#create-api-key).
     *
     *    **Limitation**:
     *    * If the token is expired, you can use `refresh token` to get a new IAM access token.
     *    * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
     *    * When the IAM access token is about to expire, use the API key to create a new access token.
     */
    refreshToken: string;
    /** Name of the Schematics automation resource. */
    commandObject?: CreateJobConstants.CommandObject | string;
    /** Job command object id (workspace-id, action-id). */
    commandObjectId?: string;
    /** Schematics job command name. */
    commandName?: CreateJobConstants.CommandName | string;
    /** Schematics job command parameter (playbook-name). */
    commandParameter?: string;
    /** Command line options for the command. */
    commandOptions?: string[];
    /** Job inputs used by Action or Workspace. */
    inputs?: VariableData[];
    /** Environment variables used by the Job while performing Action or Workspace. */
    settings?: VariableData[];
    /** User defined tags, while running the job. */
    tags?: string[];
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: CreateJobConstants.Location | string;
    /** Job Status. */
    status?: JobStatus;
    /** Contains the cart order data which can be used for different purpose for eg. service tagging. */
    cartOrderData?: CartOrderData[];
    /** Job data. */
    data?: JobData;
    /** Describes a bastion resource. */
    bastion?: BastionResourceDefinition;
    /** Job log summary record. */
    logSummary?: JobLogSummary;
    /** Agent name, Agent id and associated policy ID information. */
    agent?: AgentInfo;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createJob` operation. */
  export namespace CreateJobConstants {
    /** Name of the Schematics automation resource. */
    export enum CommandObject {
      WORKSPACE = 'workspace',
      ACTION = 'action',
      SYSTEM = 'system',
      ENVIRONMENT = 'environment',
      BLUEPRINT = 'blueprint',
    }
    /** Schematics job command name. */
    export enum CommandName {
      WORKSPACE_PLAN = 'workspace_plan',
      WORKSPACE_APPLY = 'workspace_apply',
      WORKSPACE_DESTROY = 'workspace_destroy',
      WORKSPACE_REFRESH = 'workspace_refresh',
      ANSIBLE_PLAYBOOK_RUN = 'ansible_playbook_run',
      ANSIBLE_PLAYBOOK_CHECK = 'ansible_playbook_check',
      CREATE_ACTION = 'create_action',
      PUT_ACTION = 'put_action',
      PATCH_ACTION = 'patch_action',
      DELETE_ACTION = 'delete_action',
      SYSTEM_KEY_ENABLE = 'system_key_enable',
      SYSTEM_KEY_DELETE = 'system_key_delete',
      SYSTEM_KEY_DISABLE = 'system_key_disable',
      SYSTEM_KEY_ROTATE = 'system_key_rotate',
      SYSTEM_KEY_RESTORE = 'system_key_restore',
      CREATE_WORKSPACE = 'create_workspace',
      PUT_WORKSPACE = 'put_workspace',
      PATCH_WORKSPACE = 'patch_workspace',
      DELETE_WORKSPACE = 'delete_workspace',
      CREATE_CART = 'create_cart',
      CREATE_ENVIRONMENT = 'create_environment',
      PUT_ENVIRONMENT = 'put_environment',
      DELETE_ENVIRONMENT = 'delete_environment',
      ENVIRONMENT_CREATE_INIT = 'environment_create_init',
      ENVIRONMENT_UPDATE_INIT = 'environment_update_init',
      ENVIRONMENT_INSTALL = 'environment_install',
      ENVIRONMENT_UNINSTALL = 'environment_uninstall',
      BLUEPRINT_CREATE_INIT = 'blueprint_create_init',
      BLUEPRINT_UPDATE_INIT = 'blueprint_update_init',
      BLUEPRINT_INSTALL = 'blueprint_install',
      BLUEPRINT_DESTROY = 'blueprint_destroy',
      BLUEPRINT_DELETE = 'blueprint_delete',
      BLUEPRINT_PLAN_INIT = 'blueprint_plan_init',
      BLUEPRINT_PLAN_APPLY = 'blueprint_plan_apply',
      BLUEPRINT_PLAN_DESTROY = 'blueprint_plan_destroy',
      BLUEPRINT_RUN_PLAN = 'blueprint_run_plan',
      BLUEPRINT_RUN_APPLY = 'blueprint_run_apply',
      BLUEPRINT_RUN_DESTROY = 'blueprint_run_destroy',
      REPOSITORY_PROCESS = 'repository_process',
      TERRAFORM_COMMANDS = 'terraform_commands',
    }
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `getJob` operation. */
  export interface GetJobParams {
    /** Job Id. Use `GET /v2/jobs` API to look up the Job Ids in your IBM Cloud account. */
    jobId: string;
    /** Level of details returned by the get method. */
    profile?: GetJobConstants.Profile | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getJob` operation. */
  export namespace GetJobConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      SUMMARY = 'summary',
      DETAILED = 'detailed',
      IDS = 'ids',
    }
  }

  /** Parameters for the `updateJob` operation. */
  export interface UpdateJobParams {
    /** Job Id. Use `GET /v2/jobs` API to look up the Job Ids in your IBM Cloud account. */
    jobId: string;
    /** The IAM refresh token for the user or service identity.
     *
     *    **Retrieving refresh token**:
     *    * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
     *  "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
     *  "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
     *    * For more information, about creating IAM access token and API Docs, refer, [IAM access
     *  token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
     *  key](/apidocs/iam-identity-token-api#create-api-key).
     *
     *    **Limitation**:
     *    * If the token is expired, you can use `refresh token` to get a new IAM access token.
     *    * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
     *    * When the IAM access token is about to expire, use the API key to create a new access token.
     */
    refreshToken: string;
    /** Name of the Schematics automation resource. */
    commandObject?: UpdateJobConstants.CommandObject | string;
    /** Job command object id (workspace-id, action-id). */
    commandObjectId?: string;
    /** Schematics job command name. */
    commandName?: UpdateJobConstants.CommandName | string;
    /** Schematics job command parameter (playbook-name). */
    commandParameter?: string;
    /** Command line options for the command. */
    commandOptions?: string[];
    /** Job inputs used by Action or Workspace. */
    inputs?: VariableData[];
    /** Environment variables used by the Job while performing Action or Workspace. */
    settings?: VariableData[];
    /** User defined tags, while running the job. */
    tags?: string[];
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: UpdateJobConstants.Location | string;
    /** Job Status. */
    status?: JobStatus;
    /** Contains the cart order data which can be used for different purpose for eg. service tagging. */
    cartOrderData?: CartOrderData[];
    /** Job data. */
    data?: JobData;
    /** Describes a bastion resource. */
    bastion?: BastionResourceDefinition;
    /** Job log summary record. */
    logSummary?: JobLogSummary;
    /** Agent name, Agent id and associated policy ID information. */
    agent?: AgentInfo;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `updateJob` operation. */
  export namespace UpdateJobConstants {
    /** Name of the Schematics automation resource. */
    export enum CommandObject {
      WORKSPACE = 'workspace',
      ACTION = 'action',
      SYSTEM = 'system',
      ENVIRONMENT = 'environment',
      BLUEPRINT = 'blueprint',
    }
    /** Schematics job command name. */
    export enum CommandName {
      WORKSPACE_PLAN = 'workspace_plan',
      WORKSPACE_APPLY = 'workspace_apply',
      WORKSPACE_DESTROY = 'workspace_destroy',
      WORKSPACE_REFRESH = 'workspace_refresh',
      ANSIBLE_PLAYBOOK_RUN = 'ansible_playbook_run',
      ANSIBLE_PLAYBOOK_CHECK = 'ansible_playbook_check',
      CREATE_ACTION = 'create_action',
      PUT_ACTION = 'put_action',
      PATCH_ACTION = 'patch_action',
      DELETE_ACTION = 'delete_action',
      SYSTEM_KEY_ENABLE = 'system_key_enable',
      SYSTEM_KEY_DELETE = 'system_key_delete',
      SYSTEM_KEY_DISABLE = 'system_key_disable',
      SYSTEM_KEY_ROTATE = 'system_key_rotate',
      SYSTEM_KEY_RESTORE = 'system_key_restore',
      CREATE_WORKSPACE = 'create_workspace',
      PUT_WORKSPACE = 'put_workspace',
      PATCH_WORKSPACE = 'patch_workspace',
      DELETE_WORKSPACE = 'delete_workspace',
      CREATE_CART = 'create_cart',
      CREATE_ENVIRONMENT = 'create_environment',
      PUT_ENVIRONMENT = 'put_environment',
      DELETE_ENVIRONMENT = 'delete_environment',
      ENVIRONMENT_CREATE_INIT = 'environment_create_init',
      ENVIRONMENT_UPDATE_INIT = 'environment_update_init',
      ENVIRONMENT_INSTALL = 'environment_install',
      ENVIRONMENT_UNINSTALL = 'environment_uninstall',
      BLUEPRINT_CREATE_INIT = 'blueprint_create_init',
      BLUEPRINT_UPDATE_INIT = 'blueprint_update_init',
      BLUEPRINT_INSTALL = 'blueprint_install',
      BLUEPRINT_DESTROY = 'blueprint_destroy',
      BLUEPRINT_DELETE = 'blueprint_delete',
      BLUEPRINT_PLAN_INIT = 'blueprint_plan_init',
      BLUEPRINT_PLAN_APPLY = 'blueprint_plan_apply',
      BLUEPRINT_PLAN_DESTROY = 'blueprint_plan_destroy',
      BLUEPRINT_RUN_PLAN = 'blueprint_run_plan',
      BLUEPRINT_RUN_APPLY = 'blueprint_run_apply',
      BLUEPRINT_RUN_DESTROY = 'blueprint_run_destroy',
      REPOSITORY_PROCESS = 'repository_process',
      TERRAFORM_COMMANDS = 'terraform_commands',
    }
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `deleteJob` operation. */
  export interface DeleteJobParams {
    /** Job Id. Use `GET /v2/jobs` API to look up the Job Ids in your IBM Cloud account. */
    jobId: string;
    /** The IAM refresh token for the user or service identity.
     *
     *    **Retrieving refresh token**:
     *    * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
     *  "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
     *  "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
     *    * For more information, about creating IAM access token and API Docs, refer, [IAM access
     *  token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
     *  key](/apidocs/iam-identity-token-api#create-api-key).
     *
     *    **Limitation**:
     *    * If the token is expired, you can use `refresh token` to get a new IAM access token.
     *    * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
     *    * When the IAM access token is about to expire, use the API key to create a new access token.
     */
    refreshToken: string;
    /** Equivalent to -force options in the command line. */
    force?: boolean;
    /** Auto propagate the chaange or deletion to the dependent resources. */
    propagate?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listJobLogs` operation. */
  export interface ListJobLogsParams {
    /** Job Id. Use `GET /v2/jobs` API to look up the Job Ids in your IBM Cloud account. */
    jobId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getJobFiles` operation. */
  export interface GetJobFilesParams {
    /** Job Id. Use `GET /v2/jobs` API to look up the Job Ids in your IBM Cloud account. */
    jobId: string;
    /** The type of file you want to download eg.state_file, plan_json. */
    fileType: GetJobFilesConstants.FileType | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getJobFiles` operation. */
  export namespace GetJobFilesConstants {
    /** The type of file you want to download eg.state_file, plan_json. */
    export enum FileType {
      TEMPLATE_REPO = 'template_repo',
      README_FILE = 'readme_file',
      LOG_FILE = 'log_file',
      STATE_FILE = 'state_file',
      PLAN_JSON = 'plan_json',
    }
  }

  /** Parameters for the `createWorkspaceDeletionJob` operation. */
  export interface CreateWorkspaceDeletionJobParams {
    /** The IAM refresh token for the user or service identity.
     *
     *    **Retrieving refresh token**:
     *    * Use `export IBMCLOUD_API_KEY=<ibmcloud_api_key>`, and execute `curl -X POST
     *  "https://iam.cloud.ibm.com/identity/token" -H "Content-Type: application/x-www-form-urlencoded" -d
     *  "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=$IBMCLOUD_API_KEY" -u bx:bx`.
     *    * For more information, about creating IAM access token and API Docs, refer, [IAM access
     *  token](/apidocs/iam-identity-token-api#gettoken-password) and [Create API
     *  key](/apidocs/iam-identity-token-api#create-api-key).
     *
     *    **Limitation**:
     *    * If the token is expired, you can use `refresh token` to get a new IAM access token.
     *    * The `refresh_token` parameter cannot be used to retrieve a new IAM access token.
     *    * When the IAM access token is about to expire, use the API key to create a new access token.
     */
    refreshToken: string;
    /** Job type such as delete of a batch operation. */
    job?: string;
    /** A version of the terraform template. */
    version?: string;
    /** The List of workspaces to be deleted. */
    workspaces?: string[];
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceDeletionJobStatus` operation. */
  export interface GetWorkspaceDeletionJobStatusParams {
    /** The workspace job ID. */
    wjId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listBlueprint` operation. */
  export interface ListBlueprintParams {
    /** The starting position of the item in the list of items. For example, if you have three workspaces in your
     *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
     *  and so forth. If you have 6 workspaces and you want to list the details for workspaces `2-6`, enter 1. To limit
     *  the number of workspaces that is returned, use the `limit` option in addition to the `offset` option. Negative
     *  numbers are not supported and are ignored.
     */
    offset?: number;
    /** The maximum number of items that you want to list. The number must be a positive integer between 1 and 2000.
     *  If no value is provided, 100 is used by default.
     */
    limit?: number;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createBlueprint` operation. */
  export interface CreateBlueprintParams {
    /** Blueprint name (unique for an account). */
    name: string;
    /** Schema version. */
    schemaVersion?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Blueprint input configuration definition. */
    config?: BlueprintConfigItem[];
    /** Blueprint description. */
    description?: string;
    /** Resource-group name for the blueprint.  By default, blueprint will be created in Default Resource Group. */
    resourceGroup?: string;
    /** Blueprint instance tags. */
    tags?: string[];
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: CreateBlueprintConstants.Location | string;
    /** Additional inputs configuration for the blueprint. */
    inputs?: VariableData[];
    /** Input environemnt settings for blueprint. */
    settings?: VariableData[];
    /** Flow definitions for all the blueprint command. */
    flow?: BlueprintFlow;
    /** User defined status of the Schematics object. */
    userState?: UserState;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createBlueprint` operation. */
  export namespace CreateBlueprintConstants {
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `getBlueprint` operation. */
  export interface GetBlueprintParams {
    /** Environment Id.  Use `GET /v2/blueprints` API to look up the order ids in your IBM Cloud account. */
    blueprintId: string;
    /** Level of details returned by the get method. */
    profile?: GetBlueprintConstants.Profile | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getBlueprint` operation. */
  export namespace GetBlueprintConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      IDS = 'ids',
      SUMMARY = 'summary',
    }
  }

  /** Parameters for the `replaceBlueprint` operation. */
  export interface ReplaceBlueprintParams {
    /** Environment Id.  Use `GET /v2/blueprints` API to look up the order ids in your IBM Cloud account. */
    blueprintId: string;
    /** Blueprint name (unique for an account). */
    name: string;
    /** Schema version. */
    schemaVersion?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Blueprint input configuration definition. */
    config?: BlueprintConfigItem[];
    /** Blueprint description. */
    description?: string;
    /** Resource-group name for the blueprint.  By default, blueprint will be created in Default Resource Group. */
    resourceGroup?: string;
    /** Blueprint instance tags. */
    tags?: string[];
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: ReplaceBlueprintConstants.Location | string;
    /** Additional inputs configuration for the blueprint. */
    inputs?: VariableData[];
    /** Input environemnt settings for blueprint. */
    settings?: VariableData[];
    /** Flow definitions for all the blueprint command. */
    flow?: BlueprintFlow;
    /** User defined status of the Schematics object. */
    userState?: UserState;
    /** Level of details returned by the get method. */
    profile?: ReplaceBlueprintConstants.Profile | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `replaceBlueprint` operation. */
  export namespace ReplaceBlueprintConstants {
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
    /** Level of details returned by the get method. */
    export enum Profile {
      IDS = 'ids',
      SUMMARY = 'summary',
    }
  }

  /** Parameters for the `deleteBlueprint` operation. */
  export interface DeleteBlueprintParams {
    /** Environment Id.  Use `GET /v2/blueprints` API to look up the order ids in your IBM Cloud account. */
    blueprintId: string;
    /** Level of details returned by the get method. */
    profile?: DeleteBlueprintConstants.Profile | string;
    /** Destroy the resources before deleting the blueprint. */
    destroy?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `deleteBlueprint` operation. */
  export namespace DeleteBlueprintConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      IDS = 'ids',
      SUMMARY = 'summary',
    }
  }

  /** Parameters for the `uploadTemplateTarBlueprint` operation. */
  export interface UploadTemplateTarBlueprintParams {
    /** Environment Id.  Use `GET /v2/blueprints` API to look up the order ids in your IBM Cloud account. */
    blueprintId: string;
    /** Template tar file. */
    file?: NodeJS.ReadableStream | Buffer;
    /** The content type of file. */
    fileContentType?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listInventories` operation. */
  export interface ListInventoriesParams {
    /** The starting position of the item in the list of items. For example, if you have three workspaces in your
     *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
     *  and so forth. If you have 6 workspaces and you want to list the details for workspaces `2-6`, enter 1. To limit
     *  the number of workspaces that is returned, use the `limit` option in addition to the `offset` option. Negative
     *  numbers are not supported and are ignored.
     */
    offset?: number;
    /** The maximum number of items that you want to list. The number must be a positive integer between 1 and 2000.
     *  If no value is provided, 100 is used by default.
     */
    limit?: number;
    /** Name of the field to sort-by;  Use the '.' character to delineate sub-resources and sub-fields (eg.
     *  owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending' (default is
     *  ascending)   Ignore unrecognized or unsupported sort field.
     */
    sort?: string;
    /** Level of details returned by the get method. */
    profile?: ListInventoriesConstants.Profile | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listInventories` operation. */
  export namespace ListInventoriesConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      IDS = 'ids',
      SUMMARY = 'summary',
    }
  }

  /** Parameters for the `createInventory` operation. */
  export interface CreateInventoryParams {
    /** The unique name of your Inventory definition. The name can be up to 128 characters long and can include
     *  alphanumeric characters, spaces, dashes, and underscores.
     */
    name?: string;
    /** The description of your Inventory definition. The description can be up to 2048 characters long in size. */
    description?: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: CreateInventoryConstants.Location | string;
    /** Resource-group name for the Inventory definition.   By default, Inventory definition will be created in
     *  Default Resource Group.
     */
    resourceGroup?: string;
    /** Input inventory of host and host group for the playbook, in the `.ini` file format. */
    inventoriesIni?: string;
    /** Input resource query definitions that is used to dynamically generate the inventory of host and host group
     *  for the playbook.
     */
    resourceQueries?: string[];
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createInventory` operation. */
  export namespace CreateInventoryConstants {
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `getInventory` operation. */
  export interface GetInventoryParams {
    /** Resource Inventory Id.  Use `GET /v2/inventories` API to look up the Resource Inventory definition Ids  in
     *  your IBM Cloud account.
     */
    inventoryId: string;
    /** Level of details returned by the get method. */
    profile?: GetInventoryConstants.Profile | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getInventory` operation. */
  export namespace GetInventoryConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      SUMMARY = 'summary',
      DETAILED = 'detailed',
      IDS = 'ids',
    }
  }

  /** Parameters for the `replaceInventory` operation. */
  export interface ReplaceInventoryParams {
    /** Resource Inventory Id.  Use `GET /v2/inventories` API to look up the Resource Inventory definition Ids  in
     *  your IBM Cloud account.
     */
    inventoryId: string;
    /** The unique name of your Inventory definition. The name can be up to 128 characters long and can include
     *  alphanumeric characters, spaces, dashes, and underscores.
     */
    name?: string;
    /** The description of your Inventory definition. The description can be up to 2048 characters long in size. */
    description?: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: ReplaceInventoryConstants.Location | string;
    /** Resource-group name for the Inventory definition.   By default, Inventory definition will be created in
     *  Default Resource Group.
     */
    resourceGroup?: string;
    /** Input inventory of host and host group for the playbook, in the `.ini` file format. */
    inventoriesIni?: string;
    /** Input resource query definitions that is used to dynamically generate the inventory of host and host group
     *  for the playbook.
     */
    resourceQueries?: string[];
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `replaceInventory` operation. */
  export namespace ReplaceInventoryConstants {
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `deleteInventory` operation. */
  export interface DeleteInventoryParams {
    /** Resource Inventory Id.  Use `GET /v2/inventories` API to look up the Resource Inventory definition Ids  in
     *  your IBM Cloud account.
     */
    inventoryId: string;
    /** Equivalent to -force options in the command line. */
    force?: boolean;
    /** Auto propagate the chaange or deletion to the dependent resources. */
    propagate?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listResourceQuery` operation. */
  export interface ListResourceQueryParams {
    /** The starting position of the item in the list of items. For example, if you have three workspaces in your
     *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
     *  and so forth. If you have 6 workspaces and you want to list the details for workspaces `2-6`, enter 1. To limit
     *  the number of workspaces that is returned, use the `limit` option in addition to the `offset` option. Negative
     *  numbers are not supported and are ignored.
     */
    offset?: number;
    /** The maximum number of items that you want to list. The number must be a positive integer between 1 and 2000.
     *  If no value is provided, 100 is used by default.
     */
    limit?: number;
    /** Name of the field to sort-by;  Use the '.' character to delineate sub-resources and sub-fields (eg.
     *  owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending' (default is
     *  ascending)   Ignore unrecognized or unsupported sort field.
     */
    sort?: string;
    /** Level of details returned by the get method. */
    profile?: ListResourceQueryConstants.Profile | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listResourceQuery` operation. */
  export namespace ListResourceQueryConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      IDS = 'ids',
      SUMMARY = 'summary',
    }
  }

  /** Parameters for the `createResourceQuery` operation. */
  export interface CreateResourceQueryParams {
    /** Resource type (cluster, vsi, icd, vpc). */
    type?: CreateResourceQueryConstants.Type | string;
    /** Resource query name. */
    name?: string;
    queries?: ResourceQuery[];
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createResourceQuery` operation. */
  export namespace CreateResourceQueryConstants {
    /** Resource type (cluster, vsi, icd, vpc). */
    export enum Type {
      VSI = 'vsi',
    }
  }

  /** Parameters for the `getResourcesQuery` operation. */
  export interface GetResourcesQueryParams {
    /** Resource query Id.  Use `GET /v2/resource_query` API to look up the Resource query definition Ids  in your
     *  IBM Cloud account.
     */
    queryId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceResourcesQuery` operation. */
  export interface ReplaceResourcesQueryParams {
    /** Resource query Id.  Use `GET /v2/resource_query` API to look up the Resource query definition Ids  in your
     *  IBM Cloud account.
     */
    queryId: string;
    /** Resource type (cluster, vsi, icd, vpc). */
    type?: ReplaceResourcesQueryConstants.Type | string;
    /** Resource query name. */
    name?: string;
    queries?: ResourceQuery[];
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `replaceResourcesQuery` operation. */
  export namespace ReplaceResourcesQueryConstants {
    /** Resource type (cluster, vsi, icd, vpc). */
    export enum Type {
      VSI = 'vsi',
    }
  }

  /** Parameters for the `executeResourceQuery` operation. */
  export interface ExecuteResourceQueryParams {
    /** Resource query Id.  Use `GET /v2/resource_query` API to look up the Resource query definition Ids  in your
     *  IBM Cloud account.
     */
    queryId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteResourcesQuery` operation. */
  export interface DeleteResourcesQueryParams {
    /** Resource query Id.  Use `GET /v2/resource_query` API to look up the Resource query definition Ids  in your
     *  IBM Cloud account.
     */
    queryId: string;
    /** Equivalent to -force options in the command line. */
    force?: boolean;
    /** Auto propagate the chaange or deletion to the dependent resources. */
    propagate?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listAgent` operation. */
  export interface ListAgentParams {
    /** The starting position of the item in the list of items. For example, if you have three workspaces in your
     *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
     *  and so forth. If you have 6 workspaces and you want to list the details for workspaces `2-6`, enter 1. To limit
     *  the number of workspaces that is returned, use the `limit` option in addition to the `offset` option. Negative
     *  numbers are not supported and are ignored.
     */
    offset?: number;
    /** The maximum number of items that you want to list. The number must be a positive integer between 1 and 2000.
     *  If no value is provided, 100 is used by default.
     */
    limit?: number;
    /** Level of details returned by the get method. */
    profile?: ListAgentConstants.Profile | string;
    /** Use `new` to get all unregistered agents; use `saved` to get all registered agents. */
    filter?: ListAgentConstants.Filter | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listAgent` operation. */
  export namespace ListAgentConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      SUMMARY = 'summary',
      DETAILED = 'detailed',
      IDS = 'ids',
    }
    /** Use `new` to get all unregistered agents; use `saved` to get all registered agents. */
    export enum Filter {
      ALL = 'all',
      NEW = 'new',
      SAVED = 'saved',
    }
  }

  /** Parameters for the `registerAgent` operation. */
  export interface RegisterAgentParams {
    /** The name of the agent (must be unique, for an account). */
    name: string;
    /** The location where agent is deployed in the user environment. */
    agentLocation: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location: RegisterAgentConstants.Location | string;
    /** The IAM trusted profile id, used by the Agent instance. */
    profileId: string;
    /** Agent description. */
    description?: string;
    /** The resource-group name for the agent.  By default, Agent will be registered in Default Resource Group. */
    resourceGroup?: string;
    /** Tags for the agent. */
    tags?: string[];
    /** User defined status of the agent. */
    userState?: AgentUserState;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `registerAgent` operation. */
  export namespace RegisterAgentConstants {
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `getAgent` operation. */
  export interface GetAgentParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    /** Level of details returned by the get method. */
    profile?: GetAgentConstants.Profile | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getAgent` operation. */
  export namespace GetAgentConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      SUMMARY = 'summary',
      DETAILED = 'detailed',
      IDS = 'ids',
    }
  }

  /** Parameters for the `deleteAgent` operation. */
  export interface DeleteAgentParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateAgentRegistration` operation. */
  export interface UpdateAgentRegistrationParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    /** The name of the agent (must be unique, for an account). */
    name: string;
    /** The location where agent is deployed in the user environment. */
    agentLocation: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location: UpdateAgentRegistrationConstants.Location | string;
    /** The IAM trusted profile id, used by the Agent instance. */
    profileId: string;
    /** Agent description. */
    description?: string;
    /** The resource-group name for the agent.  By default, Agent will be registered in Default Resource Group. */
    resourceGroup?: string;
    /** Tags for the agent. */
    tags?: string[];
    /** User defined status of the agent. */
    userState?: AgentUserState;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `updateAgentRegistration` operation. */
  export namespace UpdateAgentRegistrationConstants {
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `listAgentData` operation. */
  export interface ListAgentDataParams {
    /** The starting position of the item in the list of items. For example, if you have three workspaces in your
     *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
     *  and so forth. If you have 6 workspaces and you want to list the details for workspaces `2-6`, enter 1. To limit
     *  the number of workspaces that is returned, use the `limit` option in addition to the `offset` option. Negative
     *  numbers are not supported and are ignored.
     */
    offset?: number;
    /** The maximum number of items that you want to list. The number must be a positive integer between 1 and 2000.
     *  If no value is provided, 100 is used by default.
     */
    limit?: number;
    /** Level of details returned by the get method. */
    profile?: ListAgentDataConstants.Profile | string;
    /** Use `new` to get all unregistered agents; use `saved` to get all registered agents. */
    filter?: ListAgentDataConstants.Filter | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `listAgentData` operation. */
  export namespace ListAgentDataConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      SUMMARY = 'summary',
      DETAILED = 'detailed',
      IDS = 'ids',
    }
    /** Use `new` to get all unregistered agents; use `saved` to get all registered agents. */
    export enum Filter {
      ALL = 'all',
      NEW = 'new',
      SAVED = 'saved',
    }
  }

  /** Parameters for the `createAgentData` operation. */
  export interface CreateAgentDataParams {
    /** The name of the agent (must be unique, for an account). */
    name: string;
    /** The resource-group name for the agent.  By default, agent will be registered in Default Resource Group. */
    resourceGroup: string;
    /** Agent version. */
    version: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    schematicsLocation: CreateAgentDataConstants.SchematicsLocation | string;
    /** The location where agent is deployed in the user environment. */
    agentLocation: string;
    /** The infrastructure parameters used by the agent. */
    agentInfrastructure: AgentInfrastructure;
    /** Agent description. */
    description?: string;
    /** Tags for the agent. */
    tags?: string[];
    /** Additional input variables for the agent. */
    agentInputs?: VariableData[];
    /** User defined status of the agent. */
    userState?: AgentUserState;
    /** Schematics Agent key performance indicators. */
    agentKpi?: AgentKPIData;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createAgentData` operation. */
  export namespace CreateAgentDataConstants {
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum SchematicsLocation {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `getAgentData` operation. */
  export interface GetAgentDataParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    /** Level of details returned by the get method. */
    profile?: GetAgentDataConstants.Profile | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getAgentData` operation. */
  export namespace GetAgentDataConstants {
    /** Level of details returned by the get method. */
    export enum Profile {
      SUMMARY = 'summary',
      DETAILED = 'detailed',
      IDS = 'ids',
    }
  }

  /** Parameters for the `updateAgentData` operation. */
  export interface UpdateAgentDataParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    /** The name of the agent (must be unique, for an account). */
    name: string;
    /** The resource-group name for the agent.  By default, agent will be registered in Default Resource Group. */
    resourceGroup: string;
    /** Agent version. */
    version: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    schematicsLocation: UpdateAgentDataConstants.SchematicsLocation | string;
    /** The location where agent is deployed in the user environment. */
    agentLocation: string;
    /** The infrastructure parameters used by the agent. */
    agentInfrastructure: AgentInfrastructure;
    /** Agent description. */
    description?: string;
    /** Tags for the agent. */
    tags?: string[];
    /** Additional input variables for the agent. */
    agentInputs?: VariableData[];
    /** User defined status of the agent. */
    userState?: AgentUserState;
    /** Schematics Agent key performance indicators. */
    agentKpi?: AgentKPIData;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `updateAgentData` operation. */
  export namespace UpdateAgentDataConstants {
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
    export enum SchematicsLocation {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `deleteAgentData` operation. */
  export interface DeleteAgentDataParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getPrsAgentJob` operation. */
  export interface GetPrsAgentJobParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `prsAgentJob` operation. */
  export interface PrsAgentJobParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    /** Equivalent to -force options in the command line, default is false. */
    force?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getHealthCheckAgentJob` operation. */
  export interface GetHealthCheckAgentJobParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `healthCheckAgentJob` operation. */
  export interface HealthCheckAgentJobParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    /** Equivalent to -force options in the command line, default is false. */
    force?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDeployAgentJob` operation. */
  export interface GetDeployAgentJobParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deployAgentJob` operation. */
  export interface DeployAgentJobParams {
    /** Agent ID to get the details of agent. */
    agentId: string;
    /** Equivalent to -force options in the command line, default is false. */
    force?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getKmsSettings` operation. */
  export interface GetKmsSettingsParams {
    /** The location of the Resource. */
    location: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateKmsSettings` operation. */
  export interface UpdateKmsSettingsParams {
    /** The location to integrate kms instance. For example, location can be `US` and `EU`. */
    location?: string;
    /** The encryption scheme values. **Allowable values** [`byok`,`kyok`]. */
    encryptionScheme?: string;
    /** The kms instance resource group to integrate. */
    resourceGroup?: string;
    /** The primary kms instance details. */
    primaryCrk?: KMSSettingsPrimaryCrk;
    /** The secondary kms instance details. */
    secondaryCrk?: KMSSettingsSecondaryCrk;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listKms` operation. */
  export interface ListKmsParams {
    /** The encryption scheme to be used. */
    encryptionScheme: string;
    /** The location of the Resource. */
    location: string;
    /** The resource group (by default, fetch from all resource groups). */
    resourceGroup?: string;
    /** The maximum number of items that you want to list. The number must be a positive integer between 1 and 2000.
     *  If no value is provided, 100 is used by default.
     */
    limit?: number;
    /** Name of the field to sort-by;  Use the '.' character to delineate sub-resources and sub-fields (eg.
     *  owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending' (default is
     *  ascending)   Ignore unrecognized or unsupported sort field.
     */
    sort?: string;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /** Complete Action details with user inputs and system generated data. */
  export interface Action {
    /** The unique name of your action. The name can be up to 128 characters long and can include alphanumeric
     *  characters, spaces, dashes, and underscores. **Example** you can use the name to stop action.
     */
    name?: string;
    /** Action description. */
    description?: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: string;
    /** Resource-group name for an action. By default, an action is created in `Default` resource group. */
    resource_group?: string;
    /** Type of connection to be used when connecting to bastion host.  If the `inventory_connection_type=winrm`,
     *  then `bastion_connection_type` is not supported.
     */
    bastion_connection_type?: string;
    /** Type of connection to be used when connecting to remote host.  **Note** Currently, WinRM supports only
     *  Windows system with the public IPs and do not support Bastion host.
     */
    inventory_connection_type?: string;
    /** Action tags. */
    tags?: string[];
    /** User defined status of the Schematics object. */
    user_state?: UserState;
    /** URL of the `README` file, for the source URL. */
    source_readme_url?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Type of source for the Template. */
    source_type?: string;
    /** Schematics job command parameter (playbook-name). */
    command_parameter?: string;
    /** Target inventory record ID, used by the action or ansible playbook. */
    inventory?: string;
    /** credentials of the Action. */
    credentials?: CredentialVariableData[];
    /** Describes a bastion resource. */
    bastion?: BastionResourceDefinition;
    /** User editable credential variable data and system generated reference to the value. */
    bastion_credential?: CredentialVariableData;
    /** Inventory of host and host group for the playbook in `INI` file format. For example, `"targets_ini":
     *  "[webserverhost]
     *   172.22.192.6
     *   [dbhost]
     *   172.22.192.5"`. For more information, about an inventory host group syntax, see [Inventory host
     *  groups](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-inventory-host-grps).
     */
    targets_ini?: string;
    /** Input variables for the Action. */
    inputs?: VariableData[];
    /** Output variables for the Action. */
    outputs?: VariableData[];
    /** Environment variables for the Action. */
    settings?: VariableData[];
    /** Action ID. */
    id?: string;
    /** Action Cloud Resource Name. */
    crn?: string;
    /** Action account ID. */
    account?: string;
    /** Action Playbook Source creation time. */
    source_created_at?: string;
    /** E-mail address of user who created the Action Playbook Source. */
    source_created_by?: string;
    /** The action playbook updation time. */
    source_updated_at?: string;
    /** E-mail address of user who updated the action playbook source. */
    source_updated_by?: string;
    /** Action creation time. */
    created_at?: string;
    /** E-mail address of the user who created an action. */
    created_by?: string;
    /** Action updation time. */
    updated_at?: string;
    /** E-mail address of the user who updated an action. */
    updated_by?: string;
    /** Computed state of the Action. */
    state?: ActionState;
    /** Playbook names retrieved from the repository. */
    playbook_names?: string[];
    /** System lock status. */
    sys_lock?: SystemLock;
  }

  /** List of Action definition response. */
  export interface ActionList {
    /** Total number of records. */
    total_count?: number;
    /** Number of records returned. */
    limit: number;
    /** Skipped number of records. */
    offset: number;
    /** List of action records. */
    actions?: ActionLite[];
  }

  /** Action summary profile with user inputs and system generated data. */
  export interface ActionLite {
    /** Action name (unique for an account). */
    name?: string;
    /** Action description. */
    description?: string;
    /** Action Id. */
    id?: string;
    /** Action Cloud Resource Name. */
    crn?: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: string;
    /** Resource-group name for the Action.  By default, Action will be created in Default Resource Group. */
    resource_group?: string;
    /** name of the namespace. */
    namespace?: string;
    /** Action tags. */
    tags?: string[];
    /** Name of the selected playbook. */
    playbook_name?: string;
    /** User defined status of the Schematics object. */
    user_state?: UserState;
    /** Computed state of the Action. */
    state?: ActionLiteState;
    /** System lock status. */
    sys_lock?: SystemLock;
    /** Action creation time. */
    created_at?: string;
    /** Email address of user who created the action. */
    created_by?: string;
    /** Action updation time. */
    updated_at?: string;
    /** Email address of user who updated the action. */
    updated_by?: string;
    /** Agent name, Agent id and associated policy ID information. */
    agent?: AgentInfo;
  }

  /** Computed state of the Action. */
  export interface ActionLiteState {
    /** Status of automation (workspace or action). */
    status_code?: string;
    /** Automation status message - to be displayed along with the status_code. */
    status_message?: string;
  }

  /** Computed state of the Action. */
  export interface ActionState {
    /** Status of automation (workspace or action). */
    status_code?: string;
    /** Job id reference for this status. */
    status_job_id?: string;
    /** Automation status message - to be displayed along with the status_code. */
    status_message?: string;
  }

  /** The agent registration details, with user inputs and system generated data. */
  export interface Agent {
    /** The name of the agent (must be unique, for an account). */
    name: string;
    /** Agent description. */
    description?: string;
    /** The resource-group name for the agent.  By default, Agent will be registered in Default Resource Group. */
    resource_group?: string;
    /** Tags for the agent. */
    tags?: string[];
    /** The location where agent is deployed in the user environment. */
    agent_location: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location: string;
    /** The IAM trusted profile id, used by the Agent instance. */
    profile_id: string;
    /** The Agent crn, obtained from the Schematics Agent deployment configuration. */
    agent_crn?: string;
    /** The Agent registration id. */
    id?: string;
    /** The Agent registration date-time. */
    registered_at?: string;
    /** The email address of an user who registered the Agent. */
    registered_by?: string;
    /** The Agent registration updation time. */
    updated_at?: string;
    /** Email address of user who updated the Agent registration. */
    updated_by?: string;
    /** User defined status of the agent. */
    user_state?: AgentUserState;
    /** Connection status of the agent. */
    connection_state?: ConnectionState;
    /** Computed state of the agent. */
    system_state?: AgentSystemState;
  }

  /** The agent details, with user inputs and system generated data. */
  export interface AgentData {
    /** The name of the agent (must be unique, for an account). */
    name: string;
    /** Agent description. */
    description?: string;
    /** The resource-group name for the agent.  By default, agent will be registered in Default Resource Group. */
    resource_group: string;
    /** Tags for the agent. */
    tags?: string[];
    /** Agent version. */
    version: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    schematics_location: string;
    /** The location where agent is deployed in the user environment. */
    agent_location: string;
    /** The infrastructure parameters used by the agent. */
    agent_infrastructure: AgentInfrastructure;
    /** Additional input variables for the agent. */
    agent_inputs?: VariableData[];
    /** User defined status of the agent. */
    user_state?: AgentUserState;
    /** The agent crn, obtained from the Schematics agent deployment configuration. */
    agent_crn?: string;
    /** The agent resource id. */
    id?: string;
    /** The agent creation date-time. */
    created_at?: string;
    /** The email address of an user who created the agent. */
    creation_by?: string;
    /** The agent registration updation time. */
    updated_at?: string;
    /** Email address of user who updated the agent registration. */
    updated_by?: string;
    /** Computed state of the agent. */
    system_state?: AgentSystemStatus;
    /** Schematics Agent key performance indicators. */
    agent_kpi?: AgentKPIData;
    /** Run a pre-requisite scanner for deploying agent. */
    recent_prs_job?: AgentDataRecentPrsJob;
    /** Post-installations checks for Agent health. */
    recent_deploy_job?: AgentDataRecentDeployJob;
    /** Agent health check. */
    recent_health_job?: AgentDataRecentHealthJob;
  }

  /** The list of agents. */
  export interface AgentDataList {
    /** The total number of records. */
    total_count?: number;
    /** The number of records returned. */
    limit?: number;
    /** The skipped number of records. */
    offset: number;
    /** The list of agents in the account. */
    agents?: AgentDataLite[];
  }

  /** The agent details for a list view. */
  export interface AgentDataLite {
    /** The name of the agent (must be unique, for an account). */
    name?: string;
    /** Agent description. */
    description?: string;
    /** The resource-group name for the agent.  By default, agent will be registered in Default Resource Group. */
    resource_group?: string;
    /** Tags for the agent. */
    tags?: string[];
    /** The agent version. */
    version?: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    schematics_location?: string;
    /** The location where agent is deployed in the user environment. */
    agent_location?: string;
    /** User defined status of the agent. */
    user_state?: AgentUserState;
    /** The agent crn, obtained from the Schematics agent deployment configuration. */
    agent_crn?: string;
    /** The agent resource id. */
    id?: string;
    /** The agent creation date-time. */
    created_at?: string;
    /** The email address of an user who created the agent. */
    creation_by?: string;
    /** The agent registration updation time. */
    updated_at?: string;
    /** Email address of user who updated the agent registration. */
    updated_by?: string;
    /** Computed state of the agent. */
    system_state?: AgentSystemStatus;
    /** Schematics Agent key performance indicators' summary. */
    agent_kpi?: AgentKPIDataLite;
  }

  /** Post-installations checks for Agent health. */
  export interface AgentDataRecentDeployJob {
    /** Id of the agent. */
    agent_id?: string;
    /** Job Id. */
    job_id?: string;
    /** The agent deploy job updation time. */
    updated_at?: string;
    /** Email address of user who ran the agent deploy job. */
    updated_by?: string;
    /** True, when the same version of the agent was redeployed. */
    is_redeployed?: boolean;
    /** Agent version. */
    agent_version?: string;
    /** Final result of the agent deployment job. */
    status_code?: string;
    /** The outcome of the agent deployment job, in a formatted log string. */
    status_message?: string;
    /** URL to the full agent deployment job logs. */
    log_url?: string;
  }

  /** Agent health check. */
  export interface AgentDataRecentHealthJob {
    /** Id of the agent. */
    agent_id?: string;
    /** Job Id. */
    job_id?: string;
    /** The agent health check job updation time. */
    updated_at?: string;
    /** Email address of user who ran the agent health check job. */
    updated_by?: string;
    /** Agent version. */
    agent_version?: string;
    /** Final result of the health-check job. */
    status_code?: string;
    /** The outcome of the health-check job, in a formatted log string. */
    status_message?: string;
    /** URL to the full health-check job logs. */
    log_url?: string;
  }

  /** Run a pre-requisite scanner for deploying agent. */
  export interface AgentDataRecentPrsJob {
    /** Id of the agent. */
    agent_id?: string;
    /** Job Id. */
    job_id?: string;
    /** The agent prs job updation time. */
    updated_at?: string;
    /** Email address of user who ran the agent prs job. */
    updated_by?: string;
    /** Agent version. */
    agent_version?: string;
    /** Final result of the pre-requisite scanner job. */
    status_code?: string;
    /** The outcome of the pre-requisite scanner job, in a formatted log string. */
    status_message?: string;
    /** URL to the full pre-requisite scanner job logs. */
    log_url?: string;
  }

  /** Post-installations checks for Agent health. */
  export interface AgentDeployJob {
    /** Id of the agent. */
    agent_id?: string;
    /** Job Id. */
    job_id?: string;
    /** The agent deploy job updation time. */
    updated_at?: string;
    /** Email address of user who ran the agent deploy job. */
    updated_by?: string;
    /** True, when the same version of the agent was redeployed. */
    is_redeployed?: boolean;
    /** Agent version. */
    agent_version?: string;
    /** Final result of the agent deployment job. */
    status_code?: string;
    /** The outcome of the agent deployment job, in a formatted log string. */
    status_message?: string;
    /** URL to the full agent deployment job logs. */
    log_url?: string;
  }

  /** Agent health check. */
  export interface AgentHealthJob {
    /** Id of the agent. */
    agent_id?: string;
    /** Job Id. */
    job_id?: string;
    /** The agent health check job updation time. */
    updated_at?: string;
    /** Email address of user who ran the agent health check job. */
    updated_by?: string;
    /** Agent version. */
    agent_version?: string;
    /** Final result of the health-check job. */
    status_code?: string;
    /** The outcome of the health-check job, in a formatted log string. */
    status_message?: string;
    /** URL to the full health-check job logs. */
    log_url?: string;
  }

  /** Agent name, Agent id and associated policy ID information. */
  export interface AgentInfo {
    /** ID of the Agent bound to the schematics object (workspace, action, blueprint). */
    id?: string;
    /** Name of the Agent bound to the schematics object. */
    name?: string;
    /** ID of the agent assignment policy, that is used to bind the Agent to schematics object. */
    assignment_policy_id?: string;
  }

  /** The infrastructure parameters used by the agent. */
  export interface AgentInfrastructure {
    /** Type of target agent infrastructure. */
    infra_type?: string;
    /** The cluster ID where agent services will be running. */
    cluster_id?: string;
    /** The resource group of the cluster (is it required ?). */
    cluster_resource_group?: string;
    /** The COS instance name to store the agent logs. */
    cos_instance_name?: string;
    /** The COS bucket name used to store the logs. */
    cos_bucket_name?: string;
    /** The COS bucket region. */
    cos_bucket_region?: string;
  }

  /** Schematics Agent key performance indicators. */
  export interface AgentKPIData {
    /** Overall availability indicator reported by the agent. */
    availability_indicator?: string;
    /** Overall lifecycle indicator reported by the agents. */
    lifecycle_indicator?: string;
    /** Percentage usage of the agent resources. */
    percent_usage_indicator?: string;
    /** Agent application key performance indicators. */
    application_indicators?: any[];
    /** Agent infrastructure key performance indicators. */
    infra_indicators?: any[];
  }

  /** Schematics Agent key performance indicators' summary. */
  export interface AgentKPIDataLite {
    /** Overall availability indicator reported by the agent. */
    availability_indicator?: string;
    /** Overall lifecycle indicator reported by the agents. */
    lifecycle_indicator?: string;
    /** Percentage usage of the agent resources. */
    percent_usage_indicator?: string;
  }

  /** The list of agent details. */
  export interface AgentList {
    /** The total number of records. */
    total_count?: number;
    /** The number of records returned. */
    limit?: number;
    /** The skipped number of records. */
    offset: number;
    /** The list of agents in the account. */
    agents?: Agent[];
  }

  /** Run a pre-requisite scanner for deploying agent. */
  export interface AgentPRSJob {
    /** Id of the agent. */
    agent_id?: string;
    /** Job Id. */
    job_id?: string;
    /** The agent prs job updation time. */
    updated_at?: string;
    /** Email address of user who ran the agent prs job. */
    updated_by?: string;
    /** Agent version. */
    agent_version?: string;
    /** Final result of the pre-requisite scanner job. */
    status_code?: string;
    /** The outcome of the pre-requisite scanner job, in a formatted log string. */
    status_message?: string;
    /** URL to the full pre-requisite scanner job logs. */
    log_url?: string;
  }

  /** Computed state of the agent. */
  export interface AgentSystemStatus {
    /** Agent Status. */
    status_code?: string;
    /** The agent status message. */
    status_message?: string;
  }

  /** User defined status of the agent. */
  export interface AgentUserState {
    /** User-defined states   * `enable`  Agent is enabled by the user.   * `disable` Agent is disbaled by the user. */
    state?: string;
    /** Name of the User who set the state of the Object. */
    set_by?: string;
    /** When the User who set the state of the Object. */
    set_at?: string;
  }

  /** Computed state of the agent. */
  export interface AgentSystemState {
    /** Agent Status. */
    state?: string;
    /** The Agent status message. */
    message?: string;
  }

  /** Describes a bastion resource. */
  export interface BastionResourceDefinition {
    /** Bastion Name; the name must be unique. */
    name?: string;
    /** Reference to the Inventory resource definition. */
    host?: string;
  }

  /** Blueprint details with user inputs and system generated data. */
  export interface Blueprint {
    /** Blueprint name (unique for an account). */
    name: string;
    /** Schema version. */
    schema_version?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Blueprint input configuration definition. */
    config?: BlueprintConfigItem[];
    /** Blueprint description. */
    description?: string;
    /** Resource-group name for the blueprint.  By default, blueprint will be created in Default Resource Group. */
    resource_group?: string;
    /** Blueprint instance tags. */
    tags?: string[];
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: string;
    /** Additional inputs configuration for the blueprint. */
    inputs?: VariableData[];
    /** Input environemnt settings for blueprint. */
    settings?: VariableData[];
    /** Output variables for the blueprint. */
    outputs?: VariableData[];
    /** Components of the blueprint. */
    modules?: BlueprintModule[];
    /** Flow definitions for all the blueprint command. */
    flow?: BlueprintFlow;
    /** System generated blueprint Id. */
    blueprint_id?: string;
    /** Blueprint CRN. */
    crn?: string;
    /** Account id. */
    account?: string;
    /** Blueprint creation time. */
    created_at?: string;
    /** User who created the blueprint. */
    created_by?: string;
    /** Blueprint updation time. */
    updated_at?: string;
    /** User who updated the blueprint. */
    updated_by?: string;
    /** System lock status. */
    sys_lock?: SystemLock;
    /** User defined status of the Schematics object. */
    user_state?: UserState;
    /** Computed state of the blueprint. */
    state?: BlueprintLiteState;
  }

  /** Blueprint configuration item. */
  export interface BlueprintConfigItem {
    /** Name of the blueprint configuration item. */
    name?: string;
    /** Description for the blueprint configuration item. */
    description?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Input variables and values for the blueprint configuration item. */
    inputs?: VariableData[];
  }

  /** Flow definitions for all the blueprint command. */
  export interface BlueprintFlow {
    /** Blueprint flow specification. */
    specs?: BlueprintFlowSpecs[];
  }

  /** BlueprintFlowSequenceFlow. */
  export interface BlueprintFlowSequenceFlow {
    /** Sequence number in the order or execution. */
    sequence_number?: number;
    /** Name of the layer or module to run this command. */
    item_name?: string;
  }

  /** BlueprintFlowSpecs. */
  export interface BlueprintFlowSpecs {
    /** Schematics job command name. */
    command_name?: string;
    /** Type of blueprint flow specification. */
    flow_type?: string;
    /** Ordered items in the simple sequence. */
    sequence_flow?: BlueprintFlowSequenceFlow[];
    /** Placeholder for conditional flow. */
    conditional_flow?: string;
  }

  /** List of Blueprints. */
  export interface BlueprintList {
    /** Total number of blueprint records. */
    total_count?: number;
    /** Number of blueprint records returned. */
    limit?: number;
    /** Skipped number of blueprint records. */
    offset: number;
    /** List of blueprints. */
    blueprints?: BlueprintLite[];
  }

  /** Blueprint summary profile. */
  export interface BlueprintLite {
    /** Blueprint name (unique for an account). */
    name?: string;
    source_type?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSourceLite;
    /** Blueprint description. */
    description?: string;
    /** Resource-group name for the blueprint.  By default, blueprint will be created in Default Resource Group. */
    resource_group?: string;
    /** Blueprint tags. */
    tags?: string[];
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: string;
    /** System generated blueprint Id. */
    id?: string;
    /** Blueprint CRN. */
    crn?: string;
    /** Account id for the blueprint. */
    account?: string;
    /** Blueprint creation time. */
    created_at?: string;
    /** User who created the Cart order. */
    created_by?: string;
    /** Blueprint updation time. */
    updated_at?: string;
    /** User who updated the Cart order. */
    updated_by?: string;
    /** System lock status. */
    sys_lock?: SystemLock;
    /** User defined status of the Schematics object. */
    user_state?: UserState;
    /** Computed state of the blueprint. */
    state?: BlueprintLiteState;
  }

  /** Computed state of the blueprint. */
  export interface BlueprintLiteState {
    /** User-defined states
     *    * `Blueprint_Create_Init` When Create Blueprint POST API is invoked and CreateBlueprint process is initiated.
     *    * `Blueprint_Create_InProgress` When Create Blueprint process is in progress.
     *    * `Blueprint_Create_Success` Repos are downloaded and underlying objects are created
     *    * `Blueprint_Create_Failed` Failed to create Blueprint or underlying schematics objects.
     */
    status_code?: string;
    /** Automation status message - to be displayed along with the status_code. */
    status_message?: string;
    /** Status of overall Blueprint. */
    summary_status?: string;
    /** Status of Blueprint Spec. */
    config_status?: string;
    /** Status of Blueprint Plan. */
    plan_status?: string;
    /** Status of Blueprint Run Job. */
    run_status?: string;
    /** Status of Blueprint Resource. */
    resource_status?: string;
  }

  /** Component for the Blueprint. */
  export interface BlueprintModule {
    /** Module id. */
    module_id?: string;
    /** Name of the Schematics automation resource. */
    module_type?: string;
    /** Name of the module. */
    name?: string;
    /** Layer for the module. */
    layer?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Array of injectable terraform blocks. */
    injectors?: InjectTerraformTemplateInner[];
    /** Tags used by the module. */
    tags?: string;
    /** The description of the module. */
    description?: string;
    /** The timestamp when the module was created. */
    created_at?: string;
    /** The user ID that created the module. */
    created_by?: string;
    /** The timestamp when the module was updated. */
    updated_at?: string;
    /** The user ID that updated the module. */
    updated_by?: string;
    /** The Terraform version of the module that was used to run your Terraform code. */
    version?: string[];
    /** Status of the module. */
    status?: string;
    /** Location of the module. */
    location?: string;
    /** Inputs used by the module. */
    inputs?: VariableData[];
    /** Environment settings for the module. */
    settings?: VariableData[];
    /** True, when the blueprint module settings is updated or changed. */
    updated?: boolean;
    /** True, when there are deletions in the blueprint module settings. */
    deleted?: boolean;
    /** Outputs from the module. */
    outputs?: BlueprintVariableData[];
    /** Status of the last job executed by the module. */
    last_job?: BlueprintModuleLastJob;
  }

  /** Status of the last job executed by the module. */
  export interface BlueprintModuleLastJob {
    /** Name of the Schematics automation resource. */
    command_object?: string;
    /** Name of the command object id, maps to workspace_name or action_name. */
    command_object_name?: string;
    /** Module command object id, maps to workspace_id or action_id. */
    command_object_id?: string;
    /** Schematics job command name. */
    command_name?: string;
    /** Status of Jobs. */
    job_status?: string;
  }

  /** Response after uploading Blueprint Template in tar file format. */
  export interface BlueprintTemplateRepoTarUploadResponse {
    /** Tar file value. */
    file_value?: string;
    /** Has received tar file?. */
    has_received_file?: boolean;
  }

  /** User editable variable data & system generated reference to value. */
  export interface BlueprintVariableData {
    /** Name of the variable. */
    name?: string;
    /** Value for the variable or reference to the value. */
    value?: string;
    /** Reference link to the variable value By default the expression will point to self.value. */
    link?: string;
  }

  /** Schematics Cart Order Data. */
  export interface CartOrderData {
    /** Name of the property. */
    name?: string;
    /** Value of the property. */
    value?: string;
    /** Type of the values(string, int etc). */
    type?: string;
    /** List of usage kind how the cart data can be used. */
    usage_kind?: string[];
  }

  /** Information about the software template that you chose from the IBM Cloud catalog. This information is returned for IBM Cloud catalog offerings only. */
  export interface CatalogRef {
    /** Dry run. */
    dry_run?: boolean;
    /** Owning account ID of the catalog. */
    owning_account?: string;
    /** The URL to the icon of the software template in the IBM Cloud catalog. */
    item_icon_url?: string;
    /** The ID of the software template that you chose to install from the IBM Cloud catalog. This software is
     *  provisioned with Schematics.
     */
    item_id?: string;
    /** The name of the software that you chose to install from the IBM Cloud catalog. */
    item_name?: string;
    /** The URL to the readme file of the software template in the IBM Cloud catalog. */
    item_readme_url?: string;
    /** The URL to the software template in the IBM Cloud catalog. */
    item_url?: string;
    /** The URL to the dashboard to access your software. */
    launch_url?: string;
    /** The version of the software template that you chose to install from the IBM Cloud catalog. */
    offering_version?: string;
    service_extensions?: ServiceExtensions[];
  }

  /** The connection details to the IBM Cloud Catalog source. */
  export interface CatalogSource {
    /** The name of the private catalog. */
    catalog_name?: string;
    /** The ID of a private catalog. */
    catalog_id?: string;
    /** The name of an offering in the IBM Cloud Catalog. */
    offering_name?: string;
    /** The version of the software template that you chose to install from the IBM Cloud catalog. */
    offering_version?: string;
    /** The type of an offering, in the IBM Cloud Catalog. */
    offering_kind?: string;
    /** Offering Target Kind. */
    offering_target_kind?: string;
    /** The ID of an offering in the IBM Cloud Catalog. */
    offering_id?: string;
    /** The ID of an offering version the IBM Cloud Catalog. */
    offering_version_id?: string;
    /** Offering version flavour name. */
    offering_version_flavour_name?: string;
    /** The repository URL of an offering, in the IBM Cloud Catalog. */
    offering_repo_url?: string;
    /** Root folder name in .tgz file. */
    offering_provisioner_working_directory?: string;
    /** Dry run. */
    dry_run?: boolean;
    /** Owning account ID of the catalog. */
    owning_account?: string;
    /** The URL to the icon of the software template in the IBM Cloud catalog. */
    item_icon_url?: string;
    /** The ID of the software template that you chose to install from the IBM Cloud catalog. This software is
     *  provisioned with Schematics.
     */
    item_id?: string;
    /** The name of the software that you chose to install from the IBM Cloud catalog. */
    item_name?: string;
    /** The URL to the readme file of the software template in the IBM Cloud catalog. */
    item_readme_url?: string;
    /** The URL to the software template in the IBM Cloud catalog. */
    item_url?: string;
    /** The URL to the dashboard to access your software. */
    launch_url?: string;
  }

  /** The connection details to the IBM Cloud Catalog source. */
  export interface CatalogSourceLite {
    /** The name of the private catalog. */
    catalog_name?: string;
    /** The ID of a private catalog. */
    catalog_id?: string;
    /** The name of an offering in the IBM Cloud Catalog. */
    offering_name?: string;
    /** The version of the software template that you chose to install from the IBM Cloud catalog. */
    offering_version?: string;
    /** The type of an offering, in the IBM Cloud Catalog. */
    offering_kind?: string;
    /** Offering Target Kind. */
    offering_target_kind?: string;
    /** The ID of an offering in the IBM Cloud Catalog. */
    offering_id?: string;
    /** The ID of an offering version the IBM Cloud Catalog. */
    offering_version_id?: string;
    /** Offering version flavour name. */
    offering_version_flavour_name?: string;
    /** The ID of the software template that you chose to install from the IBM Cloud catalog. This software is
     *  provisioned with Schematics.
     */
    item_id?: string;
    /** The name of the software that you chose to install from the IBM Cloud catalog. */
    item_name?: string;
  }

  /** Workspace commands run as part of the job. */
  export interface CommandsInfo {
    /** Name of the command. */
    name?: string;
    /** outcome of the command. */
    outcome?: string;
  }

  /** Connection status of the agent. */
  export interface ConnectionState {
    /** Agent Connection Status
     *    * `Connected` When Schematics is able to connect to the agent.
     *    * `Disconnected` When Schematics is able not connect to the agent.
     */
    state?: string;
    /** When the connection state is modified. */
    checked_at?: string;
  }

  /** User editable credential variable data and system generated reference to the value. */
  export interface CredentialVariableData {
    /** The name of the credential variable. */
    name?: string;
    /** The credential value for the variable or reference to the value. For example, `value = "<provide your
     *  ssh_key_value with \n>"`. **Note** The SSH key should contain `\n` at the end of the key details in case of
     *  command line or API calls.
     */
    value?: string;
    /** True, will ignore the data in the value attribute, instead the data in metadata.default_value will be used. */
    use_default?: boolean;
    /** An user editable metadata for the credential variables. */
    metadata?: CredentialVariableMetadata;
    /** The reference link to the variable value By default the expression points to `$self.value`. */
    link?: string;
  }

  /** An user editable metadata for the credential variables. */
  export interface CredentialVariableMetadata {
    /** Type of the variable. */
    type?: string;
    /** The list of aliases for the variable name. */
    aliases?: string[];
    /** The description of the meta data. */
    description?: string;
    /** Cloud data type of the credential variable. eg. api_key, iam_token, profile_id. */
    cloud_data_type?: string;
    /** Default value for the variable only if the override value is not specified. */
    default_value?: string;
    /** The status of the link. */
    link_status?: string;
    /** Is the variable readonly ?. */
    immutable?: boolean;
    /** If **true**, the variable is not displayed on UI or Command line. */
    hidden?: boolean;
    /** If the variable required?. */
    required?: boolean;
    /** The relative position of this variable in a list. */
    position?: number;
    /** The display name of the group this variable belongs to. */
    group_by?: string;
    /** The source of this meta-data. */
    source?: string;
  }

  /** Workspace dependencies. */
  export interface Dependencies {
    /** List of workspace parents CRN identifiers. */
    parents?: string[];
    /** List of workspace children CRN identifiers. */
    children?: string[];
  }

  /** One variable is a map where one entry is there with key as name of the env var and the value as value. */
  export interface EnvVariableRequestMap {
    /** Environment variable is hidden. */
    hidden?: boolean;
    /** Environment variable name. */
    name?: string;
    /** Environment variable is secure. */
    secure?: boolean;
    /** Value for environment variable. */
    value?: string;
  }

  /** List of environment values. */
  export interface EnvVariableResponse {
    /** Environment variable is hidden. */
    hidden?: boolean;
    /** Environment variable name. */
    name?: string;
    /** Environment variable is secure. */
    secure?: boolean;
    /** Value for environment variable. */
    value?: string;
  }

  /** Environment variables metadata. */
  export interface EnvironmentValuesMetadata {
    /** Environment variable is hidden. */
    hidden?: boolean;
    /** Environment variable name. */
    name?: string;
    /** Environment variable is secure. */
    secure?: boolean;
  }

  /** Source of templates, playbooks, or controls. */
  export interface ExternalSource {
    /** Type of source for the Template. */
    source_type: string;
    /** The connection details to the Git source repository. */
    git?: GitSource;
    /** The connection details to the IBM Cloud Catalog source. */
    catalog?: CatalogSource;
  }

  /** Source of templates, playbooks, or controls. */
  export interface ExternalSourceLite {
    /** Type of source for the Template. */
    source_type: string;
    /** The connection details to the Git source repository. */
    git?: GitSourceLite;
    /** The connection details to the IBM Cloud Catalog source. */
    catalog?: CatalogSourceLite;
  }

  /** The connection details to the Git source repository. */
  export interface GitSource {
    /** The complete URL which is computed by the **git_repo_url**, **git_repo_folder**, and **branch**. */
    computed_git_repo_url?: string;
    /** The URL to the Git repository that can be used to clone the template. */
    git_repo_url?: string;
    /** The Personal Access Token (PAT) to connect to the Git URLs. */
    git_token?: string;
    /** The name of the folder in the Git repository, that contains the template. */
    git_repo_folder?: string;
    /** The name of the release tag that are used to fetch the Git repository. */
    git_release?: string;
    /** The name of the branch that are used to fetch the Git repository. */
    git_branch?: string;
    /** The git commit hash used to fetch the repository. */
    git_commit?: string;
    /** The timestamp of the git commit hash used to fetch the repository. */
    git_commit_timestamp?: string;
  }

  /** The connection details to the Git source repository. */
  export interface GitSourceLite {
    /** The URL to the Git repository that can be used to clone the template. */
    git_repo_url?: string;
    /** The name of the release tag that are used to fetch the Git repository. */
    git_release?: string;
    /** The name of the branch that are used to fetch the Git repository. */
    git_branch?: string;
    /** The name of the folder in the Git repository, that contains the template. */
    git_repo_folder?: string;
  }

  /** InjectTerraformTemplateInnerTftParametersItem. */
  export interface InjectTerraformTemplateInnerTftParametersItem {
    /** Key name to replace. */
    name?: string;
    /** Value to replace. */
    value?: string;
  }

  /** InjectTerraformTemplateInner. */
  export interface InjectTerraformTemplateInner {
    /** Git repo url hosting terraform template files. */
    tft_git_url?: string;
    /** Token to access the git repository (Optional). */
    tft_git_token?: string;
    /** Optional prefix word to append to files (Optional). */
    tft_prefix?: string;
    /** Injection type. Default is 'override'. */
    injection_type?: string;
    /** Terraform template name. Maps to folder name in git repo. */
    tft_name?: string;
    tft_parameters?: InjectTerraformTemplateInnerTftParametersItem[];
  }

  /** Complete inventory definition details. */
  export interface InventoryResourceRecord {
    /** The unique name of your Inventory.  The name can be up to 128 characters long and can include alphanumeric
     *  characters, spaces, dashes, and underscores.
     */
    name?: string;
    /** Inventory id. */
    id?: string;
    /** The description of your Inventory.  The description can be up to 2048 characters long in size. */
    description?: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: string;
    /** Resource-group name for the Inventory definition.  By default, Inventory will be created in Default Resource
     *  Group.
     */
    resource_group?: string;
    /** Inventory creation time. */
    created_at?: string;
    /** Email address of user who created the Inventory. */
    created_by?: string;
    /** Inventory updation time. */
    updated_at?: string;
    /** Email address of user who updated the Inventory. */
    updated_by?: string;
    /** Input inventory of host and host group for the playbook,  in the .ini file format. */
    inventories_ini?: string;
    /** Input resource queries that is used to dynamically generate  the inventory of host and host group for the
     *  playbook.
     */
    resource_queries?: string[];
  }

  /** List of Inventory definition records. */
  export interface InventoryResourceRecordList {
    /** Total number of records. */
    total_count?: number;
    /** Number of records returned. */
    limit: number;
    /** Skipped number of records. */
    offset: number;
    /** List of inventory definition records. */
    inventories?: InventoryResourceRecord[];
  }

  /** Complete Job with user inputs and system generated data. */
  export interface Job {
    /** Name of the Schematics automation resource. */
    command_object?: string;
    /** Job command object id (workspace-id, action-id). */
    command_object_id?: string;
    /** Schematics job command name. */
    command_name?: string;
    /** Schematics job command parameter (playbook-name). */
    command_parameter?: string;
    /** Command line options for the command. */
    command_options?: string[];
    /** Job inputs used by Action or Workspace. */
    inputs?: VariableData[];
    /** Environment variables used by the Job while performing Action or Workspace. */
    settings?: VariableData[];
    /** User defined tags, while running the job. */
    tags?: string[];
    /** Job ID. */
    id?: string;
    /** Job name, uniquely derived from the related Workspace or Action. */
    name?: string;
    /** The description of your job is derived from the related action or workspace.  The description can be up to
     *  2048 characters long in size.
     */
    description?: string;
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: string;
    /** Resource-group name derived from the related Workspace or Action. */
    resource_group?: string;
    /** Job submission time. */
    submitted_at?: string;
    /** Email address of user who submitted the job. */
    submitted_by?: string;
    /** Job start time. */
    start_at?: string;
    /** Job end time. */
    end_at?: string;
    /** Duration of job execution; example 40 sec. */
    duration?: string;
    /** Job Status. */
    status?: JobStatus;
    /** Contains the cart order data which can be used for different purpose for eg. service tagging. */
    cart_order_data?: CartOrderData[];
    /** Job data. */
    data?: JobData;
    /** Describes a bastion resource. */
    bastion?: BastionResourceDefinition;
    /** Job log summary record. */
    log_summary?: JobLogSummary;
    /** Job log store URL. */
    log_store_url?: string;
    /** Job state store URL. */
    state_store_url?: string;
    /** Job results store URL. */
    results_url?: string;
    /** Job status updation timestamp. */
    updated_at?: string;
    /** ID of the Job Runner. */
    job_runner_id?: string;
    /** Agent name, Agent id and associated policy ID information. */
    agent?: AgentInfo;
  }

  /** Job data. */
  export interface JobData {
    /** Type of Job. */
    job_type: string;
    /** Workspace Job data. */
    workspace_job_data?: JobDataWorkspace;
    /** Action Job data. */
    action_job_data?: JobDataAction;
    /** Controls Job data. */
    system_job_data?: JobDataSystem;
    /** Flow Job data. */
    flow_job_data?: JobDataFlow;
  }

  /** Action Job data. */
  export interface JobDataAction {
    /** Flow name. */
    action_name?: string;
    /** Input variables data used by the Action Job. */
    inputs?: VariableData[];
    /** Output variables data from the Action Job. */
    outputs?: VariableData[];
    /** Environment variables used by all the templates in the Action. */
    settings?: VariableData[];
    /** Job status updation timestamp. */
    updated_at?: string;
    /** Complete inventory definition details. */
    inventory_record?: InventoryResourceRecord;
    /** Materialized inventory details used by the Action Job, in .ini format. */
    materialized_inventory?: string;
  }

  /** Flow Job data. */
  export interface JobDataFlow {
    /** Flow ID. */
    flow_id?: string;
    /** Flow Name. */
    flow_name?: string;
    /** Job data used by each workitem Job. */
    workitems?: JobDataWorkItem[];
    /** Job status updation timestamp. */
    updated_at?: string;
  }

  /** Controls Job data. */
  export interface JobDataSystem {
    /** Key ID for which key event is generated. */
    key_id?: string;
    /** List of the schematics resource id. */
    schematics_resource_id?: string[];
    /** Job status updation timestamp. */
    updated_at?: string;
  }

  /** Template Job data. */
  export interface JobDataTemplate {
    /** Template Id. */
    template_id?: string;
    /** Template name. */
    template_name?: string;
    /** Index of the template in the Flow. */
    flow_index?: number;
    /** Job inputs used by the Templates. */
    inputs?: VariableData[];
    /** Job output from the Templates. */
    outputs?: VariableData[];
    /** Environment variables used by the template. */
    settings?: VariableData[];
    /** Job status updation timestamp. */
    updated_at?: string;
  }

  /** Environment work items. */
  export interface JobDataWorkItem {
    /** command object id. */
    command_object_id?: string;
    /** command object name. */
    command_object_name?: string;
    /** layer name. */
    layers?: string;
    /** Type of source for the Template. */
    source_type?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Input variables data for the workItem used in FlowJob. */
    inputs?: VariableData[];
    /** Output variables for the workItem. */
    outputs?: VariableData[];
    /** Environment variables for the workItem. */
    settings?: VariableData[];
    /** Status of the last job executed by the workitem. */
    last_job?: JobDataWorkItemLastJob;
    /** Job status updation timestamp. */
    updated_at?: string;
  }

  /** Status of the last job executed by the workitem. */
  export interface JobDataWorkItemLastJob {
    /** Name of the Schematics automation resource. */
    command_object?: string;
    /** command object name (workspace_name/action_name). */
    command_object_name?: string;
    /** Workitem command object id, maps to workspace_id or action_id. */
    command_object_id?: string;
    /** Schematics job command name. */
    command_name?: string;
    /** Workspace job id. */
    job_id?: string;
    /** Status of Jobs. */
    job_status?: string;
  }

  /** Workspace Job data. */
  export interface JobDataWorkspace {
    /** Workspace name. */
    workspace_name?: string;
    /** Flow Id. */
    flow_id?: string;
    /** Flow name. */
    flow_name?: string;
    /** Input variables data used by the Workspace Job. */
    inputs?: VariableData[];
    /** Output variables data from the Workspace Job. */
    outputs?: VariableData[];
    /** Environment variables used by all the templates in the Workspace. */
    settings?: VariableData[];
    /** Input / output data of the Template in the Workspace Job. */
    template_data?: JobDataTemplate[];
    /** Job status updation timestamp. */
    updated_at?: string;
  }

  /** JobFileContent. */
  export interface JobFileContent {
    /** Name of the file. */
    file_name?: string;
    /** Content of the file, generated by the job. */
    file_content?: string;
  }

  /** Output files from the Job record. */
  export interface JobFileData {
    /** Job Id. */
    job_id?: string;
    /** Job name, uniquely derived from the related Workspace and Action. */
    job_name?: string;
    /** Summary metadata in the output files. */
    summary?: JobFileDataSummary[];
    /** The type of output file generated by the Job. */
    file_type?: string;
    /** Content of the file, generated by the job. */
    file_content?: string;
    /** Content of the additional files, generated by the child job. */
    additional_files?: JobFileContent[];
    /** Job file updation timestamp. */
    updated_at?: string;
  }

  /** JobFileDataSummary. */
  export interface JobFileDataSummary {
    /** Summary feature name. */
    name?: string;
    /** Summary feature type. */
    type?: string;
    /** Summary feature value. */
    value?: string;
  }

  /** List of Job details. */
  export interface JobList {
    /** Total number of records. */
    total_count?: number;
    /** Number of records returned. */
    limit: number;
    /** Skipped number of records. */
    offset: number;
    /** List of job records. */
    jobs?: JobLite[];
  }

  /** Job summary profile with system generated data. */
  export interface JobLite {
    /** Job ID. */
    id?: string;
    /** Job name, uniquely derived from the related Workspace or Action. */
    name?: string;
    /** Job description derived from the related Workspace or Action. */
    description?: string;
    /** Name of the Schematics automation resource. */
    command_object?: string;
    /** Job command object id (workspace-id, action-id). */
    command_object_id?: string;
    /** Schematics job command name. */
    command_name?: string;
    /** User defined tags, while running the job. */
    tags?: string[];
    /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action,
     *  choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud
     *  resources, provisioned using Schematics.
     */
    location?: string;
    /** Resource-group name derived from the related Workspace or Action. */
    resource_group?: string;
    /** Job submission time. */
    submitted_at?: string;
    /** Email address of user who submitted the job. */
    submitted_by?: string;
    /** Duration of job execution; example 40 sec. */
    duration?: string;
    /** Job start time. */
    start_at?: string;
    /** Job end time. */
    end_at?: string;
    /** Job Status. */
    status?: JobStatus;
    /** Job log summary record. */
    log_summary?: JobLogSummary;
    /** Job status updation timestamp. */
    updated_at?: string;
    /** ID of the Job Runner. */
    job_runner_id?: string;
    /** Agent name, Agent id and associated policy ID information. */
    agent?: AgentInfo;
  }

  /** Job Log details. */
  export interface JobLog {
    /** Job Id. */
    job_id?: string;
    /** Job name, uniquely derived from the related Workspace, Action or Controls. */
    job_name?: string;
    /** Job log summary record. */
    log_summary?: JobLogSummary;
    /** Format of the Log text. */
    format?: string;
    /** Log text, generated by the Job. */
    details?: string;
    /** Job status updation timestamp. */
    updated_at?: string;
  }

  /** Job log summary record. */
  export interface JobLogSummary {
    /** Workspace Id. */
    job_id?: string;
    /** Type of Job. */
    job_type?: string;
    /** Job log start timestamp. */
    log_start_at?: string;
    /** Job log update timestamp. */
    log_analyzed_till?: string;
    /** Job log elapsed time (log_analyzed_till - log_start_at). */
    elapsed_time?: number;
    /** Job log errors. */
    log_errors?: JobLogSummaryLogErrors[];
    /** Repo download Job log summary. */
    repo_download_job?: JobLogSummaryRepoDownloadJob;
    /** Workspace Job log summary. */
    workspace_job?: JobLogSummaryWorkspaceJob;
    /** Flow Job log summary. */
    flow_job?: JobLogSummaryFlowJob;
    /** Flow Job log summary. */
    action_job?: JobLogSummaryActionJob;
    /** System Job log summary. */
    system_job?: JobLogSummarySystemJob;
  }

  /** Job log summary of the flow workitem. */
  export interface JobLogSummaryWorkitems {
    /** workspace ID. */
    workspace_id?: string;
    /** workspace JOB ID. */
    job_id?: string;
    /** Number of resources add. */
    resources_add?: number;
    /** Number of resources modify. */
    resources_modify?: number;
    /** Number of resources destroy. */
    resources_destroy?: number;
    /** Log url for job. */
    log_url?: string;
  }

  /** Flow Job log summary. */
  export interface JobLogSummaryActionJob {
    /** number of targets or hosts. */
    target_count?: number;
    /** number of tasks in playbook. */
    task_count?: number;
    /** number of plays in playbook. */
    play_count?: number;
    /** Recap records. */
    recap?: JobLogSummaryActionJobRecap;
  }

  /** Recap records. */
  export interface JobLogSummaryActionJobRecap {
    /** List of target or host name. */
    target?: string[];
    /** Number of OK. */
    ok?: number;
    /** Number of changed. */
    changed?: number;
    /** Number of failed. */
    failed?: number;
    /** Number of skipped. */
    skipped?: number;
    /** Number of unreachable. */
    unreachable?: number;
  }

  /** Flow Job log summary. */
  export interface JobLogSummaryFlowJob {
    /** Number of workitems completed successfully. */
    workitems_completed?: number;
    /** Number of workitems pending in the flow. */
    workitems_pending?: number;
    /** Number of workitems failed. */
    workitems_failed?: number;
    workitems?: JobLogSummaryWorkitems[];
  }

  /** JobLogSummaryLogErrors. */
  export interface JobLogSummaryLogErrors {
    /** Error code in the Log. */
    error_code?: string;
    /** Summary error message in the log. */
    error_msg?: string;
    /** Number of occurrence. */
    error_count?: number;
  }

  /** Repo download Job log summary. */
  export interface JobLogSummaryRepoDownloadJob {
    /** Number of files scanned. */
    scanned_file_count?: number;
    /** Number of files quarantined. */
    quarantined_file_count?: number;
    /** Detected template or data file type. */
    detected_filetype?: string;
    /** Number of inputs detected. */
    inputs_count?: string;
    /** Number of outputs detected. */
    outputs_count?: string;
  }

  /** System Job log summary. */
  export interface JobLogSummarySystemJob {
    /** number of targets or hosts. */
    target_count?: number;
    /** Number of passed. */
    success?: number;
    /** Number of failed. */
    failed?: number;
  }

  /** Workspace Job log summary. */
  export interface JobLogSummaryWorkspaceJob {
    /** Number of resources add. */
    resources_add?: number;
    /** Number of resources modify. */
    resources_modify?: number;
    /** Number of resources destroy. */
    resources_destroy?: number;
  }

  /** Job Status. */
  export interface JobStatus {
    /** Position of job in pending queue. */
    position_in_queue?: number;
    /** Total no. of jobs in pending queue. */
    total_in_queue?: number;
    /** Workspace Job Status. */
    workspace_job_status?: JobStatusWorkspace;
    /** Action Job Status. */
    action_job_status?: JobStatusAction;
    /** System Job Status. */
    system_job_status?: JobStatusSystem;
    /** Environment Flow JOB Status. */
    flow_job_status?: JobStatusFlow;
  }

  /** Action Job Status. */
  export interface JobStatusAction {
    /** Action name. */
    action_name?: string;
    /** Status of Jobs. */
    status_code?: string;
    /** Action Job status message - to be displayed along with the action_status_code. */
    status_message?: string;
    /** Status of Resources. */
    bastion_status_code?: string;
    /** Bastion status message - to be displayed along with the bastion_status_code;. */
    bastion_status_message?: string;
    /** Status of Resources. */
    targets_status_code?: string;
    /** Aggregated status message for all target resources,  to be displayed along with the targets_status_code;. */
    targets_status_message?: string;
    /** Job status updation timestamp. */
    updated_at?: string;
  }

  /** Environment Flow JOB Status. */
  export interface JobStatusFlow {
    /** flow id. */
    flow_id?: string;
    /** flow name. */
    flow_name?: string;
    /** Status of Jobs. */
    status_code?: string;
    /** Flow Job status message - to be displayed along with the status_code;. */
    status_message?: string;
    /** Environment's individual workItem status details;. */
    workitems?: JobStatusWorkitem[];
    /** Job status updation timestamp. */
    updated_at?: string;
  }

  /** schematics Resources Job Status. */
  export interface JobStatusSchematicsResources {
    /** Status of Jobs. */
    status_code?: string;
    /** system job status message. */
    status_message?: string;
    /** id for each resource which is targeted as a part of system job. */
    schematics_resource_id?: string;
    /** Job status updation timestamp. */
    updated_at?: string;
  }

  /** System Job Status. */
  export interface JobStatusSystem {
    /** System job message. */
    system_status_message?: string;
    /** Status of Jobs. */
    system_status_code?: string;
    /** job staus for each schematics resource. */
    schematics_resource_status?: JobStatusSchematicsResources[];
    /** Job status updation timestamp. */
    updated_at?: string;
  }

  /** Template Job Status. */
  export interface JobStatusTemplate {
    /** Template Id. */
    template_id?: string;
    /** Template name. */
    template_name?: string;
    /** Index of the template in the Flow. */
    flow_index?: number;
    /** Status of Jobs. */
    status_code?: string;
    /** Template job status message (eg. VPCt1_Apply_Pending, for a 'VPCt1' Template). */
    status_message?: string;
    /** Job status updation timestamp. */
    updated_at?: string;
  }

  /** Individual workitem status info. */
  export interface JobStatusWorkitem {
    /** Workspace id. */
    workspace_id?: string;
    /** workspace name. */
    workspace_name?: string;
    /** workspace job id. */
    job_id?: string;
    /** Status of Jobs. */
    status_code?: string;
    /** workitem job status message;. */
    status_message?: string;
    /** workitem job status updation timestamp. */
    updated_at?: string;
  }

  /** Workspace Job Status. */
  export interface JobStatusWorkspace {
    /** Workspace name. */
    workspace_name?: string;
    /** Status of Jobs. */
    status_code?: string;
    /** Workspace job status message (eg. App1_Setup_Pending, for a 'Setup' flow in the 'App1' Workspace). */
    status_message?: string;
    /** Environment Flow JOB Status. */
    flow_status?: JobStatusFlow;
    /** Workspace Flow Template job status. */
    template_status?: JobStatusTemplate[];
    /** Job status updation timestamp. */
    updated_at?: string;
    /** List of terraform commands executed and their status. */
    commands?: CommandsInfo[];
  }

  /** Discover kms instances in the account based on location. */
  export interface KMSDiscovery {
    /** The total number of records. */
    total_count?: number;
    /** The number of records returned. */
    limit: number;
    /** The skipped number of records. */
    offset: number;
    /** The list of kms instances. */
    kms_instances?: KMSInstances[];
  }

  /** User defined kms instances. */
  export interface KMSInstances {
    /** The location to integrate kms instance. For example, location can be `US` and `EU`. */
    location?: string;
    /** The encryption scheme values. **Allowable values** [`byok`,`kyok`]. */
    encryption_scheme?: string;
    /** The kms instance resource group to integrate. */
    resource_group?: string;
    /** The primary kms CRN information. */
    kms_crn?: string;
    /** The kms instance name. */
    kms_name?: string;
    /** The kms instance private endpoints. */
    kms_private_endpoint?: string;
    /** The kms instance public endpoints. */
    kms_public_endpoint?: string;
    /** Detailed list of keys. */
    keys?: KMSInstancesKeys[];
  }

  /** KMSInstancesKeys. */
  export interface KMSInstancesKeys {
    /** The name of the root key. */
    name?: string;
    /** The kms CRN of the root key. */
    crn?: string;
    /** The error message details. */
    error?: string;
  }

  /** User defined kms settings information. */
  export interface KMSSettings {
    /** The location to integrate kms instance. For example, location can be `US` and `EU`. */
    location?: string;
    /** The encryption scheme values. **Allowable values** [`byok`,`kyok`]. */
    encryption_scheme?: string;
    /** The kms instance resource group to integrate. */
    resource_group?: string;
    /** The primary kms instance details. */
    primary_crk?: KMSSettingsPrimaryCrk;
    /** The secondary kms instance details. */
    secondary_crk?: KMSSettingsSecondaryCrk;
  }

  /** The primary kms instance details. */
  export interface KMSSettingsPrimaryCrk {
    /** The primary kms instance name. */
    kms_name?: string;
    /** The primary kms instance private endpoint. */
    kms_private_endpoint?: string;
    /** The CRN of the primary root key. */
    key_crn?: string;
  }

  /** The secondary kms instance details. */
  export interface KMSSettingsSecondaryCrk {
    /** The secondary kms instance name. */
    kms_name?: string;
    /** The secondary kms instance private endpoint. */
    kms_private_endpoint?: string;
    /** The CRN of the secondary key. */
    key_crn?: string;
  }

  /** Last job details. */
  export interface LastJob {
    /** ID of last job. */
    job_id?: string;
    /** Name of the last job. */
    job_name?: string;
    /** Status of the last job. */
    job_status?: string;
  }

  /** Log file URL for job that ran against your workspace. */
  export interface LogStoreResponse {
    /** The provisioning engine that was used for the job. */
    engine_name?: string;
    /** The version of the provisioning engine that was used for the job. */
    engine_version?: string;
    /** The ID that was assigned to your Terraform template of IBM Cloud catalog software template. */
    id?: string;
    /** The URL to access the logs that were created during the plan, apply, or destroy job. */
    log_store_url?: string;
  }

  /** List of log file URL that ran against your workspace. */
  export interface LogStoreResponseList {
    /** Runtime data. */
    runtime_data?: LogStoreResponse[];
  }

  /** Summary information extracted from the job logs. */
  export interface LogSummary {
    /** The status of your activity or job. To retrieve the URL to your job logs, use the GET
     *  /v1/workspaces/{id}/actions/{action_id}/logs API.
     *
     *  * **COMPLETED**: The job completed successfully.
     *  * **CREATED**: The job was created, but the provisioning, modification, or removal of IBM Cloud resources has
     *  not started yet.
     *  * **FAILED**: An error occurred during the plan, apply, or destroy job. Use the job ID to retrieve the URL to
     *  the log files for your job.
     *  * **IN PROGRESS**: The job is in progress. You can use the log_url to access the logs.
     */
    activity_status?: string;
    /** Template detected type. */
    detected_template_type?: string;
    /** Numner of discarded files. */
    discarded_files?: number;
    /** Numner of errors in log. */
    error?: string;
    /** Numner of resources added. */
    resources_added?: number;
    /** Numner of resources destroyed. */
    resources_destroyed?: number;
    /** Numner of resources modified. */
    resources_modified?: number;
    /** Numner of filed scanned. */
    scanned_files?: number;
    /** Numner of template variables. */
    template_variable_count?: number;
    /** Elapsed time to run the job. */
    time_taken?: number;
  }

  /** OutputValuesInner. */
  export interface OutputValuesInner {
    /** The subfolder in the GitHub or GitLab repository where your Terraform template is stored. If the template is
     *  stored in the root directory, `.` is returned.
     */
    folder?: string;
    /** The ID that was assigned to your Terraform template or IBM Cloud catalog software template. */
    id?: string;
    /** A list of Terraform output values. */
    output_values?: JsonObject[];
    /** The Terraform version that was used to apply your template. */
    value_type?: string;
  }

  /** A list of resource groups that your account has access to. */
  export interface ResourceGroupResponse {
    /** The ID of the account for which you listed the resource groups. */
    account_id?: string;
    /** The CRN of the resource group. */
    crn?: string;
    /** If set to **true**, the resource group is used as the default resource group for your account. If set to
     *  **false**, the resource group is not used as the default resource group in your account.
     */
    default?: boolean;
    /** The name of the resource group. */
    name?: string;
    /** The ID of the resource group. */
    resource_group_id?: string;
    /** The state of the resource group. */
    state?: string;
  }

  /** Describe resource query. */
  export interface ResourceQuery {
    /** Type of the query(workspaces). */
    query_type?: string;
    query_condition?: ResourceQueryParam[];
    /** List of query selection parameters. */
    query_select?: string[];
  }

  /** Describe resource query param. */
  export interface ResourceQueryParam {
    /** Name of the resource query param. */
    name?: string;
    /** Value of the resource query param. */
    value?: string;
    /** Description of resource query param variable. */
    description?: string;
  }

  /** Describe resource query record. */
  export interface ResourceQueryRecord {
    /** Resource type (cluster, vsi, icd, vpc). */
    type?: string;
    /** Resource query name. */
    name?: string;
    /** Resource Query id. */
    id?: string;
    /** Resource query creation time. */
    created_at?: string;
    /** Email address of user who created the Resource query. */
    created_by?: string;
    /** Resource query updation time. */
    updated_at?: string;
    /** Email address of user who updated the Resource query. */
    updated_by?: string;
    queries?: ResourceQuery[];
  }

  /** List of Resource query records. */
  export interface ResourceQueryRecordList {
    /** Total number of records. */
    total_count?: number;
    /** Number of records returned. */
    limit: number;
    /** Skipped number of records. */
    offset: number;
    /** List of resource query records. (Deprecated ResourceQueries. Instead, use resource_queries.). */
    resource_queries?: ResourceQueryRecord[];
  }

  /** Describe resource query. */
  export interface ResourceQueryResponseRecord {
    response?: ResourceQueryResponseRecordResponse[];
  }

  /** List of query output values. */
  export interface ResourceQueryResponseRecordQueryOutput {
    /** Name of the output param. */
    name?: string;
    /** value of the output param. */
    value?: string;
  }

  /** ResourceQueryResponseRecordResponse. */
  export interface ResourceQueryResponseRecordResponse {
    /** Type of the query(workspaces). */
    query_type?: string;
    query_condition?: ResourceQueryParam[];
    /** List of query selection parameters. */
    query_select?: string[];
    query_output?: ResourceQueryResponseRecordQueryOutput[];
  }

  /** Information about the location. */
  export interface SchematicsLocations {
    /** The name of the location. */
    name?: string;
    /** The ID of the location. */
    id?: string;
    /** The country where the location is located. */
    country?: string;
    /** The geography that the location belongs to. */
    geography?: string;
    /** Geographical continent locations code having the data centres of IBM Cloud Schematics service. */
    geography_code?: string;
    /** The metro area that the location belongs to. */
    metro?: string;
    /** The multizone metro area that the location belongs to. */
    multizone_metro?: string;
    /** The kind of location. */
    kind?: string;
    /** The list of paired regions used by Schematics. */
    paired_region?: string[];
    /** The restricted region. */
    restricted?: boolean;
  }

  /** The list of locations details. */
  export interface SchematicsLocationsList {
    /** The list of locations. */
    locations?: SchematicsLocationsLite[];
  }

  /** An individual location details. */
  export interface SchematicsLocationsLite {
    /** The Geographical region code having the data centres of the IBM Cloud Schematics service. */
    region?: string;
    /** The Geographical city locations having the data centres of the IBM Cloud Schematics service. */
    metro?: string;
    /** The Geographical continent locations code having the data centres of the IBM Cloud Schematics service. */
    geography_code?: string;
    /** The Geographical continent locations having the data centres of the IBM Cloud Schematics service. */
    geography?: string;
    /** The Country locations having the data centres of the IBM Cloud Schematics service. */
    country?: string;
    /** The kind of location. */
    kind?: string;
    /** The list of paired regions used by the Schematics. */
    paired_region?: string[];
    /** The restricted region. */
    restricted?: boolean;
    /** Display name for the region. */
    display_name?: string;
    /** Schematics public endpoint for the region. */
    schematics_regional_public_endpoint?: string;
    /** Schematics private endpoint for the region. */
    schematics_regional_private_endpoint?: string;
  }

  /** Service Extensions. */
  export interface ServiceExtensions {
    /** Name of the Service Data. */
    name?: string;
    /** Value of the Service Data. */
    value?: string;
    /** Type of the value string, int, bool. */
    type?: string;
  }

  /** Information about the Target used by the templates originating from the  IBM Cloud catalog offerings. This information is not relevant for workspace created using your own Terraform template. */
  export interface SharedTargetData {
    /** Cluster created on. */
    cluster_created_on?: string;
    /** The ID of the cluster where you want to provision the resources of all IBM Cloud catalog templates that are
     *  included in the catalog offering.
     */
    cluster_id?: string;
    /** The cluster name. */
    cluster_name?: string;
    /** The cluster type. */
    cluster_type?: string;
    /** The entitlement key that you want to use to install IBM Cloud entitled software. */
    entitlement_keys?: JsonObject[];
    /** The Kubernetes namespace or OpenShift project where the resources of all IBM Cloud catalog templates that
     *  are included in the catalog offering are deployed into.
     */
    namespace?: string;
    /** The IBM Cloud region that you want to use for the resources of all IBM Cloud catalog templates that are
     *  included in the catalog offering.
     */
    region?: string;
    /** The ID of the resource group that you want to use for the resources of all IBM Cloud catalog templates that
     *  are included in the catalog offering.
     */
    resource_group_id?: string;
    /** The cluster worker count. */
    worker_count?: number;
    /** The cluster worker type. */
    worker_machine_type?: string;
  }

  /** Information about the Target used by the templates originating from IBM Cloud catalog offerings. This information is not relevant when you create a workspace from your own Terraform template. */
  export interface SharedTargetDataResponse {
    /** The ID of the cluster where you want to provision the resources of all IBM Cloud catalog templates that are
     *  included in the catalog offering.
     */
    cluster_id?: string;
    /** Target cluster name. */
    cluster_name?: string;
    /** The entitlement key that you want to use to install IBM Cloud entitled software. */
    entitlement_keys?: JsonObject[];
    /** The Kubernetes namespace or OpenShift project where the resources of all IBM Cloud catalog templates that
     *  are included in the catalog offering are deployed into.
     */
    namespace?: string;
    /** The IBM Cloud region that you want to use for the resources of all IBM Cloud catalog templates that are
     *  included in the catalog offering.
     */
    region?: string;
    /** The ID of the resource group that you want to use for the resources of all IBM Cloud catalog templates that
     *  are included in the catalog offering.
     */
    resource_group_id?: string;
  }

  /** Information about workspace runtime data. */
  export interface StateStoreResponse {
    /** The provisioning engine that was used to apply the Terraform template or IBM Cloud catalog software
     *  template.
     */
    engine_name?: string;
    /** The version of the provisioning engine that was used. */
    engine_version?: string;
    /** The ID that was assigned to your Terraform template or IBM Cloud catalog software template. */
    id?: string;
    /** The URL where the Terraform statefile (`terraform.tfstate`) is stored. You can use the statefile to find an
     *  overview of IBM Cloud resources that were created by Schematics. Schematics uses the statefile as an inventory
     *  list to determine future create, update, or deletion jobs.
     */
    state_store_url?: string;
  }

  /** Information about the Terraform statefile URL. */
  export interface StateStoreResponseList {
    /** Information about workspace runtime data. */
    runtime_data?: StateStoreResponse[];
  }

  /** System lock status. */
  export interface SystemLock {
    /** Is the automation locked by a Schematic job ?. */
    sys_locked?: boolean;
    /** Name of the User who performed the job, that lead to the locking of the automation. */
    sys_locked_by?: string;
    /** When the User performed the job that lead to locking of the automation ?. */
    sys_locked_at?: string;
  }

  /** Template metadata response. */
  export interface TemplateMetaDataResponse {
    /** The template type such as **terraform**, **ansible**, **helm**, **cloudpak**, or **bash script**. */
    type?: string;
    /** List of variables and its metadata. */
    variables: VariableData[];
  }

  /** The `README.md` file for the template used by the workspace. */
  export interface TemplateReadme {
    /** The `README.md` file for the template used by the workspace. */
    readme?: string;
  }

  /** Input variables for the Template repoository, while creating a workspace. */
  export interface TemplateRepoRequest {
    /** The repository branch. */
    branch?: string;
    /** The repository release. */
    release?: string;
    /** The repository SHA value. */
    repo_sha_value?: string;
    /** The repository URL. */
    repo_url?: string;
    /** The source URL. */
    url?: string;
  }

  /** Information about the Template repository used by the workspace. */
  export interface TemplateRepoResponse {
    /** The repository branch. */
    branch?: string;
    /** Full repository URL. */
    full_url?: string;
    /** Has uploaded Git repository tar. */
    has_uploadedgitrepotar?: boolean;
    /** The repository release. */
    release?: string;
    /** The repository SHA value. */
    repo_sha_value?: string;
    /** The repository URL. For more information, about using `.netrc` in `env_values`, see [Usage of private module
     *  template](https://cloud.ibm.com/docs/schematics?topic=schematics-download-modules-pvt-git).
     */
    repo_url?: string;
    /** The source URL. */
    url?: string;
  }

  /** Response after uploading Template in tar file format. */
  export interface TemplateRepoTarUploadResponse {
    /** Tar file value. */
    file_value?: string;
    /** Has received tar file?. */
    has_received_file?: boolean;
    /** Template ID. */
    id?: string;
  }

  /** Input to update the template repository data. */
  export interface TemplateRepoUpdateRequest {
    /** The repository branch. */
    branch?: string;
    /** The repository release. */
    release?: string;
    /** The repository SHA value. */
    repo_sha_value?: string;
    /** The repository URL. */
    repo_url?: string;
    /** The source URL. */
    url?: string;
  }

  /** Information about the resources provisioned by the Terraform template. */
  export interface TemplateResources {
    /** The subfolder in GitHub or GitLab where your Terraform templates are stored.  If your template is stored in
     *  the root directory, `.` is returned.
     */
    folder?: string;
    /** The ID that was assigned to your Terraform template or IBM Cloud catalog software template. */
    id?: string;
    /** Last refreshed timestamp of the terraform resource. */
    generated_at?: string;
    /** List of null resources. */
    null_resources?: JsonObject[];
    /** Information about the IBM Cloud resources that are associated with your workspace. */
    related_resources?: JsonObject[];
    /** Information about the IBM Cloud resources that are associated with your workspace. **Note** The
     *  `resource_tainted` flag marks `true` when an instance is times out after few hours, if your resource
     *  provisioning takes longer duration. When you rerun the apply plan, based on the `resource_taint` flag result the
     *  provisioning continues from the state where the provisioning has stopped.
     */
    resources?: JsonObject[];
    /** Number of resources. */
    resources_count?: number;
    /** The Terraform version that was used to apply your template. */
    type?: string;
  }

  /** Information about the provisioning engine, state file, and runtime logs. */
  export interface TemplateRunTimeDataResponse {
    /** The command that was used to apply the Terraform template or IBM Cloud catalog software template. */
    engine_cmd?: string;
    /** The provisioning engine that was used to apply the Terraform template or IBM Cloud catalog software
     *  template.
     */
    engine_name?: string;
    /** The version of the provisioning engine that was used. */
    engine_version?: string;
    /** The ID that was assigned to your Terraform template or IBM Cloud catalog software template. */
    id?: string;
    /** The URL to access the logs that were created during the creation, update, or deletion of your IBM Cloud
     *  resources.
     */
    log_store_url?: string;
    /** List of Output values. */
    output_values?: JsonObject[];
    /** List of resources. */
    resources?: JsonObject[][];
    /** The URL where the Terraform statefile (`terraform.tfstate`) is stored. You can use the statefile to find an
     *  overview of IBM Cloud resources that were created by Schematics. Schematics uses the statefile as an inventory
     *  list to determine future create, update, or deletion jobs.
     */
    state_store_url?: string;
  }

  /** Input parameters to define input variables for your Terraform template. */
  export interface TemplateSourceDataRequest {
    /** A list of environment variables that you want to apply during the execution of a bash script or Terraform
     *  job. This field must be provided as a list of key-value pairs, for example, **TF_LOG=debug**. Each entry will be
     *  a map with one entry where `key is the environment variable name and value is value`. You can define environment
     *  variables for IBM Cloud catalog offerings that are provisioned by using a bash script. See [example to use
     *  special environment
     *  variable](https://cloud.ibm.com/docs/schematics?topic=schematics-set-parallelism#parallelism-example)  that are
     *  supported by Schematics.
     */
    env_values?: JsonObject[];
    /** Environment variables metadata. */
    env_values_metadata?: EnvironmentValuesMetadata[];
    /** The subfolder in your GitHub or GitLab repository where your Terraform template is stored. */
    folder?: string;
    /** True, to use the files from the specified folder & subfolder in your GitHub or GitLab repository and ignore
     *  the other folders in the repository. For more information, see [Compact download for Schematics
     *  workspace](https://cloud.ibm.com/docs/schematics?topic=schematics-compact-download&interface=ui).
     */
    compact?: boolean;
    /** The content of an existing Terraform statefile that you want to import in to your workspace. To get the
     *  content of a Terraform statefile for a specific Terraform template in an existing workspace, run `ibmcloud
     *  terraform state pull --id <workspace_id> --template <template_id>`.
     */
    init_state_file?: string;
    /** Array of injectable terraform blocks. */
    injectors?: InjectTerraformTemplateInner[];
    /** The Terraform version that you want to use to run your Terraform code. Enter `terraform_v1.1` to use
     *  Terraform version 1.1, and `terraform_v1.0` to use Terraform version 1.0. This is a required variable. If the
     *  Terraform version is not specified, By default, Schematics selects the version from your template. For more
     *  information, refer to [Terraform
     *  version](https://cloud.ibm.com/docs/schematics?topic=schematics-workspace-setup&interface=ui#create-workspace_ui).
     */
    type?: string;
    /** Uninstall script name. */
    uninstall_script_name?: string;
    /** A list of variable values that you want to apply during the Helm chart installation. The list must be
     *  provided in JSON format, such as `"autoscaling: enabled: true minReplicas: 2"`. The values that you define here
     *  override the default Helm chart values. This field is supported only for IBM Cloud catalog offerings that are
     *  provisioned by using the Terraform Helm provider.
     */
    values?: string;
    /** List of values metadata. */
    values_metadata?: JsonObject[];
    /** VariablesRequest -. */
    variablestore?: WorkspaceVariableRequest[];
  }

  /** Information about the input variables that are used in the template. */
  export interface TemplateSourceDataResponse {
    /** List of environment values. */
    env_values?: EnvVariableResponse[];
    /** The subfolder in your GitHub or GitLab repository where your Terraform template is stored. If your template
     *  is stored in the root directory, `.` is returned.
     */
    folder?: string;
    /** True, to use the files from the specified folder & subfolder in your GitHub or GitLab repository and ignore
     *  the other folders in the repository.
     */
    compact?: boolean;
    /** Has github token. */
    has_githubtoken?: boolean;
    /** The ID that was assigned to your Terraform template or IBM Cloud catalog software template. */
    id?: string;
    /** The Terraform version that was used to run your Terraform code. */
    type?: string;
    /** Uninstall script name. */
    uninstall_script_name?: string;
    /** A list of variable values that you want to apply during the Helm chart installation. The list must be
     *  provided in JSON format, such as `"autoscaling: enabled: true minReplicas: 2"`. The values that you define here
     *  override the default Helm chart values. This field is supported only for IBM Cloud catalog offerings that are
     *  provisioned by using the Terraform Helm provider.
     */
    values?: string;
    /** A list of input variables that are associated with the workspace. */
    values_metadata?: JsonObject[];
    /** The API endpoint to access the input variables that you defined for your template. */
    values_url?: string;
    /** Information about the input variables that your template uses. */
    variablestore?: WorkspaceVariableResponse[];
  }

  /** The content of the Terraform statefile (`terraform.tfstate`). */
  export interface TemplateStateStore {
    version?: number;
    terraform_version?: string;
    serial?: number;
    lineage?: string;
    modules?: JsonObject[];
  }

  /** Information about the input variables that are declared in the template that your workspace points to. */
  export interface TemplateValues {
    /** Information about workspace variable metadata. */
    values_metadata?: JsonObject[];
  }

  /** Inputs for running a Terraform command on the workspace. */
  export interface TerraformCommand {
    /** You must provide the command to execute. Supported commands are `show`,`taint`, `untaint`, `state`,
     *  `import`, `output`, `drift`.
     */
    command?: string;
    /** The required address parameters for the command name. You can send the option flag and address parameter in
     *  the payload. **Syntax ** "command_params": "<option>=<flag>", "<address>". **Example ** "command_params":
     *  "-allow-missing=true", "-lock=true", "data.template_file.test".
     */
    command_params?: string;
    /** The optional name for the command block. */
    command_name?: string;
    /** The optional text to describe the command block. */
    command_desc?: string;
    /** Instruction to continue or break in case of error. */
    command_on_error?: string;
    /** Dependency on previous commands. */
    command_depends_on?: string;
    /** Displays the command executed status, either `success` or `failure`. */
    command_status?: string;
  }

  /** User defined status of the Schematics object. */
  export interface UserState {
    /** User-defined states
     *    * `draft` Object can be modified; can be used by Jobs run by the author, during execution
     *    * `live` Object can be modified; can be used by Jobs during execution
     *    * `locked` Object cannot be modified; can be used by Jobs during execution
     *    * `disable` Object can be modified. cannot be used by Jobs during execution.
     */
    state?: string;
    /** Name of the User who set the state of the Object. */
    set_by?: string;
    /** When the User who set the state of the Object. */
    set_at?: string;
  }

  /** UserValues -. */
  export interface UserValues {
    /** A list of environment variables that you want to apply during the execution of a bash script or Terraform
     *  job. This field must be provided as a list of key-value pairs, for example, **TF_LOG=debug**. Each entry will be
     *  a map with one entry where `key is the environment variable name and value is value`. You can define environment
     *  variables for IBM Cloud catalog offerings that are provisioned by using a bash script. See [example to use
     *  special environment
     *  variable](https://cloud.ibm.com/docs/schematics?topic=schematics-set-parallelism#parallelism-example)  that are
     *  supported by Schematics.
     */
    env_values?: JsonObject[];
    /** A list of environment variables that you want to apply during the execution of a bash script or Terraform
     *  job. This field must be provided as a list of key-value pairs, for example, **TF_LOG=debug**. Each entry will be
     *  a map with one entry where `key is the environment variable name and value is value`. You can define environment
     *  variables for IBM Cloud catalog offerings that are provisioned by using a bash script. See [example to use
     *  special environment
     *  variable](https://cloud.ibm.com/docs/schematics?topic=schematics-set-parallelism#parallelism-example)  that are
     *  supported by Schematics.
     */
    env_values_map?: EnvVariableRequestMap[];
    /** User values. */
    values?: string;
    /** Information about the input variables that your template uses. */
    variablestore?: WorkspaceVariableResponse[];
  }

  /** User editable variable data and system generated reference to the value. */
  export interface VariableData {
    /** The name of the variable. For example, `name = "inventory username"`. */
    name?: string;
    /** The value for the variable or reference to the value. For example, `value = "<provide your ssh_key_value
     *  with \n>"`. **Note** The SSH key should contain `\n` at the end of the key details in case of command line or
     *  API calls.
     */
    value?: string;
    /** True, will ignore the data in the value attribute, instead the data in metadata.default_value will be used. */
    use_default?: boolean;
    /** An user editable metadata for the variables. */
    metadata?: VariableMetadata;
    /** The reference link to the variable value By default the expression points to `$self.value`. */
    link?: string;
  }

  /** An user editable metadata for the variables. */
  export interface VariableMetadata {
    /** Type of the variable. */
    type?: string;
    /** The list of aliases for the variable name. */
    aliases?: string[];
    /** The description of the meta data. */
    description?: string;
    /** Cloud data type of the variable. eg. resource_group_id, region, vpc_id. */
    cloud_data_type?: string;
    /** Default value for the variable only if the override value is not specified. */
    default_value?: string;
    /** The status of the link. */
    link_status?: string;
    /** Is the variable secure or sensitive ?. */
    secure?: boolean;
    /** Is the variable readonly ?. */
    immutable?: boolean;
    /** If **true**, the variable is not displayed on UI or Command line. */
    hidden?: boolean;
    /** If the variable required?. */
    required?: boolean;
    /** The list of possible values for this variable.  If type is **integer** or **date**, then the array of string
     *  is  converted to array of integers or date during the runtime.
     */
    options?: string[];
    /** The minimum value of the variable. Applicable for the integer type. */
    min_value?: number;
    /** The maximum value of the variable. Applicable for the integer type. */
    max_value?: number;
    /** The minimum length of the variable value. Applicable for the string type. */
    min_length?: number;
    /** The maximum length of the variable value. Applicable for the string type. */
    max_length?: number;
    /** The regex for the variable value. */
    matches?: string;
    /** The relative position of this variable in a list. */
    position?: number;
    /** The display name of the group this variable belongs to. */
    group_by?: string;
    /** The source of this meta-data. */
    source?: string;
  }

  /** Successful response when you retrieve detailed information about the IBM Cloud Schematics API. */
  export interface VersionResponse {
    /** The date when the API version was built. */
    builddate?: string;
    /** The build number that the API is based on. */
    buildno?: string;
    /** The SHA value for the Git commit that represents the latest version of the API. */
    commitsha?: string;
    /** The Terraform Helm provider version that is used when you install Helm charts with Schematics. */
    helm_provider_version?: string;
    /** The Helm version that is used when you install Helm charts with Schematics. */
    helm_version?: string;
    /** Supported template types. */
    supported_template_types?: JsonObject;
    /** The version of the IBM Cloud Terraform provider plug-in that is used when you apply Terraform templates with
     *  Schematics.
     */
    terraform_provider_version?: string;
    /** The Terraform version that is used when you apply Terraform templates with Schematics. */
    terraform_version?: string;
  }

  /** List of workspace jobs. */
  export interface WorkspaceActivities {
    /** List of workspace jobs. */
    actions?: WorkspaceActivity[];
    /** The ID of the workspace. */
    workspace_id?: string;
    /** The name of the workspace. */
    workspace_name?: string;
  }

  /** Information about the workspace jobs. */
  export interface WorkspaceActivity {
    /** The ID of the activity or job.  You can use the ID to retrieve the logs for that job by using the `GET
     *  /v1/workspaces/{id}/actions/{action_id}/logs` API.
     */
    action_id?: string;
    /** Information about the success or failure of your job,  including a success or error code and the timestamp
     *  when the job succeeded or failed.
     */
    message?: string[];
    /** The type of actovoty or job that ran against your workspace.
     *
     *   * **APPLY**: The apply job was created when you used the `PUT /v1/workspaces/{id}/apply` API to apply a
     *  Terraform template in IBM Cloud.
     *   * **DESTROY**: The destroy job was created when you used the `DELETE /v1/workspaces/{id}/destroy` API to remove
     *  all resources that are associated with your workspace.
     *   * **PLAN**: The plan job was created when you used the `POST /v1/workspaces/{id}/plan` API to create a
     *  Terraform execution plan.
     */
    name?: string;
    /** The timestamp when the job was initiated. */
    performed_at?: string;
    /** The user ID who initiated the job. */
    performed_by?: string;
    /** The status of your activity or job. To retrieve the URL to your job logs, use the GET
     *  /v1/workspaces/{id}/actions/{action_id}/logs API.
     *
     *  * **COMPLETED**: The job completed successfully.
     *  * **CREATED**: The job was created, but the provisioning, modification, or removal of IBM Cloud resources has
     *  not started yet.
     *  * **FAILED**: An error occurred during the plan, apply, or destroy job. Use the job ID to retrieve the URL to
     *  the log files for your job.
     *  * **IN PROGRESS**: The job is in progress. You can use the log_url to access the logs.
     */
    status?: string;
    /** List of template activities. */
    templates?: WorkspaceActivityTemplate[];
  }

  /** Response after successfully initiating a request to `apply` the Terraform template in IBM Cloud. */
  export interface WorkspaceActivityApplyResult {
    /** The ID of the activity or job that was created when you initiated a request to `apply` a Terraform template.
     *   You can use the ID to retrieve log file by using the `GET /v1/workspaces/{id}/actions/{action_id}/logs` API.
     */
    activityid?: string;
  }

  /** Response after successfully initiating a request to run a workspace command on the stack of resources provisioned using Terraform. */
  export interface WorkspaceActivityCommandResult {
    /** The ID of the job that was created when you initiated a request to `apply` a Terraform template.  You can
     *  use the ID to retrieve log file by using the `GET /v1/workspaces/{id}/actions/{action_id}/logs` API.
     */
    activityid?: string;
  }

  /** Response after successfully initiating a request to `destroy` the stack of resources provisioned using Terraform. */
  export interface WorkspaceActivityDestroyResult {
    /** The ID of the activity or job that was created when you initiated a request to `destroy` a Terraform
     *  template.  You can use the ID to retrieve log file by using the `GET
     *  /v1/workspaces/{id}/actions/{action_id}/logs` API.
     */
    activityid?: string;
  }

  /** Workspace job logs for all the templates in the workspace. */
  export interface WorkspaceActivityLogs {
    /** The ID of the activity or job that ran against your workspace. */
    action_id?: string;
    /** The type of actovoty or job that ran against your workspace.
     *
     *   * **APPLY**: The apply job was created when you used the `PUT /v1/workspaces/{id}/apply` API to apply a
     *  Terraform template in IBM Cloud.
     *   * **DESTROY**: The destroy job was created when you used the `DELETE /v1/workspaces/{id}/destroy` API to remove
     *  all resources that are associated with your workspace.
     *   * **PLAN**: The plan job was created when you used the `POST /v1/workspaces/{id}/plan` API to create a
     *  Terraform execution plan.
     */
    name?: string;
    /** List of templates in the workspace. */
    templates?: WorkspaceActivityTemplateLogs[];
  }

  /** Workspace job options template. */
  export interface WorkspaceActivityOptionsTemplate {
    /** A list of Terraform resources to target. */
    target?: string[];
    /** Terraform variables for the workspace job options. */
    tf_vars?: string[];
  }

  /** Response after successfully initiating a request to `plan` the Terraform template in IBM Cloud. */
  export interface WorkspaceActivityPlanResult {
    /** The ID of the activity or job that was created when you initiated a request to `plan` a Terraform template.
     *  You can use the ID to retrieve log file by using the `GET /v1/workspaces/{id}/actions/{action_id}/logs` API.
     */
    activityid?: string;
  }

  /** Response after successfully initiating a request to `refresh` the Terraform template in IBM Cloud. */
  export interface WorkspaceActivityRefreshResult {
    /** The ID of the activity or job that was created for your workspace `refresh` activity or job.  You can use
     *  the ID to retrieve the log file by using the `GET /v1/workspaces/{id}/actions/{action_id}/logs` API.
     */
    activityid?: string;
  }

  /** Information about the template in the workspace. */
  export interface WorkspaceActivityTemplate {
    /** End time for the job. */
    end_time?: string;
    /** Summary information extracted from the job logs. */
    log_summary?: LogSummary;
    /** Log URL. */
    log_url?: string;
    /** Message. */
    message?: string;
    /** Job start time. */
    start_time?: string;
    /** The status of your activity or job. To retrieve the URL to your job logs, use the GET
     *  /v1/workspaces/{id}/actions/{action_id}/logs API.
     *
     *  * **COMPLETED**: The job completed successfully.
     *  * **CREATED**: The job was created, but the provisioning, modification, or removal of IBM Cloud resources has
     *  not started yet.
     *  * **FAILED**: An error occurred during the plan, apply, or destroy job. Use the job ID to retrieve the URL to
     *  the log files for your job.
     *  * **IN PROGRESS**: The job is in progress. You can use the log_url to access the logs.
     */
    status?: string;
    /** The ID that was assigned to your Terraform template or IBM Cloud catalog software template. */
    template_id?: string;
    /** The type of template. */
    template_type?: string;
  }

  /** Information about the log URL for a job that ran for a template against your workspace. */
  export interface WorkspaceActivityTemplateLogs {
    /** The URL to access the logs that were created during the plan, apply, or destroy job. */
    log_url?: string;
    /** The ID that was assigned to your Terraform template or IBM Cloud catalog software template. */
    template_id?: string;
    /** The type of template. */
    template_type?: string;
  }

  /** The response after successfully initiating the bulk job to delete multiple workspaces. */
  export interface WorkspaceBulkDeleteResponse {
    /** The workspace deletion job name. */
    job?: string;
    /** The workspace deletion job id. */
    job_id?: string;
  }

  /** The response from the workspace bulk job status. */
  export interface WorkspaceJobResponse {
    /** Status of the workspace bulk job. */
    job_status?: WorkspaceJobStatusType;
  }

  /** Status of the workspace bulk job. */
  export interface WorkspaceJobStatusType {
    /** List of failed workspace jobs. */
    failed?: string[];
    /** List of in_progress workspace jobs. */
    in_progress?: string[];
    /** List of successful workspace jobs. */
    success?: string[];
    /** Workspace job status updated at. */
    last_updated_on?: string;
  }

  /** Workspace details. */
  export interface WorkspaceResponse {
    /** Deprecated: List of applied shared dataset ID. */
    applied_shareddata_ids?: string[];
    /** Information about the software template that you chose from the IBM Cloud catalog. This information is
     *  returned for IBM Cloud catalog offerings only.
     */
    catalog_ref?: CatalogRef;
    /** The timestamp when the workspace was created. */
    created_at?: string;
    /** The user ID that created the workspace. */
    created_by?: string;
    /** The workspace CRN. */
    crn?: string;
    /** Workspace dependencies. */
    dependencies?: Dependencies;
    /** The description of the workspace. */
    description?: string;
    /** The unique identifier of the workspace. */
    id?: string;
    /** The timestamp when the last health check was performed by Schematics. */
    last_health_check_at?: string;
    /** The IBM Cloud location where your workspace was provisioned. */
    location?: string;
    /** The name of the workspace. */
    name?: string;
    /** The resource group the workspace was provisioned in. */
    resource_group?: string;
    /** Information about the provisioning engine, state file, and runtime logs. */
    runtime_data?: TemplateRunTimeDataResponse[];
    /** Information about the Target used by the templates originating from IBM Cloud catalog offerings. This
     *  information is not relevant when you create a workspace from your own Terraform template.
     */
    shared_data?: SharedTargetDataResponse;
    /** The status of the workspace.
     *
     *    **Active**: After you successfully ran your infrastructure code by applying your Terraform execution plan, the
     *  state of your workspace changes to `Active`.
     *
     *    **Connecting**: Schematics tries to connect to the template in your source repo. If successfully connected,
     *  the template is downloaded and metadata, such as input parameters, is extracted. After the template is
     *  downloaded, the state of the workspace changes to `Scanning`.
     *
     *    **Draft**: The workspace is created without a reference to a GitHub or GitLab repository.
     *
     *    **Failed**: If errors occur during the execution of your infrastructure code in IBM Cloud Schematics, your
     *  workspace status is set to `Failed`.
     *
     *    **Inactive**: The Terraform template was scanned successfully and the workspace creation is complete. You can
     *  now start running Schematics plan and apply jobs to provision the IBM Cloud resources that you specified in your
     *  template. If you have an `Active` workspace and decide to remove all your resources, your workspace is set to
     *  `Inactive` after all your resources are removed.
     *
     *    **In progress**: When you instruct IBM Cloud Schematics to run your infrastructure code by applying your
     *  Terraform execution plan, the status of our workspace changes to `In progress`.
     *
     *    **Scanning**: The download of the Terraform template is complete and vulnerability scanning started. If the
     *  scan is successful, the workspace state changes to `Inactive`. If errors in your template are found, the state
     *  changes to `Template Error`.
     *
     *    **Stopped**: The Schematics plan, apply, or destroy job was cancelled manually.
     *
     *    **Template Error**: The Schematics template contains errors and cannot be processed.
     */
    status?: string;
    /** A list of tags that are associated with the workspace. */
    tags?: string[];
    /** Information about the Terraform or IBM Cloud software template that you want to use. */
    template_data?: TemplateSourceDataResponse[];
    /** Workspace template reference. */
    template_ref?: string;
    /** Information about the Template repository used by the workspace. */
    template_repo?: TemplateRepoResponse;
    /** The Terraform version that was used to run your Terraform code. */
    type?: string[];
    /** The timestamp when the workspace was last updated. */
    updated_at?: string;
    /** The user ID that updated the workspace. */
    updated_by?: string;
    /** The associate cart order ID. */
    cart_id?: string;
    /** Name of the last Action performed on workspace. */
    last_action_name?: string;
    /** ID of last Activity performed. */
    last_activity_id?: string;
    /** Last job details. */
    last_job?: LastJob;
    /** Response that indicate the status of the workspace as either frozen or locked. */
    workspace_status?: WorkspaceStatusResponse;
    /** Information about the last job that ran against the workspace. -. */
    workspace_status_msg?: WorkspaceStatusMessage;
    /** Agent name, Agent id and associated policy ID information. */
    agent?: AgentInfo;
  }

  /** List of workspaces. */
  export interface WorkspaceResponseList {
    /** The number of workspaces in the IBM Cloud account that you have access to and that matched your search
     *  criteria.
     */
    count?: number;
    /** The `limit` value that you set in your API request and that represents the maximum number of workspaces that
     *  you wanted to list.
     */
    limit: number;
    /** The `offset` value that you set in your API request. The offset value represents the position number of the
     *  workspace from which you wanted to start listing your workspaces.
     */
    offset: number;
    /** The list of workspaces that was included in your API response. */
    workspaces?: WorkspaceResponse[];
  }

  /** Information about the last job that ran against the workspace. -. */
  export interface WorkspaceStatusMessage {
    /** The success or error code that was returned for the last plan, apply, or destroy job that ran against your
     *  workspace.
     */
    status_code?: string;
    /** The success or error message that was returned for the last plan, apply, or destroy job that ran against
     *  your workspace.
     */
    status_msg?: string;
  }

  /** WorkspaceStatusRequest -. */
  export interface WorkspaceStatusRequest {
    /** If set to true, the workspace is frozen and changes to the workspace are disabled. */
    frozen?: boolean;
    /** The timestamp when the workspace was frozen. */
    frozen_at?: string;
    /** The user ID that froze the workspace. */
    frozen_by?: string;
    /** If set to true, the workspace is locked and disabled for changes. */
    locked?: boolean;
    /** The user ID that initiated a resource-related job, such as applying or destroying resources, that locked the
     *  workspace.
     */
    locked_by?: string;
    /** The timestamp when the workspace was locked. */
    locked_time?: string;
  }

  /** Response that indicate the status of the workspace as either frozen or locked. */
  export interface WorkspaceStatusResponse {
    /** If set to true, the workspace is frozen and changes to the workspace are disabled. */
    frozen?: boolean;
    /** The timestamp when the workspace was frozen. */
    frozen_at?: string;
    /** The user ID that froze the workspace. */
    frozen_by?: string;
    /** If set to true, the workspace is locked and disabled for changes. */
    locked?: boolean;
    /** The user ID that initiated a resource-related job, such as applying or destroying resources, that locked the
     *  workspace.
     */
    locked_by?: string;
    /** The timestamp when the workspace was locked. */
    locked_time?: string;
  }

  /** Input to update the workspace status. */
  export interface WorkspaceStatusUpdateRequest {
    /** If set to true, the workspace is frozen and changes to the workspace are disabled. */
    frozen?: boolean;
    /** Frozen at. */
    frozen_at?: string;
    /** Frozen by. */
    frozen_by?: string;
    /** Locked status. */
    locked?: boolean;
    /** Locked by. */
    locked_by?: string;
    /** Locked at. */
    locked_time?: string;
  }

  /** Response with the template details in your workspace. */
  export interface WorkspaceTemplateValuesResponse {
    /** Information about the provisioning engine, state file, and runtime logs. */
    runtime_data?: TemplateRunTimeDataResponse[];
    /** Information about the Target used by the templates originating from the  IBM Cloud catalog offerings. This
     *  information is not relevant for workspace created using your own Terraform template.
     */
    shared_data?: SharedTargetData;
    /** Information about the input variables that are used in the template. */
    template_data?: TemplateSourceDataResponse[];
  }

  /** Input variables for your workspace. */
  export interface WorkspaceVariableRequest {
    /** The description of your input variable. */
    description?: string;
    /** The name of the variable. */
    name?: string;
    /** If set to `true`, the value of your input variable is protected and not returned in your API response. */
    secure?: boolean;
    /** `Terraform v0.11` supports `string`, `list`, `map` data type. For more information, about the syntax, see
     *  [Configuring input variables](https://www.terraform.io/docs/configuration-0-11/variables.html).
     *  <br> `Terraform v0.12` additionally, supports `bool`, `number` and complex data types such as `list(type)`,
     *  `map(type)`,
     *  `object({attribute name=type,..})`, `set(type)`, `tuple([type])`. For more information, about the syntax to use
     *  the complex data type, see [Configuring
     *  variables](https://www.terraform.io/docs/configuration/variables.html#type-constraints).
     */
    type?: string;
    /** Variable uses default value; and is not over-ridden. */
    use_default?: boolean;
    /** Enter the value as a string for the primitive types such as `bool`, `number`, `string`, and `HCL` format for
     *  the complex variables, as you provide in a `.tfvars` file. **You need to enter escaped string of `HCL` format
     *  for the complex variable value**. For more information, about how to declare variables in a terraform
     *  configuration file and provide value to schematics, see [Providing values for the declared
     *  variables](https://cloud.ibm.com/docs/schematics?topic=schematics-create-tf-config#declare-variable).
     */
    value?: string;
  }

  /** The description of your input variable. */
  export interface WorkspaceVariableResponse {
    /** The description of your input variable. */
    description?: string;
    /** The name of the variable. */
    name?: string;
    /** If set to `true`, the value of your input variable is protected and not returned in your API response. */
    secure?: boolean;
    /** `Terraform v0.11` supports `string`, `list`, `map` data type. For more information, about the syntax, see
     *  [Configuring input variables](https://www.terraform.io/docs/configuration-0-11/variables.html).
     *  <br> `Terraform v0.12` additionally, supports `bool`, `number` and complex data types such as `list(type)`,
     *  `map(type)`,
     *  `object({attribute name=type,..})`, `set(type)`, `tuple([type])`. For more information, about the syntax to use
     *  the complex data type, see [Configuring
     *  variables](https://www.terraform.io/docs/configuration/variables.html#type-constraints).
     */
    type?: string;
    /** Enter the value as a string for the primitive types such as `bool`, `number`, `string`, and `HCL` format for
     *  the complex variables, as you provide in a `.tfvars` file. **You need to enter escaped string of `HCL` format
     *  for the complex variable value**. For more information, about how to declare variables in a terraform
     *  configuration file and provide value to schematics, see [Providing values for the declared
     *  variables](https://cloud.ibm.com/docs/schematics?topic=schematics-create-tf-config#declare-variable).
     */
    value?: string;
  }
}

export = SchematicsV1;
