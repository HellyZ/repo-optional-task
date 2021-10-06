"use strict";

const MIN = 1;
const MAX = 100;

function getPrimes(min, max) {
  for (let i = min; i <= max; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) {
      console.log(`Делители этого числа: 1 и ${i}`);
    }
  }
}

console.log(getPrimes(MIN, MAX));
