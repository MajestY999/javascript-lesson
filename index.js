const role1 = "Admin";
const role2 = "user";
const superuser = "superuser";

const roles = ["Admin", "user", "superuser"];
const userInfo = ["Анна", 25];
console.log(roles);
console.log(userInfo);
console.log(roles.at(0));
console.log(roles.length);
console.log(roles.at(-1));

const userAge = [2040 - 2022, 20 - "6", 10 > 0 ? 5 : 0];
console.log(userAge);

const userNames = new Array("Вася", "Петя", "Катя");
console.log(userNames);
function square(el){
return el * el
}

console.log(square(5));