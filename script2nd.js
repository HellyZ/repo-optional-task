"use strict";
let namePerson = prompt("Введите имя пользователя: ");

namePerson.toLowerCase() == "артем" || "артём"
  ? console.log("директор")
  : namePerson.toLowerCase() == "александр"
  ? console.log("преподаватель")
  : console.log("студент");
