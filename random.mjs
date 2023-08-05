// random number generator for the files in this repo
export default function generateRandom(length, range) {
  // if no range is passed, default to 10
  if (!range) {
    range = 10;
  }

  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * range));
  }

  return arr;
}

