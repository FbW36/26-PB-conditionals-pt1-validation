let userName = 'Alex'
let userEmail = 'a.gmail.com'
let userPassword = 'Alex22'
let userConfirmPassword = 'alex22'
// Check if the userName length bigger than 3 chr.
console.log("is the username bigger than 3 charachters?", 3 < userName.length);
// Check if the userEmail length bigger than 12 chr and includes @.
console.log("Check if the userEmail length bigger than 12 chr and includes @", 12 > userEmail && userEmail.includes("@"));
// Check if the userPassword length bigger than 5 chr.
console.log("Check if the userPassword length bigger than 5 chr", userPassword.length > 5);
// CCheck if the userPassword length bigger than 5 chr
console.log("Check if the userPassword length bigger than 5 chr", userConfirmPassword === userPassword);
// If Not valid ==> output ==> print 'Validation error message'.
if (userConfirmPassword === userPassword) {
    console.log("The user data are valid");
} else {
    console.log("Validation error message");
}
// If success ==> output ==> print 'The user data are valid'.