let log = console.log;

let userName = "Alex";
let userEmail = "a.gmail.com";
let userPassword = "Alex22";
let userConfirmPassword = "alex22";

// Check if the userName length bigger than 3 chr
userName.length > 3
  ? log("The user data are valid")
  : log("Validation error message");

// Check if the userEmail length bigger than 12 chr and includes @
userEmail.length > 12 && userEmail.includes("@")
  ? log("The user data are valid")
  : log("Validation error message");

// Check if the userPassword length bigger than 5 chr
userPassword.length > 5
  ? log("The user data is valid")
  : log("Validation error message");

// Check if the userConfirmPassword equal to userPassword
userPassword === userConfirmPassword
  ? log("The user data are valid")
  : log("Validation error message");
