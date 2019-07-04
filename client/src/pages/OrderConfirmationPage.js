import React from 'react';
import './HomePage.scss';
import SimplifiedFooter from "../components/block/SimplifiedFooter";
import SimplifiedHeader from "../components/block/SimplifiedHeader";
import './OrderConfirmationPage.scss';
import CheckCircle from '@material-ui/icons/CheckCircleOutlined'
import { connect } from 'react-redux'
import numberPrint from "../utils/numberPrint";

class OrderConfirmationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
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
            <>
                <SimplifiedHeader/>
                <div className="app-advertising d-flex flex-column">
                    <span className="app-advertising-title">INTERSPORT ET MOI</span>
                    <span className="app-advertising-description mb-3">Bénéficiez de nombreux avantages grâce à l'application Intersport.</span>
                    <button className="btn-quatary">Télécharger l'application</button>
                </div>
                <div className="order-confirmation-infos d-flex flex-column text-center align-items-center">
                    <div className="my-3">
                        <CheckCircle style={{ fontSize: 60, color: '#00CC50' }}/>
                    </div>
                    <span className="order-confirmation-infos-validate">Votre commande a bien été validée.</span>
                    <span className="order-confirmation-infos-command-number mt-2 mb-3">NUMERO DE COMMANDE : EJD802N</span>
                    <span className="order-confirmation-infos-mail-sent mb-3">
                        {(JSON.parse(localStorage.getItem('orderInformations'))['mail'] !== '') ? (
                            <>
                            {'Un mail de confirmation vient de vous être envoyé à l’adresse ' + JSON.parse(localStorage.getItem('orderInformations'))['mail']}
                            </>
                        ) : (
                            <>
                            {'Un mail de confirmation vient de vous être envoyé à l’adresse chloe.lebooeuf@gmail.com'}
                            </>
                        )}
                    </span>
                </div>
                <div className="d-flex flex-column order-payment-section">
                    <div className="d-flex justify-content-between order-payment-section-title">
                        <span>Récapitulatif de votre commande</span>
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
                    </div>
                </div>
                    <div className="cart-total">
                        <div className="d-flex justify-content-between mt-2">
                            <span>TOTAL <span className="cart-tax-indicator">TTC</span></span>
                            <span className="cart-total-amount">{numberPrint(cartTotal)} €</span>
                        </div>
                    </div>
                <SimplifiedFooter/>
            </>
        )
    }
}
const mapStateToProps = state => {
    return{
        total: state.cart.total,
        addedItems: state.cart.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderConfirmationPage)