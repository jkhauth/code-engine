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

    //CRITERIA OF CHOICES
  var useUpper = confirm("Would you like uppercase?");
  var useLower = confirm("Would you like lowercase?");
  var useNumbers = confirm('Would you like numbers?');
  var useSpecial = confirm("Would you like to use special characters?");

 
      // PULLING ALL CHOICES TOGETHER FROM RANDOM INDEX IN ARRAY
      var AllChoices = [];
      // CHOICES NEED TO BE THE LENGTH OF USERS CHOICE
      for (var i = 0; i < passwordLength, i++) {
        //CHARACTERS TO CHOOSE FROM
          var allUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  
          var allLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
          var allNums = ["0", "1", "2", "3", "4","5", "6", "7", "8", "9"]
          var allSpec = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    //UPPERCASE PROMPT
       
             
    //LOWERCASE PROMPT
    
        
    //NUMBERS PROMPT
    //SPECIAL CHARACTERS PROMPT
  }   
    

//SENDS PASSWORD TO TEXT BOX


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
