const arr = [1, 4, 8, 7];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (const element of arr) {
  console.log(element);
} //Означает то что мы будет иттерироваться оп массиву каждый раз беря элемент нашего массива


for (const index   in arr) {
 console.log(arr[index]);//без квадратных скобок будет просто элементы из машего массива а не то что нам надо . 
  
}