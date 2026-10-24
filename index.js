const users = ["Аня", "Вика", "Катя"];
users[2] = "Крестина";
console.log(users);
// users[3] = "Никита";
// console.log(users);
// при использовании метода push, добавляет элемент в конец массива:
users.push("Никита");
console.log(users);
//Тоже самое только теперь наоборот, только теперь элемент добавляется в начало массива.
users.unshift("Вася");
console.log(users);
//Удаляет последний элемент массива.
users.pop();
console.log(users);
//Удаляет первый элмент массива.
users.shift();
console.log(users);
