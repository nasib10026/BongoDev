const productList = ['pen','paper','rice','soap','oil'];

const listContainer = document.getElementById("list");
const btn = document.getElementById('btn');



btn.addEventListener('click',function()
{   
    listContainer.innerHTML = '';
    productList.forEach(function(product)
    {
        const listItem = document.createElement('li');
        listItem.appendChild(getProductItem(product));
        listContainer.appendChild(listItem);
    });
});

function getProductItem(product)
{
    const productElement = document.createElement('div');
    productElement.className = 'flex b border-2 border-sky-500 mt-2 justify-center';
    productElement.innerText = product.toUpperCase();
    return productElement;
}