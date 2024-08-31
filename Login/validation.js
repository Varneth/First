function validateForm() {
    // Clear previous error messages
    clearErrors();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var isValid = true;

    // Validate name (letters only and not empty)
    if (name === "" || !/^[a-zA-Z ]+$/.test(name)) {
        document.getElementById("nameError").innerText = "Please enter a valid name (letters only).";
        isValid = false;
    }

    // Validate email
    if (email === "" || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate phone number (numbers only and 10 digits long)
    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Validate password (minimum 6 characters)
    if (password === "" || password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // Validate confirm password (must match the password)
    if (confirmPassword === "" || confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
}