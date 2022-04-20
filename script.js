// Assignment code here

// Special characters 
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters lowercase
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//upper case letters
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//actual password generator
function generatePassword() {
    var confirmLength = window.prompt("How many characters would you like your password? Please choose between 8-128");

    var confirmLength = (prompt("How many characters would you like your password to contain?"));

    // Loop if answer is outside the parameters 
    while(confirmLength <= 7 || confirmLength >= 51) {
        alert("Password length must be between 8-50 characters Try again");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
        } 
  
        // Repeat back how many charactes the user will have  
        alert(`Your password will have ${confirmLength} characters`);
  
      // Determine parameters of password 
      var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
      var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
      var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
        // Loop if answer is outside the parameters 
        while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
          alert("You must choose at least one parameter");
          var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
          var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
          var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
          var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
      } 
  
        // Assign an action to the password parameters
        var passwordCharacters = []
        
      
  
        console.log(passwordCharacters)
  
        // Empty string to be filled based on for loop selecting random characters from the array
        var randomPassword = ""
        
        for (var i = 0; i < confirmLength; i++) {
          randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
          console.log(randomPassword)
        }
        return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);