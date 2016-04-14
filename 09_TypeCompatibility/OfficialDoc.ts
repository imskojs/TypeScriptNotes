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
//name, email but as target parameter(Childy) is assignable to source
//paramemter Basey it is ok.
childyCallback((e: Basey) => {
  console.log('basey');
})
