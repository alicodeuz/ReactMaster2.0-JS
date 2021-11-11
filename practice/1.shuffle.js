/* 
  1. Shuffle the array
  Imagine the supplied array is like a pack of cards. Write a function to shuffle this array in to a completely new and entirely random order, much like shuffling a pack of cards.
    const shuffle = (someArray) => { // your code
  }
  console.log(shuffle([10, 12, 15])) // [12, 15, 10]
*/

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5)
}

shuffle([1, 2, 3, 4, 5]);