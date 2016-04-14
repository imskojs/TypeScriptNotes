// Enums are set of named numeric constants
enum Direction {
  Up = 1,
  Down, //= 2
  Left, //= 3,
  Right = Left + 1 //= 4
}
//====================================================
// Forward and reverse mapping
//====================================================
let upNumber = Direction.Up; // upNumber === 1
let up = Direction[1]; // up === 'Up'

//====================================================
//  Constant Enum
//====================================================
// const enums are removed during compilation, hence there is no
//reverse mapping.
const enum Dir {
  Up,
  Down
}
let directions = [Dir.Up, Dir.Down]; // transpiles to [0, 1]


//====================================================
//  Ambient Enums
//====================================================
// Ambient stuffs are used to describe already existing code.
// For non-const ambient enums member that does not have initializer
//is considered computed.
declare enum Di {
  A = 1,
  B,
  C = 2
}




