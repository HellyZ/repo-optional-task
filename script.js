"use strict";

const ru = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const en = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const lang = prompt("Укажите язык");

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

const week = [ru, en];
console.log(lang == "ru" ? week[0].toString() : week[1].toString());
