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
    
    var AllChoices = ["this"];

    //UPPERCASE PROMPT
    var useUpper = confirm("Would you like uppercase?")
        if (useUpper === true) {
        var allUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  
        var randomIndex = Math.floor(Math.random() * allUppercase.length);      
        passwordText = allUppercase[randomIndex].concat(AllChoices);
               
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

  document.getElementById("password").innerHTML = passwordText;
} 



//SENDS PASSWORD TO TEXT BOX


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
