// Any file containing a top-level `import` or `export` is 
//considered a module. Filenames have defailt of ts extension.

//====================================================
//  Export keyword
//====================================================
// Any declaration can be exported
export var variableModule: string;
export let letModule: string;
export const constModule: string = 'init';
export function functionModule() { }
export class ClassModule { }
export interface InterfaceModule { }
export type typeAliasModule = string;


//====================================================
//  Export statements
//====================================================
class ZipCode {
}
// same as export class ZipCode {}
export { ZipCode };
// Renamed ZipcCode to AnotherName
export { ZipCode as AnotherName };

//====================================================
//  Import Statement
//====================================================
import { ZipCode } from './ZipCodeFile';
import { ZipCode as ZCV } from './ZipCodeFile';
import { AnotherName } from './ZipCodeFile';
// validator.ZipCode
import * as validator from './ZipCodeFile';

//====================================================
//  Default exports
//====================================================
export default class DefaultExp {};
// def === DefaultExp
import def from './AboveFile'; // note no curly braces

//====================================================
//  Re-exports
//====================================================
// import from fakefolder as importedFromAnother and immediately
//export it
export {ImportedFromAnother as ExportToAnother} from "./FakeFolder"

// import * from different files and re-export it as one object.
export * from './SomeFile1';
export * from './SomeFile2';
export * from './SomeFile3';
// import whole object of reexported modules
import * as Some123 from './AboveFile'

//====================================================
// Importing and exporting node modules.
//====================================================
// Note Depending on TypeScript compiler settings `export` and `import`
//gets transpiled to different JavaScript code.
// TypeScript supports `export =` to model the traditional
//CommonJS workflow
// The `export =` syntax specifies a single object that is
//exported from the module.
class Whatever {
}
export = Whatever; // same as module.export = Whatever
import Whatever = require('./Whatever');
export let test = 'method1'; // same as exports.test = 'method1'


//====================================================
//  Ambient Modules
//====================================================
// Provide typings for already existing modules, for import and
//export.
// in .d.ts
// note the string module name, this is needed for require.
// Non-string values are used for normal `import {} from '...'`
declare module 'url'{
  interface Url {
    protocol?: string;
  }
  // same as defining exports.parse
  // later import 'url' will have url.parse
  export function parse(url: string): Url;
}
import url = require('url');
url.parse('stringy');

//====================================================
//  Guidance for structuring modules
//====================================================
//https://www.typescriptlang.org/docs/handbook/modules.html


