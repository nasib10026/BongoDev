//const numberInput = document.getElementById('number');
const btn = document.getElementById('submit');
const table_container = document.getElementById('table-container');

btn.addEventListener('click',function()
{
    const number = parseInt(numberInput.value);
    table_container.innerHTML = '';
    for(let i = 1;i<=10;i++)
    {
        const tableRow = document.createElement('h4');
        tableRow.innerText = `${number} X ${i} = ${number*i}`;
        table_container.appendChild(tableRow);
    }
})

