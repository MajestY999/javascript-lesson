// const arr = [1, 4, 4, 10, 20];

// let elGT5;
// for (const el of arr) {
//   if (el > 5) {
//     elGT5 = el;
//     break;
//   }
// }
// console.log(elGT5);

// elGT5 = arr.find((el) => el > 5);
// let elGT5Index = arr.findIndex((el) => el < 0); // если будет искать меньше нуля, но такого значения не будет внутри массива то будет вывод в виде -1
// console.log(elGT5Index); //выводит позицию
// console.log(elGT5); //выводит числовое значение из массива которое верно

const arr = [2, 4, 4, 10, 20];

function some(array, element) {
  const res = array.find((item) => item === element);
  if (res === undefined) {
    return false; //показывает результат о том что данного числового значения(числа) у нас в массиве нет.
  }
  return true; //в обратном случае возращает true потому что число есть внутри массива
}
const res2  =  arr.some( element => {
  return  element !== undefined
})

console.log(res2);

console.log(some(arr, 2));

console.log(arr.some(element => element === 2));
