document.querySelector('.purchase-btn').addEventListener('click', () => {
  document.querySelector('.whole-page').classList.add('blur')
  document.querySelector('.simple-dialog').classList.remove('d-none')
  document.querySelector('.simple-dialog').classList.add('d-block')
})