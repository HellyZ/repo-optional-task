"use strict";

const body = document.querySelector("body");

const week = {
  days: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  getWeek: function () {
    week.doCursive();
    week.makeBoldToday();
    body.innerHTML = week.days.join("<br/>");
  },

  doCursive: function () {
    week.days = week.days
      .slice(0, -2)
      .concat(week.days.slice(5).map((i) => `<i>${i}</i>`));
  },
  makeBoldToday: function () {
    const today = new Date(Date());
    let weekday = today.getDay();
    weekday--;
    week.days[weekday] = `<b>${week.days[weekday]}</b>`;
  },
};
week.getWeek();
