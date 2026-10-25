const roles = ["user", "admin", "manager", "superuser"];

const res = roles.slice(2); //отрехает кусок от массива;
console.log(res);

const res2 = roles.slice(0, 3);
console.log(res2);

const res3 = roles.slice(-1);
const resLenght = roles[roles.length - 1]; //одинаковая запись только выше короче чем ниже и тут будет конкретное значение массива а не массив внутри которого будет элемент;
console.log(res3);
console.log(resLenght);

const res4 = roles.slice(1, -2);
console.log(res4);

// const res5 = roles.splice(2, 1);//Создает мутацию а именно основной маш массив делает на половину короче как в нашем примере.
// console.log(res5);
// console.log(roles);

// const res6 = roles.splice(2, 1);
// console.log(res6);
// console.log(roles);

// const res7 = roles.splice(-1);
// console.log(res7);
console.log(roles);

const res8 = roles.reverse();
console.log(res8);
console.log(roles);

const newRoles = ["sysadmin", "developer"];
const res9  = roles.concat(newRoles)

console.log(res9);
console.log(roles);