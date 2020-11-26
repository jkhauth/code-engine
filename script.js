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

  if (passwordLength >= 8 && 128){
    //CRITERIA OF CHOICES
    var allUppercase = ["A","B","D"];
    var randomIndex = Math.floor(Math.random() * allUppercase.length);
    var AllChoices = ["this"];

    //UPPERCASE PROMPT
    var useUpper = confirm("Would you like uppercase?")
        if (useUpper === true) {
                 
        passwordText = allUppercase[randomIndex].concat(AllChoices);
        alert(passwordText);        
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



//SENDS PASSWORD TO TEXT BOX


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
