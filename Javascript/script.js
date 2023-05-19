// Assignment code here

//merges the password character strings
var passwordarray = [];

function generatePassword() {

  //ask user how many characters they want to use in password
  //parse turns it into an int
  var charCount = parseInt(window.prompt("How many characters would you like your password to contain? Choose between 8 - 128 characters"));


  //if user has an amount under 8 or over 128 it end the function and alerts the user
  if (charCount < 8 || charCount > 128) {
    window.alert("Character amount has to be in between 8 or 128!!");
    return;
  };
  //if the user hits cancel
  if (!charCount) {
    window.alert("You have cancelled!!");
    return;
  };


  // ask user if they would to use special characters
  var specChar = window.confirm("Click OK if you would like to include special characters.");
  //adding the list of special charcters
  var spec = ["\ ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "\<", "\=", "\>", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];

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



  //if special characters are added then it is concatonated to the passwordarray
  if (specChar === true) {
    passwordarray = passwordarray.concat(spec);
  };

  //if numeric characters are added then it is concatonated to the passwordarray
  if (numChar === true) {
    passwordarray = passwordarray.concat(num);
  };

  //if lowercase characters are added then it is concatonated to the passwordarray
  if (lowChar === true) {
    passwordarray = passwordarray.concat(lowAlphabet);
  };

  //if uppercase characters are added then it is concatonated to the passwordarray
  if (uppChar === true) {
    passwordarray = passwordarray.concat(uppAlphabet);
  };

  //makes sure password is blank even win you do it over
  var password = "";
console.log(passwordarray);
//is supposed to make the password choose based on character amount
  for (var i = 0; i < charCount; i++) {
    console.log(i);
    var index = Math.floor(Math.random() * passwordarray.length);
    password = password + passwordarray[index];
  };

  return password;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
