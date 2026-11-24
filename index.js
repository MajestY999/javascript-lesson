//reduce
const operations = [100, -20, 7, -30, 50];

let balance = 0;

for (const operation of operations) {
  balance += operation;
}

const finalBalance = operations.reduce((acc, value, i) => {
  console.log(` индекс: ${i} acc: ${acc} operation: ${value}`);
  return (acc += value);
}, 0); //ноль как начальная величина нашего значения. acc  = 0; value =  100;

/*предыдущая величина,  туда куда будут передаваться наше значение по нашему например балансу  */

console.log(finalBalance);

const minElem = operations.reduce((acc, operation, i) => {
  console.log(`индекс ${i} acc ${acc} и operation ${operation}`);
  if (operation > acc) {
    return acc; //если она больше то берем предыдущу
  } else {
    return operation; // иначе она минимальна
  }
}, 0);

console.log(minElem);
