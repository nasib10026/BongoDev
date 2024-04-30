function generatePassword(length, lowercase, uppercase, numbers, symbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!#@$%^&*()_+=-";

    let allowedChars = "";
    let password = "";
    allowedChars += lowercase ? lowercaseChars : "";
    allowedChars += uppercase ? uppercaseChars : "";
    allowedChars += numbers ? numberChars : "";
    allowedChars += symbols ? symbolChars : "";

    if (length < 8 || length > 25) {
        return `Password length is invalid`;
    }
    if (allowedChars.length === 0) {
        return `At least one set characters need to be selected`;
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}



function generate() {
    const passwordLength = Number(document.getElementById("input").value);
    const includeLowerCase = document.getElementById("lowercase").checked;
    const includeUpperCase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    document.getElementById("p1").innerText = `Generated password: ${password}`;
}