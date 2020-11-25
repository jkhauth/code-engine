// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}
// Generating Password Functionality
function generatePassword() {

  var passwordLength = prompt("How long would you like your password?");
  






}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
