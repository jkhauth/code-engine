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
              var upperLowNum =  password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)] , allLowercase[Math.floor(Math.random() * allLowercase.length)] , allNums[Math.floor(Math.random() * allNums.length)]);
              var upperLowSpec = allUppercase + allLowercase + allSpec;
              var upperNumSpec = allUppercase + allNums + allSpec;
              var allCharacters = allUppercase + allLowercase + allNums + allSpec;
              var lowerNumSpec = allLowercase + allNums + allSpec;
              var lowerNumber = allLowercase + allNums;
              var lowerSpec = allLowercase + allSpec;
              var numsSpecs = allNums + allSpec;
                  
                  // PUTTING RESPECTED OUTCOMES TOGETHER WITH EMPTY PASSWORD

                        // USER ONLY WANTS CAPS - WORKS
                        if (useUpper && !useLower && !useNumbers && !useSpecial){
                        password = password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)]);
                        }
                        else
                        // USER ONLY WANTS LOWER - WORKS
                        if (useLower && !useUpper && !useNumbers && !useSpecial){
                        password = password.concat(allLowercase[Math.floor(Math.random() * allLowercase.length)]);
                        }
                        else
                        // USER ONLY WANT NUMBERS - WORKS
                        if (useNumbers && !useLower && !useUpper && !useSpecial){
                        password = password.concat(allNums[Math.floor(Math.random() * allNums.length)]);
                        }
                        else
                        // USER ONLY WANTS SPECIAL CHARACTERS - WORKS
                        if (!useNumbers && !useLower && !useUpper && useSpecial){
                        password = password.concat(allSpec[Math.floor(Math.random() * allSpec.length)]);
                        }
                        else
                        // UPPER LOWER - WORKS
                        if (useUpper && useLower && !useNumbers && !useSpecial){
                        password = upperLower;
                        }
                        else
                        // UPPER NUMBER - WORKS //
                        if (useUpper && !useLower && useNumbers && !useSpecial){
                        password = upperNumber;
                        }
                        else
                        // UPPER SPEC - WORKS
                        if (useUpper && !useLower && !useNumbers && useSpecial){
                        password = upperSpec;
                        }
                        else
                        // UPPER LOW NUM - WORKS
                        if (useUpper && useLower && useNumbers && !useSpecial){
                          password = upperLowNum;
                          }
                        else

                        // UPPER LOW SPEC
                        if (useUpper && useLower && !useNumbers && useSpecial){
                          password = password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)] , allLowercase[Math.floor(Math.random() * allLowercase.length)] , allSpec[Math.floor(Math.random() * allSpec.length)]);
                          }
                        else

                        // UPPER NUM SPEC
                        if (useUpper && !useLower && useNumbers && useSpecial){
                          password = password.concat(allUppercase[Math.floor(Math.random() * allUppercase.length)] , allNums[Math.floor(Math.random() * allNums.length)] , allSpec[Math.floor(Math.random() * allSpec.length)]);
                          }
      }                 
                        // LOWERNUM SPEC
                        

                        
                        // LOWER NUMBER
                        

                        
                        // LOWER SPEC
                        

                        
                        // NUM SPECS

                        // USER WANTS ALL CRITERIA
    return password;

}     

              
//SENDS PASSWORD TO TEXT BOX


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
