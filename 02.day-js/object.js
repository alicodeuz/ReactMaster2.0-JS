const james = {
  name: 'James',
  age: 24,
  job: {
    title: 'Taxi driver',
    experience: 6,
    isPro: true,
    awards: ['Best taxi driver', 'Best valued eployee'],
  },
  city: 'Vancovire',
  country: 'Canada',
};

const bob = {
  name: 'Bob',
  age: 45,
  job: {
    title: 'Taxi driver',
    experience: 32,
    isPro: true,
    awards: ['Best taxi driver', 'Best valued eployee', 'dshfjds', 'dsd'],
  },
  city: 'Vancovire',
  country: 'Canada',
};

const getUserInfo = (user) => {
  const name = user.name;
  const age = user.age;
  const job = user.job.title;
  const isPro = user.job.isPro ? 'pro driver' : 'new driver';

  const userInfo = `This is ${user.name} and he is ${age} years old. He is a ${isPro}`;

  return userInfo;
};


getUserInfo(james);
getUserInfo(bob);


const drivers = [james, bob];//array of objects

