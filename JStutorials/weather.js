const textbox = document.getElementById("textBox");
const toFarenhite = document.getElementById("toFarenhite");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
let temp;
function convert()
{
 if(toFarenhite.checked)
 {
    temp = textbox.value;
    temp = Number(temp);
    temp = temp* (9/5) + 32;
    result.innerText = `${temp.toFixed(1)}° F`;
 }
 else if(toCelcius.checked)
 {
    temp = textbox.value;
    temp = Number(temp);
    temp = ((temp-32)*5)/9;
    result.innerText = `${temp.toFixed(1)}° C`;
 }
 else
 {
    result.innerText = `Please select a unit`;
 }
}

