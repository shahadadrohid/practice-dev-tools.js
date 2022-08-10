const displayCartItem = () => {
    const cart = getCart()
    console.log(cart)
    for (const name in cart) {
        displayProduct(name)
        console.log(name)
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
    console.log(name)
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li)
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
    console.log(cart)
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
    console.log(cart)
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
        console.log(cart)
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