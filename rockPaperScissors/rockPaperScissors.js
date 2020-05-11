/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   ["RRR",
 *    "RRP",
 *    "RRS",
 *    "RPR",
 *    ...etc...
 *   ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 *
 * Example:
 * rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
 *
 */
let rockPaperScissors = function (n) {
  let throws = ["R", "P", "S"];
  let sequences = [];
  for (let i = 0; i < 3; i++) {
    let sequence = throws[i];
    for (let j = 0; j < 3; j++) {
      if (!sequence.includes(throws[j])) {
        sequence += throws[j];
      }
    }
    sequences.push(sequence);
  }
  for (let i = 3 - 1; i >= 0; i--) {
    let sequence = throws[i];
    for (let j = 3 - 1; j >= 0; j--) {
      if (!sequence.includes(throws[j])) {
        sequence += throws[j];
      }
    }
    sequences.push(sequence);
  }
  console.log(sequences);
};
rockPaperScissors(3);
