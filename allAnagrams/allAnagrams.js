/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

let allAnagrams = function (string) {
  let characters = string.split("");
  let anagrams = [];
  for (let i = 0; i < characters.length; i++) {
    let anagram = characters[i];
    for (let j = 0; j < characters.length; j++) {
      if (!anagram.includes(characters[j])) {
        anagram += characters[j];
      }
    }
    anagrams.push(anagram);
  }
  for (let i = characters.length - 1; i >= 0; i--) {
    let anagram = characters[i];
    for (let j = characters.length - 1; j >= 0; j--) {
      if (!anagram.includes(characters[j])) {
        anagram += characters[j];
      }
    }
    anagrams.push(anagram);
  }
  return anagrams;
};
