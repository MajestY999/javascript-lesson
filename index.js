//sort
const users = ["Вася", "Маша", "Катя", "Аня"];
console.log(users);
users.sort();
console.log(users);

const operations = [100, -300, -100, 50, 480];
//< 0 - a,b : сохраняем порядок
// > 0 - b, a: меняем порядок
operations.sort((a, b) => a - b);
console.log(operations); //отсортировались как строки  считая первое число как строку и понимая что наример 100 потом 400 потом 50 , поэтому простой sort не поможет надо писать логику

operations.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  }
});

console.log(operations);
