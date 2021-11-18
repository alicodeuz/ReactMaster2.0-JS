let cars = [];

if (localStorage.cars) {
  cars = getAllCars();
}

for (let i = 0; i < cars.length; i++) {
  var el = document.createElement('P');
  addToBody(cars[i]);
}

const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function (e) {
  const nameValue = document.getElementById('car-input');
  const brandValue = document.getElementById('brand');
  const priceValue = document.getElementById('price');
  const categoryValue = document.getElementById('category');

  const newCar = {
    name: nameValue.value,
    brand: brandValue.value,
    price: priceValue.value,
    category: categoryValue.value,
    id: Date.now()
  }

  // 
  const cars = getAllCars()
  cars.push(newCar);
  updateLocaStorageCars(cars);
  addToBody(newCar);
  nameValue.value = '';
  brandValue.value = '';
  priceValue.value = '';
  categoryValue.value = '';
});

function removeElementById(id) {
  const cars = getAllCars();
  let allCars = [];

  for (let i = 0; i < cars.length; i++) {
    if (cars[i].id !== id) {
      allCars.push(cars[i]);
    }
  };

  updateLocaStorageCars(allCars)
  const el = document.getElementById(id);
  el.remove();
}

function addToBody(car) {
  var el = document.createElement('P');
  const { id, name, price, category, brand } = car;
  el.innerHTML = `Brand: ${brand}, 
  model: ${name}, 
  price:${price},
  Type: ${category}`;

  el.id = id;
  el.onclick = function () {
    removeElementById(id)
  }
  document.body.appendChild(el);
};


function getAllCars() {
  return JSON.parse(localStorage.cars || '[]');
}

function updateLocaStorageCars(cars) {
  const allCars = localStorage.cars = JSON.stringify(cars);
  return allCars;
}
