// @flow
declare type StatusResponse = {
  Version: string,
  Message: string,
  Running: boolean,
  Commit: string,
};

declare type VersionResponse = {
  build: string,
  lbrynet_version: string,
  os_release: string,
  os_system: string,
  platform: string,
  processor: string,
  python_version: string,
};

declare type UploadResponse = {
  success: boolean,
  message: string,
};

//
// Types used in the generic LbryFirst object that is exported
//
declare type LbryFirstTypes = {
  isConnected: boolean,
  connectPromise: ?Promise<any>,
  connect: () => void,
  lbryFirstConnectionString: string,
  apiRequestHeaders: { [key: string]: string },
  setApiHeader: (string, string) => void,
  unsetApiHeader: string => void,
  overrides: { [string]: ?Function },
  setOverride: (string, Function) => void,

  // LbryFirst Methods
  stop: () => Promise<string>,
  status: () => Promise<StatusResponse>,
  version: () => Promise<VersionResponse>,
  upload: (params: {}) => Promise<UploadResponse>,
};
