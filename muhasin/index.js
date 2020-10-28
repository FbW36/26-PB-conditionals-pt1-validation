// User validation program

let userName = "Alex"
let userEmail = "a.gmail.com"
let userPassword = "Alex22"
let userConfirmPassword = "alex22"

// Check if the userName length bigger than 3 chr.

if (userName.length > 3) {
    console.log("The user data are valid");
} else {
    console.log("Validaton error message");
}

// Check if the userEmail lenght bigger than 12 chr and includes @.

if (userEmail.length > 12 && userEmail.includes("@")) {
    console.log("The user data are valid");
} else {
    console.log("Validaton error message");
}


// Check if the userPassword length bigger than 5 chr.

if (userPassword.length > 5) {
    console.log("The user data are valid");
} else {
    console.log("Validaton error message");
}


// Check if the userConfirmPassword equal to userPassword

if (userConfirmPassword === userPassword) {
    console.log("The user data are valid");
} else {
    console.log("Validaton error message"); // Validaton error message
}