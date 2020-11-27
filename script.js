// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password.join('');

}
// Generating Password Functionality
function generatePassword() {
  
  // NEED TO MAKE TO TAKE USERS INPUT TO PROVIDE PASSWORD LENGTH  
  var passwordLength = parseInt(prompt("How long would you like your password?"));

            // IF USER DOESNT PUT IN A NUMBER MATCHING CRITERIA
            if (passwordLength < 8 || passwordLength > 128){
            alert("Please select a number 8 to 128")
            return;
            }
            // CHECKS IF THE INPUT IS A NUMBER
            if (!Number.isInteger(passwordLength)) {
            alert("Please enter a number")
            return;
            }

    // CRITERIA OF CHOICES
      var useUpper = confirm("Would you like uppercase?");
      var useLower = confirm("Would you like lowercase?");
      var useNumbers = confirm('Would you like numbers?');
      var useSpecial = confirm("Would you like to use special characters?");
    

 
      // PULLING ALL CHOICES TOGETHER FROM RANDOM INDEX IN ARRAY
      var password = [];

      // CHOICES NEED TO BE THE LENGTH OF USERS CHOICE
      for (var i = 0; i < passwordLength; i++) {

        //CHARACTERS TO CHOOSE FROM
          var allUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];  
          var allLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
          var allNums = ["0", "1", "2", "3", "4","5", "6", "7", "8", "9"]
          var allSpec = ['!', "\"", '#', "'", '$','%','&','(', ')', '*','+','-','.','//',':',';','<','=','>','?','@','[',']','^','_','`','{','|',"'", '}', '~'];
              
              // ALL RESPECTED OUTCOMES FROM DIFFERENT CHOICES
              var upperLower = password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)] , allLowercase[Math.floor(Math.random() * allLowercase.length)]); 
              var upperNumber = password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)] , allNums[Math.floor(Math.random() * allNums.length)]);
              var upperSpec = password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)] , allSpec[Math.floor(Math.random() * allSpec.length)]);
              var upperLowNum = password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)] , allLowercase[Math.floor(Math.random() * allLowercase.length)] , allNums[Math.floor(Math.random() * allNums.length)]);
              var upperLowSpec = password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)] , allLowercase[Math.floor(Math.random() * allLowercase.length)] , allSpec[Math.floor(Math.random() * allSpec.length)]);
              var upperNumSpec = password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)] , allNums[Math.floor(Math.random() * allNums.length)] , allSpec[Math.floor(Math.random() * allSpec.length)]);
              var allCharacters =password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)] , allLowercase[Math.floor(Math.random() * allLowercase.length)], allNums[Math.floor(Math.random() * allNums.length)] , allSpec[Math.floor(Math.random() * allSpec.length)]);
              var lowerNumSpec =  password.concat(allLowercase[Math.floor(Math.random() * allLowercase.length)] , allNums[Math.floor(Math.random() * allNums.length)] , allSpec[Math.floor(Math.random() * allSpec.length)]);
              var lowerNumber = password.concat(allLowercase[Math.floor(Math.random() * allLowercase.length)] , allNums[Math.floor(Math.random() * allNums.length)]);
              var lowerSpec = password.concat(allLowercase[Math.floor(Math.random() * allLowercase.length)] , allSpec[Math.floor(Math.random() * allSpec.length)]);
              var numsSpecs = password.concat(allNums[Math.floor(Math.random() * allNums.length)] , allSpec[Math.floor(Math.random() * allSpec.length)]);
          
                  // PUTTING RESPECTED OUTCOMES TOGETHER

                        // ALL UPPER CASE
                        if (useUpper && !useLower && !useNumbers && !useSpecial){
                        password = password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)]);
                        }
                        // ALL LOWER CASE
                        else if (!useUpper && useLower && !useNumbers && !useSpecial)
                        password = password.concat(allLowercase[Math.floor(Math.random() * allLowercase.length)]);
                        // ALL NUMBERS
                        else if (!useUpper && !useLower && useNumbers && !useSpecial)
                        password = password.concat(allNums[Math.floor(Math.random() * allNums.length)]);
                        // ALL SPECIAL CHARACTERS
                        else if (!useUpper && !useLower && !useNumbers && useSpecial)
                        password = password.concat(allSpec[Math.floor(Math.random() * allSpec.length)]);
                        // ONLY UPPERCASE AND LOWERCASE
                        else if (useUpper && useLower && !useNumbers && !useSpecial)
                        password = upperLower;
                        // ONLY UPPERCASE AND NUMBERS
                        else if (useUpper && !useLower && useNumbers && !useSpecial)
                        password = upperNumber;
                        // ONLY UPPERCASE AND SPECIAL CHARACTERS
                        else if (useUpper && !useLower && !useNumbers && useSpecial)
                        password = upperSpec;
                        // ONLY UPPERCASE = LOWERCASE - NUMBERS
                        else if (useUpper && useLower && useNumbers && !useSpecial)
                        password = upperLowNum;
                        // ONLY UPPERCASE - LOWERCASE - SPECIAL CHARACTER
                        else if (useUpper && useLower && !useNumbers && useSpecial)
                        password = upperLowSpec;
                        // ONLY UPPERCASE - NUMBERS - SPECIAL CHARACTER
                        else if (useUpper && !useLower && useNumbers && useSpecial)
                        password = upperNumSpec;
                        // ONLY LOWERCASE - NUMBERS - SPECIAL CHARACTER
                        else if (!useUpper && useLower && useNumbers && useSpecial)
                        password = lowerNumSpec;
                        // ONLY LOWERCASE AND NUMBERS
                        else if (!useUpper && useLower && useNumbers && !useSpecial)
                        password = lowerNumber;
                        // ONLY LOWERCASE AND SPECIAL CHARACTERS
                        else if (!useUpper && useLower && !useNumbers && useSpecial)
                        password = lowerSpec;
                        // ONLY NUMBERS AND SPECIAL CHARACTERS
                        else if (!useUpper && !useLower && useNumbers && useSpecial)
                        password = numsSpecs;
                        // ALL CRITERIA CHOSEN
                        else if (useUpper && useLower && useNumbers && useSpecial)
                        password = allCharacters;
                        // IF NO CRITERIA SELECTED
                        else if (!useUpper && !useLower && !useNumbers && !useSpecial)
                        password = alert("SELECT ONE CRITERIA")
                        
        }
                      
     return password;
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
