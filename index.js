const userName = "Вася Пупкин"; //при использовании эмодзи будут некоторые проблемы при выведении в консоль
console.log(userName.charAt(2));
console.log(userName);

console.log(userName.length);
console.log(userName.indexOf("а")); //11 индекс
console.log(userName.lastIndexOf("а"));
console.log(userName.includes("уп")); //true

console.log(userName.slice(0, 8));
