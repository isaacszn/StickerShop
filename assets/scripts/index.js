let selectedPack = null;

// Greet user functionality
document.body.onload = () => {
  const greetingBox = document.querySelector('#greeting-box');
  
  let greetings = ['Hola', 'Hi', 'Hello', 'Good Day', 'Ahoy', 'Wagwan', 'What\'s up?', 'Howdy', 'Yo', 'How far', 'Ele way?'];
  let min = 0;
  let max = 9;
  let index = Math.floor(Math.random() * (max - min + 1)) + min;
  let greeting = greetings[index];
 
  greetingBox.textContent = greeting;
};

// Purchase functionality
document.querySelectorAll(".purchase-btn").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPack = button.dataset.pack;
    document.querySelector(".name-of-pack").value = selectedPack.trim();
    document.querySelector(".whole-page").classList.add("blur");
    document.querySelector(".simple-dialog").classList.remove("d-none");
    document.querySelector(".simple-dialog").classList.add("d-block");
    document.querySelector(".email").value = "";
  });
});

// Cancel functionality
document.querySelector(".cancel-btn").addEventListener("click", () => {
  document.querySelector(".whole-page").classList.remove("blur");
  document.querySelector(".simple-dialog").classList.add("d-none");
  document.querySelector(".simple-dialog").classList.remove("d-block");
  document.querySelector(".email").classList.remove("error");
});

// Continue functionality
document.querySelector(".continue-btn").addEventListener("click", () => {
  // Call Paystack for payment
  const email = document.querySelector(".email").value;
  if (email) {
    email.classList.remove("error");
    payWithPaystack(email, selectedPack);
  } else {
    const email = document.querySelector(".email");
    email.classList.add("error");
  }
});

// Open menu functionality
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".whole-page").classList.add("blur");
  const menu = document.querySelector(".menu");
  const list = document.querySelector("#menu-list");
  const closeBtn = document.querySelector(".close-btn");
  const menuBtn = document.querySelector(".menu-btn");
  menu.style.width = "70vw";
  menu.style.padding = "1rem";
  list.classList.remove("d-none");
  menuBtn.style.display = "none";
  closeBtn.style.display = "flex";
});

// Close menu functionality
document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".whole-page").classList.remove("blur");
  const menu = document.querySelector(".menu");
  const list = document.querySelector("#menu-list");
  const closeBtn = document.querySelector(".close-btn");
  const menuBtn = document.querySelector(".menu-btn");
  menu.style.width = "0";
  menu.style.padding = "0";
  list.classList.add("d-none");
  closeBtn.style.display = "none";
  menuBtn.style.display = "flex";
});

// Log out user functionality 
document.querySelector("#logout-btn").addEventListener("click", () => {
  const logoutBtn = document.querySelector("#logout-btn");
  logoutBtn.style.opacity = "80%";
  logoutBtn.style.userSelect = "none";
  logoutBtn.style.cursor = "wait";
  logoutBtn.textContent = "Logging out...";
  // Implement Cocobase to log user out
  console.log("Logging out");
});

// Log out user functionality 
document.querySelector(".logout-btn").addEventListener("click", () => {
  const logoutBtn = document.querySelector(".logout-btn");
  logoutBtn.style.opacity = "80%";
  logoutBtn.style.userSelect = "none";
  logoutBtn.style.cursor = "wait";
  logoutBtn.textContent = "Logging out...";
  // Implement Cocobase to log user out
  console.log("Logging out");
});

// Initializing Paystack for payment
const payWithPaystack = (email, selectedPack) => {
  let handler = PaystackPop.setup({
    key: "pk_test_9404edbedc7515e6cff50a989dbd8694c760f5de",
    email: email,
    amount: 30000, // in kobo (but ₦300.00 in Naira)
    currency: "NGN",
    callback: function(response) {
      let downloadLinks = {
        "funny-pack": "https://stickerpacksforss.vercel.app/sticker-packs/funny-pack.zip",
        lol: "https://https://stickerpacksforss.vercel.app/sticker-packs/lol.zip",
        "naija-stickers": "https://stickerpacksforss.vercel.app/sticker-packs/naija-stickers.zip",
        "naija-vibez": "https://stickerpacksforss.vercel.app/sticker-packs/naija-vibez.zip",
        naija4u: "https://stickerpacksforss.vercel.app/sticker-packs/naija4u.zip",
      };
      const selectedPackName = selectedPack;
      const downloadLink = downloadLinks[selectedPackName];
      window.location.href = `/thankyou.html?link=${downloadLink}`;
    },
    onClose: function() {
      alert("Payment window closed.");
    },
  });
  handler.openIframe();
};