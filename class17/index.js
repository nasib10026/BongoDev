const productList = ['pen', 'paper', 'rice', 'soap', 'oil'];

const listContainer = document.getElementById("list");
const btn = document.getElementById('btn');



btn.addEventListener('click', function () {
    listContainer.innerHTML = '';
    productList.forEach(function (product,idx,borderColor) {
        const listItem = document.createElement('li');
        listItem.appendChild(getProductItem(product,idx,borderColor));
        listContainer.appendChild(listItem);
    });
});

function getProductItem(product, idx, borderColor = 'black') {

    const productElement = document.createElement('div');
    if (idx % 2 == 0) {
        borderColor = `blue`;
    } else {
        borderColor = `red`;
    }
    productElement.className = `flex b border-2 border-${borderColor}-500 mt-2 justify-center`;
    productElement.innerText = product.toUpperCase();
    return productElement;
}