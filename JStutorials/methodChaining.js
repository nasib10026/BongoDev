let username = window.prompt("Enter your username: ");
// username = username.trim();
// let letter = username.charAt(0).toUpperCase();
// let extrachars = username.slice(1).toLowerCase();
// username = letter+extrachars;

username = username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
console.log(username);