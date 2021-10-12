"use strict";

const fullDate = document.getElementById("fullDate");
const shortDate = document.getElementById("shortDate");

const SECONDS_FORM = ["секунда", "секунды", "секунд"];
const MINUTES_FORM = ["минута", "минуты", "минут"];
const HOURS_FORM = ["час", "часа", "часов"];

const timeForm = function (number, forms) {
  return forms[
    number % 100 > 4 && number % 100 < 2
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ];
};

const date = {
  now: Date(),
  days: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  monthes: [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Майя",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ],
  nowDate: function () {
    date.now = new Date();
    return date.now;
  },
  formatterShortDate: function () {
    let tempDate = date.nowDate();
    return (
      [
        ("00" + tempDate.getDate()).slice(-2),
        ("00" + (tempDate.getMonth() + 1)).slice(-2),
        ("00" + tempDate.getFullYear()).slice(-2),
      ].join(".") +
      " - " +
      [
        ("00" + tempDate.getHours()).slice(-2),
        ("00" + tempDate.getMinutes()).slice(-2),
        ("00" + tempDate.getSeconds()).slice(-2),
      ].join(":")
    );
  },
  formatterLongDate: function () {
    let tempDate = date.nowDate();
    let datetimestring = `Сегодня ${
      date.days[tempDate.getDay() - 1]
    }, ${tempDate.getDate()} ${
      date.monthes[tempDate.getMonth()]
    } ${tempDate.getFullYear()} года, 
    ${tempDate.getHours()} ${timeForm(
      tempDate.getHours(),
      HOURS_FORM
    )} ${tempDate.getMinutes()} ${timeForm(
      tempDate.getMinutes(),
      MINUTES_FORM
    )} ${tempDate.getSeconds()} ${timeForm(
      tempDate.getSeconds(),
      SECONDS_FORM
    )}`;
    return datetimestring;
  },
  calculateDate: function () {
    fullDate.innerHTML = date.formatterLongDate();
    shortDate.innerHTML = date.formatterShortDate();
  },
  displayDate: function () {
    setInterval(function () {
      date.calculateDate();
    }, 1000);
  },
  start: function () {
    date.displayDate();
  },
};

date.start();
