function idGetter(text)
{
    return document.getElementById(text);
}
let cnt = 0;
const increase = idGetter("increase");
const reset = idGetter("reset");
const decrease = idGetter("decrease");
let text = idGetter("p1");

function incCnt()
{
   cnt += 1;
   text.innerText = cnt;
}

function resetCnt()
{
  cnt = 0;
  text.innerText = cnt;
}

function decCnt()
{
   cnt -= 1;
   text.innerText = cnt;
}

increase.addEventListener('click',incCnt);
decrease.addEventListener('click',decCnt);
reset.addEventListener('click',resetCnt);