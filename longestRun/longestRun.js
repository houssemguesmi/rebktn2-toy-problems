/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(str) {
  let arrayOfChars = str.split("");
  let pairs = [];
  let charsTested = [];
  if (arrayOfChars.length === 0) {
    return [];
  }
  for (let j = 0; j < arrayOfChars.length; j++) {
    let charToTest = arrayOfChars[j];
    if (!charsTested.includes(arrayOfChars[j])) {
      let no = 1;
      charsTested.push(arrayOfChars[j]);
      for (let i = j + 1; i < arrayOfChars.length; i++) {
        if (arrayOfChars[i] === charToTest) {
          no++;
        }
      }
      pairs.push({ char: charToTest, no: no, index: j });
    }
  }
  console.log(pairs);
  let max = pairs[0].no;
  let index = 0;
  for (let k = 0; k < pairs.length; k++) {
    if (pairs[k].no === max) {
    }
    if (pairs[k].no > max) {
      max = pairs[k].no;
      index = pairs[k].index;
    }
  }
  return [index, index + max - 1];
}
// not fixed yet
