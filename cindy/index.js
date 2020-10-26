//26-PB-conditionals-pt3-validation
//User validation program

//User validation program

let userName = 'Alex'
let userEmail = 'a.gmail.com'
let userPassword = 'Alex22'
let userConfirmPassword = 'alex22'

//Check if the userName length bigger than 3 chr.
if(userName.length > 3 ){
    console.log("1. The user data are valid ")
}else{
    console.log("1. Validation error message")
}

//Check if the userEmail length bigger than 12 chr and includes @.
if((userEmail.length > 12) && (userEmail.includes("@"))){
    console.log("2. The user data are valid")
}else{
    console.log("2. Validation error message")
}

//Check if the userPassword length bigger than 5 chr.
if(userPassword.length > 5){
    console.log("3. The user data are valid ")
}else{
    console.log("3. Validation error message ")
}

//Check if the userConfirmPassword equal to userPassword.
if(userPassword === userConfirmPassword){
    console.log("4. The user data are valid")
}else{
    console.log("4. Validation error message")
}