interface ResponseType {
  responseText: FailureMessageType;
}
interface FailureMessageType {
  failure: boolean | string;
  errorMessage?: string;
}
// properly work
declare module ErrorHelper {
  function containsErrors(response: ResponseType): any;
  function trace(message: any): any; 
}

// works but not proper // refer to Notes.md
// declare class ErrorHelper {
//   static containsErrors(a: any): any;
//   static trace(a: any):any
// }

// not work // refer to Notes.md
// interface ErrorHelper {
//   containsErrors(a: any): any;
//   trace(a: any): any;
// }