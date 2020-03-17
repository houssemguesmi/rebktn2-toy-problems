/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

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
