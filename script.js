let lang;
const ru = `
  Понедельник\n
  Вторник\n
  Среда\n
  Четверг\n
  Пятница\n
  Суббота\n
  Воскресенье\n`;
const en = `
  Monday\n
  Tuesday\n
  Wednesday\n
  Thursday\n
  Friday\n
  Saturday\n
  Sunday`;
lang = prompt("Укажите язык");

console.log("======== if =========");
if (lang == "ru") {
  console.log(ru);
} else if (lang == "en") {
  console.log(en);
} else {
  console.log("error");
}

console.log("======== switch-case =========");

switch (lang) {
  case "ru":
    console.log(ru);
    break;
  case "en":
    console.log(en);
    break;
}

console.log("======== многомерный массив =========");

const week = [[ru], [en]];
console.log(lang == "ru" ? week[0].toString() : week[1].toString());
