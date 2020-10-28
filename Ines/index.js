let userName = 'Alex'
let userEmail = 'abc@gmail.com'
let userPassword = 'alex222'
let userConfirmPassword = 'alex22'

// User Name
let userNameTernary = userName.length>3?"The user data is valid":"Validation error message";
console.log(userNameTernary);

// User email
if(userEmail.length>12){
    if(userEmail.includes("@")){
        console.log("The user data is valid");
    }
}
else{
    console.log("Validation error message");
}

//User Password
let userPasswordTernary = userPassword.length>5?"The user data is valid":"Validation error message";
console.log(userPasswordTernary);

//User Confirm Password
let userConfirmPasswordTernary = userConfirmPassword.length === userPassword?"The user data is valid":"Validation error message";
console.log(userConfirmPasswordTernary);