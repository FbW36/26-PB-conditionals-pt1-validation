let userName = 'Alex';
let userEmail = 'abcd@gmail.com';
let userPassword = 'Alex22';
let userConfirmPassword = 'alex22';

// a
let checkUsernameLength = userName.length > 3 ? 'The user name length is bigger than 3' : 'The user name length is smaller than 3';

console.log(checkUsernameLength);

// b
let checkEmail = ( (userEmail.length > 12) && (userEmail.includes('@')) ) ? 'valid email' : 'invalid email';

console.log(checkEmail);

// c
let checkPassword = userPassword.length > 5 ? 'secure password' : 'insecure password';

console.log(checkPassword);

// d
let checkConfirmedPassword = userPassword === userConfirmPassword ? 'passwords are identical' : 'passwords are not identical';

console.log(checkConfirmedPassword);