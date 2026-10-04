//Упражнение размещение депозита

const moneyBank = 10000;
const countYear = 24;
const procent = 0.07;

const priceHous = moneyBank * (1 + procent / 12) ** 24;
if (priceHous > 13500) {
  console.log(`Вася сможет купить дом. У него ${priceHous}`);
} else if (priceHous < 13500) {
  console.log(`Вася не может купить дом. У него ${priceHous}`);
}
