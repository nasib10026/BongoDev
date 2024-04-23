function getButtonElement() {
    const button = document.getElementById('btn');
    return button;
}

function updateButtontext(buttonText) {
    // const button = getButtonElement();
    // button.innerText = buttonText;
    getButtonElement().innerText = buttonText;
}
const buttonText = "click me";
updateButtontext(buttonText);
// updateButtontext('Simple Button');
let a = 1;

function updateButtonTextWithClick() {
    console.log("button is clicked");
    if (a == 1) {
        updateButtontext('Simple Button');
        a = 0;
    }
    else
    {
        updateButtontext('Click me');
        a = 1; 
    }

}
//const button = document.getElementById('btn');

getButtonElement().addEventListener('click', updateButtonTextWithClick);