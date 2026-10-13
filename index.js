function logName(name, surname) {
  console.log(`Мое имя ${name} ${surname}`);
}
logName("Артем", "Вилисов");

// const a = logName()
// console.log(typeof(a));

function countDepositSum(depositInUSD, month, rate) {
  return  depositInUSD * (1 + rate / 12) ** month;

}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);


const example2 = countDepositSum(1000, 48, 0.10);
console.log(example2);