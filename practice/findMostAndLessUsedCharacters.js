// Given string find most and less used letters/characters
const text = 'Demmo dsgg shsh  shhjs';

function findMostAndLessUsedCharacters(str) {
  const dictionary = createDictionaryOfCharacters(str);
  const result = findMinAndMaxCharacters(Object.entries(dictionary), str.length);

  const info = `Most used character is ${result.max.key}:${result.max.value}
  the Least used character is ${result.min.key}:${result.min.value}
  `
  console.log(info);
  return result;
}

findMostAndLessUsedCharacters(text);

function createDictionaryOfCharacters(str) {
  const strToArray = str.toLowerCase().replace(/\s/g, '').split('');
  let dictionary = {};
  for (let i = 0; i < strToArray.length; i++) {
    const currentChar = strToArray[i];
    if (dictionary[currentChar]) {
      dictionary[currentChar] = dictionary[currentChar] + 1;
    } else {
      dictionary[currentChar] = 1;
    }
  }
  return dictionary
};


function findMinAndMaxCharacters(array, maxNumberOfCharacters) {
  let max = 0;
  let maxChar = '';
  let min = maxNumberOfCharacters;
  let minChar = '';

  for (let i = 0; i < array.length; i++) {
    const key = array[i][0];
    const value = array[i][1];
    if (value > max) {
      max = value;
      maxChar = key;
    }
    if (min > value) {
      min = value;
      minChar = key;
    }
  };
  return {
    min: { key: minChar, value: min },
    max: { key: maxChar, value: max },
  }
}