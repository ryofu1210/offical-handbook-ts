// It can be tempting to think that the types Number, String, Boolean, Symbol, or Object are the same as the lowercase versions recommended above.
// These types do not refer to the language primitives however, and almost never should be used as a type.

function reverse1(s: String): String {
  return s.split("").reverse().join("");
}

console.log(reverse1("hello world"))


function reverse2(s: string): string {
  return s.split("").reverse().join("");
}

console.log(reverse2("hello world"))

// 結局、大文字、小文字の型で違いはあるのか？？
