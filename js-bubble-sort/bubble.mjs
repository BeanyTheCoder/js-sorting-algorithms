// start in quokka.js extension(if you don't have it yet, install it from Extensions Tab in VS code):
// press ctrl+shift+p, then in the search box, type "Quokka.js: Start On Current File" and hit enter
// note: you need the pro version of quokka to use imports!(if you dont have it, just copy the code from "random.mjs", or use a custom array as i have done here)

// or alternatively, use node.js:
// press ctrl+shift+` to start a new terminal, then navigate into this folder(using cd) and type "node bubble.mjs"

// for those who wanna use Quokka.js, uncomment the below code:
// import generateRandom from "../random.mjs";
// let array = generateRandom(10, 100);

let array = [23, 47, 89, 34, 5, 86, 11, 61, 32, 60];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log(arr);
  return arr;
}

bubbleSort(array);
