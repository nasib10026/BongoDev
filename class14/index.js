//const numberInput = document.getElementById('number');
const btn = document.getElementById('submit');
const reset = document.getElementById('reset');
let k = 1;
btn.addEventListener('click', function () {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`table-container${i}`).innerHTML = '';
    }
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            const tableRow = document.createElement('h4');
            tableRow.innerText = `${i} X ${j} = ${i*j}`;
            document.getElementById(`table-container${k}`).appendChild(tableRow);

        }
        const lineBreak = document.createElement('br');
        document.getElementById(`table-container${k}`).appendChild(lineBreak);
        if (i % 2 == 0) {
            k++;
        }
        if (k == 6) {
            return;
        }
    }

})

reset.addEventListener('click', function () {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`table-container${i}`).innerHTML = '';
    }
})