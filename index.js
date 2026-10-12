//Операторы с другими типами
console.log("Вася " || "Олег");
console.log(false || "Олег");
console.log("Вася" || false);
console.log(false || false);
console.log("Вася" && "Олег");

let a = "бяк";
const userName = a || "Петя";
console.log(userName);

isAdmin = true;

const fileName = isAdmin && "file.mp4";

if (isAdmin === false) {
  console.log(`Вы не админ.`);
}else if(isAdmin === true){
console.log(`Вы админ и доступ к файлу есть: ${fileName}`);
}

console.log(fileName);
