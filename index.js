//Возврат функции(замыкание)
// function power(pow) {
//   return function (num) {
//     return num ** pow;
//   };
// }

// // console.log(power(3)(2));

// const powerOfTwo = power(2);
// console.log(powerOfTwo(5));
// console.log(powerOfTwo(12));

// const powerOfThree = power(3);
// console.log(powerOfThree(5));

// console.log(power(5)(4));

const power = (pow, num) => pow ** num;

console.log(power(2, 3));

const power2 = (pow) => (num) => pow ** num;
console.log(power2(2)(4));


