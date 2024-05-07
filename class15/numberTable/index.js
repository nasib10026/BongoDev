const generateBtn = document.getElementById("generate");


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
    const tableContainer = document.getElementById("table-container");
    const columns = document.getElementById("columns").value;
    tableContainer.className = `grid grid-cols-${columns} gap-5`;
    tableContainer.innerHTML = '';
    const range1 = document.getElementById('range1').value;
    const range2 = document.getElementById('range2').value;
    const r1 = Math.min(range1,range2);
    const r2 = Math.max(range1,range2);


    for (let number = r1; number <= r2; number++) {
        const table = createTable(number);
        tableContainer.appendChild(table);
        
    }
});
