//Create a function that checks if the input/parameter is an even number.
function checkEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`)
    } else {
      console.log(`${i} is odd`)
    }
  }
}
checkEven(1, 10)

//  QUESTION NUMBER 2
//Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter
function printNumber(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i)
  }
}
printNumber(2, 4)

// QUESTIN 3
//Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.
function sumNumb(a, b) {
  let sum = 0
  for (let i = a; i <= b; i++) {
    sum += i
  }
  return sum
}
let a = 2
let b = 6
let totalNum = sumNumb(2, 6)
console.log(`The sum of value between ${a} and ${b} is ${totalNum}`)
