let userName = "Alex";
let userEmail = "a.gmail.com";
let userPassword = "Alex22";
let userConfirmPassword = "alex22";

let result1 = userName.length > 3;

let emailLength = userEmail.length > 12;
let isInclude = userEmail.includes("@");

let result2 = emailLength || isInclude;

let result3 = userPassword.length > 5;

let result4 = userPassword === userConfirmPassword;

if (result1 && result2 && result3 && result4) {
  console.log("The user data are valid");
} else {
  console.log("Validation error message");
}
