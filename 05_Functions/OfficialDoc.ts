// As long as the parameter types line up, it's considered a valid type
//for a function. As an example below, it's ok to have different
//parameter name.
let myAdd: (baseVal: number, increment: number) => number =
  function(x: number, y: number): number { return x + y;}
  // or (x: number, y: number): number => {return x + y;}

//====================================================
//  Contextual typing (function type inference)
//====================================================
// when type is assigned no need to explicitly state types on the
//RHS.
let myAdd2: (baseValue: number, inc: number) => number = 
  function(x, y) { return x + y;}


//====================================================
//  Optional/Default Parameters
//====================================================
// Any optional parameters if any must follow required parameters.
function test1 (x: string, y?: string): void {
}
// However default parameters do not need to follow required parameter.
function test2(x: string = 'test', y: string): void {
}


//====================================================
//  Rest Parameters
//====================================================
function test3(firstName: string, ...restStrings: Array<string>): boolean {
  return Array.isArray(restStrings);
}
// Rest params can also be used in defining function types.
let test4: (fName: string, ...rest: Array<string>) => boolean = test3;


// this is normally created when the function is called.
// but with lambda(arrow function) this will capture the this when the
//function is created rather than when it is invoked.


//====================================================
//  Function overloads
//====================================================
// Note that last pickCard is not a overload function. It is an
//implementation. Overload functions only have signatures.
function pickCard(x: Array<{ suit: string; card: number; }>): number;
function pickCard(x: number): number;
function pickCard(x: any): any {
  if(typeof x === 'object'){
    let pickedCard = Math.floor(Math.random() * x.length);
  }
}

