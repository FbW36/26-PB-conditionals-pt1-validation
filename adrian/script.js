let userName = "Alex";
let userEmail = "a.gmail.com";
let userPassword = "Alex22";
let userConfirmPassword = "alex22";

//Check if the userName length bigger than 3 chr.
let validUserName = userName.length > 3;
console.log(validUserName);

//Check if the userEmail length bigger than 12 chr and includes @.
let validUserEmail = userEmail.length > 12 && userEmail.includes("@");
console.log(validUserEmail);

//Check if the userPassword length bigger than 5 chr.
let validPassword = userPassword.length > 5;
console.log(validPassword);

//Check if the userConfirmPassword equal to userPassword.
let validPasswordConfirm = userPassword === userConfirmPassword;
console.log(validPasswordConfirm);

if (validPassword && validUserEmail && validUserName && validPasswordConfirm)
  console.log("The user data is valid");
else console.log("Validation error message");
