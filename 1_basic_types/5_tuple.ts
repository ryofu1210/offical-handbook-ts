// Declare a tuple type
// Tuple types allow you to express an array with a fixed number of elements whose types are known
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

console.log(x[0].substring(1))

console.log(x[1].substring(1)) // プロパティ 'substring' は型 'number' に存在しません。ts(2339)

x[3] = "world"; // 長さ '2' のタプル型 '[string, number]' にインデックス '3' の要素がありません。

console.log(x[5].toString()); // 長さ '2' のタプル型 '[string, number]' にインデックス '5' の要素がありません。