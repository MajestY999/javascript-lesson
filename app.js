
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

const payments = [2500, -800, 1200, -3000, 450, -150, 5000];
const limit = 2000;


const readings = [12, 0, -5, 18, 22, -2, 0, 15];
const minAllowed = -3;

function getPositiveSum(arrayOfReadings) {
  let sum = 0;

  for (const element of arrayOfReadings) {
    // sum += element;
    if (element > 0) {
      sum += element;
    }
  }
  return sum;
}

// console.log(getPositiveSum(readings, minAllowed));

function isSafeRange(arrayOfReadings, limit) {
  let isOk = true;
  // limit = minAllowed;
  for (const element of arrayOfReadings) {
    if (element < limit) {
      isOk = false;
      break;
    }
  }
  return isOk;
}

function countZeroDays(arrayOfOperations) {
  let positiveCount = 0;

  for (const element of arrayOfOperations) {
    if (element === 0) {
      positiveCount++;
    }
  }
  return positiveCount;
}

console.log(getPositiveSum(readings));
console.log(isSafeRange(readings, minAllowed));
console.log(countZeroDays(readings));



"use strict";
// getLargeOrdersSum(arrayOfOrders) — возвращает сумму только тех заказов, которые строго больше 1000.

// hasExceededLimit(arrayOfOrders, limit) — проверяет, не превысил ли хоть один
// заказ значение limit (element > limit). Если превысил — возвращает true, иначе false.

// getSmallOrdersAverage(arrayOfOrders) — возвращает среднюю сумму среди всех заказов,
// которые меньше или равны 1000.
const orders = [450, 1200, 300, 2500, 800, 150, 1900];
const maxAllowed = 3000;

function getLargeOrdersSum(arrayOfOrders) {
  let sum = 0;
  for (const element of arrayOfOrders) {
    if (element > 1000) {
      sum += element;
    }
    //  sum += element;
  }
  return sum;
}

console.log(getLargeOrdersSum(orders));

function hasExceededLimit(arrayOfOrders, limit) {
  let isOk = false;
  for (const element of arrayOfOrders) {
    if (element > limit) {
      isOk = true;
      break;
    }
  }
  return isOk;
}

console.log(hasExceededLimit(orders, maxAllowed));

function getSmallOrdersAverage(arrayOfOperations) {
  let smallCount = 0;
  let smallSum = 0;

  for (const element of arrayOfOperations) {
    if (element <= 1000) {
      smallSum += element;
      smallCount += 1;
    }
  }
  if (smallCount === 0) {
    return 0;
  }
  return smallSum / smallCount;
}

console.log(getSmallOrdersAverage(orders));



//foreach


const money = [100, 250, 340, 400];
let sum = 0;

money.forEach((num) => {
  sum += num;
});

console.log(`Результат пополнений баланса: ${sum}`);



// Напиши функцию, которая принимает массив цен и возвращает новый массив, где оставлены только корректные цены
// (строго больше 0, без нулей и минусов).
// Напиши вторую функцию (или сделай цепочкой), которая принимает массив
// уже нормальных цен и прибавляет к каждой налог 20% (например, было 1000 — стало 1200).
// Посчитай общую сумму всех итоговых цен (через reduce или forEach).
// Выведи в консоль итоговый массив цен с налогом и их общую сумму.

// Условия:
// Все названия функций, параметров и переменных придумываешь сам.
// Только методы массивов (filter, map, reduce / forEach), без циклов for.

// Как напишешь — кидай код сюда, посмотрим по факту.

const rawPrices = [1200, -300, 4500, 0, 800, 15000, -50, 3200];

const taxPercent = 1.2; //сразу привел в норамльно число чтобы не считать (1+ 20 / 100)
let totalPrice = 0;
const filterPrices = rawPrices.filter((el) => el > 0);
const arrayNewPrices = filterPrices.map((el) => el * taxPercent);
console.log(arrayNewPrices);
arrayNewPrices.forEach(el =>{
return totalPrice += el
})


console.log(totalPrice);


const cartPrices = [450, 1200, 300, 5000, 850, 2400];

let totalPrice1 = 0;
const filterPrices1 = cartPrices.filter((el) => el >= 1000);
const newArrayPrices = filterPrices1.map((el) => el * 0.85);
newArrayPrices.forEach(el => totalPrice1 += el)
console.log(newArrayPrices);
console.log(totalPrice);
