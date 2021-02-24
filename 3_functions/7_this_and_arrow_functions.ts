// function宣言の場合、thisはdeckオブジェクトではなくwindowになる。（thisは、実行時のレシーバなので）
// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function () {
//     return function () {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 }; // An outer value of 'this' is shadowed by this container.
//     };
//   },
// };

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// function宣言の場合、thisはdeckオブジェクト。（thisは、宣言時のスコープを持つオブジェクトなので）
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
    // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


// functionとarrow functionの違い
this.data = 'this is within global';

function func() {
  // 実行時のレシーバであるオブジェクトをthisとして定義する
  console.log("func: " + this.data);
}

const arrowFunc = () => {
  // 宣言時のスコープを持つオブジェクトをthisとして定義する
  // ここではグローバルオブジェクト
  console.log("arrowFunc: " + this.data);
};

const f = {
  data: 'within object',
  execute: func
};
f.execute();
// => 'this is within object'

const af = {
  data: 'this is within object',
  execute: arrowFunc
};
af.execute();
// => 'this is within global'


// arrow functionは変数定義と同様の扱いでファイルの上の行からの解釈が明示的
a() // OK
function a() {}

b() // ブロック スコープの変数 'b' が、宣言の前に使用されています。
const b = () => {}