const c1 = document.getElementById("checkbox1");
const c2 = document.getElementById("checkbox2");
const c3 = document.getElementById("checkbox3");
const c4 = document.getElementById("checkbox4");
const btn = document.getElementById("btn");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

btn.onclick = function()
{
    if(c1.checked)
    {
        p1.textContent = `You are subscribed!`;
    }
    else
    {
        p1.textContent = `You are NOT subscribed!`; 
    }

    if(c2.checked)
    {
        p2.textContent = 'You are paying with Visa card';
    }
    else if(c3.clicked)
    {
        p2.textContent = 'You are paying with Master card';
    }

    else if(c4.clicked)
    {
        p2.textContent = 'You are paying with PayPal';
    }
    else
    {
        p2.innerText = `You must choose a payment method`;
    }
}