const btn = document.getElementById('submit');
const reset = document.getElementById('reset');

btn.addEventListener('click', function () {
    const colno = document.getElementById('colno');
    let k = 1; 
    // const x = Math.ceil((10 / colno.value));
    for (let i = 1; i <= 10; i++) {
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
        if (i % colno.value == 0) {
            k++;
        }
    }
});

reset.addEventListener('click', function () {
    //const colno = document.getElementById('colno');
    // const x = Math.ceil((10 / colno.value));
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`table-container${i}`).innerHTML = '';
    }
});
