const role = "ceo";

// if (role === "manager") {
//   console.log("Менеджер");
// } else if (role === "admin") {
//   console.log("Админ");
// } else if (role === "ceo") {
//   console.log("CEO");
// } else {
//   console.log("Мы не занем кто ты ");
// }

switch (role) {
  case "manager":
    console.log("Менеджер");
    break;
  case "admin":
    console.log("Админ");
    break;
  case "ceo":
    console.log("CEO");
    break;
  default:
    console.log("Мы не знаем кто ты");
    break;
}

switch (role) {
  case "manager":

  case "admin":
    console.log("Не руководитель");
    break;
  case "ceo":
    console.log("Руководитель");
    break;
  default:
    console.log("Мы не знаем кто ты");
}

const num = - 1;
switch (true) {
  case num > 0:
    console.log("Положительный ");
    break;
  case num < 0:
    console.log("Отрицвтельный ");
    break;
  default:
    console.log("Ноль");
}
