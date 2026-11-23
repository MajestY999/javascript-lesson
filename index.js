const score = [5, 10, 0, 15];
//Чтобы получить одновременно элемент и его индекс, применяется метод .entries():
// пример с использованием for of
// for (const [index, el] of score.entries()) {
//   console.log(`Раунд ${index}:  ${el}`);
// }


// const iterator = (el, index)=> {
//   console.log(`Раунд ${index}:  ${el}`);
// }

// console.log(iterator(10, 4));
score.forEach((el, index) => {
   
  console.log(`Раунд ${index + 1}:  ${el}`);
  
}); //(el = () => {})
//тут не нужно использовать entries и т.д только индекс 
//(5, 0)