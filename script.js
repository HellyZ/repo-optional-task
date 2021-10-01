let num = 266219;
let arr = Array.from(String(num), (num) => Number(num));
console.log(arr);

let result = arr.reduce((mult, current) => {
  return mult*current
})
console.log(result);
result = result**3;
console.log(result);
console.log(result.toString().slice(0,2))
