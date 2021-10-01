const num = 266219;
const result = num.toString().split('').reduce((mult, current) => {
  return mult*current
})
console.log(result);
console.log(result**3);
console.log(result.toString().slice(0,2))
