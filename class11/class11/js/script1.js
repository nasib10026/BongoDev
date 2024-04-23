function getButtonElement()
{
    const button = document.getElementById('btn');
    return button;
}

function updateButtontext(buttonText)
{
// const button = getButtonElement();
// button.innerText = buttonText;
getButtonElement().innerText = buttonText;
}
const buttonText = "click me";
updateButtontext(buttonText);
// updateButtontext('Simple Button');

function updateButtonTextWithClick()
{
    console.log("button is clicked");
    updateButtontext('Simple Button');
}
//const button = document.getElementById('btn');

getButtonElement().addEventListener('click',updateButtonTextWithClick);