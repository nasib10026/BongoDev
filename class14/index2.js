const btn = document.getElementById('submit');
const reset = document.getElementById('reset');
const displayResult = document.getElementById('display-result');
const resultHeadline = document.getElementById('resultHeadline');

btn.addEventListener('click', function () {
    resultHeadline.innerText = 'Here is your multiplication table chart';
    const colno = document.getElementById('colno');
    displayResult.innerHTML = '';
    const range1 = parseInt(document.getElementById('range1').value);
    const range2 = parseInt(document.getElementById('range2').value);
    const columns = colno.value; 

    displayResult.style.display = 'grid';
    displayResult.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    displayResult.style.gap = '50px'; 

    for (let i = range1; i <= range2; i++) {
        const tableContainer = document.createElement('div');
        tableContainer.className = 'mt-2 mb-2';

        for (let j = 1; j <= 10; j++) {
            const tableRow = document.createElement('h4');
            tableRow.innerText = `${i} X ${j} = ${i * j}`;
            tableContainer.appendChild(tableRow);
        }

        displayResult.appendChild(tableContainer);
    }
});

reset.addEventListener('click', function () {
    resultHeadline.innerText = '';
    displayResult.innerHTML = '';
    displayResult.style.display = '';
    displayResult.style.gridTemplateColumns = ''; 
    displayResult.style.gap = ''; 
});
