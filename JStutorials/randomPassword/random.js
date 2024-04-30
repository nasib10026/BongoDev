function generatePassword(length,lowercase,uppercase,numbers,symbols)
{

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!#@$%^&*()_+=-";

    let allowedChars = "";
    let password = "";
    allowedChars += lowercase ? lowercaseChars : "";
    allowedChars += uppercase ? uppercaseChars : "";
    allowedChars += numbers ? numberChars : "" ;
    allowedChars += symbols ? symbolChars : ""; 
    console.log(allowedChars);

    if(length<=0)
    {
        return `(password length must be atleast 1)`;
    }
    if(allowedChars.length === 0)
    {
        return `(At least one set characters need to be selected)`;
    }
    for( let i=0; i < length;i++)
    {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const passwordLength =12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers  = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);

console.log(`Generated password: ${password}`);