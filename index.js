const array = [1, 4, 4, 10];

const avg = array.reduce((acc, element, index) => {
  if (index === array.length - 1) {
    return (acc + element) / array.length;
  }
  return acc + element;
});

console.log(avg);
