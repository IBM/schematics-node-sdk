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
 * IBM OpenAPI SDK Code Generator Version: 3.12.2-b734cb71-20200916-142547
 */
 

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import { Authenticator, BaseService, getAuthenticatorFromEnvironment, getMissingParams, UserOptions } from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * Schematics Service is to provide the capability to manage resources  of (cloud) provider infrastructure using file
 * based configurations.  With the Schematics service the customer is able to specify the  required set of resources and
 * their configuration in ''config files'',  and then pass these config files to the service to fulfill it by  calling
 * the necessary actions on the infrastructure.  This principle is also known as Infrastructure as Code.  For more
 * information refer to  https://cloud.ibm.com/docs/schematics?topic=schematics-getting-started'
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
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net'). The base url may differ between IBM Cloud regions.
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
   * schematics
   ************************/

  /**
   * List supported schematics locations.
   *
   * List supported schematics locations.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.SchematicsLocations[]>>}
   */
  public listSchematicsLocation(params?: SchematicsV1.ListSchematicsLocationParams): Promise<SchematicsV1.Response<SchematicsV1.SchematicsLocations[]>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listSchematicsLocation');

      const parameters = {
        options: {
          url: '/v1/locations',
          method: 'GET',
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * List of resource groups in the Account.
   *
   * List of resource groups in the Account.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceGroupResponse[]>>}
   */
  public listResourceGroup(params?: SchematicsV1.ListResourceGroupParams): Promise<SchematicsV1.Response<SchematicsV1.ResourceGroupResponse[]>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listResourceGroup');

      const parameters = {
        options: {
          url: '/v1/resource_groups',
          method: 'GET',
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get schematics version.
   *
   * Get schematics version.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.VersionResponse>>}
   */
  public getSchematicsVersion(params?: SchematicsV1.GetSchematicsVersionParams): Promise<SchematicsV1.Response<SchematicsV1.VersionResponse>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getSchematicsVersion');

      const parameters = {
        options: {
          url: '/v1/version',
          method: 'GET',
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * workspaces
   ************************/

  /**
   * List all workspace definitions.
   *
   * List all workspace definitions.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The number of items to skip before starting to collect the result set.
   * @param {number} [params.limit] - The numbers of items to return.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponseList>>}
   */
  public listWorkspaces(params?: SchematicsV1.ListWorkspacesParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponseList>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const query = {
        'offset': _params.offset,
        'limit': _params.limit
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listWorkspaces');

      const parameters = {
        options: {
          url: '/v1/workspaces',
          method: 'GET',
          qs: query,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Create workspace definition.
   *
   * Create workspace definition.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string[]} [params.appliedShareddataIds] - List of applied shared dataset id.
   * @param {CatalogRef} [params.catalogRef] - CatalogRef -.
   * @param {string} [params.description] - Workspace description.
   * @param {string} [params.location] - Workspace location.
   * @param {string} [params.name] - Workspace name.
   * @param {string} [params.resourceGroup] - Workspace resource group.
   * @param {SharedTargetData} [params.sharedData] - SharedTargetData -.
   * @param {string[]} [params.tags] - Workspace tags.
   * @param {TemplateSourceDataRequest[]} [params.templateData] - TemplateData -.
   * @param {string} [params.templateRef] - Workspace template ref.
   * @param {TemplateRepoRequest} [params.templateRepo] - TemplateRepoRequest -.
   * @param {string[]} [params.type] - List of Workspace type.
   * @param {WorkspaceStatusRequest} [params.workspaceStatus] - WorkspaceStatusRequest -.
   * @param {string} [params.xGithubToken] - The github token associated with the GIT. Required for cloning of repo.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>>}
   */
  public createWorkspace(params?: SchematicsV1.CreateWorkspaceParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
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
        'workspace_status': _params.workspaceStatus
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createWorkspace');

      const parameters = {
        options: {
          url: '/v1/workspaces',
          method: 'POST',
          body,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Github-token': _params.xGithubToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get workspace definition.
   *
   * Get workspace definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>>}
   */
  public getWorkspace(params: SchematicsV1.GetWorkspaceParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspace');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Replace the workspace definition.
   *
   * Replace the workspace definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {CatalogRef} [params.catalogRef] - CatalogRef -.
   * @param {string} [params.description] - Workspace description.
   * @param {string} [params.name] - Workspace name.
   * @param {SharedTargetData} [params.sharedData] - SharedTargetData -.
   * @param {string[]} [params.tags] - Tags -.
   * @param {TemplateSourceDataRequest[]} [params.templateData] - TemplateData -.
   * @param {TemplateRepoUpdateRequest} [params.templateRepo] - TemplateRepoUpdateRequest -.
   * @param {string[]} [params.type] - List of Workspace type.
   * @param {WorkspaceStatusUpdateRequest} [params.workspaceStatus] - WorkspaceStatusUpdateRequest -.
   * @param {WorkspaceStatusMessage} [params.workspaceStatusMsg] - WorkspaceStatusMessage -.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>>}
   */
  public replaceWorkspace(params: SchematicsV1.ReplaceWorkspaceParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
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
        'workspace_status_msg': _params.workspaceStatusMsg
      };

      const path = {
        'w_id': _params.wId
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
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Delete a workspace definition.
   *
   * Delete a workspace definition.  Use destroy_resource='true' to destroy the related cloud resource.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.refreshToken - The IAM refresh token associated with the IBM Cloud account.
   * @param {string} [params.destroyResources] - true or 1 - to destroy resources before deleting workspace;  If this is
   * true, refresh_token is mandatory.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<string>>}
   */
  public deleteWorkspace(params: SchematicsV1.DeleteWorkspaceParams): Promise<SchematicsV1.Response<string>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'refreshToken'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        'destroy_resources': _params.destroyResources
      };

      const path = {
        'w_id': _params.wId
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
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'refresh_token': _params.refreshToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Update the workspace definition.
   *
   * Update the workspace definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {CatalogRef} [params.catalogRef] - CatalogRef -.
   * @param {string} [params.description] - Workspace description.
   * @param {string} [params.name] - Workspace name.
   * @param {SharedTargetData} [params.sharedData] - SharedTargetData -.
   * @param {string[]} [params.tags] - Tags -.
   * @param {TemplateSourceDataRequest[]} [params.templateData] - TemplateData -.
   * @param {TemplateRepoUpdateRequest} [params.templateRepo] - TemplateRepoUpdateRequest -.
   * @param {string[]} [params.type] - List of Workspace type.
   * @param {WorkspaceStatusUpdateRequest} [params.workspaceStatus] - WorkspaceStatusUpdateRequest -.
   * @param {WorkspaceStatusMessage} [params.workspaceStatusMsg] - WorkspaceStatusMessage -.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>>}
   */
  public updateWorkspace(params: SchematicsV1.UpdateWorkspaceParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
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
        'workspace_status_msg': _params.workspaceStatusMsg
      };

      const path = {
        'w_id': _params.wId
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
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Upload template tar file for the workspace.
   *
   * Upload template tar file for the workspace.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.tId - The Template ID for which you want to get the values.  Use the GET /workspaces to look
   * up the workspace IDs  or template IDs in your IBM Cloud account.
   * @param {NodeJS.ReadableStream|Buffer} [params.file] - Template tar file.
   * @param {string} [params.fileContentType] - The content type of file.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateRepoTarUploadResponse>>}
   */
  public uploadTemplateTar(params: SchematicsV1.UploadTemplateTarParams): Promise<SchematicsV1.Response<SchematicsV1.TemplateRepoTarUploadResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'tId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const formData = {
        'file': {
          data: _params.file,
          contentType: _params.fileContentType
        }
      };

      const path = {
        'w_id': _params.wId,
        't_id': _params.tId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'uploadTemplateTar');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/template_data/{t_id}/template_repo_upload',
          method: 'PUT',
          path,
          formData
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the workspace readme.
   *
   * Get the workspace readme.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} [params.ref] - The name of the commit/branch/tag.  Default, the repository’s default branch
   * (usually master).
   * @param {string} [params.formatted] - The format of the readme file.  Value ''markdown'' will give markdown,
   * otherwise html.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateReadme>>}
   */
  public getWorkspaceReadme(params: SchematicsV1.GetWorkspaceReadmeParams): Promise<SchematicsV1.Response<SchematicsV1.TemplateReadme>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        'ref': _params.ref,
        'formatted': _params.formatted
      };

      const path = {
        'w_id': _params.wId
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
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * workspaceActivities
   ************************/

  /**
   * List all workspace activities.
   *
   * List all workspace activities.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {number} [params.offset] - The number of items to skip before starting to collect the result set.
   * @param {number} [params.limit] - The numbers of items to return.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivities>>}
   */
  public listWorkspaceActivities(params: SchematicsV1.ListWorkspaceActivitiesParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivities>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        'offset': _params.offset,
        'limit': _params.limit
      };

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listWorkspaceActivities');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/actions',
          method: 'GET',
          qs: query,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get workspace activity details.
   *
   * Get workspace activity details.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.activityId - The activity ID that you want to see additional details.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivity>>}
   */
  public getWorkspaceActivity(params: SchematicsV1.GetWorkspaceActivityParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivity>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'activityId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId,
        'activity_id': _params.activityId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceActivity');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/actions/{activity_id}',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Stop the workspace activity.
   *
   * Stop the workspace activity.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.activityId - The activity ID that you want to see additional details.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityApplyResult>>}
   */
  public deleteWorkspaceActivity(params: SchematicsV1.DeleteWorkspaceActivityParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityApplyResult>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'activityId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId,
        'activity_id': _params.activityId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteWorkspaceActivity');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/actions/{activity_id}',
          method: 'DELETE',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Run terraform Commands.
   *
   * Run terraform Commands on workspaces.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.refreshToken - The IAM refresh token associated with the IBM Cloud account.
   * @param {TerraformCommand[]} [params.commands] - List of commands.
   * @param {string} [params.operationName] - Command name.
   * @param {string} [params.description] - Command description.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityCommandResult>>}
   */
  public runWorkspaceCommands(params: SchematicsV1.RunWorkspaceCommandsParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityCommandResult>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'refreshToken'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'commands': _params.commands,
        'operation_name': _params.operationName,
        'description': _params.description
      };

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'runWorkspaceCommands');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/commands',
          method: 'PUT',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Run schematics workspace 'apply' activity.
   *
   * Run schematics workspace 'apply' activity.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.refreshToken - The IAM refresh token associated with the IBM Cloud account.
   * @param {WorkspaceActivityOptionsTemplate} [params.actionOptions] - Workspace Activity Options Template.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityApplyResult>>}
   */
  public applyWorkspaceCommand(params: SchematicsV1.ApplyWorkspaceCommandParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityApplyResult>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'refreshToken'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'action_options': _params.actionOptions
      };

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'applyWorkspaceCommand');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/apply',
          method: 'PUT',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Run workspace 'destroy' activity.
   *
   * Run workspace 'destroy' activity,  to destroy all the resources associated with the workspace.  WARNING: This
   * action cannot be reversed.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.refreshToken - The IAM refresh token associated with the IBM Cloud account.
   * @param {WorkspaceActivityOptionsTemplate} [params.actionOptions] - Workspace Activity Options Template.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityDestroyResult>>}
   */
  public destroyWorkspaceCommand(params: SchematicsV1.DestroyWorkspaceCommandParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityDestroyResult>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'refreshToken'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'action_options': _params.actionOptions
      };

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'destroyWorkspaceCommand');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/destroy',
          method: 'PUT',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Run workspace 'plan' activity,.
   *
   * Run schematics workspace 'plan' activity,  to preview the change before running an 'apply' activity.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.refreshToken - The IAM refresh token associated with the IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityPlanResult>>}
   */
  public planWorkspaceCommand(params: SchematicsV1.PlanWorkspaceCommandParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityPlanResult>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'refreshToken'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'planWorkspaceCommand');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/plan',
          method: 'POST',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'refresh_token': _params.refreshToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Run workspace 'refresh' activity.
   *
   * Run workspace 'refresh' activity.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.refreshToken - The IAM refresh token associated with the IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityRefreshResult>>}
   */
  public refreshWorkspaceCommand(params: SchematicsV1.RefreshWorkspaceCommandParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityRefreshResult>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'refreshToken'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'refreshWorkspaceCommand');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/refresh',
          method: 'PUT',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'refresh_token': _params.refreshToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * workspaceInputs
   ************************/

  /**
   * Get the input values of the workspace.
   *
   * Get the input values of the workspace.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.tId - The Template ID for which you want to get the values.  Use the GET /workspaces to look
   * up the workspace IDs  or template IDs in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateValues>>}
   */
  public getWorkspaceInputs(params: SchematicsV1.GetWorkspaceInputsParams): Promise<SchematicsV1.Response<SchematicsV1.TemplateValues>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'tId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId,
        't_id': _params.tId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceInputs');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/template_data/{t_id}/values',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Replace the input values for the workspace.
   *
   * Replace the input values for the workspace.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.tId - The Template ID for which you want to get the values.  Use the GET /workspaces to look
   * up the workspace IDs  or template IDs in your IBM Cloud account.
   * @param {JsonObject[]} [params.envValues] - EnvVariableRequest ..
   * @param {string} [params.values] - User values.
   * @param {WorkspaceVariableRequest[]} [params.variablestore] - VariablesRequest -.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.UserValues>>}
   */
  public replaceWorkspaceInputs(params: SchematicsV1.ReplaceWorkspaceInputsParams): Promise<SchematicsV1.Response<SchematicsV1.UserValues>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'tId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'env_values': _params.envValues,
        'values': _params.values,
        'variablestore': _params.variablestore
      };

      const path = {
        'w_id': _params.wId,
        't_id': _params.tId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'replaceWorkspaceInputs');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/template_data/{t_id}/values',
          method: 'PUT',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get all the input values of the workspace.
   *
   * Get all the input values of the workspace.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceTemplateValuesResponse>>}
   */
  public getAllWorkspaceInputs(params: SchematicsV1.GetAllWorkspaceInputsParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceTemplateValuesResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getAllWorkspaceInputs');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/templates/values',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the input metadata of the workspace.
   *
   * Get the input metadata of the workspace.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.tId - The Template ID for which you want to get the values.  Use the GET /workspaces to look
   * up the workspace IDs  or template IDs in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.JsonObject[]>>}
   */
  public getWorkspaceInputMetadata(params: SchematicsV1.GetWorkspaceInputMetadataParams): Promise<SchematicsV1.Response<SchematicsV1.JsonObject[]>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'tId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId,
        't_id': _params.tId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceInputMetadata');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/template_data/{t_id}/values_metadata',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * workspaceOutputs
   ************************/

  /**
   * Get all the output values of the workspace.
   *
   * Get all the output values from your workspace; (ex. result of terraform output command).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.OutputValuesItem[]>>}
   */
  public getWorkspaceOutputs(params: SchematicsV1.GetWorkspaceOutputsParams): Promise<SchematicsV1.Response<SchematicsV1.OutputValuesItem[]>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceOutputs');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/output_values',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get all the resources created by the workspace.
   *
   * Get all the resources created by the workspace.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateResources[]>>}
   */
  public getWorkspaceResources(params: SchematicsV1.GetWorkspaceResourcesParams): Promise<SchematicsV1.Response<SchematicsV1.TemplateResources[]>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceResources');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/resources',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the workspace state.
   *
   * Get the workspace state.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.StateStoreResponseList>>}
   */
  public getWorkspaceState(params: SchematicsV1.GetWorkspaceStateParams): Promise<SchematicsV1.Response<SchematicsV1.StateStoreResponseList>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceState');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/state_stores',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the template state.
   *
   * Get the template state.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.tId - The Template ID for which you want to get the values.  Use the GET /workspaces to look
   * up the workspace IDs  or template IDs in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateStateStore>>}
   */
  public getWorkspaceTemplateState(params: SchematicsV1.GetWorkspaceTemplateStateParams): Promise<SchematicsV1.Response<SchematicsV1.TemplateStateStore>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'tId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId,
        't_id': _params.tId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceTemplateState');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/runtime_data/{t_id}/state_store',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * workspaceLogs
   ************************/

  /**
   * Get the workspace activity log urls.
   *
   * View an activity log for Terraform actions that ran against your workspace.  You can view logs for plan, apply, and
   * destroy actions.      operationId: get_activity_log_urls.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.activityId - The activity ID that you want to see additional details.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityLogs>>}
   */
  public getWorkspaceActivityLogs(params: SchematicsV1.GetWorkspaceActivityLogsParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceActivityLogs>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'activityId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId,
        'activity_id': _params.activityId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceActivityLogs');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/actions/{activity_id}/logs',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get all workspace log urls.
   *
   * Get all workspace log urls.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.LogStoreResponseList>>}
   */
  public getWorkspaceLogUrls(params: SchematicsV1.GetWorkspaceLogUrlsParams): Promise<SchematicsV1.Response<SchematicsV1.LogStoreResponseList>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'w_id': _params.wId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceLogUrls');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/log_stores',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get all template logs.
   *
   * Get all template logs.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.tId - The Template ID for which you want to get the values.  Use the GET /workspaces to look
   * up the workspace IDs  or template IDs in your IBM Cloud account.
   * @param {boolean} [params.logTfCmd] - `false` will hide the terraform command header in the logs.
   * @param {boolean} [params.logTfPrefix] - `false` will hide all the terraform command prefix in the log statements.
   * @param {boolean} [params.logTfNullResource] - `false` will hide all the null resource prefix in the log statements.
   * @param {boolean} [params.logTfAnsible] - `true` will format all logs to withhold the original format  of ansible
   * output in the log statements.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<string>>}
   */
  public getTemplateLogs(params: SchematicsV1.GetTemplateLogsParams): Promise<SchematicsV1.Response<string>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'tId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        'log_tf_cmd': _params.logTfCmd,
        'log_tf_prefix': _params.logTfPrefix,
        'log_tf_null_resource': _params.logTfNullResource,
        'log_tf_ansible': _params.logTfAnsible
      };

      const path = {
        'w_id': _params.wId,
        't_id': _params.tId
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
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the template activity logs.
   *
   * View an activity log for Terraform actions that ran for a template against your workspace.  You can view logs for
   * plan, apply, and destroy actions.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wId - The workspace ID for the workspace that you want to query.  You can run the GET
   * /workspaces call if you need to look up the  workspace IDs in your IBM Cloud account.
   * @param {string} params.tId - The Template ID for which you want to get the values.  Use the GET /workspaces to look
   * up the workspace IDs  or template IDs in your IBM Cloud account.
   * @param {string} params.activityId - The activity ID that you want to see additional details.
   * @param {boolean} [params.logTfCmd] - `false` will hide the terraform command header in the logs.
   * @param {boolean} [params.logTfPrefix] - `false` will hide all the terraform command prefix in the log statements.
   * @param {boolean} [params.logTfNullResource] - `false` will hide all the null resource prefix in the log statements.
   * @param {boolean} [params.logTfAnsible] - `true` will format all logs to withhold the original format  of ansible
   * output in the log statements.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<string>>}
   */
  public getTemplateActivityLog(params: SchematicsV1.GetTemplateActivityLogParams): Promise<SchematicsV1.Response<string>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wId', 'tId', 'activityId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        'log_tf_cmd': _params.logTfCmd,
        'log_tf_prefix': _params.logTfPrefix,
        'log_tf_null_resource': _params.logTfNullResource,
        'log_tf_ansible': _params.logTfAnsible
      };

      const path = {
        'w_id': _params.wId,
        't_id': _params.tId,
        'activity_id': _params.activityId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getTemplateActivityLog');

      const parameters = {
        options: {
          url: '/v1/workspaces/{w_id}/runtime_data/{t_id}/log_store/actions/{activity_id}',
          method: 'GET',
          qs: query,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * workspaceBulkJobs
   ************************/

  /**
   * Delete multiple workspaces.
   *
   * Delete multiple workspaces.  Use ?destroy_resource="true" to destroy the related cloud resources,  otherwise the
   * resources must be managed outside of Schematics.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.refreshToken - The IAM refresh token associated with the IBM Cloud account.
   * @param {boolean} [params.newDeleteWorkspaces] - True to delete workspace.
   * @param {boolean} [params.newDestroyResources] - True to destroy the resources managed by this workspace.
   * @param {string} [params.newJob] - Workspace deletion job name.
   * @param {string} [params.newVersion] - Version.
   * @param {string[]} [params.newWorkspaces] - List of workspaces to be deleted.
   * @param {string} [params.destroyResources] - true or 1 - to destroy resources before deleting workspace;  If this is
   * true, refresh_token is mandatory.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceBulkDeleteResponse>>}
   */
  public createWorkspaceDeletionJob(params: SchematicsV1.CreateWorkspaceDeletionJobParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceBulkDeleteResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['refreshToken'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'delete_workspaces': _params.newDeleteWorkspaces,
        'destroy_resources': _params.newDestroyResources,
        'job': _params.newJob,
        'version': _params.newVersion,
        'workspaces': _params.newWorkspaces
      };

      const query = {
        'destroy_resources': _params.destroyResources
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createWorkspaceDeletionJob');

      const parameters = {
        options: {
          url: '/v1/workspace_jobs',
          method: 'POST',
          body,
          qs: query,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the workspace deletion job status.
   *
   * Get the workspace deletion job status.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.wjId - The workspace job deletion ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.WorkspaceJobResponse>>}
   */
  public getWorkspaceDeletionJobStatus(params: SchematicsV1.GetWorkspaceDeletionJobStatusParams): Promise<SchematicsV1.Response<SchematicsV1.WorkspaceJobResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['wjId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'wj_id': _params.wjId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getWorkspaceDeletionJobStatus');

      const parameters = {
        options: {
          url: '/v1/workspace_jobs/{wj_id}/status',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * actions
   ************************/

  /**
   * Create an Action definition.
   *
   * Create a new Action definition.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.name] - Action name (unique for an account).
   * @param {string} [params.description] - Action description.
   * @param {string} [params.location] - List of workspace locations supported by IBM Cloud Schematics service.  Note,
   * this does not limit the location of the resources provisioned using Schematics.
   * @param {string} [params.resourceGroup] - Resource-group name for the Action.  By default, Action will be created in
   * Default Resource Group.
   * @param {string[]} [params.tags] - Action tags.
   * @param {UserState} [params.userState] - User defined status of the Schematics object.
   * @param {string} [params.sourceReadmeUrl] - URL of the README file, for the source.
   * @param {ExternalSource} [params.source] - Source of templates, playbooks, or controls.
   * @param {string} [params.sourceType] - Type of source for the Template.
   * @param {string} [params.commandParameter] - Schematics job command parameter (playbook-name).
   * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
   * @param {string} [params.inventory] - Inventory ID.
   * @param {VariableData} [params.bastionCredential] - User editable variable data & system generated reference to
   * value.
   * @param {VariableData[]} [params.credentials] - credentials of the Action.
   * @param {VariableData[]} [params.inputs] - Input variables for the Action.
   * @param {VariableData[]} [params.outputs] - Output variables for the Action.
   * @param {VariableData[]} [params.settings] - Environment variables for the Action.
   * @param {ActionState} [params.state] - Computed state of the Action.
   * @param {SystemLock} [params.sysLock] - System lock status.
   * @param {string} [params.xGithubToken] - The github token associated with the GIT. Required for cloning of repo.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Action>>}
   */
  public createAction(params?: SchematicsV1.CreateActionParams): Promise<SchematicsV1.Response<SchematicsV1.Action>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
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
        'bastion': _params.bastion,
        'inventory': _params.inventory,
        'bastion_credential': _params.bastionCredential,
        'credentials': _params.credentials,
        'inputs': _params.inputs,
        'outputs': _params.outputs,
        'settings': _params.settings,
        'state': _params.state,
        'sys_lock': _params.sysLock
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createAction');

      const parameters = {
        options: {
          url: '/v2/actions',
          method: 'POST',
          body,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Github-token': _params.xGithubToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get all the Action definitions.
   *
   * Get all the Action definitions.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The number of items to skip before starting to collect the result set.
   * @param {number} [params.limit] - The numbers of items to return.
   * @param {string} [params.sort] - Name of the field to sort-by;  Use the '.' character to delineate sub-resources and
   * sub-fields (eg. owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending'
   * (default is ascending)   Ignore unrecognized or unsupported sort field.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ActionList>>}
   */
  public listActions(params?: SchematicsV1.ListActionsParams): Promise<SchematicsV1.Response<SchematicsV1.ActionList>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const query = {
        'offset': _params.offset,
        'limit': _params.limit,
        'sort': _params.sort,
        'profile': _params.profile
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listActions');

      const parameters = {
        options: {
          url: '/v2/actions',
          method: 'GET',
          qs: query,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the Action definition.
   *
   * Get the Action definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.actionId - Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud
   * account.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Action>>}
   */
  public getAction(params: SchematicsV1.GetActionParams): Promise<SchematicsV1.Response<SchematicsV1.Action>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['actionId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        'profile': _params.profile
      };

      const path = {
        'action_id': _params.actionId
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
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Delete the Action.
   *
   * Delete the Action definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.actionId - Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud
   * account.
   * @param {boolean} [params.force] - Equivalent to -force options in the command line.
   * @param {boolean} [params.propagate] - Auto propagate the chaange or deletion to the dependent resources.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Empty>>}
   */
  public deleteAction(params: SchematicsV1.DeleteActionParams): Promise<SchematicsV1.Response<SchematicsV1.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['actionId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'action_id': _params.actionId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteAction');

      const parameters = {
        options: {
          url: '/v2/actions/{action_id}',
          method: 'DELETE',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'force': _params.force,
            'propagate': _params.propagate
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Update the Action definition.
   *
   * Update the Action definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.actionId - Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud
   * account.
   * @param {string} [params.name] - Action name (unique for an account).
   * @param {string} [params.description] - Action description.
   * @param {string} [params.location] - List of workspace locations supported by IBM Cloud Schematics service.  Note,
   * this does not limit the location of the resources provisioned using Schematics.
   * @param {string} [params.resourceGroup] - Resource-group name for the Action.  By default, Action will be created in
   * Default Resource Group.
   * @param {string[]} [params.tags] - Action tags.
   * @param {UserState} [params.userState] - User defined status of the Schematics object.
   * @param {string} [params.sourceReadmeUrl] - URL of the README file, for the source.
   * @param {ExternalSource} [params.source] - Source of templates, playbooks, or controls.
   * @param {string} [params.sourceType] - Type of source for the Template.
   * @param {string} [params.commandParameter] - Schematics job command parameter (playbook-name).
   * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
   * @param {string} [params.inventory] - Inventory ID.
   * @param {VariableData} [params.bastionCredential] - User editable variable data & system generated reference to
   * value.
   * @param {VariableData[]} [params.credentials] - credentials of the Action.
   * @param {VariableData[]} [params.inputs] - Input variables for the Action.
   * @param {VariableData[]} [params.outputs] - Output variables for the Action.
   * @param {VariableData[]} [params.settings] - Environment variables for the Action.
   * @param {ActionState} [params.state] - Computed state of the Action.
   * @param {SystemLock} [params.sysLock] - System lock status.
   * @param {string} [params.xGithubToken] - The github token associated with the GIT. Required for cloning of repo.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Action>>}
   */
  public updateAction(params: SchematicsV1.UpdateActionParams): Promise<SchematicsV1.Response<SchematicsV1.Action>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['actionId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
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
        'bastion': _params.bastion,
        'inventory': _params.inventory,
        'bastion_credential': _params.bastionCredential,
        'credentials': _params.credentials,
        'inputs': _params.inputs,
        'outputs': _params.outputs,
        'settings': _params.settings,
        'state': _params.state,
        'sys_lock': _params.sysLock
      };

      const path = {
        'action_id': _params.actionId
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
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Github-token': _params.xGithubToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Upload template tar file for the action.
   *
   * Upload template tar file for the action.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.actionId - Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud
   * account.
   * @param {NodeJS.ReadableStream|Buffer} [params.file] - Template tar file.
   * @param {string} [params.fileContentType] - The content type of file.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.TemplateRepoTarUploadResponse>>}
   */
  public uploadTemplateTarAction(params: SchematicsV1.UploadTemplateTarActionParams): Promise<SchematicsV1.Response<SchematicsV1.TemplateRepoTarUploadResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['actionId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const formData = {
        'file': {
          data: _params.file,
          contentType: _params.fileContentType
        }
      };

      const path = {
        'action_id': _params.actionId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'uploadTemplateTarAction');

      const parameters = {
        options: {
          url: '/v2/actions/{action_id}/template_repo_upload',
          method: 'PUT',
          path,
          formData
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * jobs
   ************************/

  /**
   * Create a Job record and launch the Job.
   *
   * Creare a Job record and launch the Job.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.refreshToken - The IAM refresh token associated with the IBM Cloud account.
   * @param {string} [params.commandObject] - Name of the Schematics automation resource.
   * @param {string} [params.commandObjectId] - Job command object id (workspace-id, action-id).
   * @param {string} [params.commandName] - Schematics job command name.
   * @param {string} [params.commandParameter] - Schematics job command parameter (playbook-name, capsule-name or
   * flow-name).
   * @param {string[]} [params.commandOptions] - Command line options for the command.
   * @param {VariableData[]} [params.inputs] - Job inputs used by Action.
   * @param {VariableData[]} [params.settings] - Environment variables used by the Job while performing Action.
   * @param {string[]} [params.tags] - User defined tags, while running the job.
   * @param {string} [params.location] - List of workspace locations supported by IBM Cloud Schematics service.  Note,
   * this does not limit the location of the resources provisioned using Schematics.
   * @param {JobStatus} [params.status] - Job Status.
   * @param {JobData} [params.data] - Job data.
   * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
   * @param {JobLogSummary} [params.logSummary] - Job log summary record.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Job>>}
   */
  public createJob(params: SchematicsV1.CreateJobParams): Promise<SchematicsV1.Response<SchematicsV1.Job>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['refreshToken'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
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
        'log_summary': _params.logSummary
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createJob');

      const parameters = {
        options: {
          url: '/v2/jobs',
          method: 'POST',
          body,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get all the Job records.
   *
   * Get all the Job records.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The number of items to skip before starting to collect the result set.
   * @param {number} [params.limit] - The numbers of items to return.
   * @param {string} [params.sort] - Name of the field to sort-by;  Use the '.' character to delineate sub-resources and
   * sub-fields (eg. owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending'
   * (default is ascending)   Ignore unrecognized or unsupported sort field.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {string} [params.resource] - Name of the resource (workspace, actions or controls).
   * @param {string} [params.actionId] - Action Id.
   * @param {string} [params.list] - list jobs.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.JobList>>}
   */
  public listJobs(params?: SchematicsV1.ListJobsParams): Promise<SchematicsV1.Response<SchematicsV1.JobList>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const query = {
        'offset': _params.offset,
        'limit': _params.limit,
        'sort': _params.sort,
        'profile': _params.profile,
        'resource': _params.resource,
        'action_id': _params.actionId,
        'list': _params.list
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listJobs');

      const parameters = {
        options: {
          url: '/v2/jobs',
          method: 'GET',
          qs: query,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Clone the Job-record, and relaunch the Job.
   *
   * Clone the Job-record, and relaunch the Job.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - Job Id. Use GET /jobs API to look up the Job Ids in your IBM Cloud account.
   * @param {string} params.refreshToken - The IAM refresh token associated with the IBM Cloud account.
   * @param {string} [params.commandObject] - Name of the Schematics automation resource.
   * @param {string} [params.commandObjectId] - Job command object id (workspace-id, action-id).
   * @param {string} [params.commandName] - Schematics job command name.
   * @param {string} [params.commandParameter] - Schematics job command parameter (playbook-name, capsule-name or
   * flow-name).
   * @param {string[]} [params.commandOptions] - Command line options for the command.
   * @param {VariableData[]} [params.inputs] - Job inputs used by Action.
   * @param {VariableData[]} [params.settings] - Environment variables used by the Job while performing Action.
   * @param {string[]} [params.tags] - User defined tags, while running the job.
   * @param {string} [params.location] - List of workspace locations supported by IBM Cloud Schematics service.  Note,
   * this does not limit the location of the resources provisioned using Schematics.
   * @param {JobStatus} [params.status] - Job Status.
   * @param {JobData} [params.data] - Job data.
   * @param {BastionResourceDefinition} [params.bastion] - Describes a bastion resource.
   * @param {JobLogSummary} [params.logSummary] - Job log summary record.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Job>>}
   */
  public replaceJob(params: SchematicsV1.ReplaceJobParams): Promise<SchematicsV1.Response<SchematicsV1.Job>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['jobId', 'refreshToken'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
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
        'log_summary': _params.logSummary
      };

      const path = {
        'job_id': _params.jobId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'replaceJob');

      const parameters = {
        options: {
          url: '/v2/jobs/{job_id}',
          method: 'PUT',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'refresh_token': _params.refreshToken
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Stop the running Job, and delete the Job-record.
   *
   * Stop the running Job, and delete the Job-record.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - Job Id. Use GET /jobs API to look up the Job Ids in your IBM Cloud account.
   * @param {string} params.refreshToken - The IAM refresh token associated with the IBM Cloud account.
   * @param {boolean} [params.force] - Equivalent to -force options in the command line.
   * @param {boolean} [params.propagate] - Auto propagate the chaange or deletion to the dependent resources.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Empty>>}
   */
  public deleteJob(params: SchematicsV1.DeleteJobParams): Promise<SchematicsV1.Response<SchematicsV1.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['jobId', 'refreshToken'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'job_id': _params.jobId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteJob');

      const parameters = {
        options: {
          url: '/v2/jobs/{job_id}',
          method: 'DELETE',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'refresh_token': _params.refreshToken,
            'force': _params.force,
            'propagate': _params.propagate
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the Job record.
   *
   * Get the Job record.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - Job Id. Use GET /jobs API to look up the Job Ids in your IBM Cloud account.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Job>>}
   */
  public getJob(params: SchematicsV1.GetJobParams): Promise<SchematicsV1.Response<SchematicsV1.Job>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['jobId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        'profile': _params.profile
      };

      const path = {
        'job_id': _params.jobId
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
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get log-file from the Job record.
   *
   * Get log-file from the Job record.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.jobId - Job Id. Use GET /jobs API to look up the Job Ids in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.JobLog>>}
   */
  public listJobLogs(params: SchematicsV1.ListJobLogsParams): Promise<SchematicsV1.Response<SchematicsV1.JobLog>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['jobId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'job_id': _params.jobId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listJobLogs');

      const parameters = {
        options: {
          url: '/v2/jobs/{job_id}/logs',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * datasets
   ************************/

  /**
   * List all shared datasets.
   *
   * List all shared datasets.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.SharedDatasetResponseList>>}
   */
  public listSharedDatasets(params?: SchematicsV1.ListSharedDatasetsParams): Promise<SchematicsV1.Response<SchematicsV1.SharedDatasetResponseList>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listSharedDatasets');

      const parameters = {
        options: {
          url: '/v2/shared_datasets',
          method: 'GET',
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Create a shared dataset definition.
   *
   * Create a shared dataset definition.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {boolean} [params.autoPropagateChange] - Automatically propagate changes to consumers.
   * @param {string} [params.description] - Dataset description.
   * @param {string[]} [params.effectedWorkspaceIds] - Affected workspaces.
   * @param {string} [params.resourceGroup] - Resource group name.
   * @param {SharedDatasetData[]} [params.sharedDatasetData] - Shared dataset data.
   * @param {string} [params.sharedDatasetName] - Shared dataset name.
   * @param {string} [params.sharedDatasetSourceName] - Shared dataset source name.
   * @param {string[]} [params.sharedDatasetType] - Shared dataset type.
   * @param {string[]} [params.tags] - Shared dataset tags.
   * @param {string} [params.version] - Shared dataset version.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.SharedDatasetResponse>>}
   */
  public createSharedDataset(params?: SchematicsV1.CreateSharedDatasetParams): Promise<SchematicsV1.Response<SchematicsV1.SharedDatasetResponse>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const body = {
        'auto_propagate_change': _params.autoPropagateChange,
        'description': _params.description,
        'effected_workspace_ids': _params.effectedWorkspaceIds,
        'resource_group': _params.resourceGroup,
        'shared_dataset_data': _params.sharedDatasetData,
        'shared_dataset_name': _params.sharedDatasetName,
        'shared_dataset_source_name': _params.sharedDatasetSourceName,
        'shared_dataset_type': _params.sharedDatasetType,
        'tags': _params.tags,
        'version': _params.version
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createSharedDataset');

      const parameters = {
        options: {
          url: '/v2/shared_datasets',
          method: 'POST',
          body,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the shared dataset.
   *
   * Get the shared dataset.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.sdId - The shared dataset ID Use the GET /shared_datasets to look up the shared dataset IDs
   * in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.SharedDatasetResponse>>}
   */
  public getSharedDataset(params: SchematicsV1.GetSharedDatasetParams): Promise<SchematicsV1.Response<SchematicsV1.SharedDatasetResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['sdId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'sd_id': _params.sdId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getSharedDataset');

      const parameters = {
        options: {
          url: '/v2/shared_datasets/{sd_id}',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Replace the shared dataset.
   *
   * Replace the shared dataset.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.sdId - The shared dataset ID Use the GET /shared_datasets to look up the shared dataset IDs
   * in your IBM Cloud account.
   * @param {boolean} [params.autoPropagateChange] - Automatically propagate changes to consumers.
   * @param {string} [params.description] - Dataset description.
   * @param {string[]} [params.effectedWorkspaceIds] - Affected workspaces.
   * @param {string} [params.resourceGroup] - Resource group name.
   * @param {SharedDatasetData[]} [params.sharedDatasetData] - Shared dataset data.
   * @param {string} [params.sharedDatasetName] - Shared dataset name.
   * @param {string} [params.sharedDatasetSourceName] - Shared dataset source name.
   * @param {string[]} [params.sharedDatasetType] - Shared dataset type.
   * @param {string[]} [params.tags] - Shared dataset tags.
   * @param {string} [params.version] - Shared dataset version.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.SharedDatasetResponse>>}
   */
  public replaceSharedDataset(params: SchematicsV1.ReplaceSharedDatasetParams): Promise<SchematicsV1.Response<SchematicsV1.SharedDatasetResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['sdId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'auto_propagate_change': _params.autoPropagateChange,
        'description': _params.description,
        'effected_workspace_ids': _params.effectedWorkspaceIds,
        'resource_group': _params.resourceGroup,
        'shared_dataset_data': _params.sharedDatasetData,
        'shared_dataset_name': _params.sharedDatasetName,
        'shared_dataset_source_name': _params.sharedDatasetSourceName,
        'shared_dataset_type': _params.sharedDatasetType,
        'tags': _params.tags,
        'version': _params.version
      };

      const path = {
        'sd_id': _params.sdId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'replaceSharedDataset');

      const parameters = {
        options: {
          url: '/v2/shared_datasets/{sd_id}',
          method: 'PUT',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Delete the shared dataset.
   *
   * Replace the shared dataset.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.sdId - The shared dataset ID Use the GET /shared_datasets to look up the shared dataset IDs
   * in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.SharedDatasetResponse>>}
   */
  public deleteSharedDataset(params: SchematicsV1.DeleteSharedDatasetParams): Promise<SchematicsV1.Response<SchematicsV1.SharedDatasetResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['sdId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'sd_id': _params.sdId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteSharedDataset');

      const parameters = {
        options: {
          url: '/v2/shared_datasets/{sd_id}',
          method: 'DELETE',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * settingsKms
   ************************/

  /**
   * Get the KMS settings for customer account.
   *
   * Get the KMS settings for customer account.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.location - The location of the Resource.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.KMSSettings>>}
   */
  public getKmsSettings(params: SchematicsV1.GetKmsSettingsParams): Promise<SchematicsV1.Response<SchematicsV1.KMSSettings>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['location'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        'location': _params.location
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getKmsSettings');

      const parameters = {
        options: {
          url: '/v2/settings/kms',
          method: 'GET',
          qs: query,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Set the KMS settings for customer account.
   *
   * Set the KMS settings for customer account.
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
  public replaceKmsSettings(params?: SchematicsV1.ReplaceKmsSettingsParams): Promise<SchematicsV1.Response<SchematicsV1.KMSSettings>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const body = {
        'location': _params.location,
        'encryption_scheme': _params.encryptionScheme,
        'resource_group': _params.resourceGroup,
        'primary_crk': _params.primaryCrk,
        'secondary_crk': _params.secondaryCrk
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'replaceKmsSettings');

      const parameters = {
        options: {
          url: '/v2/settings/kms',
          method: 'PUT',
          body,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Discover the KMS instances in the account.
   *
   * Discover the KMS instances in the account.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.encryptionScheme - The encryption scheme to be used.
   * @param {string} params.location - The location of the Resource.
   * @param {string} [params.resourceGroup] - The resource group (by default, fetch from all resource groups).
   * @param {number} [params.limit] - The numbers of items to return.
   * @param {string} [params.sort] - Name of the field to sort-by;  Use the '.' character to delineate sub-resources and
   * sub-fields (eg. owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending'
   * (default is ascending)   Ignore unrecognized or unsupported sort field.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.KMSDiscovery>>}
   */
  public getDiscoveredKmsInstances(params: SchematicsV1.GetDiscoveredKmsInstancesParams): Promise<SchematicsV1.Response<SchematicsV1.KMSDiscovery>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['encryptionScheme', 'location'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const query = {
        'encryption_scheme': _params.encryptionScheme,
        'location': _params.location,
        'resource_group': _params.resourceGroup,
        'limit': _params.limit,
        'sort': _params.sort
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getDiscoveredKmsInstances');

      const parameters = {
        options: {
          url: '/v2/settings/kms_instances',
          method: 'GET',
          qs: query,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * settingsInventory
   ************************/

  /**
   * Create a resource inventory definition, used to target Actions or Controls.
   *
   * Create a resource inventory definition.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.name] - Inventory name.
   * @param {string} [params.description] - Inventory description.
   * @param {string} [params.location] - List of workspace locations supported by IBM Cloud Schematics service.  Note,
   * this does not limit the location of the resources provisioned using Schematics.
   * @param {string} [params.resourceGroup] - Resource-group name for the Inventory definition.  By default, Action will
   * be created in Default Resource Group.
   * @param {string} [params.inventoriesIni] - Input inventory of host and host group for the playbook,  in the .ini
   * file format.
   * @param {string[]} [params.resourceQueries] - Input resource queries that is used to dynamically generate  the
   * inventory of host and host group for the playbook.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>>}
   */
  public createInventory(params?: SchematicsV1.CreateInventoryParams): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const body = {
        'name': _params.name,
        'description': _params.description,
        'location': _params.location,
        'resource_group': _params.resourceGroup,
        'inventories_ini': _params.inventoriesIni,
        'resource_queries': _params.resourceQueries
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createInventory');

      const parameters = {
        options: {
          url: '/v2/inventories',
          method: 'POST',
          body,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get all resource inventory definitions.
   *
   * Get all resource inventory definition.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The number of items to skip before starting to collect the result set.
   * @param {number} [params.limit] - The numbers of items to return.
   * @param {string} [params.sort] - Name of the field to sort-by;  Use the '.' character to delineate sub-resources and
   * sub-fields (eg. owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending'
   * (default is ascending)   Ignore unrecognized or unsupported sort field.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecordList>>}
   */
  public listInventories(params?: SchematicsV1.ListInventoriesParams): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecordList>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const query = {
        'offset': _params.offset,
        'limit': _params.limit,
        'sort': _params.sort,
        'profile': _params.profile
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listInventories');

      const parameters = {
        options: {
          url: '/v2/inventories',
          method: 'GET',
          qs: query,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Replace the resource inventory definition, used to target Actions or Controls.
   *
   * Replace the resource inventory definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.inventoryId - Resource Inventory Id.  Use GET /inventories API to look up the Resource
   * Inventory definition Ids  in your IBM Cloud account.
   * @param {string} [params.name] - Inventory name.
   * @param {string} [params.description] - Inventory description.
   * @param {string} [params.location] - List of workspace locations supported by IBM Cloud Schematics service.  Note,
   * this does not limit the location of the resources provisioned using Schematics.
   * @param {string} [params.resourceGroup] - Resource-group name for the Inventory definition.  By default, Action will
   * be created in Default Resource Group.
   * @param {string} [params.inventoriesIni] - Input inventory of host and host group for the playbook,  in the .ini
   * file format.
   * @param {string[]} [params.resourceQueries] - Input resource queries that is used to dynamically generate  the
   * inventory of host and host group for the playbook.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>>}
   */
  public replaceInventory(params: SchematicsV1.ReplaceInventoryParams): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['inventoryId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'name': _params.name,
        'description': _params.description,
        'location': _params.location,
        'resource_group': _params.resourceGroup,
        'inventories_ini': _params.inventoriesIni,
        'resource_queries': _params.resourceQueries
      };

      const path = {
        'inventory_id': _params.inventoryId
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
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Update the resource inventory definition, used to target Actions or Controls.
   *
   * Update the resource inventory definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.inventoryId - Resource Inventory Id.  Use GET /inventories API to look up the Resource
   * Inventory definition Ids  in your IBM Cloud account.
   * @param {string} [params.name] - Inventory name.
   * @param {string} [params.description] - Inventory description.
   * @param {string} [params.location] - List of workspace locations supported by IBM Cloud Schematics service.  Note,
   * this does not limit the location of the resources provisioned using Schematics.
   * @param {string} [params.resourceGroup] - Resource-group name for the Inventory definition.  By default, Action will
   * be created in Default Resource Group.
   * @param {string} [params.inventoriesIni] - Input inventory of host and host group for the playbook,  in the .ini
   * file format.
   * @param {string[]} [params.resourceQueries] - Input resource queries that is used to dynamically generate  the
   * inventory of host and host group for the playbook.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>>}
   */
  public updateInventory(params: SchematicsV1.UpdateInventoryParams): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['inventoryId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'name': _params.name,
        'description': _params.description,
        'location': _params.location,
        'resource_group': _params.resourceGroup,
        'inventories_ini': _params.inventoriesIni,
        'resource_queries': _params.resourceQueries
      };

      const path = {
        'inventory_id': _params.inventoryId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'updateInventory');

      const parameters = {
        options: {
          url: '/v2/inventories/{inventory_id}',
          method: 'PATCH',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Delete the resource inventory definition.
   *
   * Delete the resource inventory definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.inventoryId - Resource Inventory Id.  Use GET /inventories API to look up the Resource
   * Inventory definition Ids  in your IBM Cloud account.
   * @param {boolean} [params.force] - Equivalent to -force options in the command line.
   * @param {boolean} [params.propagate] - Auto propagate the chaange or deletion to the dependent resources.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Empty>>}
   */
  public deleteInventory(params: SchematicsV1.DeleteInventoryParams): Promise<SchematicsV1.Response<SchematicsV1.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['inventoryId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'inventory_id': _params.inventoryId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteInventory');

      const parameters = {
        options: {
          url: '/v2/inventories/{inventory_id}',
          method: 'DELETE',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'force': _params.force,
            'propagate': _params.propagate
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the resource inventory definition, used to target Actions or Controls.
   *
   * Get the resource inventory definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.inventoryId - Resource Inventory Id.  Use GET /inventories API to look up the Resource
   * Inventory definition Ids  in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>>}
   */
  public getInventory(params: SchematicsV1.GetInventoryParams): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['inventoryId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'inventory_id': _params.inventoryId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getInventory');

      const parameters = {
        options: {
          url: '/v2/inventories/{inventory_id}',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get all the resource inventory values.
   *
   * Get all the resource inventory values.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.inventoryId - Resource Inventory Id.  Use GET /inventories API to look up the Resource
   * Inventory definition Ids  in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecordList>>}
   */
  public listInventoryValues(params: SchematicsV1.ListInventoryValuesParams): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecordList>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['inventoryId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'inventory_id': _params.inventoryId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listInventoryValues');

      const parameters = {
        options: {
          url: '/v2/inventories/{inventory_id}/variables',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the resource inventory value.
   *
   * Get the resource inventory value.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.inventoryId - Resource Inventory Id.  Use GET /inventories API to look up the Resource
   * Inventory definition Ids  in your IBM Cloud account.
   * @param {string} params.varName - Name of the variable.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>>}
   */
  public getInventoryValue(params: SchematicsV1.GetInventoryValueParams): Promise<SchematicsV1.Response<SchematicsV1.InventoryResourceRecord>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['inventoryId', 'varName'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'inventory_id': _params.inventoryId,
        'var_name': _params.varName
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getInventoryValue');

      const parameters = {
        options: {
          url: '/v2/inventories/{inventory_id}/variables/{var_name}',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /*************************
   * settingsResources
   ************************/

  /**
   * Create a resource query definition.
   *
   * Create a resource query definition.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.type] - Resource type (cluster, vsi, icd, vpc).
   * @param {string} [params.name] - Resource query name.
   * @param {ResourceQuery[]} [params.queries] -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>>}
   */
  public createResourceQuery(params?: SchematicsV1.CreateResourceQueryParams): Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const body = {
        'type': _params.type,
        'name': _params.name,
        'queries': _params.queries
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'createResourceQuery');

      const parameters = {
        options: {
          url: '/v2/resources_query',
          method: 'POST',
          body,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get all resource query definitions.
   *
   * Get all resource query definition.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {number} [params.offset] - The number of items to skip before starting to collect the result set.
   * @param {number} [params.limit] - The numbers of items to return.
   * @param {string} [params.sort] - Name of the field to sort-by;  Use the '.' character to delineate sub-resources and
   * sub-fields (eg. owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending'
   * (default is ascending)   Ignore unrecognized or unsupported sort field.
   * @param {string} [params.profile] - Level of details returned by the get method.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecordList>>}
   */
  public listResourceQuery(params?: SchematicsV1.ListResourceQueryParams): Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecordList>> {
    const _params = Object.assign({}, params);

    return new Promise((resolve, reject) => {
      const query = {
        'offset': _params.offset,
        'limit': _params.limit,
        'sort': _params.sort,
        'profile': _params.profile
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'listResourceQuery');

      const parameters = {
        options: {
          url: '/v2/resources_query',
          method: 'GET',
          qs: query,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Run the resource query.
   *
   * Execute a resource query definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.queryId - Resource query Id.  Use GET /resource_query API to look up the Resource query
   * definition Ids  in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryResponseRecord>>}
   */
  public executeResourceQuery(params: SchematicsV1.ExecuteResourceQueryParams): Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryResponseRecord>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['queryId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'query_id': _params.queryId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'executeResourceQuery');

      const parameters = {
        options: {
          url: '/v2/resources_query/{query_id}',
          method: 'POST',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Replace the resources query definition.
   *
   * Replace the resources query definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.queryId - Resource query Id.  Use GET /resource_query API to look up the Resource query
   * definition Ids  in your IBM Cloud account.
   * @param {string} [params.type] - Resource type (cluster, vsi, icd, vpc).
   * @param {string} [params.name] - Resource query name.
   * @param {ResourceQuery[]} [params.queries] -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>>}
   */
  public replaceResourcesQuery(params: SchematicsV1.ReplaceResourcesQueryParams): Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['queryId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const body = {
        'type': _params.type,
        'name': _params.name,
        'queries': _params.queries
      };

      const path = {
        'query_id': _params.queryId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'replaceResourcesQuery');

      const parameters = {
        options: {
          url: '/v2/resources_query/{query_id}',
          method: 'PUT',
          body,
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Delete the resources query definition.
   *
   * Delete the resources query definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.queryId - Resource query Id.  Use GET /resource_query API to look up the Resource query
   * definition Ids  in your IBM Cloud account.
   * @param {boolean} [params.force] - Equivalent to -force options in the command line.
   * @param {boolean} [params.propagate] - Auto propagate the chaange or deletion to the dependent resources.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.Empty>>}
   */
  public deleteResourcesQuery(params: SchematicsV1.DeleteResourcesQueryParams): Promise<SchematicsV1.Response<SchematicsV1.Empty>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['queryId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'query_id': _params.queryId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'deleteResourcesQuery');

      const parameters = {
        options: {
          url: '/v2/resources_query/{query_id}',
          method: 'DELETE',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'force': _params.force,
            'propagate': _params.propagate
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

  /**
   * Get the resources query definition.
   *
   * Get the resources query definition.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.queryId - Resource query Id.  Use GET /resource_query API to look up the Resource query
   * definition Ids  in your IBM Cloud account.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>>}
   */
  public getResourcesQuery(params: SchematicsV1.GetResourcesQueryParams): Promise<SchematicsV1.Response<SchematicsV1.ResourceQueryRecord>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['queryId'];

    return new Promise((resolve, reject) => {
      const missingParams = getMissingParams(_params, requiredParams);
      if (missingParams) {
        return reject(missingParams);
      }

      const path = {
        'query_id': _params.queryId
      };

      const sdkHeaders = getSdkHeaders(SchematicsV1.DEFAULT_SERVICE_NAME, 'v1', 'getResourcesQuery');

      const parameters = {
        options: {
          url: '/v2/resources_query/{query_id}',
          method: 'GET',
          path,
        },
        defaultOptions: extend(true, {}, this.baseOptions, {
          headers: extend(true, sdkHeaders, {
            'Accept': 'application/json',
          }, _params.headers),
        }),
      };

      return resolve(this.createRequest(parameters));
    });
  };

}

/*************************
 * interfaces
 ************************/

namespace SchematicsV1 {

  /** An operation response. */
  export interface Response<T = any>  {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface Empty { }

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

  /** Parameters for the `listResourceGroup` operation. */
  export interface ListResourceGroupParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getSchematicsVersion` operation. */
  export interface GetSchematicsVersionParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listWorkspaces` operation. */
  export interface ListWorkspacesParams {
    /** The number of items to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of items to return. */
    limit?: number;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createWorkspace` operation. */
  export interface CreateWorkspaceParams {
    /** List of applied shared dataset id. */
    appliedShareddataIds?: string[];
    /** CatalogRef -. */
    catalogRef?: CatalogRef;
    /** Workspace description. */
    description?: string;
    /** Workspace location. */
    location?: string;
    /** Workspace name. */
    name?: string;
    /** Workspace resource group. */
    resourceGroup?: string;
    /** SharedTargetData -. */
    sharedData?: SharedTargetData;
    /** Workspace tags. */
    tags?: string[];
    /** TemplateData -. */
    templateData?: TemplateSourceDataRequest[];
    /** Workspace template ref. */
    templateRef?: string;
    /** TemplateRepoRequest -. */
    templateRepo?: TemplateRepoRequest;
    /** List of Workspace type. */
    type?: string[];
    /** WorkspaceStatusRequest -. */
    workspaceStatus?: WorkspaceStatusRequest;
    /** The github token associated with the GIT. Required for cloning of repo. */
    xGithubToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspace` operation. */
  export interface GetWorkspaceParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceWorkspace` operation. */
  export interface ReplaceWorkspaceParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** CatalogRef -. */
    catalogRef?: CatalogRef;
    /** Workspace description. */
    description?: string;
    /** Workspace name. */
    name?: string;
    /** SharedTargetData -. */
    sharedData?: SharedTargetData;
    /** Tags -. */
    tags?: string[];
    /** TemplateData -. */
    templateData?: TemplateSourceDataRequest[];
    /** TemplateRepoUpdateRequest -. */
    templateRepo?: TemplateRepoUpdateRequest;
    /** List of Workspace type. */
    type?: string[];
    /** WorkspaceStatusUpdateRequest -. */
    workspaceStatus?: WorkspaceStatusUpdateRequest;
    /** WorkspaceStatusMessage -. */
    workspaceStatusMsg?: WorkspaceStatusMessage;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteWorkspace` operation. */
  export interface DeleteWorkspaceParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The IAM refresh token associated with the IBM Cloud account. */
    refreshToken: string;
    /** true or 1 - to destroy resources before deleting workspace;  If this is true, refresh_token is mandatory. */
    destroyResources?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateWorkspace` operation. */
  export interface UpdateWorkspaceParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** CatalogRef -. */
    catalogRef?: CatalogRef;
    /** Workspace description. */
    description?: string;
    /** Workspace name. */
    name?: string;
    /** SharedTargetData -. */
    sharedData?: SharedTargetData;
    /** Tags -. */
    tags?: string[];
    /** TemplateData -. */
    templateData?: TemplateSourceDataRequest[];
    /** TemplateRepoUpdateRequest -. */
    templateRepo?: TemplateRepoUpdateRequest;
    /** List of Workspace type. */
    type?: string[];
    /** WorkspaceStatusUpdateRequest -. */
    workspaceStatus?: WorkspaceStatusUpdateRequest;
    /** WorkspaceStatusMessage -. */
    workspaceStatusMsg?: WorkspaceStatusMessage;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `uploadTemplateTar` operation. */
  export interface UploadTemplateTarParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The Template ID for which you want to get the values.  Use the GET /workspaces to look up the workspace IDs
     *  or template IDs in your IBM Cloud account.
     */
    tId: string;
    /** Template tar file. */
    file?: NodeJS.ReadableStream|Buffer;
    /** The content type of file. */
    fileContentType?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceReadme` operation. */
  export interface GetWorkspaceReadmeParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The name of the commit/branch/tag.  Default, the repository’s default branch (usually master). */
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

  /** Parameters for the `listWorkspaceActivities` operation. */
  export interface ListWorkspaceActivitiesParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The number of items to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of items to return. */
    limit?: number;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceActivity` operation. */
  export interface GetWorkspaceActivityParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The activity ID that you want to see additional details. */
    activityId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteWorkspaceActivity` operation. */
  export interface DeleteWorkspaceActivityParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The activity ID that you want to see additional details. */
    activityId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `runWorkspaceCommands` operation. */
  export interface RunWorkspaceCommandsParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The IAM refresh token associated with the IBM Cloud account. */
    refreshToken: string;
    /** List of commands. */
    commands?: TerraformCommand[];
    /** Command name. */
    operationName?: string;
    /** Command description. */
    description?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `applyWorkspaceCommand` operation. */
  export interface ApplyWorkspaceCommandParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The IAM refresh token associated with the IBM Cloud account. */
    refreshToken: string;
    /** Workspace Activity Options Template. */
    actionOptions?: WorkspaceActivityOptionsTemplate;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `destroyWorkspaceCommand` operation. */
  export interface DestroyWorkspaceCommandParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The IAM refresh token associated with the IBM Cloud account. */
    refreshToken: string;
    /** Workspace Activity Options Template. */
    actionOptions?: WorkspaceActivityOptionsTemplate;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `planWorkspaceCommand` operation. */
  export interface PlanWorkspaceCommandParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The IAM refresh token associated with the IBM Cloud account. */
    refreshToken: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `refreshWorkspaceCommand` operation. */
  export interface RefreshWorkspaceCommandParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The IAM refresh token associated with the IBM Cloud account. */
    refreshToken: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceInputs` operation. */
  export interface GetWorkspaceInputsParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The Template ID for which you want to get the values.  Use the GET /workspaces to look up the workspace IDs
     *  or template IDs in your IBM Cloud account.
     */
    tId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceWorkspaceInputs` operation. */
  export interface ReplaceWorkspaceInputsParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The Template ID for which you want to get the values.  Use the GET /workspaces to look up the workspace IDs
     *  or template IDs in your IBM Cloud account.
     */
    tId: string;
    /** EnvVariableRequest .. */
    envValues?: JsonObject[];
    /** User values. */
    values?: string;
    /** VariablesRequest -. */
    variablestore?: WorkspaceVariableRequest[];
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getAllWorkspaceInputs` operation. */
  export interface GetAllWorkspaceInputsParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceInputMetadata` operation. */
  export interface GetWorkspaceInputMetadataParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The Template ID for which you want to get the values.  Use the GET /workspaces to look up the workspace IDs
     *  or template IDs in your IBM Cloud account.
     */
    tId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceOutputs` operation. */
  export interface GetWorkspaceOutputsParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceResources` operation. */
  export interface GetWorkspaceResourcesParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceState` operation. */
  export interface GetWorkspaceStateParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceTemplateState` operation. */
  export interface GetWorkspaceTemplateStateParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The Template ID for which you want to get the values.  Use the GET /workspaces to look up the workspace IDs
     *  or template IDs in your IBM Cloud account.
     */
    tId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceActivityLogs` operation. */
  export interface GetWorkspaceActivityLogsParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The activity ID that you want to see additional details. */
    activityId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceLogUrls` operation. */
  export interface GetWorkspaceLogUrlsParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getTemplateLogs` operation. */
  export interface GetTemplateLogsParams {
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The Template ID for which you want to get the values.  Use the GET /workspaces to look up the workspace IDs
     *  or template IDs in your IBM Cloud account.
     */
    tId: string;
    /** `false` will hide the terraform command header in the logs. */
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
    /** The workspace ID for the workspace that you want to query.  You can run the GET /workspaces call if you need
     *  to look up the  workspace IDs in your IBM Cloud account.
     */
    wId: string;
    /** The Template ID for which you want to get the values.  Use the GET /workspaces to look up the workspace IDs
     *  or template IDs in your IBM Cloud account.
     */
    tId: string;
    /** The activity ID that you want to see additional details. */
    activityId: string;
    /** `false` will hide the terraform command header in the logs. */
    logTfCmd?: boolean;
    /** `false` will hide all the terraform command prefix in the log statements. */
    logTfPrefix?: boolean;
    /** `false` will hide all the null resource prefix in the log statements. */
    logTfNullResource?: boolean;
    /** `true` will format all logs to withhold the original format  of ansible output in the log statements. */
    logTfAnsible?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createWorkspaceDeletionJob` operation. */
  export interface CreateWorkspaceDeletionJobParams {
    /** The IAM refresh token associated with the IBM Cloud account. */
    refreshToken: string;
    /** True to delete workspace. */
    newDeleteWorkspaces?: boolean;
    /** True to destroy the resources managed by this workspace. */
    newDestroyResources?: boolean;
    /** Workspace deletion job name. */
    newJob?: string;
    /** Version. */
    newVersion?: string;
    /** List of workspaces to be deleted. */
    newWorkspaces?: string[];
    /** true or 1 - to destroy resources before deleting workspace;  If this is true, refresh_token is mandatory. */
    destroyResources?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getWorkspaceDeletionJobStatus` operation. */
  export interface GetWorkspaceDeletionJobStatusParams {
    /** The workspace job deletion ID. */
    wjId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createAction` operation. */
  export interface CreateActionParams {
    /** Action name (unique for an account). */
    name?: string;
    /** Action description. */
    description?: string;
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
     */
    location?: CreateActionConstants.Location | string;
    /** Resource-group name for the Action.  By default, Action will be created in Default Resource Group. */
    resourceGroup?: string;
    /** Action tags. */
    tags?: string[];
    /** User defined status of the Schematics object. */
    userState?: UserState;
    /** URL of the README file, for the source. */
    sourceReadmeUrl?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Type of source for the Template. */
    sourceType?: CreateActionConstants.SourceType | string;
    /** Schematics job command parameter (playbook-name). */
    commandParameter?: string;
    /** Describes a bastion resource. */
    bastion?: BastionResourceDefinition;
    /** Inventory ID. */
    inventory?: string;
    /** User editable variable data & system generated reference to value. */
    bastionCredential?: VariableData;
    /** credentials of the Action. */
    credentials?: VariableData[];
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
    /** The github token associated with the GIT. Required for cloning of repo. */
    xGithubToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createAction` operation. */
  export namespace CreateActionConstants {
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the location of the resources provisioned using Schematics. */
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
    }
  }

  /** Parameters for the `listActions` operation. */
  export interface ListActionsParams {
    /** The number of items to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of items to return. */
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
    /** Action name (unique for an account). */
    name?: string;
    /** Action description. */
    description?: string;
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
     */
    location?: UpdateActionConstants.Location | string;
    /** Resource-group name for the Action.  By default, Action will be created in Default Resource Group. */
    resourceGroup?: string;
    /** Action tags. */
    tags?: string[];
    /** User defined status of the Schematics object. */
    userState?: UserState;
    /** URL of the README file, for the source. */
    sourceReadmeUrl?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Type of source for the Template. */
    sourceType?: UpdateActionConstants.SourceType | string;
    /** Schematics job command parameter (playbook-name). */
    commandParameter?: string;
    /** Describes a bastion resource. */
    bastion?: BastionResourceDefinition;
    /** Inventory ID. */
    inventory?: string;
    /** User editable variable data & system generated reference to value. */
    bastionCredential?: VariableData;
    /** credentials of the Action. */
    credentials?: VariableData[];
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
    /** The github token associated with the GIT. Required for cloning of repo. */
    xGithubToken?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `updateAction` operation. */
  export namespace UpdateActionConstants {
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the location of the resources provisioned using Schematics. */
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
    }
  }

  /** Parameters for the `uploadTemplateTarAction` operation. */
  export interface UploadTemplateTarActionParams {
    /** Action Id.  Use GET /actions API to look up the Action Ids in your IBM Cloud account. */
    actionId: string;
    /** Template tar file. */
    file?: NodeJS.ReadableStream|Buffer;
    /** The content type of file. */
    fileContentType?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createJob` operation. */
  export interface CreateJobParams {
    /** The IAM refresh token associated with the IBM Cloud account. */
    refreshToken: string;
    /** Name of the Schematics automation resource. */
    commandObject?: CreateJobConstants.CommandObject | string;
    /** Job command object id (workspace-id, action-id). */
    commandObjectId?: string;
    /** Schematics job command name. */
    commandName?: CreateJobConstants.CommandName | string;
    /** Schematics job command parameter (playbook-name, capsule-name or flow-name). */
    commandParameter?: string;
    /** Command line options for the command. */
    commandOptions?: string[];
    /** Job inputs used by Action. */
    inputs?: VariableData[];
    /** Environment variables used by the Job while performing Action. */
    settings?: VariableData[];
    /** User defined tags, while running the job. */
    tags?: string[];
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
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
    }
    /** Schematics job command name. */
    export enum CommandName {
      ANSIBLE_PLAYBOOK_RUN = 'ansible_playbook_run',
      ANSIBLE_PLAYBOOK_CHECK = 'ansible_playbook_check',
      SYSTEM_KEY_ENABLE = 'system_key_enable',
      SYTEM_KEY_DELETE = 'sytem_key_delete',
      SYSTEM_KEY_DISABLE = 'system_key_disable',
      SYSTEM_KEY_ROTATE = 'system_key_rotate',
      SYSTEM_KEY_RESTORE = 'system_key_restore',
    }
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the location of the resources provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `listJobs` operation. */
  export interface ListJobsParams {
    /** The number of items to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of items to return. */
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

  /** Parameters for the `replaceJob` operation. */
  export interface ReplaceJobParams {
    /** Job Id. Use GET /jobs API to look up the Job Ids in your IBM Cloud account. */
    jobId: string;
    /** The IAM refresh token associated with the IBM Cloud account. */
    refreshToken: string;
    /** Name of the Schematics automation resource. */
    commandObject?: ReplaceJobConstants.CommandObject | string;
    /** Job command object id (workspace-id, action-id). */
    commandObjectId?: string;
    /** Schematics job command name. */
    commandName?: ReplaceJobConstants.CommandName | string;
    /** Schematics job command parameter (playbook-name, capsule-name or flow-name). */
    commandParameter?: string;
    /** Command line options for the command. */
    commandOptions?: string[];
    /** Job inputs used by Action. */
    inputs?: VariableData[];
    /** Environment variables used by the Job while performing Action. */
    settings?: VariableData[];
    /** User defined tags, while running the job. */
    tags?: string[];
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
     */
    location?: ReplaceJobConstants.Location | string;
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

  /** Constants for the `replaceJob` operation. */
  export namespace ReplaceJobConstants {
    /** Name of the Schematics automation resource. */
    export enum CommandObject {
      WORKSPACE = 'workspace',
      ACTION = 'action',
      SYSTEM = 'system',
    }
    /** Schematics job command name. */
    export enum CommandName {
      ANSIBLE_PLAYBOOK_RUN = 'ansible_playbook_run',
      ANSIBLE_PLAYBOOK_CHECK = 'ansible_playbook_check',
      SYSTEM_KEY_ENABLE = 'system_key_enable',
      SYTEM_KEY_DELETE = 'sytem_key_delete',
      SYSTEM_KEY_DISABLE = 'system_key_disable',
      SYSTEM_KEY_ROTATE = 'system_key_rotate',
      SYSTEM_KEY_RESTORE = 'system_key_restore',
    }
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the location of the resources provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `deleteJob` operation. */
  export interface DeleteJobParams {
    /** Job Id. Use GET /jobs API to look up the Job Ids in your IBM Cloud account. */
    jobId: string;
    /** The IAM refresh token associated with the IBM Cloud account. */
    refreshToken: string;
    /** Equivalent to -force options in the command line. */
    force?: boolean;
    /** Auto propagate the chaange or deletion to the dependent resources. */
    propagate?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getJob` operation. */
  export interface GetJobParams {
    /** Job Id. Use GET /jobs API to look up the Job Ids in your IBM Cloud account. */
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

  /** Parameters for the `listJobLogs` operation. */
  export interface ListJobLogsParams {
    /** Job Id. Use GET /jobs API to look up the Job Ids in your IBM Cloud account. */
    jobId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listSharedDatasets` operation. */
  export interface ListSharedDatasetsParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createSharedDataset` operation. */
  export interface CreateSharedDatasetParams {
    /** Automatically propagate changes to consumers. */
    autoPropagateChange?: boolean;
    /** Dataset description. */
    description?: string;
    /** Affected workspaces. */
    effectedWorkspaceIds?: string[];
    /** Resource group name. */
    resourceGroup?: string;
    /** Shared dataset data. */
    sharedDatasetData?: SharedDatasetData[];
    /** Shared dataset name. */
    sharedDatasetName?: string;
    /** Shared dataset source name. */
    sharedDatasetSourceName?: string;
    /** Shared dataset type. */
    sharedDatasetType?: string[];
    /** Shared dataset tags. */
    tags?: string[];
    /** Shared dataset version. */
    version?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getSharedDataset` operation. */
  export interface GetSharedDatasetParams {
    /** The shared dataset ID Use the GET /shared_datasets to look up the shared dataset IDs  in your IBM Cloud
     *  account.
     */
    sdId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceSharedDataset` operation. */
  export interface ReplaceSharedDatasetParams {
    /** The shared dataset ID Use the GET /shared_datasets to look up the shared dataset IDs  in your IBM Cloud
     *  account.
     */
    sdId: string;
    /** Automatically propagate changes to consumers. */
    autoPropagateChange?: boolean;
    /** Dataset description. */
    description?: string;
    /** Affected workspaces. */
    effectedWorkspaceIds?: string[];
    /** Resource group name. */
    resourceGroup?: string;
    /** Shared dataset data. */
    sharedDatasetData?: SharedDatasetData[];
    /** Shared dataset name. */
    sharedDatasetName?: string;
    /** Shared dataset source name. */
    sharedDatasetSourceName?: string;
    /** Shared dataset type. */
    sharedDatasetType?: string[];
    /** Shared dataset tags. */
    tags?: string[];
    /** Shared dataset version. */
    version?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteSharedDataset` operation. */
  export interface DeleteSharedDatasetParams {
    /** The shared dataset ID Use the GET /shared_datasets to look up the shared dataset IDs  in your IBM Cloud
     *  account.
     */
    sdId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getKmsSettings` operation. */
  export interface GetKmsSettingsParams {
    /** The location of the Resource. */
    location: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceKmsSettings` operation. */
  export interface ReplaceKmsSettingsParams {
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

  /** Parameters for the `getDiscoveredKmsInstances` operation. */
  export interface GetDiscoveredKmsInstancesParams {
    /** The encryption scheme to be used. */
    encryptionScheme: string;
    /** The location of the Resource. */
    location: string;
    /** The resource group (by default, fetch from all resource groups). */
    resourceGroup?: string;
    /** The numbers of items to return. */
    limit?: number;
    /** Name of the field to sort-by;  Use the '.' character to delineate sub-resources and sub-fields (eg.
     *  owner.last_name). Prepend the field with '+' or '-', indicating 'ascending' or 'descending' (default is
     *  ascending)   Ignore unrecognized or unsupported sort field.
     */
    sort?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createInventory` operation. */
  export interface CreateInventoryParams {
    /** Inventory name. */
    name?: string;
    /** Inventory description. */
    description?: string;
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
     */
    location?: CreateInventoryConstants.Location | string;
    /** Resource-group name for the Inventory definition.  By default, Action will be created in Default Resource
     *  Group.
     */
    resourceGroup?: string;
    /** Input inventory of host and host group for the playbook,  in the .ini file format. */
    inventoriesIni?: string;
    /** Input resource queries that is used to dynamically generate  the inventory of host and host group for the
     *  playbook.
     */
    resourceQueries?: string[];
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createInventory` operation. */
  export namespace CreateInventoryConstants {
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the location of the resources provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `listInventories` operation. */
  export interface ListInventoriesParams {
    /** The number of items to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of items to return. */
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

  /** Parameters for the `replaceInventory` operation. */
  export interface ReplaceInventoryParams {
    /** Resource Inventory Id.  Use GET /inventories API to look up the Resource Inventory definition Ids  in your
     *  IBM Cloud account.
     */
    inventoryId: string;
    /** Inventory name. */
    name?: string;
    /** Inventory description. */
    description?: string;
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
     */
    location?: ReplaceInventoryConstants.Location | string;
    /** Resource-group name for the Inventory definition.  By default, Action will be created in Default Resource
     *  Group.
     */
    resourceGroup?: string;
    /** Input inventory of host and host group for the playbook,  in the .ini file format. */
    inventoriesIni?: string;
    /** Input resource queries that is used to dynamically generate  the inventory of host and host group for the
     *  playbook.
     */
    resourceQueries?: string[];
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `replaceInventory` operation. */
  export namespace ReplaceInventoryConstants {
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the location of the resources provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `updateInventory` operation. */
  export interface UpdateInventoryParams {
    /** Resource Inventory Id.  Use GET /inventories API to look up the Resource Inventory definition Ids  in your
     *  IBM Cloud account.
     */
    inventoryId: string;
    /** Inventory name. */
    name?: string;
    /** Inventory description. */
    description?: string;
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
     */
    location?: UpdateInventoryConstants.Location | string;
    /** Resource-group name for the Inventory definition.  By default, Action will be created in Default Resource
     *  Group.
     */
    resourceGroup?: string;
    /** Input inventory of host and host group for the playbook,  in the .ini file format. */
    inventoriesIni?: string;
    /** Input resource queries that is used to dynamically generate  the inventory of host and host group for the
     *  playbook.
     */
    resourceQueries?: string[];
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `updateInventory` operation. */
  export namespace UpdateInventoryConstants {
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the location of the resources provisioned using Schematics. */
    export enum Location {
      US_SOUTH = 'us-south',
      US_EAST = 'us-east',
      EU_GB = 'eu-gb',
      EU_DE = 'eu-de',
    }
  }

  /** Parameters for the `deleteInventory` operation. */
  export interface DeleteInventoryParams {
    /** Resource Inventory Id.  Use GET /inventories API to look up the Resource Inventory definition Ids  in your
     *  IBM Cloud account.
     */
    inventoryId: string;
    /** Equivalent to -force options in the command line. */
    force?: boolean;
    /** Auto propagate the chaange or deletion to the dependent resources. */
    propagate?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getInventory` operation. */
  export interface GetInventoryParams {
    /** Resource Inventory Id.  Use GET /inventories API to look up the Resource Inventory definition Ids  in your
     *  IBM Cloud account.
     */
    inventoryId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listInventoryValues` operation. */
  export interface ListInventoryValuesParams {
    /** Resource Inventory Id.  Use GET /inventories API to look up the Resource Inventory definition Ids  in your
     *  IBM Cloud account.
     */
    inventoryId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getInventoryValue` operation. */
  export interface GetInventoryValueParams {
    /** Resource Inventory Id.  Use GET /inventories API to look up the Resource Inventory definition Ids  in your
     *  IBM Cloud account.
     */
    inventoryId: string;
    /** Name of the variable. */
    varName: string;
    headers?: OutgoingHttpHeaders;
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

  /** Parameters for the `listResourceQuery` operation. */
  export interface ListResourceQueryParams {
    /** The number of items to skip before starting to collect the result set. */
    offset?: number;
    /** The numbers of items to return. */
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

  /** Parameters for the `executeResourceQuery` operation. */
  export interface ExecuteResourceQueryParams {
    /** Resource query Id.  Use GET /resource_query API to look up the Resource query definition Ids  in your IBM
     *  Cloud account.
     */
    queryId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `replaceResourcesQuery` operation. */
  export interface ReplaceResourcesQueryParams {
    /** Resource query Id.  Use GET /resource_query API to look up the Resource query definition Ids  in your IBM
     *  Cloud account.
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

  /** Parameters for the `deleteResourcesQuery` operation. */
  export interface DeleteResourcesQueryParams {
    /** Resource query Id.  Use GET /resource_query API to look up the Resource query definition Ids  in your IBM
     *  Cloud account.
     */
    queryId: string;
    /** Equivalent to -force options in the command line. */
    force?: boolean;
    /** Auto propagate the chaange or deletion to the dependent resources. */
    propagate?: boolean;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getResourcesQuery` operation. */
  export interface GetResourcesQueryParams {
    /** Resource query Id.  Use GET /resource_query API to look up the Resource query definition Ids  in your IBM
     *  Cloud account.
     */
    queryId: string;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /** Complete Action details with user inputs and system generated data. */
  export interface Action {
    /** Action name (unique for an account). */
    name?: string;
    /** Action description. */
    description?: string;
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
     */
    location?: string;
    /** Resource-group name for the Action.  By default, Action will be created in Default Resource Group. */
    resource_group?: string;
    /** Action tags. */
    tags?: string[];
    /** User defined status of the Schematics object. */
    user_state?: UserState;
    /** URL of the README file, for the source. */
    source_readme_url?: string;
    /** Source of templates, playbooks, or controls. */
    source?: ExternalSource;
    /** Type of source for the Template. */
    source_type?: string;
    /** Schematics job command parameter (playbook-name). */
    command_parameter?: string;
    /** Describes a bastion resource. */
    bastion?: BastionResourceDefinition;
    /** Inventory ID. */
    inventory?: string;
    /** User editable variable data & system generated reference to value. */
    bastion_credential?: VariableData;
    /** credentials of the Action. */
    credentials?: VariableData[];
    /** Input variables for the Action. */
    inputs?: VariableData[];
    /** Output variables for the Action. */
    outputs?: VariableData[];
    /** Environment variables for the Action. */
    settings?: VariableData[];
    /** Action Id. */
    id?: string;
    /** Action Cloud Resource Name. */
    crn?: string;
    /** Action account id. */
    account?: string;
    /** Action Playbook Source creation time. */
    source_created_at?: string;
    /** Email address of user who created the Action Playbook Source. */
    source_created_by?: string;
    /** Action Playbook updation time. */
    source_updated_at?: string;
    /** Email address of user who updated the Action Playbook Source. */
    source_updated_by?: string;
    /** Action creation time. */
    created_at?: string;
    /** Email address of user who created the action. */
    created_by?: string;
    /** Action updation time. */
    updated_at?: string;
    /** Email address of user who updated the action. */
    updated_by?: string;
    /** Computed state of the Action. */
    state?: ActionState;
    /** Playbook names retrieved from repo. */
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
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
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

  /** CatalogRef -. */
  export interface CatalogRef {
    /** Dry run. */
    dry_run?: boolean;
    /** Catalog item icon url. */
    item_icon_url?: string;
    /** Catalog item id. */
    item_id?: string;
    /** Catalog item name. */
    item_name?: string;
    /** Catalog item readme url. */
    item_readme_url?: string;
    /** Catalog item url. */
    item_url?: string;
    /** Catalog item launch url. */
    launch_url?: string;
    /** Catalog item offering version. */
    offering_version?: string;
  }

  /** EnvVariableResponse -. */
  export interface EnvVariableResponse {
    /** Env variable is hidden. */
    hidden?: boolean;
    /** Env variable name. */
    name?: string;
    /** Env variable is secure. */
    secure?: boolean;
    /** Value for env variable. */
    value?: string;
  }

  /** Source of templates, playbooks, or controls. */
  export interface ExternalSource {
    /** Type of source for the Template. */
    source_type: string;
    /** Connection details to Git source. */
    git?: ExternalSourceGit;
  }

  /** Connection details to Git source. */
  export interface ExternalSourceGit {
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
    /** Inventory name. */
    name?: string;
    /** Inventory id. */
    id?: string;
    /** Inventory description. */
    description?: string;
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
     */
    location?: string;
    /** Resource-group name for the Inventory definition.  By default, Action will be created in Default Resource
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

  /** List of Inventory resource records. */
  export interface InventoryResourceRecordList {
    /** Total number of records. */
    total_count?: number;
    /** Number of records returned. */
    limit: number;
    /** Skipped number of records. */
    offset: number;
    /** List of inventory resource records. */
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
    /** Schematics job command parameter (playbook-name, capsule-name or flow-name). */
    command_parameter?: string;
    /** Command line options for the command. */
    command_options?: string[];
    /** Job inputs used by Action. */
    inputs?: VariableData[];
    /** Environment variables used by the Job while performing Action. */
    settings?: VariableData[];
    /** User defined tags, while running the job. */
    tags?: string[];
    /** Job ID. */
    id?: string;
    /** Job name, uniquely derived from the related Action. */
    name?: string;
    /** Job description derived from the related Action. */
    description?: string;
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
     */
    location?: string;
    /** Resource-group name derived from the related Action. */
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
    /** Action Job data. */
    action_job_data?: JobDataAction;
    /** Controls Job data. */
    system_job_data?: JobDataSystem;
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

  /** Controls Job data. */
  export interface JobDataSystem {
    /** Key ID for which key event is generated. */
    key_id?: string;
    /** List of the schematics resource id. */
    schematics_resource_id?: string[];
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
    /** Job name, uniquely derived from the related Action. */
    name?: string;
    /** Job description derived from the related Action. */
    description?: string;
    /** Name of the Schematics automation resource. */
    command_object?: string;
    /** Job command object id (action-id). */
    command_object_id?: string;
    /** Schematics job command name. */
    command_name?: string;
    /** User defined tags, while running the job. */
    tags?: string[];
    /** List of workspace locations supported by IBM Cloud Schematics service.  Note, this does not limit the
     *  location of the resources provisioned using Schematics.
     */
    location?: string;
    /** Resource-group name derived from the related Action,. */
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
    /** Job name, uniquely derived from the related Action. */
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
    log_errors?: JobLogSummaryLogErrorsItem[];
    /** Repo download Job log summary. */
    repo_download_job?: JobLogSummaryRepoDownloadJob;
    /** Action Job. */
    action_job?: JobLogSummaryActionJob;
    /** System Job log summary. */
    system_job?: JobLogSummarySystemJob;
  }

  /** Action Job. */
  export interface JobLogSummaryActionJob {
    /** number of hosts. */
    host_count?: number;
    /** number of tasks in playbook. */
    task_count?: number;
    /** number of plays in playbook. */
    play_count?: number;
    /** Recap records. */
    recap?: JobLogSummaryActionJobRecap;
  }

  /** Recap records. */
  export interface JobLogSummaryActionJobRecap {
    /** List of host name. */
    hosts?: string[];
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

  /** JobLogSummaryLogErrorsItem. */
  export interface JobLogSummaryLogErrorsItem {
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

  /** Job Status. */
  export interface JobStatus {
    /** Action Job Status. */
    action_job_status?: JobStatusAction;
    /** System Job Status. */
    system_job_status?: JobStatusSystem;
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
    inventory_status_code?: string;
    /** Aggregated status message for all inventory resources,  to be displayed along with the
     *  inventory_status_code;.
     */
    inventory_status_message?: string;
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
    /** Job status updation timestamp urces'. */
    updated_at?: string;
  }

  /** JobStatusType -. */
  export interface JobStatusType {
    /** List of failed workspace jobs. */
    failed?: string[];
    /** List of in_progress workspace jobs. */
    in_progress?: string[];
    /** List of successful workspace jobs. */
    success?: string[];
    /** Workspace job status updated at. */
    last_updated_on?: string;
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
    keys?: KMSInstancesKeysItem[];
  }

  /** KMSInstancesKeysItem. */
  export interface KMSInstancesKeysItem {
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

  /** LogStoreResponse -. */
  export interface LogStoreResponse {
    /** Engine name. */
    engine_name?: string;
    /** Engine version. */
    engine_version?: string;
    /** Engine id. */
    id?: string;
    /** Log store url. */
    log_store_url?: string;
  }

  /** LogStoreResponseList -. */
  export interface LogStoreResponseList {
    /** Runtime data. */
    runtime_data?: LogStoreResponse[];
  }

  /** LogSummary ... */
  export interface LogSummary {
    /** WorkspaceActivityStatus activity status type. */
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
    /** Time takemn to perform activity. */
    time_taken?: number;
  }

  /** OutputValuesItem. */
  export interface OutputValuesItem {
    /** Output variable name. */
    folder?: string;
    /** Output variable id. */
    id?: string;
    /** List of Output values. */
    output_values?: JsonObject[];
    /** Output variable type. */
    value_type?: string;
  }

  /** ResourceGroupResponse -. */
  export interface ResourceGroupResponse {
    /** Account id. */
    account_id?: string;
    /** CRN. */
    crn?: string;
    /** default. */
    default?: boolean;
    /** Resource group name. */
    name?: string;
    /** Resource group id. */
    resource_group_id?: string;
    /** Resource group state. */
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
    ResourceQueries?: ResourceQueryRecord[];
  }

  /** Describe resource query. */
  export interface ResourceQueryResponseRecord {
    response?: ResourceQueryResponseRecordResponseItem[];
  }

  /** ResourceQueryResponseRecordResponseItem. */
  export interface ResourceQueryResponseRecordResponseItem {
    /** Type of the query(workspaces). */
    query_type?: string;
    query_condition?: ResourceQueryParam[];
    /** List of query selection parameters. */
    query_select?: string[];
    query_output?: ResourceQueryResponseRecordResponseItemQueryOutputItem[];
  }

  /** List of query output values. */
  export interface ResourceQueryResponseRecordResponseItemQueryOutputItem {
    /** Name of the output param. */
    name?: string;
    /** value of the output param. */
    value?: string;
  }

  /** Schematics locations. */
  export interface SchematicsLocations {
    /** Country. */
    country?: string;
    /** Geography. */
    geography?: string;
    /** Location id. */
    id?: string;
    /** Kind. */
    kind?: string;
    /** Metro. */
    metro?: string;
    /** Multizone metro. */
    multizone_metro?: string;
    /** Location name. */
    name?: string;
  }

  /** SharedDatasetData ... */
  export interface SharedDatasetData {
    /** Default values. */
    default_value?: string;
    /** Data description. */
    description?: string;
    /** Data is hidden. */
    hidden?: boolean;
    /** Data is readonly. */
    immutable?: boolean;
    /** Data is matches regular expression. */
    matches?: string;
    /** Max value of the data. */
    max_value?: string;
    /** Max string length of the data. */
    max_value_len?: string;
    /** Min value of the data. */
    min_value?: string;
    /** Min string length of the data. */
    min_value_len?: string;
    /** Possible options for the Data. */
    options?: string[];
    /** Override value for the Data. */
    override_value?: string;
    /** Data is secure. */
    secure?: boolean;
    /** Alias strings for the variable names. */
    var_aliases?: string[];
    /** Variable name. */
    var_name?: string;
    /** Variable reference. */
    var_ref?: string;
    /** Variable type. */
    var_type?: string;
  }

  /** SharedDatasetResponse - request returned by create. */
  export interface SharedDatasetResponse {
    /** Account id. */
    account?: string;
    /** Dataset created at. */
    created_at?: string;
    /** Dataset created by. */
    created_by?: string;
    /** Dataset description. */
    description?: string;
    /** Affected workspace id. */
    effected_workspace_ids?: string[];
    /** Resource group name. */
    resource_group?: string;
    /** Shared dataset data. */
    shared_dataset_data?: SharedDatasetData[];
    /** Shared dataset id. */
    shared_dataset_id?: string;
    /** Shared dataset name. */
    shared_dataset_name?: string;
    /** Shared dataset type. */
    shared_dataset_type?: string[];
    /** shareddata variable status type. */
    state?: string;
    /** Shared dataset tags. */
    tags?: string[];
    /** Shared dataset updated at. */
    updated_at?: string;
    /** Shared dataset updated by. */
    updated_by?: string;
    /** Shared dataset version. */
    version?: string;
  }

  /** SharedDatasetResponseList -. */
  export interface SharedDatasetResponseList {
    /** Shared dataset count. */
    count?: number;
    /** List of datasets. */
    shared_datasets?: SharedDatasetResponse[];
  }

  /** SharedTargetData -. */
  export interface SharedTargetData {
    /** Cluster created on. */
    cluster_created_on?: string;
    /** Cluster id. */
    cluster_id?: string;
    /** Cluster name. */
    cluster_name?: string;
    /** Cluster type. */
    cluster_type?: string;
    /** Entitlement keys. */
    entitlement_keys?: JsonObject[];
    /** Target namespace. */
    namespace?: string;
    /** Target region. */
    region?: string;
    /** Target resource group id. */
    resource_group_id?: string;
    /** Cluster worker count. */
    worker_count?: number;
    /** Cluster worker type. */
    worker_machine_type?: string;
  }

  /** SharedTargetDataResponse -. */
  export interface SharedTargetDataResponse {
    /** Target cluster id. */
    cluster_id?: string;
    /** Target cluster name. */
    cluster_name?: string;
    /** Entitlement keys. */
    entitlement_keys?: JsonObject[];
    /** Target namespace. */
    namespace?: string;
    /** Target region. */
    region?: string;
    /** Target resource group id. */
    resource_group_id?: string;
  }

  /** StateStoreResponse -. */
  export interface StateStoreResponse {
    /** Engine name. */
    engine_name?: string;
    /** Engine version. */
    engine_version?: string;
    /** State store id. */
    id?: string;
    /** State store url. */
    state_store_url?: string;
  }

  /** StateStoreResponseList -. */
  export interface StateStoreResponseList {
    /** List of state stores. */
    runtime_data?: StateStoreResponse[];
  }

  /** System lock status. */
  export interface SystemLock {
    /** Is the Workspace locked by a Schematic action ?. */
    sys_locked?: boolean;
    /** Name of the User who performed the action, that lead to the locking of the Workspace. */
    sys_locked_by?: string;
    /** When the User performed the action that lead to locking of the Workspace ?. */
    sys_locked_at?: string;
  }

  /** TemplateReadme -. */
  export interface TemplateReadme {
    /** Readme string. */
    readme?: string;
  }

  /** TemplateRepoRequest -. */
  export interface TemplateRepoRequest {
    /** Repo branch. */
    branch?: string;
    /** Repo release. */
    release?: string;
    /** Repo SHA value. */
    repo_sha_value?: string;
    /** Repo URL. */
    repo_url?: string;
    /** Source URL. */
    url?: string;
  }

  /** TemplateRepoResponse -. */
  export interface TemplateRepoResponse {
    /** Repo branch. */
    branch?: string;
    /** Full repo URL. */
    full_url?: string;
    /** Has uploaded git repo tar. */
    has_uploadedgitrepotar?: boolean;
    /** Repo release. */
    release?: string;
    /** Repo SHA value. */
    repo_sha_value?: string;
    /** Repo URL. */
    repo_url?: string;
    /** Source URL. */
    url?: string;
  }

  /** TemplateRepoTarUploadResponse -. */
  export interface TemplateRepoTarUploadResponse {
    /** Tar file value. */
    file_value?: string;
    /** Has received tar file. */
    has_received_file?: boolean;
    /** Template id. */
    id?: string;
  }

  /** TemplateRepoUpdateRequest -. */
  export interface TemplateRepoUpdateRequest {
    /** Repo branch. */
    branch?: string;
    /** Repo release. */
    release?: string;
    /** Repo SHA value. */
    repo_sha_value?: string;
    /** Repo URL. */
    repo_url?: string;
    /** Source URL. */
    url?: string;
  }

  /** TemplateResources -. */
  export interface TemplateResources {
    /** Template folder name. */
    folder?: string;
    /** Template id. */
    id?: string;
    /** List of null resources. */
    null_resources?: JsonObject[];
    /** List of related resources. */
    related_resources?: JsonObject[];
    /** List of resources. */
    resources?: JsonObject[];
    /** Number of resources. */
    resources_count?: number;
    /** Type of templaes. */
    template_type?: string;
  }

  /** TemplateRunTimeDataResponse -. */
  export interface TemplateRunTimeDataResponse {
    /** Engine command. */
    engine_cmd?: string;
    /** Engine name. */
    engine_name?: string;
    /** Engine version. */
    engine_version?: string;
    /** Template id. */
    id?: string;
    /** Log store url. */
    log_store_url?: string;
    /** List of Output values. */
    output_values?: JsonObject[];
    /** List of resources. */
    resources?: JsonObject[][];
    /** State store URL. */
    state_store_url?: string;
  }

  /** TemplateSourceDataRequest -. */
  export interface TemplateSourceDataRequest {
    /** EnvVariableRequest .. */
    env_values?: JsonObject[];
    /** Folder name. */
    folder?: string;
    /** Init state file. */
    init_state_file?: string;
    /** Template type. */
    type?: string;
    /** Uninstall script name. */
    uninstall_script_name?: string;
    /** Value. */
    values?: string;
    /** List of values metadata. */
    values_metadata?: JsonObject[];
    /** VariablesRequest -. */
    variablestore?: WorkspaceVariableRequest[];
  }

  /** TemplateSourceDataResponse -. */
  export interface TemplateSourceDataResponse {
    /** List of environment values. */
    env_values?: EnvVariableResponse[];
    /** Folder name. */
    folder?: string;
    /** Has github token. */
    has_githubtoken?: boolean;
    /** Template id. */
    id?: string;
    /** Template tyoe. */
    type?: string;
    /** Uninstall script name. */
    uninstall_script_name?: string;
    /** Values. */
    values?: string;
    /** List of values metadata. */
    values_metadata?: JsonObject[];
    /** Values URL. */
    values_url?: string;
    /** VariablesResponse -. */
    variablestore?: WorkspaceVariableResponse[];
  }

  /** TemplateStateStore -. */
  export interface TemplateStateStore {
    version?: number;
    terraform_version?: string;
    serial?: number;
    lineage?: string;
    modules?: JsonObject[];
  }

  /** TemplateValues -. */
  export interface TemplateValues {
    values_metadata?: JsonObject[];
  }

  /** TerraformCommand -. */
  export interface TerraformCommand {
    /** Command to execute. */
    command?: string;
    /** Command Parameters. */
    command_params?: string;
    /** Command name. */
    command_name?: string;
    /** Command description. */
    command_desc?: string;
    /** Instruction to continue or break in case of error. */
    command_onError?: string;
    /** Dependency on previous commands. */
    command_dependsOn?: string;
    /** Command status. */
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
    /** EnvVariableRequest .. */
    env_values?: JsonObject[];
    /** User values. */
    values?: string;
    /** VariablesResponse -. */
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

  /** VersionResponse -. */
  export interface VersionResponse {
    /** Build data. */
    builddate?: string;
    /** Build number. */
    buildno?: string;
    /** Commit SHA. */
    commitsha?: string;
    /** Version number of 'Helm provider for Terraform'. */
    helm_provider_version?: string;
    /** Helm Version. */
    helm_version?: string;
    /** Supported template types. */
    supported_template_types?: JsonObject;
    /** Terraform provider versions. */
    terraform_provider_version?: string;
    /** Terraform versions. */
    terraform_version?: string;
  }

  /** WorkspaceActivities -. */
  export interface WorkspaceActivities {
    /** List of workspace activities. */
    actions?: WorkspaceActivity[];
    /** Workspace id. */
    workspace_id?: string;
    /** Workspace name. */
    workspace_name?: string;
  }

  /** WorkspaceActivity -. */
  export interface WorkspaceActivity {
    /** Activity id. */
    action_id?: string;
    /** StatusMessages -. */
    message?: string[];
    /** WorkspaceActivityAction activity action type. */
    name?: string;
    /** Activity performed at. */
    performed_at?: string;
    /** Activity performed by. */
    performed_by?: string;
    /** WorkspaceActivityStatus activity status type. */
    status?: string;
    /** List of template activities. */
    templates?: WorkspaceActivityTemplate[];
  }

  /** WorkspaceActivityApplyResult -. */
  export interface WorkspaceActivityApplyResult {
    /** Activity id. */
    activityid?: string;
  }

  /** WorkspaceActivityCommandResult -. */
  export interface WorkspaceActivityCommandResult {
    /** Activity id. */
    activityid?: string;
  }

  /** WorkspaceActivityDestroyResult -. */
  export interface WorkspaceActivityDestroyResult {
    /** Activity id. */
    activityid?: string;
  }

  /** WorkspaceActivityLogs -. */
  export interface WorkspaceActivityLogs {
    /** Activity id. */
    action_id?: string;
    /** WorkspaceActivityAction activity action type. */
    name?: string;
    /** List of activity logs. */
    templates?: WorkspaceActivityTemplateLogs[];
  }

  /** Workspace Activity Options Template. */
  export interface WorkspaceActivityOptionsTemplate {
    /** Workspace Activity targets. */
    target?: string[];
    /** Workspace Activity tfvars. */
    tf_vars?: string[];
  }

  /** WorkspaceActivityPlanResult -. */
  export interface WorkspaceActivityPlanResult {
    /** Activity id. */
    activityid?: string;
  }

  /** WorkspaceActivityRefreshResult -. */
  export interface WorkspaceActivityRefreshResult {
    /** Activity id. */
    activityid?: string;
  }

  /** WorkspaceActivityTemplate -. */
  export interface WorkspaceActivityTemplate {
    /** End time for the activity. */
    end_time?: string;
    /** LogSummary ... */
    log_summary?: LogSummary;
    /** Log URL. */
    log_url?: string;
    /** Message. */
    message?: string;
    /** Activity start time. */
    start_time?: string;
    /** WorkspaceActivityStatus activity status type. */
    status?: string;
    /** Template id. */
    template_id?: string;
    /** Template type. */
    template_type?: string;
  }

  /** WorkspaceActivityTemplateLogs -. */
  export interface WorkspaceActivityTemplateLogs {
    /** Log URL. */
    log_url?: string;
    /** Template id. */
    template_id?: string;
    /** Template type. */
    template_type?: string;
  }

  /** WorkspaceBulkDeleteResponse -. */
  export interface WorkspaceBulkDeleteResponse {
    /** Workspace deletion job name. */
    job?: string;
    /** Workspace deletion job id. */
    job_id?: string;
  }

  /** WorkspaceJobResponse -. */
  export interface WorkspaceJobResponse {
    /** JobStatusType -. */
    job_status?: JobStatusType;
  }

  /** WorkspaceResponse - request returned by create. */
  export interface WorkspaceResponse {
    /** List of applied shared dataset id. */
    applied_shareddata_ids?: string[];
    /** CatalogRef -. */
    catalog_ref?: CatalogRef;
    /** Workspace created at. */
    created_at?: string;
    /** Workspace created by. */
    created_by?: string;
    /** Workspace CRN. */
    crn?: string;
    /** Workspace description. */
    description?: string;
    /** Workspace id. */
    id?: string;
    /** Last health checked at. */
    last_health_check_at?: string;
    /** Workspace location. */
    location?: string;
    /** Workspace name. */
    name?: string;
    /** Workspace resource group. */
    resource_group?: string;
    /** Workspace runtime data. */
    runtime_data?: TemplateRunTimeDataResponse[];
    /** SharedTargetDataResponse -. */
    shared_data?: SharedTargetDataResponse;
    /** Workspace status type. */
    status?: string;
    /** Workspace tags. */
    tags?: string[];
    /** Workspace template data. */
    template_data?: TemplateSourceDataResponse[];
    /** Workspace template ref. */
    template_ref?: string;
    /** TemplateRepoResponse -. */
    template_repo?: TemplateRepoResponse;
    /** List of Workspace type. */
    type?: string[];
    /** Workspace updated at. */
    updated_at?: string;
    /** Workspace updated by. */
    updated_by?: string;
    /** WorkspaceStatusResponse -. */
    workspace_status?: WorkspaceStatusResponse;
    /** WorkspaceStatusMessage -. */
    workspace_status_msg?: WorkspaceStatusMessage;
  }

  /** WorkspaceResponseList -. */
  export interface WorkspaceResponseList {
    /** Total number of workspaces. */
    count?: number;
    /** Limit for the list. */
    limit: number;
    /** Offset for the list. */
    offset: number;
    /** List of Workspaces. */
    workspaces?: WorkspaceResponse[];
  }

  /** WorkspaceStatusMessage -. */
  export interface WorkspaceStatusMessage {
    /** Status code. */
    status_code?: string;
    /** Status message. */
    status_msg?: string;
  }

  /** WorkspaceStatusRequest -. */
  export interface WorkspaceStatusRequest {
    /** Frozen status. */
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

  /** WorkspaceStatusResponse -. */
  export interface WorkspaceStatusResponse {
    /** Frozen status. */
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

  /** WorkspaceStatusUpdateRequest -. */
  export interface WorkspaceStatusUpdateRequest {
    /** Frozen status. */
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

  /** WorkspaceTemplateValuesResponse -. */
  export interface WorkspaceTemplateValuesResponse {
    /** List of runtime data. */
    runtime_data?: TemplateRunTimeDataResponse[];
    /** SharedTargetData -. */
    shared_data?: SharedTargetData;
    /** List of source data. */
    template_data?: TemplateSourceDataResponse[];
  }

  /** WorkspaceVariableRequest -. */
  export interface WorkspaceVariableRequest {
    /** Variable description. */
    description?: string;
    /** Variable name. */
    name?: string;
    /** Variable is secure. */
    secure?: boolean;
    /** Variable type. */
    type?: string;
    /** Variable uses default value; and is not over-ridden. */
    use_default?: boolean;
    /** Value of the Variable. */
    value?: string;
  }

  /** WorkspaceVariableResponse -. */
  export interface WorkspaceVariableResponse {
    /** Variable descrption. */
    description?: string;
    /** Variable name. */
    name?: string;
    /** Variable is secure. */
    secure?: boolean;
    /** Variable type. */
    type?: string;
    /** Value of the Variable. */
    value?: string;
  }

}

export = SchematicsV1;
