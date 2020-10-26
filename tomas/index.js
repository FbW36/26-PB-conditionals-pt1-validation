let log = console.log;

let userName = 'Alex'
let userEmail = 'a.gmail.com'
let userPassword = 'Alex22'
let userConfirmPassword = 'alex22'

// Check if the userName length bigger than 3 chr
userName.length > 3 ? log('is userName bigger than 3 char?', true) : log('is userName bigger than 3 char?', false);

// Check if the userEmail length bigger than 12 chr and includes @
(userEmail.length > 12 && userEmail.includes('@')) ? log('longer than 12 and includes @?', true) : log('longer than 12 and includes @?', false);

// Check if the userPassword length bigger than 5 chr
log('is bigger than 5?', userPassword.length > 5);
log('did user confirm the same password?', userPassword === userConfirmPassword);