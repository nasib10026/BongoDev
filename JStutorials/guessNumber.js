const minNum = 1;
const maxNum = 100;
const ans  = Math.floor(Math.random()*(maxNum - minNum)+minNum);

let running = true;
let attempts = 0;
let guess;

while(running)
{
    guess = window.prompt(`Enter a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess))
    {
        window.alert(`Please enter a valid number`);
    }
    else if(guess<0 || guess>100)
    {
        window.alert(`Please enter a valid number`);   
    }
    else
    {
        attempts++;
        if(guess < ans)
        {
            window.alert(`Your guess is lower than the actual answer`);
        }
        else if(guess > ans)
        {
            window.alert(`Your guess is higher than the actual answer`);
        }
        else
        {
            window.alert(`Yes,you have guessed the number: ${ans} correctly.You have taken ${attempts} attempts`);
            running = false;
        }
    }
}

