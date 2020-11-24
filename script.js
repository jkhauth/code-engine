// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;



}

function generatePassword() {

  var lengthPass = prompt("How long do you want your password?");
  var smallLetter = confirm("Does your password need lowercase characters?");
  var bigLetter = confirm("Does your password need uppercase characters?");
  var num = confirm("Does your password need numeric characters?");
  var spec = confirm("Does your password need special characters in it?");

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
