interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr1: string = myArray[0];

console.log(myStr1);

// There are two types of supported index signatures: string and number.
// It is possible to support both types of indexers, but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer.
// This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object.
// That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string), so the two need to be consistent.
//
// index signatureをnumber型にしても、内部的にstringにconvertされるため、stringでアクセスできる
let myStr2: string = myArray["0"];

console.log(myStr2);

// TODO: ここがあまり理解できていない
// https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}