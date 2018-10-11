const application = require("application");
const isIOS = require("platform").isIOS;

if (isIOS) { 
  GMSServices.provideAPIKey("AIzaSyDK5FnylCgO8s8L6usEMS7CFbVZfqspyXs");
}

application.run({ moduleName: "app-root" });