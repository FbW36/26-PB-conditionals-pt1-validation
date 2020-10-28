let userName = "Alex";
let userEmail = "a.gmail.com";
let userPassword = "Alex22";
let userConfirmPassword = "alex22";

// * Check if the userName length bigger than 3 chr.
if (userName.length > 3) {
  if (userEmail.length > 12 && userEmail.includes("@")) {
    if (userPassword.length > 5) {
      if (userPassword === userConfirmPassword) {
        console.log("The user data are valid");
      } else {
        console.log(`Validation error message 4`);
      }
    } else {
      console.log(`Validation error message 3`);
    }
  } else {
    console.log(`Validation error message 2`);
  }
} else {
  console.log(`Validation error message 1`);
}
