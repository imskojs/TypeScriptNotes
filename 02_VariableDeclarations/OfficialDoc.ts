//====================================================
//  Array destructuring
//====================================================
let input: Array<number>= [1, 2];
let [first, second]: Array<number> = input;
console.log(first); // output 1
console.log(second); // output 2

// Assignment without declaration(already existing first, second).
// swap already existing values, Arrays are used as a vehicle here
//Note there is no let.
[first, second] = [second, first];

// Destructuring works with parameters to a function.
function f1([first, second]: Array<number>){
  console.log(first); // output 1
  console.log(second); // output 2
}
f1(input);

// Variable for the remaining items.
let [firsty, ...rest]: Array<number> = [1, 2, 3, 4];
console.log(firsty); // output 1
console.log(rest); // output [2, 3, 4]

// Ignore items
let [firsta]: Array<number> = [1, 2, 3, 4];
console.log(firsta) // output 1

let [, secondy, , fourthy]: Array<number> = [1, 2, 3, 4];
console.log(secondy) // output 2
console.log(fourthy) // output 4


//====================================================
//  Object Destructuring
//====================================================
let obj : {a: string, b: number, c: string, d: number, ez?: string} = {
  a: 'foo', b: 12, c: 'bar', d: 111
};
let {a, b}: {a: string, b: number} = obj;
console.log(a); // output 'foo'
console.log(b); // output 12

// Assignment without declaration (already existing a, b)
({ a, b } = { a: 'baz', b: 101 })

// Property renaming, becuase of this property renaming we have to
//set type for whole destructurig object outside.
let {a: newName1, b: newName2}: {a: string, b: number} = obj
console.log(newName1) // output 'foo'  (obj.a)
console.log(newName2) // output 12  (obj.b)

// Default values
let {c, ez  = 'defaultsTo'} = obj; // ez had to be optional


//====================================================
//  Rule of Thumb
//====================================================
// Only use simple destructuring.
// It seems Interface can be used with destructuring for effecient variable
//assigning and renaming.


