const prices = [
  [2, 4],
  [3, 4],
  [10, [20, 50]],
];
const res = prices.flat(2);
const res2 = prices.flatMap((el) => el.concat([1])).flat(2);
console.log(res2);
console.log(res); //в итоге получаем просто массив без внутренних 3 массивов, а получили простой массив из 6 элементов вместо  3 в которых внутри езе по 2 элемента
