// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChars = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  "/",
  ":",
  ";",
  "=",
  "<",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "'",
  "{",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Declares a function, generatePassword.
function generatePassword() {
  // Prompt user to declare the value of desLength.
  var desLength = prompt(
    "How many characters long should your password be? (8-128 accepted)"
  );

  // If desLength is outside of 8-128 character range, prompt user and return to beginning of generatePassword() function.
  if (desLength < 8 || desLength > 128) {
    prompt("Your password must be between 8 and 128 characters long.");
    generatePassword();
  }

  // Declares boolean variables for the use of each type of character and asks the user to confirm true or false.
  var ucUse = confirm("Should your password contain uppercase letters?");
  var lcUse = confirm("Should your password contain lowercase letters?");
  var numUse = confirm("Should your password contain numbers?");
  var scUse = confirm("Should your password contain special characters?");
}
