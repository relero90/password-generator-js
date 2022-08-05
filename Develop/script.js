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
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = [
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

  // Declares local boolean variables for the use of each type of character and asks the user to confirm true or false.
  var ucUse = confirm("Should your password contain uppercase letters?");
  var lcUse = confirm("Should your password contain lowercase letters?");
  var numUse = confirm("Should your password contain numbers?");
  var scUse = confirm("Should your password contain special characters?");
  // If user selected false for all character types, prompt them to select at least one and recall the function.
  if (ucUse == false && lcUse == false && numUse == false && scUse == false) {
    prompt("You must select at least one character type for your password.");
    generatePassword();
  }

  // Sample array to contain one random value from each selected characterUse array.
  var charSample = [];
  // Bank array to contain the bank of all possible characters to be used in password generation.
  var charBank = [];
  // Final array to contain generated password for user.
  var finalPwd = [];

  // If user selected to use uppercase letters...
  if (ucUse == true) {
    // Select a random value from upperCase array and add it to charSample array
    charSample.push(math.Floor(math.Random() * upperCase.length));
    console.log(charSample);
    // Copy entire upperCase array into charBank array
    charBank = charBank.concat(upperCase);
  }

  // If user selected to use lowercase letters...
  if (lcUse == true) {
    // Select a random value from lowerCase array and add it to charSample array
    charSample.push(math.Floor(math.Random() * lowerCase.length));
    console.log(charSample);
    // Copy entire lowerCase array into charBank array
    charBank = charBank.concat(lowerCase);
  }

  // If user selected to use numbers...
  if (numUse == true) {
    // Select a random value from number array and add it to charSample array
    charSample.push(math.Floor(math.Random() * number.length));
    console.log(charSample);
    // Copy entire number array into charBank array
    charBank = charBank.concat(number);
  }

  // If user selected to use special characters...
  if (scUse == true) {
    // Select a random value from specChar array and add it to charSample array
    charSample.push(math.Floor(math.Random() * specChar.length));
    console.log(charSample);
    // Copy entire specChar array into charBank array
    charBank = charBank.concat(specChar);
  }

  // for loop
  for (i = 0; i < desLength; i++) {
    // math.Random() to generate array items for password?
    // copy item to finalPwd array
  }
}
