const shopping = () => {
    // console.log('button clicked')
    // Get product name 
    const getProductInput = document.getElementById('product');
    const getInputProduct = getProductInput.value;

    // get product price 
    const getProductPrice = document.getElementById('product-price');
    const productPrice = getProductPrice.value;
    console.log(getInputProduct, productPrice)

    getProductInput.value = '';
    getProductPrice.value = '';
}