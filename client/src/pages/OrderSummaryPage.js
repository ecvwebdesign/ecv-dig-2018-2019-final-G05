import React from 'react';
import './cart-order.scss';
import { Link }from 'react-router-dom';
import SummaryHeader from "../components/order/SummaryHeader";
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity } from '../actions/cart/cart'
import numberPrint from '../utils/numberPrint';

class OrderSummaryPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)

        if (document.body.classList.contains('modal-open')) {
            document.body.classList.toggle('modal-open');
        }
    }

    goBack = () => {
        this.props.history.goBack();
    }

    //to add the quantity
    handleAddQuantity = (product)=>{
        this.props.addQuantity(product);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (product)=>{
        this.props.subtractQuantity(product);
    }

    render() {
        let totalDiscount = 0;
        if (this.props.addedItems.length > 1 ) {
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

        return (
            <div className="">
                <SummaryHeader {...this.props} />
                <div className="order-summary-top-banner">
                    <span>Votre commande</span>
                </div>
                <div className="cart-product-list">
                    {this.props.addedItems.length ?
                        (
                            this.props.addedItems.map(item=>{
                                return (
                                    <li className="cart-product-item avatar d-flex" key={item['@id']}>
                                        <div className="item-img">
                                            <img src={'/images/' + item.image} alt={item.image} className=""/>
                                        </div>
                                        <div className="item-desc d-flex flex-column w-100">
                                            <span className="cart-product-item-brand">{item.brand}</span>
                                            <span className="cart-product-item-name">{item.name}</span>
                                            <div className="d-flex cart-product-item-options">
                                                <span>Taille : {item.size}</span>
                                                <span>Couleur : {item.color}</span>
                                            </div>
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
                <div className="cart-total">
                    {totalDiscount !== 0 &&
                    <div className="d-flex justify-content-between cart-discount-info">
                        <span>Promotions</span>
                        <span>- {totalDiscount.toFixed(2)} €</span>
                    </div>
                    }
                    <div className="d-flex justify-content-between mt-2">
                        <span>TOTAL <span className="cart-tax-indicator">TTC</span></span>
                        <span className="cart-total-amount">{cartTotal} €</span>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/commande/compte">
                        <button className="btn-quatary">
                            Continuer
                        </button>
                        </Link>
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderSummaryPage)