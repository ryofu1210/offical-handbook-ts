// printLabel関数の引数には、strint型のlabelという名前のプロパティを持つオブジェクトを渡せば良い
// 追加のプロパティが存在しても、エラーにならない
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


// the same example above
interface LabeledValue2 {
  label: string;
}

function printLabel2(labeledObj2: LabeledValue2) {
  console.log(labeledObj2.label);
}

let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);