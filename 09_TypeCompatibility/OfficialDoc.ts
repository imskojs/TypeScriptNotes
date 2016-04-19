// Type is compatible if it looks the same, because TypeScript uses
//structural typing.
class Named {
  name: string;
}
class Person {
  name: string;
}
let p = new Named();
p = new Person(); // it's ok becuase named and person look the same.


//====================================================
//  Only required property are checked
//====================================================
let x1: Named;
let y = { name: 'Alice', location: 'Korea' };
x1 = y; // as x1 requires only named property to exist, no error.


//====================================================
//  Comparing two functions
//====================================================

// Input types (arguments)
//----------------------------------------------------
// It's like opposite... think of it as JavaScript can have optional
//arguments. That is ignoring extra function parameters is actaully
//common in JavaScript.
let x2 = (a: number) => 0;
let y2 = (b: number, s: string) => 0;
// every parameter of x2 has a corresponding compatible parameter in y2
//so the assignment is allowed
y2 = x2;
// every parameter of y2 does not have a corresponding compatible 
//parameter in x2
x2 = y2;

// Output types (returns)
//-----------------------------------------------------
// Same as normal structural type checking
let x3 = function() { return { name: 'Alice' } };
let y3 = function() { return { name: 'Ali', location: 'Korea' } };
x3 = y3; // ok as y3 has name
y3 = x3; // error x3 do not have location.


//====================================================
//  Function parameter Bivariance.
//====================================================
// When comparing the types of function parameters, assignment succeeds
//if either the source parameter is assignable to the target parameter,
//or target parameter is assignable to source parameter.
interface Basey {
  id: string;
};
interface Childy extends Basey {
  name: string;
  email: string;
}
function baseyCallback(handler: (n: Basey) => void){
  console.log('basey');
}
function childyCallback(handler: (n: Childy) => void){
  console.log('childy');
}
// Basey requires at least id which childy has so no surprise here.
baseyCallback((e: Childy) => {
  console.log('childy');
})
// Childy would normally require at least all three properties id,
//name, email but as target parameter(Basey) is assignable to source
//paramemter(Childy) it is ok.
childyCallback((e: Basey) => {
  console.log('basey');
})


//====================================================
//  Optional Parameters and Rest parameters
//====================================================
// * optional and required parameters are type compatible
interface OptionalArgFunc {
  (optionalX?: string): void;
}
var optionaly: OptionalArgFunc = (requiredX: string): void => {
}
interface RequiredArgFunc {
  (requiredY: string): void;
}
var requiredy: RequiredArgFunc = (optionalY?: string):void => {
}

// extra optional parameters of the source type are not an error
interface ExtraSourceArg {
  (requiredX1: string, requiredX2: string, extraOptionalX?: string): void
}
var extraSourceArg: ExtraSourceArg = (y: string): void => {}

// optional parameters of the target type without corresponding 
//parameters in the source type are not an error.
interface ExtraTarget {
  (optionalX: string, extraOptionalX: string): void
}
var extraTarget: ExtraTarget = (x: string, y: string, z?: string): void => {}


//====================================================
//  Function with overloads
//====================================================
// each overload in the source type must be matched by the compatible
//signature on the target type.



//====================================================
//  Enums
//====================================================
// Enums are compatible with numbers vice versa
enum Status {
  Ready, Waiting
}
let statusy: number = Status.Ready;
let statusy2: Status = 3;

// Enum values from different enum types are incompatible.
enum Colory {
  Red, Gree, Blue
}
let statusy3: Status = Color.Gree; // error

//====================================================
//  Classes
//====================================================
// Only members of the instance are compared. That is static members
//and constructors do not affect compatibility
class Animalyz {
  feet: number;
  constructor(name: string, numFeet: number) {
  }
}
class Size {
  feet: number;
  constructor(numFeet: number) {
  }
}
let ay: Animalyz;
let s: Size;
ay = s // Ok
s = ay // Ok

// If the instance contains a private member, then the target type must
//also contain a private member that originated from the same class. Likewise, the same applies for an instance with a protected member


//====================================================
//  Generics
//====================================================
// Generic type that has its type arguments specified acts just like
//a non-generic type. 
interface NotEmpty<T> {
  data: T;
}
let x11: NotEmpty<number>;
let y11: NotEmpty<string>;
x11 = y11 // number is not compatible with string

// Generic type that do not have their type arguments specified,
//compatibility is checked by specifying any in place of all
//unspecified type arguments
let identity1 = function<T>(x: T): T{
  return x;
}
let identity2 = function<U>(x: U): U {
  return x;
}
identity1 = identity2; // (x: any)=> any matches (y:any)=> any
