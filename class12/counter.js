let count = 0;
function idGetter(text)
{
  return document.getElementById(text);
}
const incrementBtn = idGetter("increment");
const decrementBtn = idGetter("decrement");
const displayElement = idGetter("counter");
incrementBtn.addEventListener('click',incrementCount);
decrementBtn.addEventListener('click',decrementCount);

function incrementCount()
{
  console.log("Clicked");
  count += 1;
  if(count > 10)
  {
    count = 10;
    window.alert(`You can't go beyond 10`)
  }
  displayElement.innerText = count;
}

function decrementCount()
{   
    console.log("Clicked");
    count -=1;
    if(count < 0)
    {
        count = 0;
        window.alert(`You can't go below 0`);
    }
    displayElement.innerText = count;

}