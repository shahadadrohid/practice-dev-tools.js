const displayCartItem = () => {
    const cart = getCart()
    for (const name in cart) {
        displayProduct(name)
    }
}
const addItem = () => {
    const productField = document.getElementById('product-field');
    const name = productField.value;
    if (!name) {
        return;
    }
    displayProduct(name)
    // add local storage 
    addProductToCart(name)
    productField.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li)
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {};
    }
    return cartObj
}

const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify)
    console.log(cart);
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart')
}
displayCartItem()