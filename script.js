//Password Variables
specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "/", ":", ";", " ", "'", "<", ",", ">", ".", "?", "/"]
numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function UserInput(password) {
  document.getElementById("password").textContent = password;
}

generateBtn = addEventListener("click", writePassword); {
};

function generatePassword() {
    var passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!passwordLength) {
        alert("This needs a value");
        passwordLength = parseInt(prompt("You must choose between 8 and 128"));
    } else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        var confirmNumber = confirm("Will this contain numbers?");
        var confirmCharacter = confirm("Will this contain special characters?");
        var confirmUppercase = confirm("Will this contain Uppercase letters?");
        var confirmLowercase = confirm("Will this contain Lowercase letters?");
    };
    //All choices
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = specialChar.concat(numberChar, lowerChar, upperChar);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = specialChar.concat(numberChar, upperChar);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = specialChar.concat(numberChar, lowerChar);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = specialChar.concat(lowerChar, upperChar);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = numberChar.concat(lowerChar, upperChar);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = specialChar.concat(numberChar);

    } else if (confirmCharacter && confirmLowercase) {
        choices = specialChar.concat(lowerChar);

    } else if (confirmCharacter && confirmUppercase) {
        choices = specialChar.concat(upperChar);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowerChar.concat(numberChar);
    } else if (confirmLowercase && confirmUppercase) {
        choices = lowerChar.concat(upperChar);
    } else if (confirmNumber && confirmUppercase) {
        choices = numberChar.concat(upperChar);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = specialChar;
    }
    else if (confirmNumber) {
        choices = numberChar;
    }
    else if (confirmLowercase) {
        choices = lowerChar;
    }
    else if (confirmUppercase) {
        choices = upperChar;
    };
    
    var finalPassword = [];
    for (var i = 0; i < passwordLength; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        finalPassword.push(pickChoices);
    }
    var password = finalPassword.join("");
    UserInput(password);
    return password;
}


var copy = document.querySelector("#copy");
function copyPassword() {
  document.getElementById("password").select();
  alert("Password copied to clipboard!");
}
copy.addEventListener("", copyPassword);


