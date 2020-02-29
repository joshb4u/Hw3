// Assignment Code

// Selecting Button ID "generate"
let generateBtn = document.querySelector("#generate"); 

// Defining Password length, lower case and upper case alphabets, numbers and special characters.
let lengthPassword;
let lowerCaseAlphabets;
let upperCaseAlphabets;
let numbers;
let specialCharacters;


// Write password to the #password input
function writePassword() {

  //  Creating a while loop for the user to input the correct password length. only numbers from 8-128 will be accepted
  while (lengthPassword < 8 || lengthPassword > 128 || isNaN(lengthPassword)){
  lengthPassword = prompt("To generate password, please enter a valid password length (between 8-128 characters)");
}
  // Alerting the user to accept atleast one of the upcoming properties for generating the password
  alert ("Please accept atleast one of the following characters to generate password.")

  // Creating a while loop such that the user needs to atleast accept one of the below properties for generating password
  while (!(lowerCaseAlphabets || upperCaseAlphabets || numbers || specialCharacters)){
  lowerCaseAlphabets = confirm("Do you want the password to include LOWER-CASE Alphabets?");
  upperCaseAlphabets = confirm("Do you want the password to include UPPER-CASE Alphabets?");
  numbers = confirm("Do you want the password to include NUMBERS?");
  specialCharacters = confirm("Do you want the password to include SPECIAL characters?");
  }
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// function for generating password
function generatePassword() {
  // predefining the password string
  let passwordString = "";
  // predefining the password output
  let passwordOutput = "";
  // Storing all lower case characters
  let lowerCase = "qwertyuiopasdfghjklzxcvbnm";
  // Storing all upper case characters
  let upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  // Storing all numbers
  let num = "1234567890"
  // Storing all special characters
  let special = "~!@#$%^&*()_+{}|:\"<>?`-=[];',./\\";
  // if user wants lower-case, they get added to the password string.
  if (lowerCaseAlphabets)
    passwordString = passwordString+lowerCase;
  // if user wants upper-case, they get added to the password string.
  if (upperCaseAlphabets)
    passwordString = passwordString+upperCase;
  // if user wants numbers, they get added to the password string.
  if (numbers)
    passwordString = passwordString+num;;
  // if user wants special characters, they get added to the password string.
  if (specialCharacters)
    passwordString = passwordString+special;
    
  // Creating a for loop for generating password by randomly choosing characters from the password string
  for (let i = 0; i < lengthPassword; i++) {
    let randomPassword = Math.floor(Math.random() * passwordString.length);
    //  Generated password is stored in passwordOutput
    passwordOutput += passwordString[randomPassword];
  }
  // Resetting all the below properties for repeating the password generation
  lengthPassword = 0;
  lowerCaseAlphabets = false;
  upperCaseAlphabets = false;
  numbers = false;
  specialCharacters = false;

  // Returned Value
  return passwordOutput;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);