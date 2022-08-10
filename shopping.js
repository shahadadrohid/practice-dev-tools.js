const shopping = () => {
    // Get product name 
    const getProductInput = document.getElementById('product');
    const getInputProduct = getProductInput.value;

    // get product price 
    const getProductPrice = document.getElementById('product-price');
    const productPrice = getProductPrice.value;
    // console.log(getInputProduct, productPrice)

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
    const productStringify = JSON.stringify(productsObj);
    localStorage.setItem('products', productStringify)
    console.log(productStringify)
}
