// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This is the variable that the code should come to when adding lower cased letters
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// This is the variable that the code should come to when adding upper cased letters
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// This is the variable that the code should come to when adding numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

// This is the variable that the code should come to when adding special characters
// side note, I'm hoping the double '\\' is what would work for the password, not really sure if it would show 2 or 1 when working.
var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", ];

// this is the function my study group was able to code, that goes through all the prompts of what character types you want for your password, as well as pushing 'alerts' when criteria isn't met
// side note, I had no idea what parseInt did, but it seems to have worked, thanks Google!
function generatePassword(){
  var passwordLength = parseInt(
    prompt("How long would you like your password to be?")
  );

  // This bit of code rejects your input if you try choosing something that is not a number to define password length
  if (Number.isNaN(passwordLength)) {
    alert("Must provide a number for the password length.");
    return null;
  }

  if (passwordLength < 8) {
    alert("Your password must be at least 8 characters in length.");
    return null;
  }
  
  if (passwordLength > 128) {
    alert("Your password must be under 129 characters in length.");
    return null;
  }

  var includeLowerCaseLetters = confirm(
    "Click 'OK' to include Lower Case Letters in your password."
  );

  var includeUpperCaseLetters = confirm(
    "Click 'OK' to include Upper Case Letters in your password."
  );

  var includeNumbers = confirm(
    "Click 'OK' to include Numbers in your password."
  );

  var includeSpecialCharacters = confirm(
    "Click 'OK' to include Special Characters in your password."
  );

  if (
    !includeLowerCaseLetters &&
    !includeUpperCaseLetters &&
    !includeNumbers &&
    !includeSpecialCharacters
  ) {
    alert("You must confirm at least one of the different character types! :(")
    return null;
  }

  var textBoxIThink = {
    passwordLength: passwordLength,
    includeLowerCaseLetters: includeLowerCaseLetters,
    includeUpperCaseLetters: includeUpperCaseLetters,
    includeNumbers: includeNumbers,
    includeSpecialCharacters: includeSpecialCharacters,
  };

  return textBoxIThink
}


// I kept finding strings of code related to this one when trying to find how to get the password to appear in the text box, but I"m not really sure how it works

// math.floor(math.random() * randomPassword.length);


