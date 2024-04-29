const pi = 3.1416;
let radius;
let circumference;

function idGetter(text)
{
    return document.getElementById(text);
}


function calculation()
{
    
    radius = idGetter("input1").value;
    radius = Number(radius);
    circumference = 2*pi*radius;
    idGetter("p1").innerText = `The circumference of the circle is: ${circumference}`;
}

const btn = idGetter("btn");
btn.addEventListener('click',calculation);
