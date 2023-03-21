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

var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', ];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

function generatePassword(){
  var passwordLength = parseInt(
    prompt("How long would you like your password to be?")
  );

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

  








}


