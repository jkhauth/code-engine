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
  var allUppercase = ["A", "B", "C", "D"]
  var allChoices = []
  var passwordLength = prompt("How long would you like your password?");
    if (passwordLength >= 8 && 128){
      //UPPERCASE PROMPT
      var useUpper = confirm("Would you like uppercase?")
        //IF USER CHOOSES UPPERCASE
        if (useUpper === true){
          allChoices.concat(allUppercase);
      } else {
        alert("YOU DONT WANT CAPS")
      }
      

    }
console.log(allChoices)
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
