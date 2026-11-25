const arr = [1, 4, 4, 10, 20];

let elGT5;
for (const el of arr) {
  if (el > 5) {
    elGT5 = el;
    break;
  }
}
console.log(elGT5);

elGT5 = arr.find((el) => el > 5);
let elGT5Index = arr.findIndex((el) => el < 0); // если будет искать меньше нуля, но такого значения не будет внутри массива то будет вывод в виде -1
console.log(elGT5Index); //выводит позицию
console.log(elGT5); //выводит числовое значение из массива которое верно
