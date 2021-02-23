// object is a type that represents the non-primitive type,
// i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.

declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);
create(undefined); // Remember, undefined is not a subtype of null

create(42);  // 型 'number' の引数を型 'object' のパラメーターに割り当てることはできません。

create("string");

create(false);