//====================================================
// Consider we have following non-typescript ErrorHelper Object.
// There is  no documentation, best way to define type is by looking at usage example
//====================================================
var ErrorHelper = {
  containsErrors: function(response) {
    if (!response || !response.responseText) {
      return false;
    }
    var errorValue = response.responseText;
    if (String(errorValue.failure) === 'true' || Boolean(errorValue.failure)) {
      return true;
    }
    return false;
  },

  trace: function(msg) {
    var traceMessage = msg;
    if (msg.responseText) {
      traceMessage = msg.responseText.errorMessage;
    }
    console.log("[" + new Date().toLocaleDateString() + "] " + traceMessage);
  }
};

//====================================================
//  Usage
//====================================================
var failureMessage = {
  responseText: {
    "failure": true,
    "errorMessage": "Unhandled Exception"
  }
};
var failureMessageString = {
  responseText: {
    "failure": "true",
    "errorMessage": "Unhandled Exception"
  }
};
var successMessage = { responseText: { "failure": false } };

if (ErrorHelper.containsErrors(failureMessage))
  ErrorHelper.trace(failureMessage);
if (ErrorHelper.containsErrors(failureMessageString))
  ErrorHelper.trace(failureMessageString);
if (!ErrorHelper.containsErrors(successMessage))
  ErrorHelper.trace("success");


//====================================================
//  Lets check ErrorHelper.ts, and typings/custom/ErrorHelper.d.ts
//====================================================
