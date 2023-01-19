// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];






// Function to prompt user for password options
function getPasswordLength() {

let pwprompt = parseInt(prompt("How many characters would you like?"));

  while ((pwprompt < 10) || ((pwprompt > 64)) ||  ((pwprompt === NaN))    )  { 
    while (pwprompt > 64 ) {
  alert("Max of 64!");
  pwprompt = parseInt(prompt("How many characters would you like?"));
    }
   
    while (pwprompt < 10) { 
    alert("Minimum of 10!");
  pwprompt = parseInt(prompt("How many characters would you like?"));
   } 
   
   if (isNaN(pwprompt)) {
    alert("Numbers only!")
    pwprompt = parseInt(prompt("How many characters would you like?"));
    return false;
   }
   
   else { return pwprompt; } 
  
  }

return pwprompt;
}




function getCharacters() {

  let chosenChars = [] 
let specinclude = confirm("Would you like to include specials?") ;
let numinclude = confirm("Would you like to include numbers?") ;
let lowerInclude  = confirm("Would you like to include lower?");
let upperInclude  = confirm("Would you like to include upper?");




while (chosenChars <= numericCharacters.length) {

if (specinclude === true)   {
  chosenChars = (chosenChars.concat(specialCharacters))
   }
   
   if (numinclude === true)   {
    chosenChars = (chosenChars.concat(numericCharacters)) ;
    }

   if (lowerInclude === true)   {
       chosenChars = (chosenChars.concat(lowerCasedCharacters));
        }  

        if (upperInclude === true)   {
          chosenChars = (chosenChars.concat(upperCasedCharacters));
           }  


if (chosenChars < numericCharacters.length) {
  alert("You need to accept at least one!")
specinclude = confirm("Would you like to include specials?") ;
numinclude = confirm("Would you like to include numbers?") ;
lowerInclude  = confirm("Would you like to include lower?");
upperInclude  = confirm("Would you like to include upper?");
} 

}
return(chosenChars);  

}
  
  
  





// Function for getting a random element from an array

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let arraynumber = arr[randomIndex];
 return (arraynumber);
}







// Function to generate password with user input
function generatePassword() {
 
length = getPasswordLength()
chars = getCharacters();

  let password = ""
  for (let i = 0; i < length; i++) {
  
  password = password + getRandom(chars);
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


