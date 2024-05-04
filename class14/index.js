const btn = document.getElementById('submit');
const reset = document.getElementById('reset');
const displayResult = document.getElementById('display-result');


btn.addEventListener('click', function () {
    const colno = document.getElementById('colno');
    displayResult.innerHTML = '';
    const range1 = document.getElementById('range1').value;
    const range2 = document.getElementById('range2').value;

    for (let i = range1; i <= range2; i++) {
        const tableContainer = document.createElement('div');
        tableContainer.id = `table-container${i}`;
        tableContainer.className = 'mt-4 text-lg';
        displayResult.appendChild(tableContainer);
    }

    let k = 1;
    for (let i = range1; i <= range2; i++) {
        for (let j = 1; j <= 10; j++) {
            const tableRow = document.createElement('h4');
            tableRow.innerText = `${i} X ${j} = ${i * j}`;
            document.getElementById(`table-container${k}`).appendChild(tableRow);
        }
        const lineBreak = document.createElement('br');
        document.getElementById(`table-container${k}`).appendChild(lineBreak);
        if (i % colno.value == 0) {
            k++;
        }
    }
});

reset.addEventListener('click', function () {
    const range1 = document.getElementById('range1').value;
    const range2 = document.getElementById('range2').value;
    for (let i = range1; i <= range2; i++) {
        document.getElementById(`table-container${i}`).innerHTML = '';
    }
});