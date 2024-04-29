function idGetter(text)
{
    return document.getElementById(text);
}

let username;
const btn = idGetter("submitbtn");
const h1 = idGetter("h1");
function changeHeading()
{
    username = document.getElementById("myText").value;
    h1.innerText = `Hello ${username}`;
}
btn.addEventListener('click',changeHeading);
