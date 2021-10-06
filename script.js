"use strict";
const MIN = 10;
const MAX = 1000;
const arr = ["485", "258"];

function fullArray(min, max) {
  for (let i = 0; i < 5; i++) {
    arr.push((Math.floor(Math.random() * (max - min + 1)) + min).toString());
  }
  console.log("fullArray: " + arr);
  return arr;
}

function printNumbers(arr) {
  let result = arr.filter((i) => i[0] === "2" || i[0] === "4");
  return result;
}

console.log("Result: " + printNumbers(fullArray(MIN, MAX)));
