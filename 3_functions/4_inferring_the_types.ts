// The parameters 'x' and 'y' have the type number
let myAdd4 = function (x: number, y: number): number {
  return x + y;
};

// myAdd has the full function type
let myAdd4_2: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};