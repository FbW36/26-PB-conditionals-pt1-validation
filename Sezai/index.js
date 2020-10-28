let userName = 'Alex'
let userEmail = 'a.gmail.com'
let userPassword = 'Alex22'
let userConfirmPassword = 'alex22'

let validUserNameLength= userName.length > 3;

let validUserEmailLength = userEmail.includes("@") && userEmail.length >12;

let validUserPassword = userPassword.length >5;

let validUserConfirmPassword = userPassword == userConfirmPassword

if(validUserNameLength && validUserEmailLength && validUserPassword && validUserConfirmPassword){
    console.log("The user data are valid");
}else {
    console.log("Validation error message");
}
