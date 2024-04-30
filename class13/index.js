const  inp1 = document.getElementById("number1");
const inp2=document.getElementById("number2");
const output = document.getElementById("result");
const btn = document.getElementById("compare")

function compare()
{
    const num1 = inp1.value;
    const num2 = inp2.value;
if(num1 > num2)
{
  output.innerText = `Number 1 is greater than Number 2`;
}
else if (num2 > num1)
{
    output.innerText = `Number 2 is greater than Number 1`;
}
else
{
    output.innerText = `The Numbers are equal`; 
}
}

btn.addEventListener('click',compare);