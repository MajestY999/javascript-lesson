const url = "https://purpleschool.ru/course/javascript";



/* 
-domen
-protocol, 
-path
*/

// const [protocol, _, host, ...path] = url.split("/");

// console.log(protocol);
// console.log(host);

function getUrl(url) {
  if (!url) {
    console.log("URL не передан");
    return console.error('ваша функция не имеет переменной для обозначения или она не та');
    ;
  }
  const [protocol, _, host, ...path] = url.split("/");
  const cleanProtocol = protocol.split(":")[0];// при использовании  значения  0 у меня пропал ноль 
  const cleanPath = path.join("/");
  console.log(`Протокол сайта: ${cleanProtocol}`);
  console.log(`Домен сайта: ${host}`);
  console.log(`Путь сайта: ${cleanPath}`);
}

getUrl(url)

