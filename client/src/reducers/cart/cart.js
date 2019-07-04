import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../../actions/cart/cart'


const initState = {
    addedItems: [],
    total: 0

}
const cart = (state = initState,action)=>{

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        //check if the action id exists in the addedItems
        let addedItem = action.product;
        let existingItem= state.addedItems.find(item => action.product['@id'] === item['@id']);
        if(existingItem)
        {
            addedItem.quantity += 1
            return{
                ...state,
                total: state.total + addedItem.price
            }
        }
        else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price
            return Object.assign({}, state, {
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            })
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.product['@id']  === item['@id'])
        let new_items = state.addedItems.filter(item=> action.product['@id']  !== item['@id'])

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = action.product;
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }
    if(action.type=== SUB_QUANTITY){
        let addedItem = action.product;
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item => item['@id'] !== action.product['@id'])
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }

    }

    if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 6
        }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
    }

    return state
}

export default cart