// type assertionは他の言語のキャスト

let someValue: unknown = "this is a string";

// let strLength: number = someValue.length; // プロパティ 'length' は型 'unknown' に存在しません。
let strLength: number = (someValue as string).length;

// The other version is the “angle-bracket” syntax:
let someValue2: unknown = "this is a string";

let strLength2: number = (<string>someValue2).length;