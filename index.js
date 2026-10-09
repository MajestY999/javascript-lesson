//Тернарные операторы
const bmwX3 = 100000;
const fordFocusPrice = 10000;
const budget = 10000;
let message =
  budget >= bmwX3 ? "bmwX3" : budget > fordFocusPrice ? "Ford" : "Велосипед";

//условие ? выражениеЕслиИстинно : выражениеЕслиЛожно;

console.log(`Я хочу купить ${message}`);

// } else if (budget > fordFocusPrice) {
//   message = "Ford  ";
// }

// const str = 10 > 0 ? "Больше 0 " :"Меньше 0 ";
// console.log(str);

// if (10 > 0) {
//   console.log("Больше 0 ");
// } else {
//   console.log("Меньше 0");
// } //точь в точь что и выше
