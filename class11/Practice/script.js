function getButtonId()
{
return document.getElementById("btn");

}

function getImageId()
{
    return document.getElementById("img1")
}

function changeText(text)
{
    getButtonId().innerText = text;
}
function changeImg(src)
{
    getImageId().src = src;
}
changeText('Unclicked');
changeImg('image1.jpg');
let a = 1;
function changeTextandImageWithClick()
{
    
    if(a == 1)
    {
        changeText("Clicked");
        changeImg('image3.jpg');
        a = 0;
    }
    else
    {
        changeText("Unclicked");
        changeImg('image1.jpg');
        a = 1;
    }
}

getButtonId().addEventListener('click',changeTextandImageWithClick);