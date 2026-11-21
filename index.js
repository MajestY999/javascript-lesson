//Возврат функции(замыкание)
function power(pow) {
  return function (num) {
    return num ** pow;
  };
}

// console.log(power(3)(2));

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(12));

const powerOfThree = power(3)
console.log(powerOfThree(5));


console.log(power(5)(4));


// function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button className="my-btn" onClick={handleClick}>
//       Нажали {count} раз
//     </button>
//   );
// }