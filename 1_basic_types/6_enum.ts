enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;

console.log(c)

let r: Color = Color.Red;

console.log(r)

let b: Color = Color.Blue;

console.log(b)

enum Color2 {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color2[2];

// Displays 'Green'
console.log(colorName);