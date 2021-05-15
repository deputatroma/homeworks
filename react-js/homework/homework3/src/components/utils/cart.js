/**
 * @param {string} itemId
 */

export function addToCart(itemId) {

    const cart = JSON.parse(localStorage.getItem('cartList')) || {};
    cart[itemId] = (cart[itemId] || 0) + 1;
    localStorage.setItem('cartList', JSON.stringify(cart));
}


export const getProductWithCart = () => {

    return JSON.parse(localStorage.getItem('cartList')) || {};
}


export function removeProductCart(itemId) {

    if (itemId === null) return;
    const cart = JSON.parse(localStorage.getItem('cartList')) || {};
    delete cart[itemId]
    localStorage.setItem('cartList', JSON.stringify(cart))
}