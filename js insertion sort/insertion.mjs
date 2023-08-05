// start in quokka.js using ctrl+shift+p, then in the search box typing "Quokka.js: Start On Current File"
// note: you need the pro version of quokka to use imports!(if you dont have it, just copy the code from "random.mjs")

// or alternatively, use node.js

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

  console.log(arr)
  return arr;
}


insertionSort(array)