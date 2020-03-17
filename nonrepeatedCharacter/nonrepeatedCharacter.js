/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

///// SOLUTION with O(n*n)
var firstNonRepeatedCharacter = function(string) {
  let array = string.split('')
  let charactersandoccurences = []
  let characters = []
  for(let i = 0; i < array.length; i++) {
    let nb = 0;
    if(!characters.includes(array[i])){
      for(let j = i; j < array.length; j++) {
        if(array[i] === array[j]) {
          nb++;
        }
      }
      let toStore = {no: nb, character: array[i]}
      characters.push(array[i])
      charactersandoccurences.push(toStore)
    }
  } 
  for(let k=0; k < charactersandoccurences.length; k++) {
    if(charactersandoccurences[k].no === 1) {
      return charactersandoccurences[k].character
    }
  }
};

firstNonRepeatedCharacter('AXAAB') ==> 'X'

///// SOLUTION with O(n)
function min(array) {
  let min = array[0];
  for(let i = 1; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

var firstNonRepeatedCharacter = function(string) {
  let array = new Array(100)
  let oneOccurences = []
  for(let i = 0; i < array.length; i++) {
    array[i] = {character: undefined, index: 0, no: 0}
  }
  for(let i = 0; i < string.length; i++) {
    array[string[i].charCodeAt()].character = string[i];
    array[string[i].charCodeAt()].index = i;
    array[string[i].charCodeAt()].no++;
  }
  for(let j = 0; j < array.length; j++) {
    if(array[j].no === 1){
      oneOccurences.push(array[j].index)
    }
  }
  return string[min(oneOccurences)];
}

firstNonRepeatedCharacter('AXAAB') ==> 'X'
