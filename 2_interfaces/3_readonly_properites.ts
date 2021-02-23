interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!


let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

ro[0] = 12; // error!

ro.push(5); // error!

ro.length = 100; // error!

a = ro; // error! // 型 'readonly number[]' は 'readonly' であるため、変更可能な型 'number[]' に代入することはできません。

a = ro as number[];


// readonly vs const
// The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property.
// Variables use const whereas properties use readonly.