// Function declaration - First class citizens
function addTwoNumbers(num, num2) {
  console.log(num, num2);
  const result = num + num2;
  return result;
}

addTwoNumbers(2, 3);

// Function expression
const multiplyTwoNumbers = function (num, num2) {
  console.log(num, num2);
  const result = num * num2;
  return result;
}

multiplyTwoNumbers(addTwoNumbers(2, 2), 3);


// ES6 - arrow function =>, fat arrow function =>
const multNumbers = (num, num2) => {
  console.log(num, num2);
  const result = num * num2;
  return result;
}

multiplyTwoNumbers(addTwoNumbers(2, 2), 3);


// ES5 vs ES6 functions

function add1(num) {
  return num + 1
}

const add1ES6 = (num, num2) => num + 1
