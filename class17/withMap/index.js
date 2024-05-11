const productList = ['pen','paper','rice','soap','oil'];

const listContainer = document.getElementById("list");
const btn = document.getElementById('btn');

function clearContainer() {
    listContainer.innerHTML = '';
}

function getProductItem(product, borderColor = 'sky', bgColor) {
    const productElement = document.createElement('div');
    productElement.className = `flex b border-2 border-${borderColor}-500 mt-2 justify-center bg-${bgColor}`;
    productElement.innerText = product.toUpperCase();
    return productElement;
}

btn.addEventListener('click', function() {   
    clearContainer();

    const listItems = productList.map(function(product, idx) {   
        let bgColor = 'white';
        if (idx % 2 == 0) {
            bgColor = 'neutral-200';
            return getProductItem(product, 'green', bgColor);
        } else {
            return getProductItem(product, 'red', bgColor);
        } 
    });
    listContainer.append(...listItems);
});
