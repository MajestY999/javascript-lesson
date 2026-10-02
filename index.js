const age = "18";
console.log(Number(age) + 5); //185 из за того что просиходит конкатенация, если без Number, но с ним будет 23;
console.log(age - 3); //15; Из за преобразования типов js в одном случае понимает что у нас строка а в другом число, а если видил - / или * понимая что это работа с числом а не строкой
const userName = "Вася";
console.log(userName + 5); //Тут будет ошибка гвоорящая что наше значенеи будет не число то есть NaN not a number;
console.log(typeof NaN);
console.log(String(4) + 7);
console.log(Boolean("kfelefkfe")); //true пустое значение дает false
console.log(Boolean("") + 10);
console.log(true + 2); //true = 1; true + 2 = 3;
const a = 2 + "10";
console.log(a - 10);
