const btn = document.getElementById("btn");
const ag = document.getElementById("age");
const p1 = document.getElementById("p1");

let age;

btn.onclick = function()
{   
    age = ag.value
    age = Number(age);

    if(age >= 100)
    {
       p1.innerText = `You are too old to enter`;
    }
    else if(age>=18)
    {
        p1.innerText = `You are allowed to enter the site`;  
    }

    else if(age == 0)
    {
        p1.innerText = `You were just born.You can't enter`; 
    }

    else if(age < 0)
    {
        p1.innerText = `Your age can't be negative`;   
    }
    else
    {
        p1.innerText = 'You are not allowed to enter the side';
    }
}