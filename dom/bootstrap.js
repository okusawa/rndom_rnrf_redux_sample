import { RNDomInstance } from "react-native-dom";

// Path to RN Bundle Entrypoint ================================================
const rnBundlePath = "./entry.bundle?platform=dom&dev=true";

// React Native DOM Runtime Options =============================================
const ReactNativeDomOptions = {
  enableHotReload: false,
  nativeModules: []
};

// App Initialization ============================================================
const app = new RNDomInstance(
  rnBundlePath,
  "rndom_rnrf_redux_sample",
  document.body,
  ReactNativeDomOptions
);

app.start();
