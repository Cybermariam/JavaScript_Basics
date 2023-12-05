function calcFactorial(num) {
  if (num === 0 || num === 1) {
    return 1
  } else {
    return num * calcFactorial(num - 1)
  }
}
let result = calcFactorial(7)
console.log(result)
