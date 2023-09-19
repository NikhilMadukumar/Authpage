const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordMatchMessage = document.getElementById("password-match-message");
const signupButton = document.getElementById("signup-button");

function validateForm() {
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        passwordMatchMessage.textContent = "Passwords do not match!";
        passwordMatchMessage.style.color = "red";
        signupButton.disabled = true;
        return false;
    } else {
        passwordMatchMessage.textContent = "Passwords match!";
        passwordMatchMessage.style.color = "green";
        signupButton.disabled = false;
        return true;
    }
}


[passwordInput, confirmPasswordInput].forEach((input) => {
    input.addEventListener("input", validateForm);
});
