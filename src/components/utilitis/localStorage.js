
const getStorageCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return []
}

const saveCartToLs = cart =>{

const cartStringified = JSON.stringify(cart)
localStorage.setItem('cart', cartStringified) 

}

const addToLs = id =>{
    const cart = getStorageCart();
    cart.push(id)

    saveCartToLs(cart)
}

export {addToLs,getStorageCart}