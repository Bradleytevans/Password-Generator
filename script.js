// User input variables: 
var passwordLength;
var confirmNum;
var confirmChar;
var confirmUpper;
var confirmLower;
character = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "/", ":", ";", " ", "'", "<", ",", ">", ".", "?", "/"]
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alpha2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var choices;

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    password = generatePassword();
    document.getElementById("password").placeholder = password;
});

function UserInput(password) {
  document.getElementById("password").textContent = password;

}

function generatePassword() {
    passwordLength = parseInt(prompt("How many characters would you like to use for your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!passwordLength) {
        alert("This needs a value");
    } else if (passwordLength < 8 || passwordLength > 128) {
        // Validates user input
        // Start user input prompts
        passwordLength = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        confirmNum = confirm("Would you like to use numbers?");
        confirmChar = confirm("Would you like to use special characters?");
        confirmUpper = confirm("Would you like to use Uppercase letters?");
        confirmLower = confirm("Would you like to use Lowercase letters?");
    };

    // 4 negative options
    if (!confirmChar && !confirmNum && !confirmUpper && !confirmLower) {
        choices = alert("You must choose a criteria!");
    }

    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmChar && confirmNum && confirmUpper && confirmLower) {
        choices = character.concat(number, alpha, alpha2);
        
    }
    // Else if for 3 positive options
    else if (confirmChar && confirmNum && confirmUpper) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmChar && confirmNum && confirmLower) {
        choices = character.concat(number, alpha);
    }
    else if (confirmChar && confirmLower && confirmUpper) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNum && confirmLower && confirmUpper) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if for 2 positive options 
    else if (confirmChar && confirmNum) {
        choices = character.concat(number);

    } else if (confirmChar && confirmLower) {
        choices = character.concat(alpha);

    } else if (confirmChar && confirmUpper) {
        choices = character.concat(alpha2);
    }
    else if (confirmLower && confirmNum) {
        choices = alpha.concat(number);
      } 
    else if (confirmLower && confirmUpper) {
        choices = alpha.concat(alpha2);

    } else if (confirmNum && confirmUpper) {
        choices = number.concat(alpha2);
    }
    // Else if for 1 positive option
    else if (confirmChar) {
        choices = character;
    }
    else if (confirmNum) {
        choices = number;
    }
    else if (confirmLower) {
        choices = alpha;
    }
    else if (confirmUpper) {
        choices = alpha2
    };

    // password variable is an array placeholder for user generated amount of length
    var passwordL = [];

    // Random selection for all variables: 
    for (var i = 0; i < passwordLength; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        passwordL.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var password = passwordL.join("");
    UserInput(password);
    return password;
}


var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}