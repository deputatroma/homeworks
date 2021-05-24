export function addToCart(item) {

    const cart = JSON.parse(localStorage.getItem('cartList')) || {};
    if (!cart[item.id]) {
        item.count = 1;
        cart[item.id] = item;
    } else {
        cart[item.id].count++;

    }
    localStorage.setItem('cartList', JSON.stringify(cart));
}

export const getProductWithCart = () => {

    return JSON.parse(localStorage.getItem('cartList')) || {};
}

export function removeProductCart(itemId) {

    if (itemId === null) return;
    const cart = JSON.parse(localStorage.getItem('cartList')) || {};
    delete cart[itemId]
    localStorage.setItem('cartList', JSON.stringify(cart));
    return cart;
}