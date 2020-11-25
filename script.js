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
  
    
  var allChoices = ["hello"]
  var allUppercase = ["A","B","D"];
  var passwordLength = prompt("How long would you like your password?");
    if (passwordLength >= 8 && 128){
            
      //UPPERCASE PROMPT
      var useUpper = confirm("Would you like uppercase?")
        //IF USER CHOOSES UPPERCASE
          if (useUpper === true) {
          var upcase = allChoices.concat(allUppercase);
      }
      //IF USER DOESN'T WANT UPPERCASE 
      else {
        alert("YOU DONT WANT CAPS");
      }
      
    }







    
    //IF USER DOESN'T ENTER A VALID LENGTH
    else {
      alert("Please enter a valid length")
    }

}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
