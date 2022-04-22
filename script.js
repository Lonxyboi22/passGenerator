// Assignment code here

// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];

var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//actual password generator
function generatePassword() {
  
        // Assign an action to the password parameters
        var passwordCharacters;

        // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        var confirmNumber = confirm("Will this contain numbers?");
        var confirmCharacter = confirm("Will this contain special characters?");
        var confirmUppercase = confirm("Will this contain Uppercase letters?");
        var confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        passwordCharacters = alert("You must choose a criteria!");

    }
    // First if statement that uses user input prompts to determine passwordCharacters
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        passwordCharacters = character.concat(number, alpha, alpha2);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        passwordCharacters = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        passwordCharacters = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        passwordCharacters = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        passwordCharacters = number.concat(alpha, alpha2);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        passwordCharacters = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        passwordCharacters = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        passwordCharacters = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        passwordCharacters = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        passwordCharacters = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        passwordCharacters = number.concat(alpha2);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        passwordCharacters = character;
    }
    else if (confirmNumber) {
        passwordCharacters = number;
    }
    else if (confirmLowercase) {
        passwordCharacters = alpha;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        passwordCharacters = space.concat(alpha2);
    };


        
        
  
        console.log(passwordCharacters)
  
        // Empty string to be filled based on for loop selecting random characters from the array
        var randomPassword = ""
        
        for (var i = 0; i < enter; i++) {
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