// Symbols only exist in ES6 so set compile to es6 rather tahn es5
// Symbols are unique and immutable 7th type.
// It has all string like property, it is mainly used to
//avaoid conflict names.

// The string 'key' is used for debugging purposes.
let sym1 = Symbol('key');
let sym2 = Symbol('key');

//====================================================
//  Symbols as object, or class properties.
//====================================================
let sym = Symbol();
// variables can be used in obj/class to set property name.
//[sym] will be evaluted to get the value from sym variable and
//used as a property name (string)
let obj1 = {
  [sym]: 'value'
};
console.log(obj1[sym])

const getClassNameSymbol = Symbol();
class C {
  [getClassNameSymbol](){
    return "C";
  }
}
let c1 = new C();
let className = c1[getClassNameSymbol](); // "C"


