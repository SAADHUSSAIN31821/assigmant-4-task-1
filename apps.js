function registerUser() {
    // Get user information
    var name = prompt("Enter your name:","Saad hussain");
    var phoneNumber = prompt("Enter your phone number:","030000000");
    var email = prompt("Enter your email:","saadhussain31821@gmail.com");
    var password = prompt("Enter your password:");
    var confirmPassword = prompt("Confirm your password:");

    // Check if any field is empty
    if (!name.trim() || !phoneNumber.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
        alert("Error: Please fill in all the fields.");
    } else {
        // Check if passwords match
        if (password === confirmPassword) {
            alert("Congratulations! You are successfully registered.");
        } else {
            alert("Error: Passwords do not match. Please enter the same password in both fields.");
        }
    }
}

// Call the function to register the user
registerUser();