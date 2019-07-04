import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity} from '../../actions/cart/cart'
import Recipe from './Recipe'
import numberPrint from '../../utils/numberPrint';

class Cart extends Component{

    //to remove the item completely
    handleRemove = (product)=>{
        this.props.removeItem(product);
    }
    //to add the quantity
    handleAddQuantity = (product)=>{
        this.props.addQuantity(product);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (product)=>{
        this.props.subtractQuantity(product);
    }
    render(){
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
        return (
        <div className="cart-page">
            <div className="d-flex justify-content-between cart-header align-items-center">
                <span>PANIER</span>
                <div  className="d-flex align-items-center" onClick={() => this.props.history ? this.props.history.goBack() : this.props.closeCartSlide()}>
                    <span>FERMER</span>
                    <i className="material-icons">close</i>
                </div>
            </div>
            {70 - cartTotal > 0 &&
            <div className="free-delivery-count">
                <span>Plus que {numberPrint(70 - cartTotal)}  € pour profiter de la livraison gratuite.</span>
            </div>
            }

            <div className="cart-product-list">
                    {this.props.addedItems.length ?
                        (
                            this.props.addedItems.map(item=>{
                                return (
                                <li className="cart-product-item avatar d-flex" key={item['@id']}>
                                        <div className="item-img">
                                            <img src={'/images/' + item.image} alt={item.image}  className=""/>
                                        </div>

                                        <div className="item-desc d-flex flex-column w-100">
                                            <span className="cart-product-item-brand">{item.brand}</span>
                                            <span className="cart-product-item-name">{item.name}</span>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-end">
                                                    {(item.discount !== null && item.discount !== 0) ? (
                                                        <>
                                                        <span className="product-original-price">{numberPrint(item.price)} €</span>
                                                        <span className="product-price ml-2">{numberPrint(item.discountedPrice)} €</span>
                                                        </>
                                                    ) : (
                                                        <span className="product-price not-discounted mr-2">{numberPrint(item.price)} €</span>
                                                    )
                                                    }
                                                </div>
                                                <div className="add-remove d-flex align-items-center">
                                                    <i className="material-icons mr-1" onClick={()=>{this.handleSubtractQuantity(item)}}>remove_circle_outline</i>
                                                    <span className="cart-product-item-quantity">{item.quantity}</span>
                                                    <i className="material-icons ml-1" onClick={()=>{this.handleAddQuantity(item)}}>add_circle_outline</i>
                                                </div>
                                                {/*<button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item)}}>Remove</button>*/}
                                            </div>
                                        </div>
                                    </li>
                                )

                            })
                        ):

                        (
                            <span>Vous n'avez aucun produit dans votre panier</span>
                        )}
            </div>
            <div className="add-reduction">
                <label htmlFor="coupon">AJOUTER UN COUPON DE RÉDUCTION</label>
                <input type="text" placeholder="Saisissez votre code coupon"/>
            </div>
            <Recipe />
            <div className="cart-product-recommandations">
                <p className="cart-product-recommandations-title">Recommandé pour vous</p>
                <div className="cart-product-item avatar d-flex">
                    <div className="item-img">
                        <img src="/images/chaussure-enfant.png" alt="chaussure enfant" className=""/>
                    </div>

                    <div className="item-desc d-flex flex-column w-100 pb-7">
                        <span className="cart-product-item-brand">NIKE</span>
                        <span className="cart-product-item-name">Chaussure de football enfant...</span>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="d-flex align-items-center">
                                <span className="cart-product-item-price">9,99 €</span>
                            </div>
                            <div className="text-end">
                                <button className="btn-primary">Ajouter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        addedItems: state.cart.addedItems,
        total: state.cart.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)