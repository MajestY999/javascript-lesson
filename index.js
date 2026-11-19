"use strict";

/*есть массив операций, так же есть начальный баланс в виде 100, 
необходимо сделать функции: 
итогового баланса,
Наличия отрицательного баланса(если после очередной операции баланс  < 0, то выдаст false) 

среднего дохода и расхода 
*/

const operations = [1000, -700, 300, -500, 10000];
let startingBalance = 100;

function getBalance(initialBalance, arrayOfOperations) {
  //проверка баланса на суммирование всех трат и получение итогового баланса
  let balance = initialBalance;

  for (const element of arrayOfOperations) {
    balance += element;
  }
  return balance;
}

console.log(getBalance(startingBalance, operations));

function checkBalance(initialBalance, arrayOfOperations) {
  //проверка баланса и результата трат на то что баланс не меньше нуля
  let balance = initialBalance;
  const isOk = true;
  for (const element of arrayOfOperations) {
    balance += element;
    if (balance < 0) {
      isOk = false;
      break;
    }
  }
  return isOk;
}
console.log(checkBalance(startingBalance, operations));

function avarageOperations(arrayOfOperations) {
  //проверка среднего числа по всем операциям
  let positiveCount = 0;
  let positiveSum = 0;
  let negativeCount = 0;
  let negativeSum = 0;
  for (const element of arrayOfOperations) {
    if (element > 0) {
      positiveCount++; //увеличиваем на единицу
      positiveSum += element; //увеличим на число элемента
    }
    if (element < 0) {
      negativeCount++;
      negativeSum += element;
    }
    //Если наш элемент положительный то мы должны, взять и добавить информацию о том что добавлен доп. положительный элемент. чтобы получить положительное число мы проссумируем все число  и потом еще и поделить на их же число
  }
  return [positiveSum / positiveCount, negativeSum / negativeCount];
}
for (let i = 1; i < 9; i++) {
  console.log(i);
  if (i > 5) {
    break;
  }
}
