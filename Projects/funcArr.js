//Build a simple loop  ,inside a function , that takes an array and prints the value of the array to the console.//
function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
let numToPrint = [4, 5, 'orange', 6, 'pineapple']
printArr(numToPrint)
