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

// making the next 4 variables as arrays seemed like a good place to start, I just don't know how to call up to them with a random generator

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

  // the 4 following variables pretty much just confirm if you want those attributes or not. I learned the 'confirm' method via Google again, very useful
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

  // this pretty much just yells at you if you say no to all 4 different types of characters
  if (
    !includeLowerCaseLetters &&
    !includeUpperCaseLetters &&
    !includeNumbers &&
    !includeSpecialCharacters
  ) {
    alert("You must confirm at least one of the different character types! :(")
    return null;
  }

  // I'm not 100% this works properly but, it did change the password output from 'undefined' to '[object Object]' so that must mean something, I just am not sure where to take it from here
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

// --------------------------------------------------------

// I would have more here but I'm not really sure where to take it from here, most examples I have found online don't use the prompt method or are using terms from ES6, I'm not sure if we learned the proper method to do a randomizer unfortunately


