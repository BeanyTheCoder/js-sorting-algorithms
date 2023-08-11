// start in quokka.js extension(if you don't have it yet, install it from Extensions Tab in VS code):
// press ctrl+shift+p, then in the search box, type "Quokka.js: Start On Current File" and hit enter
// note: you need the pro version of quokka to use imports!(if you dont have it, just copy the code from "random.mjs", or use a custom array as i have done here)

// or alternatively, use node.js
// press ctrl+shift+` to start a new terminal, then navigate into this folder(using cd) and type "node selection.mjs"

// for those who wanna use Quokka.js, uncomment the below code:
// import generateRandom from "../random.mjs";
// let array = generateRandom(10, 100);

let array = [5, 1, 2, 52, 57, 92, 16, 49, 59, 83, 100];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }

  console.log(arr);
  return arr;
}

selectionSort(array);
