"use strict";

const inputData = prompt("Введите строку: ");
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
  };
const DEFAULT_MAX_LENGTH = 30;

function parsString(input, maxLength) {
  if (typeof input === 'string' && !isNumber(input)) {
    const str = input.trim();
    const result =
      str.length > maxLength ? `${str.substring(0, maxLength)} ...` : str;
    console.log(result);
    return result;
  } else {
    console.log("Вводные данные не являются строкой!");
    return null;
  }
}

parsString(inputData, DEFAULT_MAX_LENGTH);
