const myName = 'Admin';
const myPhone = '9987389377839';

const user = {
  name: 'Admin Admin',
  age: 89,
  location: 'New York',
  country: 'USA'
}

function getInfo() {
  const info = 'Hello my name is ' + ' ' + user.name + ' and I am '
    + user.age + ' years old.';
  const infoString = `Hello my name is ${user.name} and I am ${user.age} years old.`
  return infoString;
};