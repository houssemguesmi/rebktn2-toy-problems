/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 *
 */
let sameKeys = 0;
let numberOfKeys = 0;
let orangeKeys = [];

let deepEquals = function (apple, orange) {
  for (let key in orange) {
    orangeKeys.push(key);
  }
  for (let key in apple) {
    numberOfKeys++;
    if (typeof apple[key] === "object") {
      if (orangeKeys.includes(key)) {
        sameKeys++;
      } else {
        return;
      }
      deepEquals(apple[key], orange[key]);
    } else {
      if (apple[key] === orange[key]) {
        sameKeys++;
      }
    }
  }
  if (sameKeys === numberOfKeys) {
    return true;
  }
  return false;
};
