/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  let mid;
  if (array.includes(target)) {
    if (array.length % 2 === 0) {
      mid = array.length / 2;
    } else {
      mid = (array.length + 1) / 2;
    }
    if (target < array[mid]) {
      let newArr = [];
      for (let i = 0; i < mid; i++) {
        newArr.push(array[i]);
      }
      binarySearch(array, target);
    } else if (target > array[mid]) {
      let newArr = [];
      for (let i = mid; i < array.length; i++) {
        newArr.push(array[i]);
      }
    } else if (target === array[mid]) {
      return mid;
    }
  } else {
    return null;
  }
};
