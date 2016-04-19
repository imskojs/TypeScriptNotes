//====================================================
//  Union Types
//====================================================
// If we have a value that has a union type, we can only access
//members that are common to all types in the union
function returnPrimitive(): number|string|boolean {
  var x: number | string | boolean;
  return x;
}
var x13 = returnPrimitive();
x13.split() // error split only available for String only
x13.toString(); // OK toString method available for all members
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}
let fishBird: Fish | Bird;
fishBird.fly(); // error fly only available for Bird
fishBird.layEggs(); // Ok avaialable for both Bird and fish


//====================================================
//  Type Guards and Differentiating Types
//====================================================
// Type assertion.
if(fishBird.swim) { // error before even checking the existence
}
if((<Fish>fishBird).swim){ // need to type assert for this to work
  (<Fish>fishBird).swim();
} else { // unlike methods below type assertion doesn't get narrowed down
  (<Bird>pet).fly(); 
}
// everytime I use fishBird I need to type assert which is annoying

// Type guard with predicate function which sole purpose
//is to check the type of parameter by returning type predicate.
function isFish(pet: Fish|Bird): pet is Fish {
  // logic that determines that pet is Fish.
  return (<Fish>pet).swim !== undefined;
}
var pet: Fish|Bird = { swim: function():void{} , layEggs: function(): void{}};
if(isFish(pet)){
  pet.swim();
} else { // with type guard it know if not fish it must be bird.
  pet.fly();
}
// Writing a function just to check the type is... well an overkill.

// For primitive types we can simply use `typeof` to type guard
if (typeof x13 === 'number'){
  let vvv: Array<number> = [x13];
} else if (typeof x13 === 'string'){
  let vvv: Array<string> = x13.split(',');
} else { // since x13 is number|string|boolean it narrows to boolean here
  let booly: boolean = x13;
}

// Instanceof type guards
interface Padder {
  getPaddingString(): string
}
// note private variables.
class SpaceRepeatingPadder implements Padder {
  private numSpaces: number;
  constructor( numSpaces: number) {this.numSpaces = numSpaces; }
  getPaddingString(): string {
    return Array(this.numSpaces + 1).join(" ");
  }
}
class StringPadder implements Padder {
  private value: string;
  constructor(value: string) { this.value = value;}
  getPaddingString(): string {
    return this.value;
  }
}
function getRandomPadder(): SpaceRepeatingPadder|StringPadder {
  return Math.random() < 0.5 ?
    new SpaceRepeatingPadder(4) :
    new StringPadder("  ");
}
let padder: SpaceRepeatingPadder|StringPadder = getRandomPadder();
// The right side of the instanceof needs to be a constructor function
//i.e. class.
if (padder instanceof SpaceRepeatingPadder) {
  padder; // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
  padder; // type narrowed to 'StringPadder'
}


//====================================================
//  Intersection Types
//====================================================

