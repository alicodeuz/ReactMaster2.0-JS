console.log('JS loaded')

const el = document.getElementById('dom')

// el.addEventListener('click', (e) => {
//   console.log(e);
//   toggleClassName();
// })
document.addEventListener('click', (e) => {
  console.log(e.target);
  // e.target.remove()
});

function toggleClassName() {
  const el = 'h2';
  const className = 'active';
  const element = document.querySelector(el);
  const elClassName = element.className;

  if (elClassName.includes(className)) {
    element.className = elClassName.replace(className, '')
  } else {
    element.className += ` ${className}`
  }
}