// TypeScript's core principle is that type-checking focuses on the
//shape of value. (duck typing). Compiler only checks that at least
//the ones required are present and match the types required, most
//of the time.


//====================================================
//  Interface describe the public and instance side
//====================================================
interface ClockInterface {
  // pulbic by default
  currentTime: Date;
  // not allowed
  // constructor(h: numer){}
  // not allowed
  // static staticMethod: string;
}


//====================================================
//  Excess Property Checks
//====================================================
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number} {
  return { color: '', area: 1 };
}
// Why is there an error when color is optional? and interface
//only check that at least the ones required are present in which case
//none is required as all are optional?
let mySquare = createSquare({ colour: 'red', width: 100 });
// or
let mySquareConfig: SquareConfig = { colour: 'red', width: 100 };
// Object literals get special treatment and undergo excess property checking
//when assigning them to other variables, or passing them as arguments. 
// If an object literal has any properties that the "target type" does not have
//you will get an error

// Get around excess property checks by casting
let mySquare1 = createSquare(<SquareConfig>{ colour: 'red', width: 100 });

// Or get around excess property checks by  assigning to variable 
//for implicit type.
var squareOptions = { colour: 'red', width: 100 };
let mySquare2 = createSquare(squareOptions);


//====================================================
//  Function Types
//====================================================
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// when Function interface is defined we don't need to define
//parameter type or return type.
let mySearch: SearchFunc = function(source, subString) {
  return true;
}


//====================================================
//  Array Types / Dictionary Types
//====================================================
// Array types have an index type that describes the types allowed
//to index the object, along with the corresponding return type for
//accessing the index.
interface StringArray {
  // this restricts the value returned from number indexee, i.e.
  //indexer is a string we could use Interface for return type of indexer.
  [index: number]: string;
}
let myArray: StringArray = ['bob', 'fred'];

interface NumberDictionary {
  [index: string]: number;
  length: number;
  // name: string; // error, the type of 'name' is not  a subtype of indexer
}

//====================================================
//  Interfaces Extending Classes
//====================================================
// Interface inherits the members of the class but not their
//implementations. Interface inherit even the private and protected
//members of the base class. When you create an interface that extends
//a class with private or protected members, that interface type can
//only be implemented by that class or a subclass of it.
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
// SelectableControl contains private state property of Control class
// Private members require that it originates in the same declaration.
// That is only descendants of Control will have state private member
//that originates in the same declaration, hence SelectableControl
//which has private state property originated from Control declaration
//only descendants of Control can implement SelectableControl


//====================================================
//  Extending Interfaces
//====================================================
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke{
  sideLength: number;
}
let square = <Square>{};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;


//====================================================
//  Hybrid Types
//====================================================
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function(start: number): string{ 
    return "";
  };
  counter.interval = 123;
  counter.reset = function() { };
  return counter;
}
let c2 = getCounter();
c2(10);
c2.reset();
c2.interval = 5.0;



