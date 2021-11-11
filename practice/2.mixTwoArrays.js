/*
 Evenly mix two arrays
  Write a function that receives two arrays, then mix the two arrays evenly –starting with the first item of the first array. The returned array should alternate between each array in turn, one element at a time. So the sequence would look like:
  Array 1 first element, Array 2 first element, Array 1 second element, Array 2 second element... and so on.
  The elements that make up the arrays are completely random, and the arrays can be of differing lengths.
  const mix = (firstArray, secondArray) => { // your code
  }
  console.log(mix([1, 2, 3], [4, 5, 6]))
  // [1, 4, 2, 5, 3, 6]
  console.log(mix(["h", "a", "c"], [7, 4, 17, 10, 48])) // ["h", 7, "a", 4, "c", 17, 10, 48]
*/

function mix(arr, arr2) {
  let result = [];
  let currentArray = arr.length <= arr2.length ? arr : arr2;
  let currentIndex = 0;
  for (let i = 0; i < currentArray.length; i++) {
    result.push(arr[i], arr2[i]);
    currentIndex++;
  };
  return result.concat(arr.slice(currentIndex), arr2.slice(currentIndex));
}

mix([1, 2], [3, 4, 5]);