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
  const list = document.getElementById('list');
  const { name, isStudent, universityName, universityAddress } = document.forms["my-form"];

  const newEl = `
    <li>
      <h4>Name: ${name.value}</h4>
      <h4>Are you student: ${isStudent.value}</h4>
      <h4>University Name: ${universityName.value}</h4>
      <h4>University address: ${universityAddress.value}</h4>
    </li>
  `;
  list.innerHTML += newEl;
  event.target.reset();
  handleCheckBox()
}

function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log('Button event', event)
  // return true;
}

function handleCheckBox() {
  const wrapperEl = document.querySelector('.university-input');
  const checked = document.getElementById('student').checked;
  if (checked) {
    wrapperEl.classList.add('show')
  } else {
    wrapperEl.classList.remove('show');
    const children = wrapperEl.children;
    for (let i = 0; i < children.length; i++) {
      children[i].value = '';
    }
  }
}