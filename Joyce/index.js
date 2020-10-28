let userName = "Alex";
let userEmail = "a.gmail.com";
let userPassword = "Alex22";
let userConfirmPassword = "alex22";

let result1 = userName.length > 3;
console.log(
  result1 === true
    ? "The userName length is bigger than 3 chr"
    : "The userName length is not bigger than 3 chr"
);

let emailLength = userEmail.length > 12;
let isInclude = userEmail.includes("@");
let result2 = emailLength && isInclude;
if (result2 === true) {
  console.log("The userEmail length bigger than 12 chr and includes @");
} else {
  console.log(
    "The userEmail length is not bigger than 12 chr or not includes @"
  );
}

let result3 = userPassword.length > 5;
console.log(
  result3 === true
    ? "The userPassword length is bigger than 5 chr"
    : "The userPassword length is not bigger than 5 chr"
);

let result4 = userPassword === userConfirmPassword;
console.log(
  result4 === true
    ? "The userConfirmPassword equal to userPassword"
    : "The userConfirmPassword is not equal to userPassword"
);

if (result1 && result2 && result3 && result4) {
  console.log("The user data are valid");
} else {
  console.log("Validation error message");
}
