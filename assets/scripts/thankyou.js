import { Cocobase } from "https://unpkg.com/cocobase@1.2.1/dist/index.js";

const db = new Cocobase({
  apiKey: "rGg8piI-LB2uMJsh7dfWnJ72T2mZzIRGZcfdD1XP",
  projectId: "ac8337c1-e1ee-44b5-b210-f27986e3fc6c",
});

document.querySelector("body").onload =  async () => {
  // Logic for getting the link via params
  const params = new URLSearchParams(window.location.search);
  const downloadLink = params.get("link");
  // Logic for adding download link to the anker element
  document.querySelector("#anker").href = downloadLink;

  await getAndDisplayUserName();
};

const getAndDisplayUserName = async () => {
  // Call on Cocobase to get the current user's data (name)
  const userName = document.querySelector("#user-name");

  if (!userName.textContent) {
    userName.textContent = "Loading...";
  }

  const capitalizeWords = (str) => {
    return str.replace(/\b[a-z]/g, (match) => {
      return match.toUpperCase();
    });
  };

  const initAuth = async () => {
    try {
      await db.initAuth();
      await db.getCurrentUser();
      if (db.user) {
        userName.textContent = capitalizeWords(db.user.data.fullName);
      }
    } catch (error) {
    //   db.logout();
    //   window.location.href = "/login.html";
    }
  };

  await initAuth();
};