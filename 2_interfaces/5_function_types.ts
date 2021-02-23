interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

// For function types to correctly type check, the names of the parameters do not need to match.
// パラメータ名が違っても型エラーにならないとは驚き
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};

mySearch = function (src, sub) { // 型 'string' を型 'boolean' に割り当てることはできません。
  let result = src.search(sub);
  return "string";
};