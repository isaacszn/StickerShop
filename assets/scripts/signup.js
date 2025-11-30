document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const btn = document.querySelector("button");
    const originalContent = btn.textContent;
    btn.textContent = "Signing up..."
    const formData = new FormData(e.target)
    const fullName = formData.get("full-name")
    const email = formData.get("email")
    const password = formData.get("password")

    console.log(`${fullName} ${email} ${password}`);

    // Implement Cocobase here to create user account
});