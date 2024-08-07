function showPassword() {
    const passwordInput = document.getElementById("show-password");
    const showHideButton = document.getElementById("show-password-button");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showHideButton.textContent = "HIDE"; // Change button text to HIDE
    } else {
        passwordInput.type = "password";
        showHideButton.textContent = "SHOW"; // Change button text to SHOW
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("login-form")
        .addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            const email = document.getElementById("email").value;
            const password = document.getElementById("show-password").value;

            if (email === "admin@gmail.com" && password === "admin") {
                window.location.href = "/dashboard/index.html";
            } else {
                alert("Invalid email or password");
            }
        });
});
