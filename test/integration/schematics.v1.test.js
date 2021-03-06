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

const { IamAuthenticator } = require('ibm-cloud-sdk-core/auth');

const fs = require('fs');
const process = require('process');
const path = require('path');

let refresh_token;

beforeAll(() => {
  // Create an IAM authenticator.
  const authenticator = new IamAuthenticator({
    apikey: '',
    clientId: 'bx',
    clientSecret: 'bx',
  });

  return authenticator.tokenManager.requestToken().then(function(resp) {
    refresh_token = resp.result.refresh_token;
  });
});

describe('SchematicsV1_integration', () => {
  const schematicsService = SchematicsV1.newInstance({});

  const config = readExternalSources(SchematicsV1.DEFAULT_SERVICE_NAME);

  expect(schematicsService).not.toBeNull();
  expect(config).not.toBeNull();

  jest.setTimeout(timeout);

  let delete_wid;

  afterEach(() => {
    if (delete_wid) {
      return deleteWorkspaceWait(delete_wid);
    }
  });

  function createWorkspace() {
    // TemplateSourceDataRequest
    const templateSourceDataRequestModel = {
      env_values: [{ KEY1: 'VALUE1' }, { KEY2: 'VALUE2' }],
      folder: '.',
      type: 'terraform_v0.12.20',
      variablestore: [
        {
          name: 'variable_name1',
          value: 'variable_valuename1',
        },
        {
          name: 'variable_name2',
          value: 'variable_valuename2',
        },
        {
          name: 'variable_name3',
          value: 'variable_valuename3',
          secure: true,
        },
      ],
    };

    // TemplateRepoRequest
    const templateRepoRequestModel = {
      url: 'https://github.ibm.com/gshamann/tf_cloudless_sleepy',
    };

    const params = {
      description: 'description',
      name: 'workspace_name',
      tags: ['testString'],
      templateData: [templateSourceDataRequestModel],
      templateRepo: templateRepoRequestModel,
      type: ['terraform_v0.12.20'],
    };

    return schematicsService
      .createWorkspace(params)
      .then(res => {
        return res.result;
      })
      .catch(err => {
        console.warn(err);
      });
  }

  function createWorkspaceWithEmptyRepoURL() {
    // TemplateSourceDataRequest
    const templateSourceDataRequestModel = {
      folder: '.',
      type: 'terraform_v0.11.14',
      env_values: [
        {
          KEY1: 'VALUE1',
          KEY2: 'VALUE2',
        },
      ],
      variablestore: [
        {
          name: 'variable_name1',
          value: 'variable_valuename1',
        },
        {
          name: 'variable_name2',
          value: 'variable_valuename2',
        },
        {
          name: 'variable_name3',
          value: 'variable_valuename3',
          secure: true,
        },
      ],
    };

    const params = {
      description: 'description',
      name: 'workspace_name',
      tags: ['testString'],
      templateData: [templateSourceDataRequestModel],
      type: ['terraform_v0.11.14'],
    };

    return schematicsService
      .createWorkspace(params)
      .then(res => {
        return res.result;
      })
      .catch(err => {
        console.warn(err);
      });
  }

  function getWorkspaceById(id) {
    return schematicsService
      .getWorkspace({
        wId: id,
      })
      .then(ws => {
        return ws.result;
      })
      .catch(err => {
        console.warn(err);
      });
  }

  function getWorkspaceActivityId(wid, activityid) {
    return schematicsService
      .getWorkspaceActivity({
        wId: wid,
        activityId: activityid,
      })
      .then(ws => {
        return ws.result;
      });
  }

  function waitForActivityStatus(wid, activityid, status) {
    return getWorkspaceActivityId(wid, activityid).then(ws => {
      if (ws.status === status) {
        return [wid, activityid];
      } else {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(waitForActivityStatus(wid, activityid, status));
          }, 2000);
        });
      }
    });
  }

  function waitForWorkspaceStatus(wid, status) {
    return getWorkspaceById(wid).then(ws => {
      if (ws.status === status) {
        return ws;
      } else {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(waitForWorkspaceStatus(wid, status));
          }, 2000);
        });
      }
    });
  }

  function deleteWorkspaceWait(wid) {
    return deleteWorkspace(wid).then(ws => {
      if (ws.status != 409) {
        return wid;
      } else {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(deleteWorkspaceWait(wid));
          }, 2000);
        });
      }
    });
  }

  function deleteWorkspace(id) {
    return schematicsService
      .deleteWorkspace({
        wId: id,
        refreshToken: refresh_token,
      })
      .then(ws => {
        return ws.result;
      })
      .catch(err => {
        return err;
      });
  }

  function uploadTarFile() {
    return createWorkspaceWithEmptyRepoURL()
      .then(ws => {
        return waitForWorkspaceStatus(ws.id, 'DRAFT');
      })
      .then(ws => {
        const fileDir = process.cwd();
        const fileName = 'tf_cloudless_sleepy_git_archive.tar';
        const filePath = path.join(fileDir, 'tarfiles', fileName);
        const fileStream = fs.createReadStream(filePath);
        return schematicsService
          .uploadTemplateTar({
            wId: ws.id,
            tId: ws.template_data[0].id,
            fileContentType: 'multipart/form-data',
            file: fileStream,
          })
          .then(res => {
            return ws;
          })
          .catch(err => {
            console.warn(err);
          });
      });
  }

  function planWorkspaceAction() {
    return uploadTarFile()
      .then(ws => {
        return waitForWorkspaceStatus(ws.id, 'INACTIVE');
      })
      .then(ws => {
        return schematicsService
          .planWorkspaceCommand({
            wId: ws.id,
            refreshToken: refresh_token,
          })
          .then(res => {
            return [ws.id, res.result.activityid];
          });
      })
      .then(act => {
        return waitForActivityStatus(act[0], act[1], 'COMPLETED');
      });
  }

  function applyWorkspaceAction() {
    return uploadTarFile()
      .then(ws => {
        return waitForWorkspaceStatus(ws.id, 'INACTIVE');
      })
      .then(ws => {
        return schematicsService
          .applyWorkspaceCommand({
            wId: ws.id,
            refreshToken: refresh_token,
          })
          .then(res => {
            return [ws.id, res.result.activityid];
          });
      })
      .then(act => {
        return waitForActivityStatus(act[0], act[1], 'COMPLETED');
      });
  }

  function applyWorkspaceActionByID(id) {
    return schematicsService
      .applyWorkspaceCommand({
        wId: id,
        refreshToken: refresh_token,
      })
      .then(res => {
        return [id, res.result.activityid];
      })
      .then(act => {
        return waitForActivityStatus(act[0], act[1], 'COMPLETED');
      });
  }

  function destroyWorkspaceActionById(id) {
    return schematicsService
      .destroyWorkspaceCommand({
        wId: id,
        refreshToken: refresh_token,
      })
      .then(res => {
        return [id, res.result.activityid];
      })
      .then(act => {
        return waitForActivityStatus(act[0], act[1], 'COMPLETED');
      });
  }

  function refreshWorkspaceActionById(id) {
    return schematicsService
      .refreshWorkspaceCommand({
        wId: id,
        refreshToken: refresh_token,
      })
      .then(res => {
        return [id, res.result.activityid];
      })
      .then(act => {
        return waitForActivityStatus(act[0], act[1], 'COMPLETED');
      });
  }

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

    // TemplateSourceDataRequest
    const templateSourceDataRequestModel = {
      env_values: [{ KEY1: 'VALUE1' }, { KEY2: 'VALUE2' }],
      folder: '.',
      type: 'terraform_v0.12.20',
      variablestore: [
        {
          name: 'variable_name1',
          value: 'variable_valuename1',
        },
        {
          name: 'variable_name2',
          value: 'variable_valuename2',
        },
        {
          name: 'variable_name3',
          value: 'variable_valuename3',
          secure: true,
        },
      ],
    };

    // TemplateRepoRequest
    const templateRepoRequestModel = {
      url: 'https://github.ibm.com/gshamann/tf_cloudless_sleepy',
    };

    const params = {
      description: 'description',
      name: 'workspace_name',
      tags: ['testString'],
      templateData: [templateSourceDataRequestModel],
      templateRepo: templateRepoRequestModel,
      type: ['terraform_v0.12.20'],
    };

    schematicsService
      .createWorkspace(params)
      .then(res => {
        delete_wid = res.result.id;
        done();
      })
      .catch(err => {
        console.warn(err);
        done(err);
      });
  });
  test('getWorkspace()', done => {
    createWorkspace().then(ws => {
      delete_wid = ws.id;

      const params = {
        wId: ws.id,
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
  });
  test('replaceWorkspace()', done => {
    createWorkspace()
      .then(ws => {
        delete_wid = ws.id;
        return waitForWorkspaceStatus(ws.id, 'INACTIVE');
      })
      .then(res => {
        schematicsService
          .replaceWorkspace({
            wId: res.id,
            description: 'updated_description',
            name: 'workspace_name',
            tags: ['testString'],
            type: ['terraform_v0.12.20'],
          })
          .then(res => {
            done();
          })
          .catch(err => {
            console.warn(err);
            done(err);
          });
      });
  });
  test('updateWorkspace()', done => {
    createWorkspace()
      .then(ws => {
        delete_wid = ws.id;
        return waitForWorkspaceStatus(ws.id, 'INACTIVE');
      })
      .then(res => {
        schematicsService
          .updateWorkspace({
            wId: res.id,
            description: 'updated_description',
            name: 'workspace_name',
            tags: ['testString'],
            type: ['terraform_v0.12.20'],
          })
          .then(res => {
            done();
          })
          .catch(err => {
            console.warn(err);
            done(err);
          });
      });
  });
  test('uploadTemplateTar()', done => {
    const fileDir = process.cwd();
    const fileName = 'tf_cloudless_sleepy_git_archive.tar';
    const filePath = path.join(fileDir, 'tarfiles', fileName);
    const fileStream = fs.createReadStream(filePath);

    return createWorkspaceWithEmptyRepoURL()
      .then(ws => {
        delete_wid = ws.id;
        return waitForWorkspaceStatus(ws.id, 'DRAFT');
      })
      .then(ws => {
        schematicsService
          .uploadTemplateTar({
            wId: ws.id,
            tId: ws.template_data[0].id,
            fileContentType: 'multipart/form-data',
            file: fileStream,
          })
          .then(res => {
            done();
          })
          .catch(err => {
            console.warn(err);
            done(err);
          });
      });
  });
  test('getWorkspaceReadme()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getWorkspaceReadme({
          wId: res[0],
        })
        .then(res => {
          done();
        })
        .catch(err => {
          console.warn(err);
          done(err);
        });
    });
  });
  test('listWorkspaceActivities()', done => {
    uploadTarFile()
      .then(ws => {
        delete_wid = ws.id;
        return waitForWorkspaceStatus(ws.id, 'INACTIVE');
      })
      .then(ws => {
        return refreshWorkspaceActionById(ws.id);
      })
      .then(wid => {
        return destroyWorkspaceActionById(wid[0]);
      })
      .then(ws => {
        schematicsService
          .listWorkspaceActivities({
            wId: ws[0],
          })
          .then(res => {
            done();
          })
          .catch(err => {
            console.warn(err);
            done(err);
          });
      });
  });
  test('getWorkspaceActivity()', done => {
    uploadTarFile()
      .then(ws => {
        delete_wid = ws.id;
        return waitForWorkspaceStatus(ws.id, 'INACTIVE');
      })
      .then(ws => {
        return refreshWorkspaceActionById(ws.id);
      })
      .then(res => {
        schematicsService
          .getWorkspaceActivity({
            wId: res[0],
            activityId: res[1],
          })
          .then(res => {
            done();
          })
          .catch(err => {
            console.warn(err);
            done(err);
          });
      });
  });
  test('applyWorkspaceCommand()', done => {
    uploadTarFile()
      .then(ws => {
        delete_wid = ws.id;
        return waitForWorkspaceStatus(ws.id, 'INACTIVE');
      })
      .then(ws => {
        schematicsService
          .applyWorkspaceCommand({
            wId: ws.id,
            refreshToken: refresh_token,
          })
          .then(res => {
            done();
          })
          .catch(err => {
            console.warn(err);
            done(err);
          });
      });
  });
  test('destroyWorkspaceCommand()', done => {
    uploadTarFile()
      .then(ws => {
        delete_wid = ws.id;
        return waitForWorkspaceStatus(ws.id, 'INACTIVE');
      })
      .then(ws => {
        schematicsService
          .destroyWorkspaceCommand({
            wId: ws.id,
            refreshToken: refresh_token,
          })
          .then(res => {
            done();
          })
          .catch(err => {
            console.warn(err);
            done(err);
          });
      });
  });
  test('planWorkspaceCommand()', done => {
    return uploadTarFile()
      .then(ws => {
        delete_wid = ws.id;
        return waitForWorkspaceStatus(ws.id, 'INACTIVE');
      })
      .then(ws => {
        schematicsService
          .planWorkspaceCommand({
            wId: ws.id,
            refreshToken: refresh_token,
          })
          .then(res => {
            done();
          })
          .catch(err => {
            console.warn(err);
            done(err);
          });
      });
  });
  test('refreshWorkspaceCommand()', done => {
    uploadTarFile()
      .then(ws => {
        delete_wid = ws.id;
        return waitForWorkspaceStatus(ws.id, 'INACTIVE');
      })
      .then(ws => {
        schematicsService
          .refreshWorkspaceCommand({
            wId: ws.id,
            refreshToken: refresh_token,
          })
          .then(res => {
            done();
          })
          .catch(err => {
            console.warn(err);
            done(err);
          });
      });
  });
  test('getWorkspaceInputs()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getWorkspace({
          wId: res[0],
        })
        .then(ws => {
          schematicsService
            .getWorkspaceInputs({
              wId: res[0],
              tId: ws.result.template_data[0].id,
            })
            .then(res => {
              done();
            })
            .catch(err => {
              console.warn(err);
              done(err);
            });
        });
    });
  });
  test('replaceWorkspaceInputs()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getWorkspace({
          wId: res[0],
        })
        .then(ws => {
          schematicsService
            .replaceWorkspaceInputs({
              wId: res[0],
              tId: ws.result.template_data[0].id,
              variablestore: [
                {
                  name: 'sample_var',
                  value: 'var1_updated',
                },
              ],
            })
            .then(res => {
              done();
            })
            .catch(err => {
              console.warn(err);
              done(err);
            });
        });
    });
  });
  test('getAllWorkspaceInputs()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getAllWorkspaceInputs({
          wId: res[0],
        })
        .then(res => {
          done();
        })
        .catch(err => {
          console.warn(err);
          done(err);
        });
    });
  });
  test('getWorkspaceInputMetadata()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getWorkspace({
          wId: res[0],
        })
        .then(ws => {
          schematicsService
            .getWorkspaceInputMetadata({
              wId: res[0],
              tId: ws.result.template_data[0].id,
            })
            .then(res => {
              done();
            })
            .catch(err => {
              console.warn(err);
              done(err);
            });
        });
    });
  });
  test('getWorkspaceOutputs()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getWorkspaceOutputs({
          wId: res[0],
        })
        .then(res => {
          done();
        })
        .catch(err => {
          console.warn(err);
          done(err);
        });
    });
  });

  test('getWorkspaceResources()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getWorkspaceResources({
          wId: res[0],
        })
        .then(res => {
          done();
        })
        .catch(err => {
          console.warn(err);
          done(err);
        });
    });
  });
  test('getWorkspaceState()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getWorkspaceState({
          wId: res[0],
        })
        .then(res => {
          done();
        })
        .catch(err => {
          console.warn(err);
          done(err);
        });
    });
  });
  test('getWorkspaceTemplateState()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getWorkspace({
          wId: res[0],
        })
        .then(ws => {
          schematicsService
            .getWorkspaceTemplateState({
              wId: res[0],
              tId: ws.result.template_data[0].id,
            })
            .then(res => {
              done();
            })
            .catch(err => {
              console.warn(err);
              done(err);
            });
        });
    });
  });
  test('getWorkspaceActivityLogs()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getWorkspaceActivityLogs({
          wId: res[0],
          activityId: res[1],
        })
        .then(res => {
          done();
        })
        .catch(err => {
          console.warn(err);
          done(err);
        });
    });
  });
  test('getWorkspaceLogUrls()', done => {
    planWorkspaceAction()
      .then(res => {
        delete_wid = res[0];
        return applyWorkspaceActionByID(res[0]);
      })
      .then(res => {
        schematicsService
          .getWorkspaceLogUrls({
            wId: res[0],
          })
          .then(res => {
            done();
          })
          .catch(err => {
            console.warn(err);
            done(err);
          });
      });
  });
  test('getTemplateLogs()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getWorkspace({
          wId: res[0],
        })
        .then(ws => {
          schematicsService
            .getTemplateLogs({
              wId: res[0],
              tId: ws.result.template_data[0].id,
            })
            .then(res => {
              done();
            })
            .catch(err => {
              console.warn(err);
              done(err);
            });
        });
    });
  });
  test('getTemplateActivityLog()', done => {
    applyWorkspaceAction().then(res => {
      delete_wid = res[0];
      schematicsService
        .getWorkspace({
          wId: res[0],
        })
        .then(ws => {
          schematicsService
            .getTemplateActivityLog({
              wId: res[0],
              tId: ws.result.template_data[0].id,
              activityId: res[1],
            })
            .then(res => {
              done();
            })
            .catch(err => {
              console.warn(err);
              done(err);
            });
        });
    });
  });
});
