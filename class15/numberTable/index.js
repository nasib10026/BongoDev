const generateBtn = document.getElementById("generate");
const tableContainer = document.getElementById("table-container");

function createTable(number) {
    const table = document.createElement('table');
    table.className = 'w-full border-collapse text-center';
    for (let i = 1; i <= 10; i++) {
        const tableRow = document.createElement('tr');
        tableRow.className = 'border';

        const leftCell = document.createElement('td'); 
        leftCell.innerText = `${number} x ${i}`;

        const rightCell = document.createElement('td');
        rightCell.innerText = `${number * i}`;

        tableRow.appendChild(leftCell);
        tableRow.appendChild(rightCell);
        table.appendChild(tableRow);
    }
    return table;
}

generateBtn.addEventListener('click', function () {
    const topRow = document.getElementById("topRow");
    const bottomRow = document.getElementById("bottomRow");
    topRow.innerHTML = '';
    bottomRow.innerHTML = '';

    for (let number = 1; number <= 10; number++) {
        const table = createTable(number);
        if (number <= 5) {
            topRow.appendChild(table);
        } else {
            bottomRow.appendChild(table);
        }
    }
});
