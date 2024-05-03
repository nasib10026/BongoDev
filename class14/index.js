//const numberInput = document.getElementById('number');
const btn = document.getElementById('submit');
const table_container1 = document.getElementById('table-container1');
const table_container2 = document.getElementById('table-container2');
const reset = document.getElementById('reset');

btn.addEventListener('click', function () {
    table_container1.innerHTML = '';
    table_container2.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 10; j++) {
            const tableRow = document.createElement('h4');
            tableRow.innerText = `${i} X ${j} = ${i*j}`;
            table_container1.appendChild(tableRow);
        }
        const lineBreak = document.createElement('br');
        table_container1.appendChild(lineBreak);
    }

    for (let i = 6; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            const tableRow = document.createElement('h4');
            tableRow.innerText = `${i} X ${j} = ${i*j}`;
            table_container2.appendChild(tableRow);
        }
        const lineBreak = document.createElement('br');
        table_container2.appendChild(lineBreak);
    }
})

reset.addEventListener('click',function()
{
    table_container1.innerHTML = '';
    table_container2.innerHTML = '';
})

