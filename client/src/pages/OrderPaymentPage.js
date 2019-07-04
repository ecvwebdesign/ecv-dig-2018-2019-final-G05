import React from 'react';
import './cart-order.scss';
import { Link }from 'react-router-dom';
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity } from '../actions/cart/cart'
import CheckCircle from '@material-ui/icons/CheckCircle'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUncheckedOutlined'
import PaymentHeader from "../components/order/PaymentHeader";
import CustomCheckbox from '../utils/checkbox';
import numberPrint from "../utils/numberPrint";

class OrderPaymentPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            paymentMode: null,
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

    changeSelectedDeliveryMode = (paymentName) => {
        this.setState({
            paymentMode: paymentName
        })
    }

    render() {
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
        return (
            <div className="">
                <PaymentHeader {...this.props} />
                <div className="d-flex pb-0 flex-column order-payment-section">
                    <div className="d-flex justify-content-between order-payment-section-title">
                        <span>Votre commande</span>
                        <span className="order-payment-section-update">MODIFIER</span>
                    </div>
                    <div className="d-flex mt-3">
                        {this.props.addedItems.length ?
                            (
                                this.props.addedItems.map(item=>{
                                    return (
                                        <div className="cart-product-item pb-0 avatar d-flex" key={item['@id']}>
                                            <div className="item-img">
                                                <img src={'/images/' + item.image} alt={item.image}  className=""/>
                                            </div>
                                        </div>
                                    )

                                })
                            ):

                            (
                                <span>Vous n'avez aucun produit dans votre panier</span>
                            )}
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="order-payment-delivery-section top-borderless">
                    <div className="d-flex justify-content-between order-payment-section-title">
                        <span>Adresse de livraison</span>
                        <span className="order-payment-section-update">MODIFIER</span>
                    </div>
                    <div className="d-flex flex-column">
                        {(JSON.parse(localStorage.getItem('orderInformations'))['adresse'] !== '') ? (
                            <>
                            <span>{JSON.parse(localStorage.getItem('orderInformations'))['firstname'] + ' ' + JSON.parse(localStorage.getItem('orderInformations'))['lastname']}</span>
                            <span>12 impasse toubart</span>
                            <span>{JSON.parse(localStorage.getItem('orderInformations'))['postal-code'] + ' ' + JSON.parse(localStorage.getItem('orderInformations'))['town']}</span>
                            </>
                            ) : (
                            <>
                            <span>CHLOÉ LEBOEUF</span>
                            <span>12 impasse toubart</span>
                            <span>33150 CENON</span>
                            </>
                        )}
                    </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <CustomCheckbox/>
                    <span>Utiliser cette adresse pour la facturation</span>
                </div>
                <div className="order-payment-mode-selection d-flex flex-column">
                        <div className="order-payment-section-title-wrapper">
                            <span className="order-payment-section-title">Choisir mon mode de paiement</span>
                        </div>
                        <div className="d-flex payment-option">
                            <div className="mr-3">
                                <img src="/images/cb.png" alt=""/>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="order-delivery-option-name">Paypal</span>
                                <div className="d-flex">
                                    <span className="order-payment-description mr-2">Paiement rapide</span>
                                </div>
                            </div>
                            <div onClick={() => this.changeSelectedDeliveryMode('store-pickup')} className="align-self-center ml-auto">
                                {this.state.paymentMode === 'store-pickup' ? (
                                    <CheckCircle/>
                                ) : (
                                    <RadioButtonUnchecked/>
                                )}
                            </div>
                        </div>
                        <div className="d-flex payment-option">
                            <div className="mr-3">
                                <img src="/images/paypal.png" alt=""/>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="order-delivery-option-name">Carte bancaire</span>
                                <div className="d-flex">
                                    <span className="order-payment-description mr-2">Visa, Mastercard, CB</span>
                                </div>
                            </div>
                            <div onClick={() => this.changeSelectedDeliveryMode('home-delivery')} className="align-self-center ml-auto">
                                {this.state.paymentMode === 'home-delivery' ? (
                                    <CheckCircle/>
                                ) : (
                                    <RadioButtonUnchecked/>
                                )}
                            </div>
                        </div>
                </div>

                <div className="d-flex flex-column payment-form">
                    <div className="form-group d-flex flex-column">
                        <label htmlFor="card-number">NUMÉRO DE CARTE</label>
                        <input type="text" name="card-number"/>
                    </div>
                    <div className="form-group d-flex">
                        <div className="d-flex flex-column input-duo pr-2">
                            <label htmlFor="card-number">DATE D'EXPIRATION</label>
                            <input type="text" name="card-number"/>
                        </div>
                        <div className="d-flex flex-column input-duo pl-1">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" name="cvv"/>
                        </div>
                    </div>
                    <div className="d-flex flex-column form-group">
                        <label htmlFor="card-number">NOM APPARAISSANT SUR LA CARTE</label>
                        <input type="text" name="card-number"/>
                    </div>
                </div>
                <div className="payment-summary order-payment-page pb-4">
                    <div className="cart-total">
                        {totalDiscount !== 0 &&

                        <div className="d-flex justify-content-between cart-discount-info">
                            <span>Promotions</span>
                            <span className="discount-total">- {numberPrint(totalDiscount)} €</span>
                        </div>
                        }
                        <div className="d-flex justify-content-between cart-discount-info">
                            <span>Frais de livraison</span>
                            <span>5,99 €</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <span>TOTAL <span className="cart-tax-indicator">TTC</span></span>
                            <span className="cart-total-amount">{numberPrint(cartTotal)} €</span>
                        </div>
                        <div className="text-center mt-4">
                            <Link to="/commande/confirmation">
                            <button className="btn-secondary">
                                Commander
                            </button>
                            </Link>
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderPaymentPage)