function getTotalNumberOfCharacters() {
  var obj = { d: 2, e: 1, m: 2, o: 1, s: 5, g: 2, h: 4, j: 1 }
  var total = 0;
  var charAsArray = Object.values(obj);

  for (let i = 0; i < charAsArray.length; i++) {
    total = total + charAsArray[i];
  }

  return total;
}

getTotalNumberOfCharacters();