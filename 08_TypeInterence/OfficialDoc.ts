//====================================================
//  Best Common Type
//====================================================
// In an array if one type is super type of other then that one type
//is used.
// xy: Array<number> as null is subset of number
let xy = [0, 1, null];

class Animaly {
  animal():void{
    console.log('animal');
  }
}
class Rhinoy extends Animaly {
  rhino(): void {
    console.log('rhino');
  }
}
class Snakey extends Animaly{
  snake(): void {
    console.log('snake');
  }
}
// zooy has type Array<(Rhinoy|Snakey)> not Array<Animal>
//this is becuase there is no new Animal() in the array
let zooy = [new Rhinoy(), new Snakey()];
// zooy2 has type Array<Animaly> as Animaly is common to all
let zooy2 = [new Rhinoy(), new Snakey(), new Animaly()];


//====================================================
//  Contextual Type
//====================================================
// Type inference in the other direction 
// eg) (on RHS), (argument to function calls), (type assertions), 
//(members of object and array), and (return statements) is called
//contextual typing. Obvioiusly typescript has .d.ts file built into
//the compiler to handle all window events, properties, and methods
// Below type of mouseEvent is contextually inferred from 
//window.onmousedown (LHS)
window.onmousedown = function(mouseEvent){
  console.log(mouseEvent.buon)  // mouseEvent has button property 
}


