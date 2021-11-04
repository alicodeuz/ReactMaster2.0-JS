// Variables - O'zgaruvchilar
var long_text = 'dhakjsd khbask fdashj fashkj';
var age = 56;

// Data types
// Primitive - number, string, boolean, null, undefined
var myAge = 12;
var my_age = 12;
var myName = 'bob'
var hasKids = true;
var isMarried = false;

var currentUser = {
  isLoggedIn: false,
  account: null
};

var currentLoggedInUser = {
  isLoggedIn: false,
  account: {
    first_name: 'sssss',
    last_name: 'aaaaa',
    email: 'dsjhdj@mail.ru',
    password: 'dshdsjds',
  }
};

// Reference - array, object-(function, null, array);

function getMyName(age, location) {
  var myLastName = ' hehdchhcd';
  alert(currentLoggedInUser.first_name + myLastName + age)
}

getMyName(12, 'London'); //call the function

// ES6 - let & const

const age = 45;
let total = 0;

for (let i = 0; i < 10; i++) {
  console.log(i);
  total = total + i; // total += i
}

for (let i = 0; i < total; i++) {
  console.log(i);
}