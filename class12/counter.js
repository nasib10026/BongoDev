let count = 0;
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const displayElement = document.getElementById("counter");
incrementBtn.addEventListener('click',incrementCount);
decrementBtn.addEventListener('click',decrementCount);
function incrementCount()
{
  count += 1;
  if(count > 10)
  {
    count = 10;
  }
  displayElement.innerText = count;
}

function decrementCount()
{
    count -=1;
    if(count < 0)
    {
        count = 0;
    }
    displayElement.innerText = count;

}