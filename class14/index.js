const btn = document.getElementById('submit');
const reset = document.getElementById('reset');
const displayResult = document.getElementById('display-result');
const resultHeadline = document.getElementById('resultHeadline');
displayResult.className = 'flex justify-center space-x-4'


btn.addEventListener('click', function () {
    resultHeadline.innerText = 'Here is your multiplication table chart';
    const colno = document.getElementById('colno');
    displayResult.innerHTML = '';
    const range1 = parseInt(document.getElementById('range1').value);
    const range2 = parseInt(document.getElementById('range2').value);
    const range = range2-range1+1;
    for (let i = 1; i <= range ; i++) {
        const tableContainer = document.createElement('div');
        tableContainer.id = `table-container${i}`;
        tableContainer.className = 'mt-4';
        displayResult.appendChild(tableContainer);
    }

    let k = 1;
    for (let i = range1; i <= range2; i++) {
        for (let j = 1; j <= 10; j++) {
            const tableRow = document.createElement('h4');
            tableRow.className = 'font-semibold text-yellow-900';
            tableRow.innerText = `${i} X ${j} = ${i * j}`;
            document.getElementById(`table-container${k}`).appendChild(tableRow);
        }
        const lineBreak = document.createElement('br');
        document.getElementById(`table-container${k}`).appendChild(lineBreak);
        if ((i-range1+1) % colno.value == 0) {
            k++;
        }
    }
});

reset.addEventListener('click', function () {
    resultHeadline.innerText = '';
    displayResult.innerHTML = '';
});