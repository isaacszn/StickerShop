// Purchase functionality
document.querySelector('.purchase-btn').addEventListener('click', () => {
  document.querySelector('.whole-page').classList.add('blur')
  document.querySelector('.simple-dialog').classList.remove('d-none')
  document.querySelector('.simple-dialog').classList.add('d-block')
})

// Cancel functionality
document.querySelector('.cancel-btn').addEventListener('click', () => {
  document.querySelector('.whole-page').classList.remove('blur')
  document.querySelector('.simple-dialog').classList.add('d-none')
  document.querySelector('.simple-dialog').classList.remove('d-block')
})

// Show menu functionality
document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.whole-page').classList.add('blur')
  document.querySelector('.menu').classList.remove('hide')
  document.querySelector('.menu').classList.add('show')
})

// Close menu functionality
document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.whole-page').classList.remove('blur')
  document.querySelector('.menu').classList.add('hide')
  document.querySelector('.menu').classList.remove('show')
})