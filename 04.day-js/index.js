function handleChange(event) {
  const h2 = document.querySelector('h2');
  h2.innerText = event.target.value;
}

function handleKeyPress(event) {
  const { target: { value } } = event;
  const h2 = document.querySelector('h2');
  h2.innerText = value;
  console.log(event)
}

function handleFormSubmit(event) {
  console.log(event);
  event.preventDefault();
}

function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log('Button event', event)
  // return true;
}