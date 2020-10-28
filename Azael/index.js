// Check if the userName length bigger than 3 chr.
let userName = "Alex";
userName.length >= 3
  ? console.log("User Name " + "The user data are valid")
  : console.log("User Name " + "Validation error message");
// Check if the userEmail length bigger than 12 chr and includes @.

let userEmail = "a.gmail.com";
userEmail.length > 12 && userEmail.includes("@")
  ? console.log("User Email " + "The user data are valid")
  : console.log("User Email " + "Validation error message");

// Check if the userPassword length bigger than 5 chr.

let userPassword = "Alex22";
userPassword.length > 5
  ? console.log("User Password " + "The user data are valid")
  : console.log("User Password " + "Validation error message");

// Check if the userConfirmPassword equal to userPassword.

let userConfirmPassword = "alex22";

userConfirmPassword === userPassword
  ? console.log("User Password Confirmation " + "The user data are valid")
  : console.log("User Password Confirmation " + "Validation error message");
