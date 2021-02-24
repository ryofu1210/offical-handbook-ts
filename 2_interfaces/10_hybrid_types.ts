interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let counterFunc = getCounter();
console.log(counterFunc)
console.log(counterFunc(10))
console.log(counterFunc.reset())
counterFunc.interval = 5.0;
console.log(counterFunc)

// TODO: もう一度確認
// https://www.typescriptlang.org/docs/handbook/interfaces.html#hybrid-types