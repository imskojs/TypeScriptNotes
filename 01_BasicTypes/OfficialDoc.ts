//====================================================
//  Boolean
//====================================================
let ok: boolean = false;


//====================================================
//  Number
//====================================================
// Floating point values === number
// hexadecimal === number
// decimal literals === number
let integer: number = 6;
let float: number = 6.0;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


//====================================================
//  String
//====================================================
let namey: string = 'bob';
let sentence: string = `Hello ${namey}`


//====================================================
//  String literal
//====================================================
let certainString: 'certainString' = 'certainString';


//====================================================
//  Array
//====================================================
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


//====================================================
//  Tuple
//====================================================
// array and tuple is not compatible.
let x: [string, number];
x = ['hello', 10];
// when accessing/setting an element outside the set of known incides, 
//a union type is used instead
x[3] = 'world'; // Ok, string can be assigned to (string}number)



//====================================================
//  Enum
//====================================================
enum Color {
  Red = 0,
  Gree, Blue
}


//====================================================
//  Any
//====================================================
// values from dynamic content like user input
// Basically let values pass through compile time check
// noImplicitAny: false option of tsconfig 
let notSure: any = 4;
notSure.ifItExists(); // compiler does not check any type mehtods
let list3: Array<any> = [1, 'true', true];
list3[2] = 100;
// // DO NOT USE Object
// // A variable of type Object only allow you to assign any value to them
// //you can't call arbitrary methods on them,, even ones that actually
// //exist
// let prettySure: Object = {x: 4};
// prettySure.toFixed();


//====================================================
//  Void
//====================================================
function warnUser(): void {
  alert("this");
}
// not helpful to declare void type on variable.
let unusable: void = undefined;
// we can always assign udefined or null on some type
let voidish1: string = null;
let voidish2: number = undefined;


//====================================================
//  Type assertions
//====================================================
let someValue1: any = 'this';
// in JSX we must use as.
let strLength: number = (someValue1 as string).length;
let strLength2: number = (<string>someValue1).length;


