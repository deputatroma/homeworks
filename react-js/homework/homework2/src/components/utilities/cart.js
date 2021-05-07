function addToCart(itemId) {

    const cart = JSON.parse(localStorage.getItem('cartList')) || {};
    cart[itemId] = (cart[itemId] || 0) + 1;
    localStorage.setItem('cartList', JSON.stringify(cart));
}

export default addToCart;