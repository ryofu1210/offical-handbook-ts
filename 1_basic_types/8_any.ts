declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");


// Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist.
// These properties include functions and TypeScript will not check their existence or type:
let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();

let strictlyTyped: unknown = 4;
strictlyTyped.toFixed(); // プロパティ 'toFixed' は型 'unknown' に存在しません。


// The any will continue to propagate through your objects
let looselyTyped2: any = {};
let d = looselyTyped2.a.b.c.d;
//  ^ = let d: any