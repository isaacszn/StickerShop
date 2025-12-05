let selectedPack = null;

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
});

// Continue functionality
document.querySelector(".continue-btn").addEventListener("click", () => {
  // Call Paystack for payments
  const email = document.querySelector(".email").value;
  if (email) {
    payWithPaystack(email, selectedPack);
  } else {
    // Do nothing
  }
});

// Show menu functionality
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".whole-page").classList.add("blur");
  document.querySelector(".menu").classList.remove("hide");
  document.querySelector(".menu").classList.add("show");
});

// Close menu functionality
document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".whole-page").classList.remove("blur");
  document.querySelector(".menu").classList.add("hide");
  document.querySelector(".menu").classList.remove("show");
});

// PAYSTACK
const payWithPaystack = (email, selectedPack) => {
  let handler = PaystackPop.setup({
    key: "pk_test_9404edbedc7515e6cff50a989dbd8694c760f5de",
    email: email,
    amount: 30000, // in kobo (but ₦300.00 in Naira)
    currency: "NGN",
    callback: function (response) {
      let downloadLinks = {
        "funny-pack":
          "https://stickerpacksforss.vercel.app/sticker-packs/funny-pack.zip",
        lol: "https://https://stickerpacksforss.vercel.app/sticker-packs/lol.zip",
        "naija-stickers":
          "https://stickerpacksforss.vercel.app/sticker-packs/naija-stickers.zip",
        "naija-vibez":
          "https://stickerpacksforss.vercel.app/sticker-packs/naija-vibez.zip",
        naija4u:
          "https://stickerpacksforss.vercel.app/sticker-packs/naija4u.zip",
      };
      const selectedPackName = selectedPack;
      const downloadLink = downloadLinks[selectedPackName];
      window.location.href = `/thankyou.html?link=${downloadLink}`;
    },
    onClose: function () {
      alert("Payment window closed.");
    },
  });
  handler.openIframe();
};
