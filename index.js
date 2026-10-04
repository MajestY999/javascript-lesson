//if else
const money = 100;

const canBuy = money > 50;
if (canBuy) {
  console.log("Может купить наш товар");
} else if (money > 55) {
  console.log('Куплен мини продукт');
} else {
  console.log("Не может купить наш товар ");
}
