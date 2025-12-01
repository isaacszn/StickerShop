import { Cocobase } from "https://unpkg.com/cocobase@1.2.1/dist/index.js";

const db = new Cocobase({
  apiKey: "rGg8piI-LB2uMJsh7dfWnJ72T2mZzIRGZcfdD1XP",
  projectId: "ac8337c1-e1ee-44b5-b210-f27986e3fc6c",
});

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = document.querySelector("button");
  const originalContent = btn.textContent;
  btn.textContent = "Logging in...";
  btn.classList.add("disabled");
  const dialogBox = document.querySelector(".dialog-box");
  const message = document.querySelector(".message");
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");

  // Implement Cocobase here to login user
  try {
    await db.login(email, password);
    if (await db.isAuthenticated()) {
      console.log("Logged in successfully");
      dialogBox.classList.remove("hide");
      dialogBox.classList.add("show");
      dialogBox.classList.remove("error");
      dialogBox.classList.add("success");
      message.textContent = "Logged in successfully. You'll be redirected to the main page!!"; // Add success emoji
      btn.textContent = originalContent;
      btn.classList.remove("disabled");
    }
  } catch (error) {
    console.log(error.message);
    dialogBox.classList.remove("hide");
    dialogBox.classList.add("show");
    dialogBox.classList.remove("success");
    dialogBox.classList.add("error");
    if (error.message === "Failed to fetch") {
      message.textContent =
        "No internet connection. Turn on Wi-Fi or mobile data!!"; // Add warning emoji
    } else {
      message.textContent = error.message; // Work on triming the message response to what I want ("data" property)  
    }
    btn.textContent = originalContent;
    btn.classList.remove("disabled");
  }
});

document.querySelector(".hide-btn").addEventListener("click", () => {
  const dialogBox = document.querySelector(".dialog-box");
  dialogBox.classList.remove("show");  
  dialogBox.classList.add("hide");
});