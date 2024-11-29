let getStoredCart = () =>{
    let storedCartString = localStorage.getItem('cart');

    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

let addToLS = (id) =>{
    let cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
}

let saveCartToLS = (cart) => {
    let cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

export { addToLS, getStoredCart }