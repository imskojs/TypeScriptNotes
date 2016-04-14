// Generics can be created for functions, interfaces, and classes only
// There is no generics for Enums and namespaces.
// Generics for class only work with instance side.
//====================================================
//  Type argument inference.
//====================================================
function identity<T>(arg: T): T {
  return arg;
}
let explicit = identity<string>('stringy');
// Compiler set the value of T for us automatically based on the type
//of the argument.
// But for complex types, eg) interfaces, we need to pass in generic
//type explicitly.
let output = identity("stringy")

function log<T>(arg: Array<T>): Array<T>{
  return arg;
}

//====================================================
//  Generic types have any by default
//====================================================
// We cannot use any method from arg with type T as T is not defined.
//Only methods available to all Objects of javascript can be used.
// T by default is any and all type.
function logging<T>(arg: T): T {
  // console.log(arg.length)
  return arg;
}


//====================================================
//  Type of generic function
//====================================================
let myIdentity: <T>(arg: T) => T;
// or since function is really an object we could pass object literal
//This shows that interface for a function is really taking advantage
//of the fact that function is an object.
let myIdentity2: { <T>(arg: T): T };


//====================================================
//  Generic interface
//====================================================
interface GenericIdentityFn {
  <T>(arg: T): T;
}
// this is the same as myIdentity, myIdentity2
let myIdentity3: GenericIdentityFn;


//====================================================
//  Non-generic function signiture from generic 
//====================================================
// Note we have generic type on interface itself which must provide
//actual type when assiging type.
interface GenericIdentityFn2<T> {
  <T>(arg: T): T;
}
// Need to assign <T>
let myIdentity4: GenericIdentityFn2
// Now logging is locked to use string.
let myIdentity5: GenericIdentityFn2<string> = logging;


//====================================================
//  Generic Classes
//====================================================
// only instance side can use generics
class GenericNumber<T>{
  static noGenericAval: T;
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();


//====================================================
//  Generic Constraints
//====================================================
// As generic types have any and all type, when we define functions
//we cannot use properties that may or maynot be there for variables
//with generic type T. We can use interface to restrict or signal
//which methods would be available. Note when we signal we are also
//restricting which types can be passed to argument(in this case)
interface Lengthwise {
  length: number;
}
// here we extend soon to be an interface within a function definition
//to have Lengthwise interface. i.e. we are extending T interface with
//Lengthwise Interface.
function loggingId<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg
}
// when generic is exteded the args have to have length property
loggingId(3) // error 3 does not have length property
loggingId([]) // ok array has length property.
// Remember typescript is structurally typed that means only shape
//matters. here the shape requires length property to be available
loggingId({length:2}) // ok object has key length

// Type parameter cannot be used in generic constraint.
function find<T, U extends T>(n: T, s: U){}


//====================================================
//  TODO: Using Class Types in Generics.
//====================================================
function findKeeper<A, K>(
  a: {
    new (): A; 
    prototype: {keeper: K}
  }
): K {
  return a.prototype.keeper;
}

