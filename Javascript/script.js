// Assignment code here

function generatePassword() {

//ask user how many characters they want to use in password
var charCount = window.prompt("How many characters would you like your password to contain?");

//merges the password character strings
var passwordConcat = [];

//if user presses cancel, end the function
if (!charCount) {
  return;
}

// ask user if they would to use special characters
var specChar = window.confirm("Click OK if you would like to include special characters.");
//adding the list of special charcters
var spec = ["\ ", "!","\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";",  "\<", "\=", "\>", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];

//ask user if they would like to use numeric characters
var numChar = window.confirm("Click OK if you would like to include numeric characters.");
//adding the list of numeric characters
var num = '1234567890'.split('');

//ask user if they would like to use lowercase characters
var lowChar = window.confirm("Click OK if you would like to include lowercase characters.");
//adding the list of lowercase characters
var lowAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


//ask user if they would like to use lowercase characters
var uppChar = window.confirm("Click OK if you would like to include uppercase characters.");
//adding the list of uppercase characters
var uppAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')




if (specChar === true) {
  var specRandom = Math.floor(Math.random() * spec.length);
  console.log(spec[specRandom]);
} else {
  return;
  };
if (numChar === true) {
    var numRandom = Math.floor(Math.random() * num.length);
    console.log(num[numRandom])
  } else {
    return;
    };



}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
