let userName = "Alex";
let userEmail = "a.gmail.com";
let userPassword = "Alex22";
let userConfirmPassword = "alex22";

let userNameCheck =
  userName.length > 3
    ? console.log("user Name's Length is bigger that 3")
    : console.log("user Name's Length is not bigger than 3");

if (userEmail.length > 12 && userEmail.includes("@")) {
  console.log("Yes, the lenght is over 12 chr and includes @");
} else console.log("no, it doesn't");

let userPasswordCheck =
  userPassword.length > 5
    ? console.log("Password's Length is bigger that 5")
    : console.log("Password's Length is not bigger than 3");

let passCheck =
  userConfirmPassword === userPassword
    ? console.log("The user data are valid")
    : console.log("vaidation error message");
