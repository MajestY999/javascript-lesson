const transactionsInUSD = [10, -7, 50, -10, 100];

const transactionInRUB = []; //процедурный метод
for (const transaction of transactionsInUSD) {
  transactionInRUB.push(transaction * 60);
}

console.log(transactionsInUSD);
console.log(transactionInRUB);

const transactionsInRUB2 = transactionsInUSD.map((transaction, i) => {
  console.log(i);
  return transaction * 60;
});
//   return console.log(`${index + 1}: ${transaction * 60}`);//такое лучше не использовать так как мы вносим изменения внутри массива а не вызываем каждый элемент или например их сумму
console.log(transactionsInRUB2);
