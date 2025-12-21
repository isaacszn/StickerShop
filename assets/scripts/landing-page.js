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

// Go to sign up page functionality
document.querySelector(".get-started-btn").addEventListener("click", () => {
  window.location.href = '/signup.html';
});

// Go to log in page functionality
document.querySelector(".login-btn").addEventListener("click", () => {
  window.location.href = '/login.html';
});