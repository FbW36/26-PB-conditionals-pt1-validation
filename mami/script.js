let userName = 'Alex'
let userEmail = 'a.gmail.com'
let userPassword = 'Alex22'
let userConfirmPassword = 'alex22'


// * Check if the userName length bigger than 3 chr.
console.log(userName.length>3)

// * Check if the userEmail length bigger than 12 chr and includes @.
console.log(userEmail.length>3)


// * Check if the userPassword length bigger than 5 chr.
console.log(userPassword.length>5)


// * Check if the userConfirmPassword equal to userPassword.
console.log(userPassword === userConfirmPassword ? 'The user data are valid': 'Validation error message')


// >If Not valid ==> output  ==> print 'Validation error message'.

// >If success ==> output  ==> print 'The user data are valid'.

