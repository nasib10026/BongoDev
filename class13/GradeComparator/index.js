const inp1 = document.getElementById("number1");
const output = document.getElementById("result");
const btn = document.getElementById("calculate")

function compare() {
    const num1 = inp1.value;
    if (num1 > 100 || num1 < 0) {
        output.innerText = `Invalid Number`;
    }
    else if(num1 >=80 && num1<=100)
    {
        output.innerText = `A+`;
    }
    else if(num1 >=70 && num1<=79)
    {
        output.innerText = `A`;
    } 
    else if(num1 >=60 && num1<=69)
    {
        output.innerText = `A-`;
    } 
    else if(num1 >=50 && num1<=59)
    {
        output.innerText = `B`;
    }
    else if(num1 >=40 && num1<=49)
    {
        output.innerText = `C`;
    }
    else if(num1 >=33 && num1 <= 39)
    {
        output.innerText = `D`;
    }
    else if(num1>=0 && num1<33)
    {
        output.innerText = `F`;
    }
      
}

btn.addEventListener('click', compare);