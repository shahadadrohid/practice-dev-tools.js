const shopping = () => {
    // Get product name 
    const getProductInput = document.getElementById('product');
    const getInputProduct = getProductInput.value;
    if (!getInputProduct) {
        return;
    }

    // get product price 
    const getProductPrice = document.getElementById('product-price');
    const productPrice = parseInt(getProductPrice.value);

    getProductInput.value = '';
    getProductPrice.value = '';
    inputLocalStorage(getInputProduct, productPrice)
}

const inputLocalStorage = (name, price) => {
    const getStorage = localStorage.getItem('products');
    let productsObj;
    if (getStorage) {
        productsObj = JSON.parse(getStorage)
        // console.log(productsObj)
        productsObj[name] = price;

    }
    else {
        productsObj = {};
        productsObj[name] = price;
    }

    // Stringify the object 
    const productStringify = JSON.stringify(productsObj);
    localStorage.setItem('products', productStringify)
}

const displayProducts = () => {

    // Get item from local storage and parse it 
    const productsParse = localStorage.getItem('products')
    const getParse = JSON.parse(productsParse)

    // Create p and append on div 
    const divContent = document.getElementById('products');
    const p = document.createElement('p');
    p.innerHTML = `
    <h4>Name: ${Object.keys(getParse)}</h4>
    <h4>Price: ${Object.values(getParse)}</h4>
    `;
    divContent.appendChild(p)
}
displayProducts()
