import { Cocobase } from "https://unpkg.com/cocobase@1.2.1/dist/index.js";

const db = new Cocobase({
  apiKey: "rGg8piI-LB2uMJsh7dfWnJ72T2mZzIRGZcfdD1XP",
  projectId: "ac8337c1-e1ee-44b5-b210-f27986e3fc6c",
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
document.querySelector("#logout-btn").addEventListener("click", async () => {
  const logoutBtn = document.querySelector("#logout-btn");
  logoutBtn.style.opacity = "80%";
  logoutBtn.style.userSelect = "none";
  logoutBtn.style.cursor = "wait";
  logoutBtn.textContent = "Logging out...";
  // Implement Cocobase to log user out
  console.log("Logging out");
  await db.logout();
  window.location.href = "/signup.html";
});

// Log out user functionality
document.querySelector(".logout-btn").addEventListener("click", async () => {
  const logoutBtn = document.querySelector(".logout-btn");
  logoutBtn.style.opacity = "80%";
  logoutBtn.style.userSelect = "none";
  logoutBtn.style.cursor = "wait";
  logoutBtn.textContent = "Logging out...";
  // Implement Cocobase to log user out
  console.log("Logging out");
  await db.logout();
  window.location.href = "/signup.html";
});
