document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById("form-feedback");

    let isValid = true;
    const messages = [];

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const passwordInput = document.getElementById("password").value.trim();

        //Check the username if its valid
        if (usernameInput.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        //Check the email if its valid
        if (!emailInput.includes("@") || !emailInput.includes(".")) {
            isValid = false;
            messages.push("Email must contain '@' and '.' characters.");
        }

        //Check the password if its valid
        if (passwordInput.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        //Display feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // green
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // red
        }
    })
});