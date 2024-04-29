 const btn = document.getElementById("btn");
 const label1 = document.getElementById("label1");
 const label2 = document.getElementById("label2");
 const label3 = document.getElementById("label3"); 

 let randomNum1;
 let randomNum2;
 let randomNum3;
 btn.onclick = function()
 {
    randomNum1 = Math.floor(Math.random()* 6)+1;
    randomNum2 = Math.floor(Math.random()* 6)+1;
    randomNum3 = Math.floor(Math.random()* 6)+1;

    label1.innerText = randomNum1;
    label2.innerText = randomNum2;
    label3.innerText = randomNum3;
 }