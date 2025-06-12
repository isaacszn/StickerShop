// Purchase functionality
document.querySelectorAll('.purchase-btn').forEach(button => {
  button.addEventListener('click', () => {
    let pack = button.dataset.pack
    // let amount = button.dataset.amount
    console.log(`Pack name: ${pack}`)
    document.querySelector('.whole-page').classList.add('blur')
    document.querySelector('.simple-dialog').classList.remove('d-none')
    document.querySelector('.simple-dialog').classList.add('d-block')
  })
})

// Cancel functionality
document.querySelector('.cancel-btn').addEventListener('click', () => {
  document.querySelector('.whole-page').classList.remove('blur')
  document.querySelector('.simple-dialog').classList.add('d-none')
  document.querySelector('.simple-dialog').classList.remove('d-block')
})

// Continue functionality
document.querySelector('.continue-btn').addEventListener('click', () => {
  // Call Paystack for payments
  const email = document.querySelector('.email').value
  const packName = document.querySelector('.name-of-pack').value
  payWithPaystack(email, packName)
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

// PAYSTACK 
const payWithPaystack = (email, packName) => {
  let handler = PaystackPop.setup({
    key: 'pk_test_9404edbedc7515e6cff50a989dbd8694c760f5de', // get from Paystack dashboard
    email: email,
    amount: 30000, // in kobo (₦300.00)
    currency: 'NGN',
    callback: function(response) {
      window.location.href = '/thankyou.html'
      console.log(packName)
      // alert('Payment successful. Ref: ' + response.reference);
    },
    onClose: function() {
      alert('Payment window closed.');
    }
  });
  handler.openIframe();
}