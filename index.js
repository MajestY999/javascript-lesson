const roles = ["user", "admin", "manager"];

console.log(roles.indexOf("admin"));

if (roles.indexOf("admin") >= 0) {
  console.log("Доступ есть ");
}
console.log(roles.includes("admin")); //true
