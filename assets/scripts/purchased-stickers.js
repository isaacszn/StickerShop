import { Cocobase } from "https://unpkg.com/cocobase@1.2.1/dist/index.js";

const db = new Cocobase({
  apiKey: "rGg8piI-LB2uMJsh7dfWnJ72T2mZzIRGZcfdD1XP",
  projectId: "ac8337c1-e1ee-44b5-b210-f27986e3fc6c",
});

let userName = "";

document.querySelector("body").onload = async () => {
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
        // userName.textContent = capitalizeWords(db.user.data.fullName);
        userName = capitalizeWords(db.user.data.fullName);
      }
    } catch (error) {
      // db.logout();
      // window.location.href = "/login.html";
    }
  };

  await initAuth();
  await getUserPurchasedPack();
};

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
  window.location.href = "/login.html";
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
  window.location.href = "/login.html";
});

// Peice of code that gets the specific user's purhcased sticker pack(s)
const getUserPurchasedPack = async () => {
  const container = document.querySelector("#container");

  if (!container.textContent.length < 0) {
    document.querySelector(".loader").classList.remove("hide");
    document.querySelector(".loader").classList.add("show");
  } else {
    document.querySelector(".loader").classList.remove("show");
    document.querySelector(".loader").classList.add("hide");
  }

  const purchasedStickers = await db.listDocuments("purchased_stickers", {
    where: {
      userName: "John",
    },
    orderBy: "createdAt",
    limit: 50,
  });

  purchasedStickers.forEach((purchasedSticker) => {
    container.innerHTML += `<section class="pack">
                    <h2 class="pack-name">${purchasedSticker.data.packName}</h2><br>
                    <p class="bold">15 stickers</p>
                    <br>
                    <div class="img-stack">
                        <img src="/assets/sticker-packs/funny-pack/STK-20241214-WA0016.webp" alt="Funny 1"
                            class="pack-sample">
                        <img src="/assets/sticker-packs/funny-pack/STK-20241220-WA0012.webp" alt="Funny 2"
                            class="pack-sample">
                        <img src="/assets/sticker-packs/funny-pack/STK-20250105-WA0000.webp" alt="Funny 3"
                            class="pack-sample">
                        <img src="/assets/sticker-packs/funny-pack/STK-20241230-WA0003.webp" alt="Funny 4"
                            class="pack-sample">
                    </div>
                    <br>
                    <span class="price">NGN300</span>
                </section>`;
  });
};
