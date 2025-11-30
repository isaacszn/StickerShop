document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const btn = document.querySelector("button");
    const originalContent = btn.textContent;
    btn.textContent = "Logging in..."
    const formData = new FormData(e.target)
    const email = formData.get("email")
    const password = formData.get("password")

    console.log(`${email} ${password}`);

    // Implement Cocobase here to log in user
});