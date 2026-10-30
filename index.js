const userData = ["Антон", 18, "Москва"];

function getData() {
  return ["Антон", 18, "Москва"];
}

const [userName, _, city] = getData(); //Это является пример диструктуризации;

console.log(userName,  city);

