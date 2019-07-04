export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const ADD_SHIPPING = 'ADD_SHIPPING';

//add cart action
export const addToCart= (product)=>{
    return{
        type: ADD_TO_CART,
        product
    }
}
//remove item action
export const removeItem=(product)=>{
    return{
        type: REMOVE_ITEM,
        product
    }
}
//subtract qt action
export const subtractQuantity=(product)=>{
    return{
        type: SUB_QUANTITY,
        product
    }
}
//add qt action
export const addQuantity=(product)=>{
    return{
        type: ADD_QUANTITY,
        product
    }
}