function toPower(num = 2, power = 2) {
  // num = num ?? 2;  можно такое не использовать так как выше есть переменные которые можно сделать чтобы они имели пкакое-то значение
  // power = power ?? 2;
  const res = num ** power;
  return res;
}

console.log(toPower(2));
