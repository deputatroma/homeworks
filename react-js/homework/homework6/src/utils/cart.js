export function addToCart(item) {

    const cart = JSON.parse(localStorage.getItem('cardList')) || {};
    if (!cart[item.id]) {
        item.count = 1;
        cart[item.id] = item;
    } else {
        cart[item.id].count++;

    }
    localStorage.setItem('cardList', JSON.stringify(cart));
}


export const getProductWithCart = () => {
    return JSON.parse(localStorage.getItem('cardList')) || {};
}


export function removeProductCart(itemId) {

    if (!itemId) return;
    const cart = JSON.parse(localStorage.getItem('cardList')) || {};
    delete cart[itemId]
    localStorage.setItem('cardList', JSON.stringify(cart));
    return cart;
}

export function removeAllCartLS() {
    localStorage.removeItem('cardList');
}