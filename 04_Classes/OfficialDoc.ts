// Class itself is singleton. Static properties if used in instantiated method
//will affect all instances of the Class.

//====================================================
//  Abstract Classes
//====================================================
// 'abstract' keyword only allowed on class or method not constructor
//or property
// Interfaces only define what instantiated public properties, can a
//class have. It does not have anyway to restrict static, private,
//and/or protected properties. That's where Abstract Classes come in. 
// 'abstract' keyword is used to define abstract methods which are
//signals only and no implementations. without abstract keyword method
//must contain implementations. With 'abstract' keyword it is like
//an interface and implementation must be done in derived class, that
//is extendee.
// We can think of abstract class as a class that sets default class
//if implementation is specified, or cannot be abstracted such as
//constructor function. And interface with only methods if abstract
//is specified. We do not implement(i.e. Class A implements AbstractB)
//but rather extend (i.e. Class A extends AbstactB)
// This means as with all extendee we can override default members.
// Note that we cannot abstract static property, just like interface
//cannot. Think of abstract keyword having the same behaviour as
//interface minus the fact that abstarct cannot be done on property.
// In such a case(eg static cannot be set with abastract) we simply do 
//not use an abstract keyword and define implementation or fake 
//implementation which can be overriden in extendee.
abstract class AbsClass {
  static name: string;
  constructor(){
    console.log('test');
  }
  abstract print(): void;
}

class Child3Class extends AbsClass {
  print(): void {
    console.log('test');
  }
  // constructor is inherited, static member is inherited
  // We can override constructor like this;
  constructor() {
    // code...
    super();
  }
}


//====================================================
//  Instance side and static side
//====================================================
// Class declaration creates two things: a type representing instances
//of the class and a constructor function.
class Greeter {
  static hello: string = 'Hello';
  greet: string;
}

// assign the type of the symbol called Greeter which is the type
//of the constructor function.
let geeky: typeof Greeter = Greeter;
// Greeter as the type of instances of the class Greeter
let geeky2: Greeter = new Greeter();


//====================================================
//  Using a class as an interface
//====================================================
// Because classes create types, you can use them in the same places
//you would be able to use interfaces.
class Point {
  x: number;
  y: number;
}
interface Point3d extends Point {
  z: number
}
let point3d: Point3d = { x: 1, y: 2, z: 3 };


//====================================================
//  Inheritance, private, public
//====================================================
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0): void{
    console.log('test');
  }
}
class Horse extends Animal {
  // Inherit name property, and constructor from animal
  //name: string;
  //constructo(theNmae: string){ this.name = theName  }
  // move is overriden from base class but has access to base class
  //using super.
  move(numeric: number): void {
    console.log('before test console in parent class')
    // after console.log above run move furnction of Animal
    super.move(numeric);
  }
  // all methods, and properties are public by default.
  public move2(test: string): void {
  }
  // If private property wanted we need to specify private
  private move3(test: string): void {}


}
// As typescript only checks "at least" required stuff is there,
//assigning Horse to Animal class won't show error
let tom: Animal = new Horse('test');
// however movw2 is not inherited from base class so would show error
//when called.
tom.move2();


//====================================================
//  Comparability
//====================================================
// TypeScript is a structural type system, i.e. it only checks "at least"
//required properties.
// When we compare two different public types, regardless of where they came from
//if the types of all public members are compatible, that is all of same name
//and property, then we say the types themsevles are compatible, that is
//we can reassign a variable that holds class with another compatible class
// However, when comparing types that have private and protected members,
//for private or protected member to be compatible they must originate
//from the same declaration(eg class)

// Public Example
class Public {
  name: string;
  publicMethod(): void {}
}
class Public2 {
  name: string;
  publicMethod(): void {}
}
var pub: Public = new Public2();

// Private Exampel
class Private {
  private name: string;
  privateM(): void {}
}
class SubPrivate extends Private2 {}
class SubPrivate2 extends Private2 {
  // private name is overridden hence from different declaration.
  private name: string;
}
class Private2 {
  private name: string;
  privateM(): void {}
}
// Error as private properties are from different declaration.
var priv: Private = new Private2();
// static name is inherited i.e they are from the same declaration hence
//no error
var subPriv: SubPrivate = new Private2();
// overriding private name with private name leads to different declaration
//hence error
var subPriv2: SubPrivate2 = new Private2();


//====================================================
//  Private Properties of Parent
//====================================================
// Private properties are not usable by inheriting class. only way to
//use it within sub-class of parent class' private property is to
//use public property of parent class which accesses the parent private
//property mehtod
class ParentWithPrivateMember {
  private name: string;
  print(): string {
    return this.name;
  }
}
class Child1 extends ParentWithPrivateMember {
  printFromChild(): string {
    // not allowed to access inherited private parent member
    return this.name;
  }
}
let child = new Child1();
child.name // not allowed to access
child.print()  // returns parent's name


//====================================================
// Protected Properties of Parent
//====================================================
// Protected properties are the properties that are private but parent protected
//property can be accessed within child's instantiation methods.

// protected static properties behave the same with public protected property
//note that static properties are only accessible by static methods
class ParentProtected {
  protected name: string;
  protected static name2: string;
  static test2(){
    return this.name2;
  }
}
class ChildInheritProtected extends ParentProtected {
  test(): string{
    // static mthod is not inherited eventhough it is protected and not private.
    console.log(this.name2)
    // protected public property is inherited 
    return this.name;
  }
  static test3(): string{
    return this.name2
  }
}


//====================================================
//  Parameter Properties
//====================================================
// by appending "public ", "private ", "protected " in front of arguments passed
//into constructor function, we can set properties automatically. Note we don't
//have to do anything with that function. rather than just passing it as arguments.
class AutoProperty {
  constructor(
    private name: number,
    public name2: number,
    protected name3: number
  ) {
    // code...
  }
}





