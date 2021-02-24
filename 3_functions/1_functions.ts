// Named function
function add1(x, y) {
  return x + y;
}

console.log(add1(1, 2))

// Anonymous function
let myAdd1 = function (x, y) {
  return x + y;
};

console.log(myAdd1(1, 2))


let z = 100;

function addToZ(x, y) {
  return x + y + z;
}

console.log(addToZ(1, 2))
// => 103