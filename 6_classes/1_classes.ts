class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
console.log(greeter) // => Greeter { greeting: 'world' }
console.log(greeter.greet) // => [Function]
console.log(greeter.greet()) // => Hello, world
