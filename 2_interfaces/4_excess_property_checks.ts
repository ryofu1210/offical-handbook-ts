interface SquareConfig2 {
  color?: string;
  width?: number;
}

function createSquare2(config: SquareConfig2): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare1 = createSquare2({ width: 100 });
let mySquare2 = createSquare2({});
let mySquare3 = createSquare2({ aaa: 1 });
// optionalなのになぜエラーがでるかと思うが、typescriptではそういう仕様
// https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks
let mySquare4 = createSquare2({ colour: "red", width: 100 }); // 型 '{ colour: string; width: number; }' の引数を型 'SquareConfig' のパラメーターに割り当てることはできません。

let mySquare5 = createSquare2({ width: 100, opacity: 0.5 } as SquareConfig2);
console.log(mySquare5)


// a better approach might be to add a string index signature if you’re sure that the object can have some extra properties that are used in some special way.
interface SquareConfig3 {
  color?: string;
  width?: number;
  [propName: string]: any; // index signature
}

function createSquare3(config: SquareConfig3): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
let mySquare3_1 = createSquare3({ colour: "red", width: 100 });
let mySquare3_2 = createSquare3({ colour: "red" });

// TODO: Execc Property checksの章をもう一度読む
// https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks