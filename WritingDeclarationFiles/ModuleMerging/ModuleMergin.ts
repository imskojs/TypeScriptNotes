// Consider below.
declare module MergedModule {
  function A(): void;
}

declare module MergedModule {
  function B(): void;
}

// TypeScript compiler will merge these two modules as if they were
//a single definition as if it were like below;
// declare module MergedModule {
//   function A(): void;
//   function B(): void;
// }
MergedModule.A();
MergedModule.B();
