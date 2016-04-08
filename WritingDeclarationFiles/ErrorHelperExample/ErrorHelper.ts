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
var successMessage = { 
  responseText: { 
    "failure": false
  } 
};


if (ErrorHelper.containsErrors(failureMessage))
  ErrorHelper.trace(failureMessage);
if (ErrorHelper.containsErrors(failureMessageString))
  ErrorHelper.trace(failureMessageString);
if (!ErrorHelper.containsErrors(successMessage))
  ErrorHelper.trace("success");





