import { Cocobase } from "https://unpkg.com/cocobase@1.2.1/dist/index.js";

const db = new Cocobase({
  apiKey: "rGg8piI-LB2uMJsh7dfWnJ72T2mZzIRGZcfdD1XP",
  projectId: "ac8337c1-e1ee-44b5-b210-f27986e3fc6c",
});


// Code for sending the report
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = document.querySelector(".form-btn");
  const originalContent = btn.textContent;
  btn.textContent = "Sending...";
  btn.classList.add("disabled");
  const dialogBox = document.querySelector(".dialog-box");
  const message = document.querySelector(".message");
  const formData = new FormData(e.target);
  const fullName = formData.get("full-name");
  const reportMessage = formData.get("report-message");
  console.log(fullName, reportMessage);

  // Implement Cocobase here to create a report collection
//   try {
//     await db.login(email, password);
//     if (await db.isAuthenticated()) {
//       console.log("Logged in successfully");
//       dialogBox.classList.remove("hide");
//       dialogBox.classList.add("show");
//       dialogBox.classList.remove("error");
//       dialogBox.classList.add("success");
//       message.textContent = "Logged in successfully. You'll be redirected to the main page!!"; // Add success emoji
//       btn.textContent = originalContent;
//       btn.classList.remove("disabled");
//     }
//   } catch (error) {
//     console.log(error.message);
//     dialogBox.classList.remove("hide");
//     dialogBox.classList.add("show");
//     dialogBox.classList.remove("success");
//     dialogBox.classList.add("error");
//     if (error.message === "Failed to fetch") {
//       message.textContent =
//         "No internet connection. Turn on Wi-Fi or mobile data!!"; // Add warning emoji
//     } else {
//       message.textContent = error.message; // Work on triming the message response to what I want ("data" property)  
//     }
//     btn.textContent = originalContent;
//     btn.classList.remove("disabled");
//   }
});

// document.querySelector(".hide-btn").addEventListener("click", () => {
//   const dialogBox = document.querySelector(".dialog-box");
//   dialogBox.classList.remove("show");  
//   dialogBox.classList.add("hide");
// });

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