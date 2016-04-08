# For .d.ts files

## Workflow(Official Doc)
* best way to write a .d.ts file is to start from the documentation of the library, not the code.


## Namespacing(Official Doc)
* If the type can be named without risk of colliding with other types, prefer placing it in the global namespace.  
* If would likely to collide use namespace. For example
```typescript
module http {
  interface RequestObject {
    //stuff
  }
}
// usage;
function requestHandler(req: http.RequestObject): void {}
// Rather than;
interface RequestObject {
  // stuff
}
```

## Callbacks (Official Doc)
* Do not mark parameters of callback as optional, think "What parameters will be provided" Not "What parameters will be consumed?"


## Annonymously-typed vs Interfaced-typed
* Consider below code  
```typescript
// Annonymously-typed var
declare var MyPoint: {x: number; y: number;};
// Interfaced-typed var
interface SomePoint {x: number; y: number;}
declare var MyPoint: SomePoint;
```
* Above codes are identical except that interfaced typed var can be extended through declaration merging
```typescript
interface SomePoint {z: number;}
MyPoint.z = 4;
```


## interface is for when you simply want to describe the shape of an object.
* if you simply implement an interface(eg. class x implements Ix) that should have been a declare class. You're going to have to re-implement all the members yourself and won't be taking advantage of any code re-use from the would-be base class

## declare class is for when you want to describe an existing class
* If you inherit from a class using extends (regardless of whether the base type was a declare class or a regular class) the compiler is going to generate all the code to hook up the prototype chain and forwarding constructors and what not.
* If you try to inherit from a declare class that should have been an interface, you are going to have a runtime error because that generated code will be referring to an object with no runtime manifestation.

## Rule of thumb for choosing between interface and declare class in .d.ts files
The only difference between interface and declare class is that you can't new an interface. However, if you intend to extend/implement one of these types in a new class, you absolutely have to have chosen correctly between interface and declare class. Only one of them will work.

Is the name of the type aligning with a constructor function (something invokable with new) that's actually present at runtime (e.g. Date is, but JQueryStatic is not)? If no, you definitely want interface

Am I dealing with a compiled class from another TypeScript file, or something sufficiently similar? If yes, use declare class

## module is used for describing a namespace usually a namespace.


# Module merging.

* Modules can merge with modules, interfaces, classes, and enums but not with variables.
* Classes can merge with modules, enums but not with classes, variables or interfaces

# Private properties can be omitted.

* Functions or properties that are considered as private do not need to be exposed via the declaration file.






