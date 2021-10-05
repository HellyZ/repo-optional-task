"use strict";
const inputData = prompt("Введите строку: ");

function parsString(input) {
  if (typeof input === "string") {
    let str = input.trim().trimLeft();
    if (str.length > 30){
      console.log(">30");
      console.log(str.substr(0,30) + "...");
      return str.substr(0,30) + "...";
    } else {
      console.log("<30");
      console.log(str);
      return str;
    }
  } else {
    console.log("Вводные данные не являются строкой!");
    return null;
  }
}

parsString(inputData);
