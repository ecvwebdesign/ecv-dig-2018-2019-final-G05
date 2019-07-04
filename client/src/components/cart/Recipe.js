import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numberPrint from '../../utils/numberPrint';

//import { addShipping } from './actions/cartActions'
class Recipe extends Component{

    // componentWillUnmount() {
    //     if(this.refs.shipping.checked)
    //         this.props.substractShipping()
    // }
    //
    // handleChecked = (e)=>{
    //     if(e.target.checked){
    //         this.props.addShipping();
    //     }
    //     else{
    //         this.props.substractShipping();
    //     }
    // }

    render(){
        let totalDiscount = 0;
        if (this.props.addedItems.length) {
            Array.from(this.props.addedItems).forEach(function (item) {
                if (item.discount) {
                    totalDiscount += ((item.price - item.discountedPrice) * item.quantity);
                }
            })
        }
        let cartTotal = 0;
        if (this.props.addedItems.length) {
            Array.from(this.props.addedItems).forEach(function (item) {
                if (item.discount) {
                    cartTotal += (item.discountedPrice * item.quantity);
                } else {
                    cartTotal += (item.price * item.quantity)
                }
            })
        }

        return(
            <div>
                {/*<div className="collection">*/}
                    {/*<li className="collection-item">*/}
                        {/*<label>*/}
                            {/*<input type="checkbox" ref="shipping" onChange= {this.handleChecked} />*/}
                            {/*<span>Shipping(+6$)</span>*/}
                        {/*</label>*/}
                    {/*</li>*/}
                {/*</div>*/}
                <div className="cart-total">
                    {totalDiscount !== 0 &&
                    <div className="d-flex justify-content-between cart-discount-info">
                        <span>Promotions</span>
                        <span>- {numberPrint(totalDiscount)} €</span>
                    </div>
                    }
                    <div className="d-flex justify-content-between mt-2">
                        <span>TOTAL <span className="cart-tax-indicator">TTC</span></span>
                        <span className="cart-total-amount">{numberPrint(cartTotal)} €</span>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/commande/recapitulatif">
                        <button className="btn-quatary">
                            Valider mon panier
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.cart.addedItems,
        total: state.cart.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)