//====================================================
//  Global / External-agnostic Libraries
//====================================================
// // to define node module zoo we would do below to make it
// //importable.
// declare namespace zoo {
//   function open(): void;
// }
// declare module 'zoo' {
//   export = zoo;
// }
// // Usage: zoo does not exist here has node module had to be installed
// import x = require('zoo');
// x.open();
// zoo.open();

//====================================================
//  Single Complex Object in Modules(Official Doc)
//====================================================
interface Eagle {
  (kind: string): Eagle;
  new (kind: string): Eagle;
  kind: string;
  fly(): void
}
declare var Eagle: Eagle;
export = Eagle;
// Usage
// import Eagle = require('./eagle');
Eagle('bald').fly();
var eddie = new Eagle('Mille');
eddie.kind = 'golden';


//====================================================
//  Function as a Module
//====================================================
// declare module "say-hello" {
//   function sayHello(name: string): void;
//   export = sayHello;
// }
// // Usage
// import sayHello = require("say-hello");
// sayHello("travis")


//====================================================
//  Options Objects (Official Doc)
//====================================================
declare namespace animalFactory {
  interface AnimalOptionType {
    name: string;
    height?: number;
    weight?: number;
  }
  function create(name: string, animalOptions?: AnimalOptionType): void;
}
// Usage
animalFactory.create("dog");
animalFactory.create("giraffe", { name: "ronald" });
animalFactory.create("panda", { name: "bob", height: 400 });
// Invalid: name must be provided if options is given
// animalFactory.create("cat", { height: 32 });


//====================================================
//  New + callable methods (Official Doc)
//====================================================
interface Widget {
  sprock(): void;
}
interface WidgetFactory {
  new (name: string): Widget;
  (width: number, height: number): Widget;
}
declare var widget: WidgetFactory;
// Usage
var w = widget(32, 16);
var y = new widget('sprocket');






//====================================================
//  Global functions
//====================================================
declare function globalFunc(msg: string): void;
// Usage
globalFunc("test");


//====================================================
//  Function override
//====================================================
// multiple definitions for the same function.
// each function definition must have a unique function signature
declare function trace(arg: string | number | boolean): void;
declare function trace(arg: { id: number; name: string }): void;
// Usage
trace("trace a string");
trace(true);
trace(1);
trace({ id: 1, name: "test" });


//====================================================
//  Function signatures: callback fn
//====================================================
declare function describe(name: string, func: () => void): void;
// Usage
describe("test", function() { });


//====================================================
//  Merging functions and modules
//====================================================
declare function fnWithProperty(id: number): void;
declare module fnWithProperty {
  var name: string;
}
// Usage
fnWithProperty(1);
fnWithProperty.name = "name"


//====================================================
//  declare class is just a class witout implmentation
// to describe what a soon to be class should implement.
//====================================================
//  Class constructor overloads
//-----------------------------
declare class MyClass {
  constructor(id: number, name: string);
  constructor();
}
// Usage
var myClass = new MyClass();
var myClass2 = new MyClass(1, "test");

//  Class properties
//-----------------------------
declare class ClassWithProperty {
  id: number;
}
// Usage
var classWithProperty = new ClassWithProperty();
classWithProperty.id = 1;

//  Class functions
//-----------------------------
declare class ClassWithFunction {
  run(): void;
}
// Usage
var classWithFunction = new ClassWithFunction();
classWithFunction.run();

//  Static properties
//-----------------------------
declare class StaticClass {
  static staticId: number;
  static staticFunc(): void;
}
// Usage
StaticClass.staticId = 1;
StaticClass.staticFunc()


//====================================================
//  Nested Namespaces
//====================================================
declare module Tier1 {
  module Tier2 {
    module Tier3 {
      function log(msg: string): void
    }
  }
}
// Usage
Tier1.Tier2.Tier3.log('test');


//====================================================
//  Class namespaces
//====================================================
declare module Tier1 {
  module Tier2 {
    class NestedClass{}
  }
}
// Usage
var nestedClass = new Tier1.Tier2.NestedClass();



