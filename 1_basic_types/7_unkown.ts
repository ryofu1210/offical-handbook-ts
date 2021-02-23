let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;



declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
const aNumber: number = maybe;

// If you have a variable with an unknown type, you can narrow it to something more specific by doing typeof checks, comparison checks, or more advanced type guards that will be discussed in a later chapter:
if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe;
  // So, it cannot be a string
  const aString: string = maybe; // 型 'boolean' を型 'string' に割り当てることはできません。
}

if (typeof maybe === "string") {
  // TypeScript knows that maybe is a string
  const aString: string = maybe;
  // So, it cannot be a boolean
  const aBoolean: boolean = maybe; // 型 'string' を型 'boolean' に割り当てることはできません。
}