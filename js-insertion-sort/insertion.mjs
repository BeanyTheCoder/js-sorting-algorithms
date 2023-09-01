// start in quokka.js extension(if you don't have it yet, install it from Extensions Tab in VS code):
// press ctrl+shift+p, then in the search box, type "Quokka.js: Start On Current File" and hit enter
// note: you need the pro version of quokka to use imports!(if you dont have it, just copy the code from "random.mjs", or use a custom array as i have done here)

// or alternatively, use node.js
// press ctrl+shift+` to start a new terminal, then navigate into this folder(using cd) and type "node insertion.mjs"

// for those who wanna use Quokka.js, uncomment the below code:
// import generateRandom from "../random.mjs";
// let array = generateRandom(10, 100);

let array = [99, 86, 38, 51, 10, 65, 8, 64, 46, 69];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j > -1 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

let sortedArr = insertionSort(array); 
console.log(sortedArr) // Output: [ 8, 10, 38, 46, 51, 64, 65, 69, 86, 99 ]

