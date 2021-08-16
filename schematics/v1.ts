/**
 * (C) Copyright IBM Corp. 2021.
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
 * IBM OpenAPI SDK Code Generator Version: 3.37.0-a85661cd-20210802-190136
 */

 import * as extend from 'extend';
 import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
 import {
   Authenticator,
   BaseService,
   getAuthenticatorFromEnvironment,
   getMissingParams,
   UserOptions,
 } from 'ibm-cloud-sdk-core';
 import { getSdkHeaders } from '../lib/common';
 
 /**
  * IBM Cloud Schematics service is to provide the capability to manage resources  of cloud provider infrastructure by
  * using file based configurations.  With the IBM Cloud Schematics service you can specify the  required set of
  * resources and the configuration in `config files`,  and then pass the config files to the service to fulfill it by
  * calling the necessary actions on the infrastructure.  This principle is known as Infrastructure as Code.  For more
  * information, refer to [Getting started with IBM Cloud Schematics]
  * (https://cloud.ibm.com/docs/schematics?topic=schematics-getting-started).
  */
 
 class SchematicsV1 extends BaseService {
   static DEFAULT_SERVICE_URL: string = 'https://schematics-dev.containers.appdomain.cloud';
 
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
    * Retrieve a list of IBM Cloud locations where you can create Schematics workspaces.
    *
    * @param {Object} [params] - The parameters to send to the service.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.SchematicsLocations[]>>}
    */
   public listSchematicsLocation(
     params?: SchematicsV1.ListSchematicsLocationParams
   ): Promise<SchematicsV1.Response<SchematicsV1.SchematicsLocations[]>> {
     const _params = { ...params };
 
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
    * List supported schematics locations.
    *
    * Retrieve a list of IBM Cloud locations where you can work with Schematics objects.
    *
    * @param {Object} [params] - The parameters to send to the service.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.SchematicsLocationsList>>}
    */
   public listLocations(
     params?: SchematicsV1.ListLocationsParams
   ): Promise<SchematicsV1.Response<SchematicsV1.SchematicsLocationsList>> {
     const _params = { ...params };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'listLocations'
     );
 
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
    * @param {Object} [params] - The parameters to send to the service.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceGroupResponse[]>>}
    */
   public listResourceGroup(
     params?: SchematicsV1.ListResourceGroupParams
   ): Promise<SchematicsV1.Response<SchematicsV1.ResourceGroupResponse[]>> {
     const _params = { ...params };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'listResourceGroup'
     );
 
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
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to the
    * workspace ID and the resource group. For more information, about Schematics access and permissions, see [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
    *
    * @param {Object} [params] - The parameters to send to the service.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.VersionResponse>>}
    */
   public getSchematicsVersion(
     params?: SchematicsV1.GetSchematicsVersionParams
   ): Promise<SchematicsV1.Response<SchematicsV1.VersionResponse>> {
     const _params = { ...params };
 
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
    * Create metadata by  processing the template.
    *
    * Create a Template metadata definition.
    *
    * @param {Object} params - The parameters to send to the service.
    * @param {string} params.templateType - Template type (terraform, ansible, helm, cloudpak, bash script).
    * @param {ExternalSource} params.source - Source of templates, playbooks, or controls.
    * @param {string} [params.region] - Region to which request should go. Applicable only on global endpoint.
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
     const requiredParams = ['templateType', 'source'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    * geography, such as North America, only workspaces that are created in `us-south` or `us-east` are returned. For
    * more information about supported API endpoints, see [API endpoints](/apidocs/schematics#api-endpoints).
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to the
    * workspace ID and the resource group. For more information, about Schematics access and permissions, see [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
    *
    * @param {Object} [params] - The parameters to send to the service.
    * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
    * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
    * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
    * 2-6, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
    * `offset` option. Negative numbers are not supported and are ignored.
    * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
    * integer between 1 and 2000. If no value is provided, 100 is used by default.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponseList>>}
    */
   public listWorkspaces(
     params?: SchematicsV1.ListWorkspacesParams
   ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponseList>> {
     const _params = { ...params };
 
     const query = {
       'offset': _params.offset,
       'limit': _params.limit,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'listWorkspaces'
     );
 
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
    *  <h3>Authorization</h3>
    *
    *  Schematics support generic authorization such as service access or platform access
    *  to the workspace ID and the resource group.
    *  For more information, about Schematics access and permissions,
    *  see [Schematics service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
    *
    * @param {Object} [params] - The parameters to send to the service.
    * @param {string[]} [params.appliedShareddataIds] - List of applied shared dataset ID.
    * @param {CatalogRef} [params.catalogRef] - Information about the software template that you chose from the IBM Cloud
    * catalog. This information is returned for IBM Cloud catalog offerings only.
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
    * @param {string} [params.xGithubToken] - The personal access token to authenticate with your private GitHub or
    * GitLab repository and access your Terraform template.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>>}
    */
   public createWorkspace(
     params?: SchematicsV1.CreateWorkspaceParams
   ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>> {
     const _params = { ...params };
 
     const body = {
       'applied_shareddata_ids': _params.appliedShareddataIds,
       'catalog_ref': _params.catalogRef,
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
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'createWorkspace'
     );
 
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
    *  Schematics support generic authorization such as service access or platform
    *  access to the workspace ID and the resource group. For more information,
    *  about Schematics access and permissions, see [Schematics service access
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
     const requiredParams = ['wId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const path = {
       'w_id': _params.wId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'getWorkspace'
     );
 
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
    *  Schematics support generic authorization such as service access or
    *  platform access to the workspace ID and the resource group.
    *  For more information, about Schematics access and permissions,
    *  see [Schematics service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
    *
    * @param {Object} params - The parameters to send to the service.
    * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
    * @param {CatalogRef} [params.catalogRef] - Information about the software template that you chose from the IBM Cloud
    * catalog. This information is returned for IBM Cloud catalog offerings only.
    * @param {string} [params.description] - The description of the workspace.
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
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>>}
    */
   public replaceWorkspace(
     params: SchematicsV1.ReplaceWorkspaceParams
   ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>> {
     const _params = { ...params };
     const requiredParams = ['wId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const body = {
       'catalog_ref': _params.catalogRef,
       'description': _params.description,
       'name': _params.name,
       'shared_data': _params.sharedData,
       'tags': _params.tags,
       'template_data': _params.templateData,
       'template_repo': _params.templateRepo,
       'type': _params.type,
       'workspace_status': _params.workspaceStatus,
       'workspace_status_msg': _params.workspaceStatusMsg,
     };
 
     const path = {
       'w_id': _params.wId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'replaceWorkspace'
     );
 
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
    *  Schematics support generic authorization such as service access or platform access
    *  to the workspace ID and the resource group.
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
     const requiredParams = ['refreshToken', 'wId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const query = {
       'destroy_resources': _params.destroyResources,
     };
 
     const path = {
       'w_id': _params.wId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'deleteWorkspace'
     );
 
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
    *  Schematics support generic authorization such as service access or
    *  platform access to the workspace ID and the resource group.
    *  For more information, about Schematics access and permissions,
    *  see [Schematics service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
    *
    * @param {Object} params - The parameters to send to the service.
    * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
    * @param {CatalogRef} [params.catalogRef] - Information about the software template that you chose from the IBM Cloud
    * catalog. This information is returned for IBM Cloud catalog offerings only.
    * @param {string} [params.description] - The description of the workspace.
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
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>>}
    */
   public updateWorkspace(
     params: SchematicsV1.UpdateWorkspaceParams
   ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>> {
     const _params = { ...params };
     const requiredParams = ['wId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const body = {
       'catalog_ref': _params.catalogRef,
       'description': _params.description,
       'name': _params.name,
       'shared_data': _params.sharedData,
       'tags': _params.tags,
       'template_data': _params.templateData,
       'template_repo': _params.templateRepo,
       'type': _params.type,
       'workspace_status': _params.workspaceStatus,
       'workspace_status_msg': _params.workspaceStatusMsg,
     };
 
     const path = {
       'w_id': _params.wId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'updateWorkspace'
     );
 
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
    */
   public getWorkspaceReadme(
     params: SchematicsV1.GetWorkspaceReadmeParams
   ): Promise<SchematicsV1.Response<SchematicsV1.TemplateReadme>> {
     const _params = { ...params };
     const requiredParams = ['wId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const query = {
       'ref': _params.ref,
       'formatted': _params.formatted,
     };
 
     const path = {
       'w_id': _params.wId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'getWorkspaceReadme'
     );
 
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
    *  Schematics support generic authorization such as service access or platform access to the workspace ID and the
    * resource group. For more information, about Schematics access and permissions, see [Schematics service access roles
    * and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
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
     const requiredParams = ['wId', 'tId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'templateRepoUpload'
     );
 
     const parameters = {
       options: {
         url: '/v1/workspaces/{w_id}/template_data/{t_id}/template_repo_upload',
         method: 'PUT',
         path,
         formData
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
    *  Schematics support generic authorization such as service access or
    *  platform access to the workspace ID and the resource group.
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
     const requiredParams = ['wId', 'tId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const path = {
       'w_id': _params.wId,
       't_id': _params.tId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'getWorkspaceInputs'
     );
 
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
     const requiredParams = ['wId', 'tId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    *  Schematics support generic authorization such as service access or platform
    *  access to the workspace ID and the resource group.
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
     const requiredParams = ['wId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
     const requiredParams = ['wId', 'tId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
     const requiredParams = ['wId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
     const requiredParams = ['wId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    * Retrieve the URL to the Terraform statefile (`terraform.tfstate`). You use the URL to access the Terraform
    * statefile. The Terraform statefile includes detailed information about the IBM Cloud resources that you provisioned
    * with IBM Cloud Schematics and Schematics uses the file to determine future create, modify, or delete actions for
    * your resources. To show the content of the Terraform statefile, use the `GET
    * /v1/workspaces/{id}/runtime_data/{template_id}/state_store` API.
    *
    *  <h3>Authorization</h3>
    *
    *  Schematics support generic authorization such as service access or platform access
    *  to the workspace ID and the resource group.
    *  For more information, about Schematics access and permissions,
    *  see [Schematics service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
    *
    * @param {Object} params - The parameters to send to the service.
    * @param {string} params.wId - The ID of the workspace for which you want to retrieve the Terraform statefile.  To
    * find the workspace ID, use the `GET /v1/workspaces` API.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.StateStoreResponseList>>}
    */
   public getWorkspaceState(
     params: SchematicsV1.GetWorkspaceStateParams
   ): Promise<SchematicsV1.Response<SchematicsV1.StateStoreResponseList>> {
     const _params = { ...params };
     const requiredParams = ['wId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const path = {
       'w_id': _params.wId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'getWorkspaceState'
     );
 
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
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.JsonObject[]>>}
    */
   public getWorkspaceTemplateState(
     params: SchematicsV1.GetWorkspaceTemplateStateParams
   ): Promise<SchematicsV1.Response<SchematicsV1.JsonObject[]>> {
     const _params = { ...params };
     const requiredParams = ['wId', 'tId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    *  Schematics support generic authorization such as service access or platform access
    *  to the workspace ID and the resource group.
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
    */
   public getWorkspaceActivityLogs(
     params: SchematicsV1.GetWorkspaceActivityLogsParams
   ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityLogs>> {
     const _params = { ...params };
     const requiredParams = ['wId', 'activityId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    */
   public getWorkspaceLogUrls(
     params: SchematicsV1.GetWorkspaceLogUrlsParams
   ): Promise<SchematicsV1.Response<SchematicsV1.LogStoreResponseList>> {
     const _params = { ...params };
     const requiredParams = ['wId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    * Show logs for the latest action for a workspace template.
    *
    * Show the Terraform logs for the most recent job of a template that ran against your workspace.
    *
    *  <h3>Authorization</h3>
    *
    *  Schematics support generic authorization such as service access or platform access to the workspace ID and the
    * resource group. For more information, about Schematics access and permissions, see [Schematics service access roles
    * and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
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
     const requiredParams = ['wId', 'tId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'getTemplateLogs'
     );
 
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
     const requiredParams = ['wId', 'tId', 'activityId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    *  Schematics support generic authorization such as service access or
    *  platform access to an action ID and the resource group.
    *  For more information, about Schematics access and permissions, see
    *  [Schematics service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
    *
    * @param {Object} [params] - The parameters to send to the service.
    * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
    * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
    * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
    * 2-6, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
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
 
     const query = {
       'offset': _params.offset,
       'limit': _params.limit,
       'sort': _params.sort,
       'profile': _params.profile,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'listActions'
     );
 
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
    *  For more information, about the Schematics create action,
    *  see [ibmcloud schematics action
    * create](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-create-action).
    *  **Note** you cannot update the location and region once an action is created.
    *  Also, make sure your IP addresses are in the
    * [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
    *
    *  <h3>Authorization</h3>
    *
    *  Schematics support generic authorization such as service access or
    *  platform access to an action ID and the resource group.
    *  For more information, about Schematics access and permissions, see
    *  [Schematics service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions.
    *
    * @param {Object} [params] - The parameters to send to the service.
    * @param {string} [params.name] - The unique name of your action. The name can be up to 128 characters long and can
    * include alphanumeric characters, spaces, dashes, and underscores. **Example** you can use the name to stop action.
    * @param {string} [params.description] - Action description.
    * @param {string} [params.location] - List of locations supported by IBM Cloud Schematics service.  While creating
    * your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the
    * location of the IBM Cloud resources, provisioned using Schematics.
    * @param {string} [params.resourceGroup] - Resource-group name for an action.  By default, action is created in
    * default resource group.
    * @param {string[]} [params.tags] - Action tags.
    * @param {UserState} [params.userState] - User defined status of the Schematics object.
    * @param {string} [params.sourceReadmeUrl] - URL of the `README` file, for the source URL.
    * @param {ExternalSource} [params.source] - Source of templates, playbooks, or controls.
    * @param {string} [params.sourceType] - Type of source for the Template.
    * @param {string} [params.commandParameter] - Schematics job command parameter (playbook-name).
    * @param {string} [params.inventory] - Target inventory record ID, used by the action or ansible playbook.
    * @param {VariableData[]} [params.credentials] - credentials of the Action.
    * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
    * @param {VariableData} [params.bastionCredential] - User editable variable data & system generated reference to
    * value.
    * @param {string} [params.targetsIni] - Inventory of host and host group for the playbook in `INI` file format. For
    * example, `"targets_ini": "[webserverhost]
    *  172.22.192.6
    *  [dbhost]
    *  172.22.192.5"`. For more information, about an inventory host group syntax, see [Inventory host
    * groups](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-inventory-host-grps).
    * @param {VariableData[]} [params.inputs] - Input variables for the Action.
    * @param {VariableData[]} [params.outputs] - Output variables for the Action.
    * @param {VariableData[]} [params.settings] - Environment variables for the Action.
    * @param {ActionState} [params.state] - Computed state of the Action.
    * @param {SystemLock} [params.sysLock] - System lock status.
    * @param {string} [params.xGithubToken] - The personal access token to authenticate with your private GitHub or
    * GitLab repository and access your Terraform template.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.Action>>}
    */
   public createAction(
     params?: SchematicsV1.CreateActionParams
   ): Promise<SchematicsV1.Response<SchematicsV1.Action>> {
     const _params = { ...params };
 
     const body = {
       'name': _params.name,
       'description': _params.description,
       'location': _params.location,
       'resource_group': _params.resourceGroup,
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
       'state': _params.state,
       'sys_lock': _params.sysLock,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'createAction'
     );
 
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
    *  Schematics support generic authorization such as service access or
    *  platform access to an action ID and the resource group.
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
     const requiredParams = ['actionId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const query = {
       'profile': _params.profile,
     };
 
     const path = {
       'action_id': _params.actionId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'getAction'
     );
 
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
    *  Schematics support generic authorization such as service access or
    *  platform access to an action ID and the resource group.
    *  For more information, about Schematics access and permissions, see
    *  [Schematics service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions.
    *
    * @param {Object} params - The parameters to send to the service.
    * @param {string} params.actionId - Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud
    * account.
    * @param {boolean} [params.force] - Equivalent to -force options in the command line.
    * @param {boolean} [params.propagate] - Auto propagate the chaange or deletion to the dependent resources.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.Empty>>}
    */
   public deleteAction(
     params: SchematicsV1.DeleteActionParams
   ): Promise<SchematicsV1.Response<SchematicsV1.Empty>> {
     const _params = { ...params };
     const requiredParams = ['actionId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const path = {
       'action_id': _params.actionId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'deleteAction'
     );
 
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
    *  **Note** you cannot update the location and region once an action is created.
    *  Also, make sure your IP addresses are in the
    * [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses].
    *
    *  <h3>Authorization</h3>
    *
    *  Schematics support generic authorization such as service access or
    *  platform access to an action ID and the resource group.
    *  For more information, about Schematics access and permissions, see
    *  [Schematics service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions.
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
    * @param {string} [params.resourceGroup] - Resource-group name for an action.  By default, action is created in
    * default resource group.
    * @param {string[]} [params.tags] - Action tags.
    * @param {UserState} [params.userState] - User defined status of the Schematics object.
    * @param {string} [params.sourceReadmeUrl] - URL of the `README` file, for the source URL.
    * @param {ExternalSource} [params.source] - Source of templates, playbooks, or controls.
    * @param {string} [params.sourceType] - Type of source for the Template.
    * @param {string} [params.commandParameter] - Schematics job command parameter (playbook-name).
    * @param {string} [params.inventory] - Target inventory record ID, used by the action or ansible playbook.
    * @param {VariableData[]} [params.credentials] - credentials of the Action.
    * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
    * @param {VariableData} [params.bastionCredential] - User editable variable data & system generated reference to
    * value.
    * @param {string} [params.targetsIni] - Inventory of host and host group for the playbook in `INI` file format. For
    * example, `"targets_ini": "[webserverhost]
    *  172.22.192.6
    *  [dbhost]
    *  172.22.192.5"`. For more information, about an inventory host group syntax, see [Inventory host
    * groups](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-inventory-host-grps).
    * @param {VariableData[]} [params.inputs] - Input variables for the Action.
    * @param {VariableData[]} [params.outputs] - Output variables for the Action.
    * @param {VariableData[]} [params.settings] - Environment variables for the Action.
    * @param {ActionState} [params.state] - Computed state of the Action.
    * @param {SystemLock} [params.sysLock] - System lock status.
    * @param {string} [params.xGithubToken] - The personal access token to authenticate with your private GitHub or
    * GitLab repository and access your Terraform template.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.Action>>}
    */
   public updateAction(
     params: SchematicsV1.UpdateActionParams
   ): Promise<SchematicsV1.Response<SchematicsV1.Action>> {
     const _params = { ...params };
     const requiredParams = ['actionId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const body = {
       'name': _params.name,
       'description': _params.description,
       'location': _params.location,
       'resource_group': _params.resourceGroup,
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
       'state': _params.state,
       'sys_lock': _params.sysLock,
     };
 
     const path = {
       'action_id': _params.actionId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'updateAction'
     );
 
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
    * <h3>Authorization</h3>
    *   Schematics support generic authorization such as service access or  platform access to an action ID and the
    * resource group.  For more information, about Schematics access and permissions, see  [Schematics service access
    * roles and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions.
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
     const requiredParams = ['actionId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
         formData
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
    * List all workspace jobs.
    *
    * Retrieve a list of all jobs that ran against a workspace. Jobs are generated when you use the `apply`, `plan`,
    * `destroy`, and `refresh`,   command API.
    *
    * @param {Object} params - The parameters to send to the service.
    * @param {string} params.wId - The ID of the workspace.  To find the workspace ID, use the `GET /v1/workspaces` API.
    * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
    * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
    * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
    * 2-6, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
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
     const requiredParams = ['wId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
     const requiredParams = ['wId', 'activityId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    * <h3>Authorization</h3>  Schematics supports generic authorization such as service access or platform access  to the
    * workspace ID and the resource group. For more information, about Schematics  access and permissions, see
    * [Schematics service access roles and required
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
     const requiredParams = ['wId', 'activityId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    *  Schematics support generic authorization such as service access or platform access
    *  to the workspace ID and the resource group. For more information, about Schematics
    *  access and permissions,
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
     const requiredParams = ['wId', 'refreshToken'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    *  Schematics support generic authorization such as service access or
    *  platform access to the workspace ID and the resource group.
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
     const requiredParams = ['wId', 'refreshToken'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    *  Schematics support generic authorization such as service access or platform access
    *   to the workspace ID and the resource group.
    *   For more information, about Schematics access and permissions,
    *   see [Schematics service access roles and required
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
     const requiredParams = ['wId', 'refreshToken'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    *  Schematics support generic authorization such as service access or platform access
    *  to the workspace ID and the resource group.
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
    * @param {string} [params.delegatedToken] - The IAM delegated token for your IBM Cloud account.  This token is
    * required for requests that are sent via the UI only.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityPlanResult>>}
    */
   public planWorkspaceCommand(
     params: SchematicsV1.PlanWorkspaceCommandParams
   ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityPlanResult>> {
     const _params = { ...params };
     const requiredParams = ['wId', 'refreshToken'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
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
    * Perform a Schematics `refresh` job.
    *
    * Run a Schematics `refresh` job against your workspace. A `refresh` job validates the IBM Cloud resources in your
    * account against the state that is stored in the Terraform statefile of your workspace. If differences are found,
    * the Terraform statefile is updated accordingly. This API returns an activity or job ID that you use to retrieve the
    * URL to the log file with the `GET /v1/workspaces/{id}/actions/{action_id}/logs` API.
    *
    *  <h3>Authorization</h3>
    *
    *  Schematics support generic authorization such as service access or platform access
    *  to the workspace ID and the resource group.
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
     const requiredParams = ['wId', 'refreshToken'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    *  Schematics support generic authorization such as service access or
    *  platform access to the job ID and the resource group.
    *  For more information, about Schematics access and permissions, see
    *  [Schematics service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
    *
    * @param {Object} [params] - The parameters to send to the service.
    * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
    * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
    * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
    * 2-6, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
    * `offset` option. Negative numbers are not supported and are ignored.
    * @param {number} [params.limit] - The maximum number of items that you want to list. The number must be a positive
    * integer between 1 and 2000. If no value is provided, 100 is used by default.
    * @param {string} [params.sort] - Name of the field to sort-by;  Use the '.' character to delineate sub-resources and
    * sub-fields (eg. owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending'
    * (default is ascending)   Ignore unrecognized or unsupported sort field.
    * @param {string} [params.profile] - Level of details returned by the get method.
    * @param {string} [params.resource] - Name of the resource (workspace, actions or controls).
    * @param {string} [params.resourceId] - The Resource Id. It could be an Action-id or Workspace-id.
    * @param {string} [params.actionId] - Action Id.
    * @param {string} [params.list] - list jobs.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.JobList>>}
    */
   public listJobs(
     params?: SchematicsV1.ListJobsParams
   ): Promise<SchematicsV1.Response<SchematicsV1.JobList>> {
     const _params = { ...params };
 
     const query = {
       'offset': _params.offset,
       'limit': _params.limit,
       'sort': _params.sort,
       'profile': _params.profile,
       'resource': _params.resource,
       'resource_id': _params.resourceId,
       'action_id': _params.actionId,
       'list': _params.list,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'listJobs'
     );
 
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
    * @param {JobData} [params.data] - Job data.
    * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
    * @param {JobLogSummary} [params.logSummary] - Job log summary record.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.Job>>}
    */
   public createJob(
     params: SchematicsV1.CreateJobParams
   ): Promise<SchematicsV1.Response<SchematicsV1.Job>> {
     const _params = { ...params };
     const requiredParams = ['refreshToken'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
       'data': _params.data,
       'bastion': _params.bastion,
       'log_summary': _params.logSummary,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'createJob'
     );
 
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
    *  Schematics support generic authorization such as service access or
    *  platform access to the job ID and the resource group.
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
     const requiredParams = ['jobId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const query = {
       'profile': _params.profile,
     };
 
     const path = {
       'job_id': _params.jobId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'getJob'
     );
 
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
    *  Schematics support generic authorization such as service access or
    *  platform access to the job ID and the resource group.
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
    * @param {JobData} [params.data] - Job data.
    * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
    * @param {JobLogSummary} [params.logSummary] - Job log summary record.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.Job>>}
    */
   public updateJob(
     params: SchematicsV1.UpdateJobParams
   ): Promise<SchematicsV1.Response<SchematicsV1.Job>> {
     const _params = { ...params };
     const requiredParams = ['jobId', 'refreshToken'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
       'data': _params.data,
       'bastion': _params.bastion,
       'log_summary': _params.logSummary,
     };
 
     const path = {
       'job_id': _params.jobId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'updateJob'
     );
 
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
    *  Schematics support generic authorization such as service access or
    *  platform access to the job ID and the resource group.
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
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.Empty>>}
    */
   public deleteJob(
     params: SchematicsV1.DeleteJobParams
   ): Promise<SchematicsV1.Response<SchematicsV1.Empty>> {
     const _params = { ...params };
     const requiredParams = ['jobId', 'refreshToken'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const path = {
       'job_id': _params.jobId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'deleteJob'
     );
 
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
    * Retrieve the job logs
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or  platform access to the
    * action ID and the resource group.  For more information, about Schematics access and permissions, see  [Schematics
    * service access roles and required
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
     const requiredParams = ['jobId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const path = {
       'job_id': _params.jobId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'listJobLogs'
     );
 
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
   /*************************
    * bulkJobs
    ************************/
 
   /**
    * Delete multiple workspaces.
    *
    * Delete multiple workspaces.  Use ?destroy_resource="true" to destroy the related cloud resources,  otherwise the
    * resources must be managed outside of Schematics.
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
    * @param {boolean} [params.newDeleteWorkspaces] - True to delete workspace.
    * @param {boolean} [params.newDestroyResources] - True to destroy the resources managed by this workspace.
    * @param {string} [params.newJob] - Workspace deletion job name.
    * @param {string} [params.newVersion] - Version of the terraform template.
    * @param {string[]} [params.newWorkspaces] - List of workspaces to be deleted.
    * @param {string} [params.destroyResources] - If set to `true`, refresh_token header configuration is required to
    * delete all the Terraform resources, and the Schematics workspace. If set to `false`, you can remove only the
    * workspace. Your Terraform resources are still available and must be managed with the resource dashboard or CLI.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceBulkDeleteResponse>>}
    */
   public createWorkspaceDeletionJob(
     params: SchematicsV1.CreateWorkspaceDeletionJobParams
   ): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceBulkDeleteResponse>> {
     const _params = { ...params };
     const requiredParams = ['refreshToken'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const body = {
       'delete_workspaces': _params.newDeleteWorkspaces,
       'destroy_resources': _params.newDestroyResources,
       'job': _params.newJob,
       'version': _params.newVersion,
       'workspaces': _params.newWorkspaces,
     };
 
     const query = {
       'destroy_resources': _params.destroyResources,
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
         qs: query,
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
    * Get the workspace deletion job status.
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
     const requiredParams = ['wjId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    * inventory
    ************************/
 
   /**
    * List all inventory definitions.
    *
    * Retrieve a list of all Schematics inventories that depends on the API endpoint that you have access. For example,
    * if you use an API endpoint for a geography, such as North America, only inventories that are created in `us-south`
    * or `us-east` are retrieved. For more information, about supported API endpoints, see
    * [APIendpoints](/apidocs/schematics#api-endpoints).
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to an
    * action ID and the resource group. For more information, about Schematics access and permissions, see  [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions).
    *
    * @param {Object} [params] - The parameters to send to the service.
    * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
    * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
    * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
    * 2-6, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
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
 
     const query = {
       'offset': _params.offset,
       'limit': _params.limit,
       'sort': _params.sort,
       'profile': _params.profile,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'listInventories'
     );
 
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
    * **Note** you cannot update the location and region, resource group once an action is created.  Also, make sure your
    * IP addresses are in the [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
    * If your Git repository already contains a host file. Schematics does not  overwrite the host file already present
    * in your Git repository.
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to an
    * action ID and the resource group. For more information, about Schematics access and permissions, see  [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions).
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
 
     const body = {
       'name': _params.name,
       'description': _params.description,
       'location': _params.location,
       'resource_group': _params.resourceGroup,
       'inventories_ini': _params.inventoriesIni,
       'resource_queries': _params.resourceQueries,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'createInventory'
     );
 
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
    * Get the inventory definition.
    *
    * Use this API to retrieve the detailed information for a resource inventory definition used to target an action in
    * your IBM Cloud account. For more information, about inventory get, refer to [ibmcloud schematics inventory
    * get](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-get-inv).
    *  **Note** you can fetch only the location and region, resource group from where your inventory is created.
    *  Also, make sure your IP addresses are in the
    * [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
    *
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to an
    * action ID and the resource group. For more information, about Schematics access and permissions, see [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions).
    *
    * @param {Object} params - The parameters to send to the service.
    * @param {string} params.inventoryId - Resource Inventory Id.  Use `GET /v2/inventories` API to look up the Resource
    * Inventory definition Ids  in your IBM Cloud account.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>>}
    */
   public getInventory(
     params: SchematicsV1.GetInventoryParams
   ): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>> {
     const _params = { ...params };
     const requiredParams = ['inventoryId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const path = {
       'inventory_id': _params.inventoryId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'getInventory'
     );
 
     const parameters = {
       options: {
         url: '/v2/inventories/{inventory_id}',
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
    * Replace an inventory definition.
    *
    * Use this API to update the inventory definition resource used to target an action. For more information, about
    * inventory update, refer to [ibmcloud schematics inventory
    * update](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-update-inv).
    *  **Note** you cannot update the location and region, resource group once an action is created.
    *  Also, make sure your IP addresses are in the
    * [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
    *
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to an
    * action ID and the resource group. For more information, about Schematics access and permissions, see  [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions).
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
     const requiredParams = ['inventoryId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'replaceInventory'
     );
 
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
    * Delete inventory definition.
    *
    * Use this API to delete the resource inventory definition by using the inventory ID that you want to run against.
    * For more information, about inventory delete, refer to [ibmcloud schematics inventory
    * delete](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-delete-inventory).
    *  **Note** you cannot delete the location and region, resource group from where your inventory is created.
    *  Also, make sure your IP addresses are in the
    * [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
    *
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to an
    * action ID and the resource group. For more information, about Schematics access and permissions, see  [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions).
    *
    * @param {Object} params - The parameters to send to the service.
    * @param {string} params.inventoryId - Resource Inventory Id.  Use `GET /v2/inventories` API to look up the Resource
    * Inventory definition Ids  in your IBM Cloud account.
    * @param {boolean} [params.force] - Equivalent to -force options in the command line.
    * @param {boolean} [params.propagate] - Auto propagate the chaange or deletion to the dependent resources.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.Empty>>}
    */
   public deleteInventory(
     params: SchematicsV1.DeleteInventoryParams
   ): Promise<SchematicsV1.Response<SchematicsV1.Empty>> {
     const _params = { ...params };
     const requiredParams = ['inventoryId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const path = {
       'inventory_id': _params.inventoryId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'deleteInventory'
     );
 
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
    * Update the inventory definition.
    *
    * Update the resource inventory definition.
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
   public updateInventory(
     params: SchematicsV1.UpdateInventoryParams
   ): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>> {
     const _params = { ...params };
     const requiredParams = ['inventoryId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'updateInventory'
     );
 
     const parameters = {
       options: {
         url: '/v2/inventories/{inventory_id}',
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
   /*************************
    * resourceQuery
    ************************/
 
   /**
    * List resource queries.
    *
    * Retrieve the list of resource query definitions that you have access to.  The list of resource queries that is
    * returned depends on the API  endpoint that you use. For example, if you use an API endpoint for a geography, such
    * as North America, only resource query definitions that are created in `us-south` or `us-east` are retrieved. For
    * more information, about supported API endpoints, see [API endpoints](/apidocs/schematics#api-endpoints).
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to an
    * action ID and the resource group. For more information, about Schematics access and permissions,  see [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions).
    *
    * @param {Object} [params] - The parameters to send to the service.
    * @param {number} [params.offset] - The starting position of the item in the list of items. For example, if you have
    * three workspaces in your account, the first workspace is assigned position number 0, the second workspace is
    * assigned position number 1, and so forth. If you have 6 workspaces and you want to list the details for workspaces
    * 2-6, enter 1. To limit the number of workspaces that is returned, use the `limit` option in addition to the
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
 
     const query = {
       'offset': _params.offset,
       'limit': _params.limit,
       'sort': _params.sort,
       'profile': _params.profile,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'listResourceQuery'
     );
 
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
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to an
    * action ID and the resource group. For more information, about Schematics access and permissions,  see [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions).
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
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to an
    * action ID and the resource group. For more information, about Schematics access and permissions,  see [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions).
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
     const requiredParams = ['queryId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const path = {
       'query_id': _params.queryId,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'getResourcesQuery'
     );
 
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
    * Replace resources query definition.
    *
    * Use this API to replace the resource query definition used to build  the dynamic inventory for the Schematics
    * Action.  For more information, about resource query commands, refer to [ibmcloud schematics resource query
    * update](https://cloud.ibm.com/docs/schematics?topic=schematics-schematics-cli-reference#schematics-update-rq).
    * **Note** you cannot update the location and region, resource group  once a resource query is created. Also, make
    * sure your IP addresses  are in the
    * [allowlist](https://cloud.ibm.com/docs/schematics?topic=schematics-allowed-ipaddresses).
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to an
    * action ID and the resource group. For more information, about Schematics access and permissions,  see [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions).
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
     const requiredParams = ['queryId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
     const requiredParams = ['queryId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to an
    * action ID and the resource group. For more information, about Schematics access and permissions,  see [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#action-permissions).
    *
    * @param {Object} params - The parameters to send to the service.
    * @param {string} params.queryId - Resource query Id.  Use `GET /v2/resource_query` API to look up the Resource query
    * definition Ids  in your IBM Cloud account.
    * @param {boolean} [params.force] - Equivalent to -force options in the command line.
    * @param {boolean} [params.propagate] - Auto propagate the chaange or deletion to the dependent resources.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.Empty>>}
    */
   public deleteResourcesQuery(
     params: SchematicsV1.DeleteResourcesQueryParams
   ): Promise<SchematicsV1.Response<SchematicsV1.Empty>> {
     const _params = { ...params };
     const requiredParams = ['queryId'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
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
    * settingsKms
    ************************/
 
   /**
    * Get KMS settings.
    *
    * Retrieve the KMS on the API endpoint that you have access. For example, if you use an API endpoint for a geography,
    * such as North America, only Schematics resource that are created in `us-south` or `us-east` are retrieved.
    * <h3>Authorization</h3>
    *
    *
    *  Schematics support generic authorization such as service access or platform access to the action ID and the
    * resource group. For more information, about Schematics access and permissions, see [Schematics service access roles
    * and required permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
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
     const requiredParams = ['location'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const query = {
       'location': _params.location,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'getKmsSettings'
     );
 
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
    * Replace KMS settings.
    *
    * Replace or Update the KMS setting for your location, by using your private endpoint, `CRN`, primary `CRK`, and
    * secondary `CRK`. **Note** you can update the KMS settings only once. For example, if you use an API endpoint for a
    * geography, such as North America, only Schematics resource that are created in `us-south` or `us-east` are
    * retrieved.
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to the
    * action ID and the resource group. For more information, about Schematics access and permissions, see  [Schematics
    * service access roles and required
    * permissions](https://cloud.ibm.com/docs/schematics?topic=schematics-access#access-roles).
    *
    * @param {Object} [params] - The parameters to send to the service.
    * @param {string} [params.location] - Location.
    * @param {string} [params.encryptionScheme] - Encryption scheme.
    * @param {string} [params.resourceGroup] - Resource group.
    * @param {KMSSettingsPrimaryCrk} [params.primaryCrk] - Primary CRK details.
    * @param {KMSSettingsSecondaryCrk} [params.secondaryCrk] - Secondary CRK details.
    * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
    * @returns {Promise<SchematicsV1.Response<SchematicsV1.KMSSettings>>}
    */
   public updateKmsSettings(
     params?: SchematicsV1.UpdateKmsSettingsParams
   ): Promise<SchematicsV1.Response<SchematicsV1.KMSSettings>> {
     const _params = { ...params };
 
     const body = {
       'location': _params.location,
       'encryption_scheme': _params.encryptionScheme,
       'resource_group': _params.resourceGroup,
       'primary_crk': _params.primaryCrk,
       'secondary_crk': _params.secondaryCrk,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'updateKmsSettings'
     );
 
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
    * Lists the KMS instances of your IBM Cloud account to find your Key Protect or Hyper Protect Crypto Services by
    * using the location and encrypted scheme such as KYOK or BYOK.
    * <h3>Authorization</h3> Schematics support generic authorization such as service access or platform access to the
    * action ID and the resource group. For more information, about Schematics access and permissions, see  [Schematics
    * service access roles and required
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
     const requiredParams = ['encryptionScheme', 'location'];
 
     const missingParams = getMissingParams(_params, requiredParams);
     if (missingParams) {
       return Promise.reject(missingParams);
     }
 
     const query = {
       'encryption_scheme': _params.encryptionScheme,
       'location': _params.location,
       'resource_group': _params.resourceGroup,
       'limit': _params.limit,
       'sort': _params.sort,
     };
 
     const sdkHeaders = getSdkHeaders(
       SchematicsV1.DEFAULT_SERVICE_NAME,
       'v1',
       'listKms'
     );
 
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
   export interface Empty {}
 
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
     /** Template type (terraform, ansible, helm, cloudpak, bash script). */
     templateType: string;
     /** Source of templates, playbooks, or controls. */
     source: ExternalSource;
     /** Region to which request should go. Applicable only on global endpoint. */
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
       EXTERNAL_SCM = 'external_scm',
       COS_BUCKET = 'cos_bucket',
     }
   }
 
   /** Parameters for the `listWorkspaces` operation. */
   export interface ListWorkspacesParams {
     /** The starting position of the item in the list of items. For example, if you have three workspaces in your
      *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
      *  and so forth. If you have 6 workspaces and you want to list the details for workspaces 2-6, enter 1. To limit
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
 
   /** Parameters for the `createWorkspace` operation. */
   export interface CreateWorkspaceParams {
     /** List of applied shared dataset ID. */
     appliedShareddataIds?: string[];
     /** Information about the software template that you chose from the IBM Cloud catalog. This information is
      *  returned for IBM Cloud catalog offerings only.
      */
     catalogRef?: CatalogRef;
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
      *  and so forth. If you have 6 workspaces and you want to list the details for workspaces 2-6, enter 1. To limit
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
     /** Resource-group name for an action.  By default, action is created in default resource group. */
     resourceGroup?: string;
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
     credentials?: VariableData[];
     /** Describes a bastion resource. */
     bastion?: BastionResourceDefinition;
     /** User editable variable data & system generated reference to value. */
     bastionCredential?: VariableData;
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
     /** Computed state of the Action. */
     state?: ActionState;
     /** System lock status. */
     sysLock?: SystemLock;
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
     /** Type of source for the Template. */
     export enum SourceType {
       LOCAL = 'local',
       GIT_HUB = 'git_hub',
       GIT_HUB_ENTERPRISE = 'git_hub_enterprise',
       GIT_LAB = 'git_lab',
       IBM_GIT_LAB = 'ibm_git_lab',
       IBM_CLOUD_CATALOG = 'ibm_cloud_catalog',
       EXTERNAL_SCM = 'external_scm',
       COS_BUCKET = 'cos_bucket',
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
     /** Resource-group name for an action.  By default, action is created in default resource group. */
     resourceGroup?: string;
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
     credentials?: VariableData[];
     /** Describes a bastion resource. */
     bastion?: BastionResourceDefinition;
     /** User editable variable data & system generated reference to value. */
     bastionCredential?: VariableData;
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
     /** Computed state of the Action. */
     state?: ActionState;
     /** System lock status. */
     sysLock?: SystemLock;
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
     /** Type of source for the Template. */
     export enum SourceType {
       LOCAL = 'local',
       GIT_HUB = 'git_hub',
       GIT_HUB_ENTERPRISE = 'git_hub_enterprise',
       GIT_LAB = 'git_lab',
       IBM_GIT_LAB = 'ibm_git_lab',
       IBM_CLOUD_CATALOG = 'ibm_cloud_catalog',
       EXTERNAL_SCM = 'external_scm',
       COS_BUCKET = 'cos_bucket',
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
      *  and so forth. If you have 6 workspaces and you want to list the details for workspaces 2-6, enter 1. To limit
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
      *  and so forth. If you have 6 workspaces and you want to list the details for workspaces 2-6, enter 1. To limit
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
     /** Name of the resource (workspace, actions or controls). */
     resource?: ListJobsConstants.Resource | string;
     /** The Resource Id. It could be an Action-id or Workspace-id. */
     resourceId?: string;
     /** Action Id. */
     actionId?: string;
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
     /** Name of the resource (workspace, actions or controls). */
     export enum Resource {
       WORKSPACE = 'workspace',
       ACTION = 'action',
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
     /** Job data. */
     data?: JobData;
     /** Describes a bastion resource. */
     bastion?: BastionResourceDefinition;
     /** Job log summary record. */
     logSummary?: JobLogSummary;
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
       ENVIRONMENT_INIT = 'environment_init',
       ENVIRONMENT_INSTALL = 'environment_install',
       ENVIRONMENT_UNINSTALL = 'environment_uninstall',
       REPOSITORY_PROCESS = 'repository_process',
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
     /** Job data. */
     data?: JobData;
     /** Describes a bastion resource. */
     bastion?: BastionResourceDefinition;
     /** Job log summary record. */
     logSummary?: JobLogSummary;
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
       ENVIRONMENT_INIT = 'environment_init',
       ENVIRONMENT_INSTALL = 'environment_install',
       ENVIRONMENT_UNINSTALL = 'environment_uninstall',
       REPOSITORY_PROCESS = 'repository_process',
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
     /** True to delete workspace. */
     newDeleteWorkspaces?: boolean;
     /** True to destroy the resources managed by this workspace. */
     newDestroyResources?: boolean;
     /** Workspace deletion job name. */
     newJob?: string;
     /** Version of the terraform template. */
     newVersion?: string;
     /** List of workspaces to be deleted. */
     newWorkspaces?: string[];
     /** If set to `true`, refresh_token header configuration is required to delete all the Terraform resources, and
      *  the Schematics workspace. If set to `false`, you can remove only the workspace. Your Terraform resources are
      *  still available and must be managed with the resource dashboard or CLI.
      */
     destroyResources?: string;
     headers?: OutgoingHttpHeaders;
   }
 
   /** Parameters for the `getWorkspaceDeletionJobStatus` operation. */
   export interface GetWorkspaceDeletionJobStatusParams {
     /** The workspace job ID. */
     wjId: string;
     headers?: OutgoingHttpHeaders;
   }
 
   /** Parameters for the `listInventories` operation. */
   export interface ListInventoriesParams {
     /** The starting position of the item in the list of items. For example, if you have three workspaces in your
      *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
      *  and so forth. If you have 6 workspaces and you want to list the details for workspaces 2-6, enter 1. To limit
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
     headers?: OutgoingHttpHeaders;
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
 
   /** Parameters for the `updateInventory` operation. */
   export interface UpdateInventoryParams {
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
     location?: UpdateInventoryConstants.Location | string;
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
 
   /** Constants for the `updateInventory` operation. */
   export namespace UpdateInventoryConstants {
     /** List of locations supported by IBM Cloud Schematics service.  While creating your workspace or action, choose the right region, since it cannot be changed.  Note, this does not limit the location of the IBM Cloud resources, provisioned using Schematics. */
     export enum Location {
       US_SOUTH = 'us-south',
       US_EAST = 'us-east',
       EU_GB = 'eu-gb',
       EU_DE = 'eu-de',
     }
   }
 
   /** Parameters for the `listResourceQuery` operation. */
   export interface ListResourceQueryParams {
     /** The starting position of the item in the list of items. For example, if you have three workspaces in your
      *  account, the first workspace is assigned position number 0, the second workspace is assigned position number 1,
      *  and so forth. If you have 6 workspaces and you want to list the details for workspaces 2-6, enter 1. To limit
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
 
   /** Parameters for the `getKmsSettings` operation. */
   export interface GetKmsSettingsParams {
     /** The location of the Resource. */
     location: string;
     headers?: OutgoingHttpHeaders;
   }
 
   /** Parameters for the `updateKmsSettings` operation. */
   export interface UpdateKmsSettingsParams {
     /** Location. */
     location?: string;
     /** Encryption scheme. */
     encryptionScheme?: string;
     /** Resource group. */
     resourceGroup?: string;
     /** Primary CRK details. */
     primaryCrk?: KMSSettingsPrimaryCrk;
     /** Secondary CRK details. */
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
     /** Resource-group name for an action.  By default, action is created in default resource group. */
     resource_group?: string;
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
     credentials?: VariableData[];
     /** Describes a bastion resource. */
     bastion?: BastionResourceDefinition;
     /** User editable variable data & system generated reference to value. */
     bastion_credential?: VariableData;
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
     /** Playbook names retrieved from the respository. */
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
 
   /** Describes a bastion resource. */
   export interface BastionResourceDefinition {
     /** Bastion Name(Unique). */
     name?: string;
     /** Reference to the Inventory resource definition. */
     host?: string;
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
 
   /** Source of templates, playbooks, or controls. */
   export interface ExternalSource {
     /** Type of source for the Template. */
     source_type: string;
     /** Connection details to Git source. */
     git?: ExternalSourceGit;
     /** Connection details to IBM Cloud Catalog source. */
     catalog?: ExternalSourceCatalog;
     /** Connection details to a IBM Cloud Object Storage bucket. */
     cos_bucket?: ExternalSourceCosBucket;
   }
 
   /** Connection details to IBM Cloud Catalog source. */
   export interface ExternalSourceCatalog {
     /** name of the private catalog. */
     catalog_name?: string;
     /** Name of the offering in the IBM Catalog. */
     offering_name?: string;
     /** Version string of the offering in the IBM Catalog. */
     offering_version?: string;
     /** Type of the offering, in the IBM Catalog. */
     offering_kind?: string;
     /** Id of the offering the IBM Catalog. */
     offering_id?: string;
     /** Id of the offering version the IBM Catalog. */
     offering_version_id?: string;
     /** Repo Url of the offering, in the IBM Catalog. */
     offering_repo_url?: string;
   }
 
   /** Connection details to a IBM Cloud Object Storage bucket. */
   export interface ExternalSourceCosBucket {
     /** COS Bucket Url. */
     cos_bucket_url?: string;
   }
 
   /** Connection details to Git source. */
   export interface ExternalSourceGit {
     /** The Complete URL which is computed by git_repo_url, git_repo_folder and branch. */
     computed_git_repo_url?: string;
     /** URL to the GIT Repo that can be used to clone the template. */
     git_repo_url?: string;
     /** Personal Access Token to connect to Git URLs. */
     git_token?: string;
     /** Name of the folder in the Git Repo, that contains the template. */
     git_repo_folder?: string;
     /** Name of the release tag, used to fetch the Git Repo. */
     git_release?: string;
     /** Name of the branch, used to fetch the Git Repo. */
     git_branch?: string;
   }
 
   /** Complete inventory resource details with user inputs and system generated data. */
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
     /** Complete inventory resource details with user inputs and system generated data. */
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
   }
 
   /** Discovered KMS instances. */
   export interface KMSDiscovery {
     /** Total number of records. */
     total_count?: number;
     /** Number of records returned. */
     limit: number;
     /** Skipped number of records. */
     offset: number;
     /** List of KMS instances. */
     kms_instances?: KMSInstances[];
   }
 
   /** KMS Instances. */
   export interface KMSInstances {
     /** Location. */
     location?: string;
     /** Encryption schema. */
     encryption_scheme?: string;
     /** Resource groups. */
     resource_group?: string;
     /** KMS CRN. */
     kms_crn?: string;
     /** KMS Name. */
     kms_name?: string;
     /** KMS private endpoint. */
     kms_private_endpoint?: string;
     /** KMS public endpoint. */
     kms_public_endpoint?: string;
     /** List of keys. */
     keys?: KMSInstancesKeys[];
   }
 
   /** KMSInstancesKeys. */
   export interface KMSInstancesKeys {
     /** Key name. */
     name?: string;
     /** CRN of the Key. */
     crn?: string;
     /** Error message. */
     error?: string;
   }
 
   /** User defined KMS Settings details. */
   export interface KMSSettings {
     /** Location. */
     location?: string;
     /** Encryption scheme. */
     encryption_scheme?: string;
     /** Resource group. */
     resource_group?: string;
     /** Primary CRK details. */
     primary_crk?: KMSSettingsPrimaryCrk;
     /** Secondary CRK details. */
     secondary_crk?: KMSSettingsSecondaryCrk;
   }
 
   /** Primary CRK details. */
   export interface KMSSettingsPrimaryCrk {
     /** Primary KMS name. */
     kms_name?: string;
     /** Primary KMS endpoint. */
     kms_private_endpoint?: string;
     /** CRN of the Primary Key. */
     key_crn?: string;
   }
 
   /** Secondary CRK details. */
   export interface KMSSettingsSecondaryCrk {
     /** Secondary KMS name. */
     kms_name?: string;
     /** Secondary KMS endpoint. */
     kms_private_endpoint?: string;
     /** CRN of the Secondary Key. */
     key_crn?: string;
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
     /** List of resource query records. */
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
     /** List of paired regions used by Schematics. */
     paired_region?: string[];
     /** Restricted Region. */
     restricted?: boolean;
   }
 
   /** List of Locations details. */
   export interface SchematicsLocationsList {
     /** List of Locations. */
     locations?: SchematicsLocationsLite[];
   }
 
   /** individual location details. */
   export interface SchematicsLocationsLite {
     /** Geographical Region code having the data centres of IBM Cloud Schematics service. */
     region?: string;
     /** Geographical city locations having the data centres of IBM Cloud Schematics service. */
     metro?: string;
     /** Geographical continent locations code having the data centres of IBM Cloud Schematics service. */
     geography_code?: string;
     /** Geographical continent locations having the data centres of IBM Cloud Schematics service. */
     geography?: string;
     /** Country locations having the data centres of IBM Cloud Schematics service. */
     country?: string;
     /** The kind of location. */
     kind?: string;
     /** List of paired regions used by Schematics. */
     paired_region?: string[];
     /** Restricted Region. */
     restricted?: boolean;
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
     /** Template type (terraform, ansible, helm, cloudpak, bash script). */
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
     /** The repository URL. */
     repo_url?: string;
     /** The source URL. */
     url?: string;
   }
 
   /** TemplateRepoTarUploadResponse -. */
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
     template_type?: string;
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
     /** The subfolder in your GitHub or GitLab repository where your Terraform template is stored. */
     folder?: string;
     /** True, to use the files from the specified folder & subfolder in your GitHub or GitLab repository and ignore
      *  the other folders in the repository.
      */
     compact?: boolean;
     /** The content of an existing Terraform statefile that you want to import in to your workspace. To get the
      *  content of a Terraform statefile for a specific Terraform template in an existing workspace, run `ibmcloud
      *  terraform state pull --id <workspace_id> --template <template_id>`.
      */
     init_state_file?: string;
     /** The Terraform version that you want to use to run your Terraform code. Enter `terraform_v0.12` to use
      *  Terraform version 0.12, and `terraform_v0.11` to use Terraform version 0.11. The Terraform config files are run
      *  with Terraform version 0.11. This is a required variable. Make sure that your Terraform config files are
      *  compatible with the Terraform version that you select.
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
 
   /** Information about the input variables that are declared in the template that your workspace points to. */
   export interface TemplateValues {
     values_metadata?: JsonObject[];
   }
 
   /** Inputs for running a Terraform command on the workspace. */
   export interface TerraformCommand {
     /** You must provide the command to execute. Supported commands are `show`,`taint`, `untaint`, `state`,
      *  `import`, `output`.
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
     /** User values. */
     values?: string;
     /** Information about the input variables that your template uses. */
     variablestore?: WorkspaceVariableResponse[];
   }
 
   /** User editable variable data & system generated reference to value. */
   export interface VariableData {
     /** Name of the variable. */
     name?: string;
     /** Value for the variable or reference to the value. */
     value?: string;
     /** User editable metadata for the variables. */
     metadata?: VariableMetadata;
     /** Reference link to the variable value By default the expression will point to self.value. */
     link?: string;
   }
 
   /** User editable metadata for the variables. */
   export interface VariableMetadata {
     /** Type of the variable. */
     type?: string;
     /** List of aliases for the variable name. */
     aliases?: string[];
     /** Description of the meta data. */
     description?: string;
     /** Default value for the variable, if the override value is not specified. */
     default_value?: string;
     /** Is the variable secure or sensitive ?. */
     secure?: boolean;
     /** Is the variable readonly ?. */
     immutable?: boolean;
     /** If true, the variable will not be displayed on UI or CLI. */
     hidden?: boolean;
     /** List of possible values for this variable.  If type is integer or date, then the array of string will be
      *  converted to array of integers or date during runtime.
      */
     options?: string[];
     /** Minimum value of the variable. Applicable for integer type. */
     min_value?: number;
     /** Maximum value of the variable. Applicable for integer type. */
     max_value?: number;
     /** Minimum length of the variable value. Applicable for string type. */
     min_length?: number;
     /** Maximum length of the variable value. Applicable for string type. */
     max_length?: number;
     /** Regex for the variable value. */
     matches?: string;
     /** Relative position of this variable in a list. */
     position?: number;
     /** Display name of the group this variable belongs to. */
     group_by?: string;
     /** Source of this meta-data. */
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
 
   /** Response after successfully initiating the bulk job to delete multiple workspaces. */
   export interface WorkspaceBulkDeleteResponse {
     /** Workspace deletion job name. */
     job?: string;
     /** Workspace deletion job id. */
     job_id?: string;
   }
 
   /** Response from the workspace bulk job status. */
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
     /** List of applied shared dataset ID. */
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
     /** Response that indicate the status of the workspace as either frozen or locked. */
     workspace_status?: WorkspaceStatusResponse;
     /** Information about the last job that ran against the workspace. -. */
     workspace_status_msg?: WorkspaceStatusMessage;
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
 