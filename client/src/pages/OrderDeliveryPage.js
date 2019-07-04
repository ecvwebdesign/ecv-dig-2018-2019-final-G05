import React from 'react';
import './cart-order.scss';
import { Link }from 'react-router-dom';
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity } from '../actions/cart/cart'
import CheckCircle from '@material-ui/icons/CheckCircle'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUncheckedOutlined'
import DeliveryHeader from "../components/order/DeliveryHeader";
import SimplifiedRegister from "../components/user/SimplifiedRegister";

class OrderDeliveryPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDeliveryMode: null,
            keepGoingPopupOpen: false
        };
    }

    goBack = () => {
        this.props.history.goBack();
    }

    changeSelectedDeliveryMode = (deliveryName) => {
        this.setState({
            selectedDeliveryMode: deliveryName
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.state.keepGoingPopupOpen && !document.body.classList.contains('modal-open')) {
            document.body.classList.toggle('modal-open');
        }
    }

    toggleKeepGoingPopup = () => {
        document.body.classList.toggle('modal-open');
        this.setState({
            keepGoingPopupOpen: !this.state.keepGoingPopupOpen
        })
    }

    render() {
        return (
            <div className="">
                <DeliveryHeader {...this.props} />
                <div className="order-delivery d-flex flex-column">
                    <span className="order-section-title">Choisir mon mode de livraison</span>
                    <div className="d-flex delivery-option">
                        <div className="mr-3">
                            <img src="/images/liv-24h.png" alt=""/>
                        </div>
                        <div className="d-flex flex-column">
                            <span className="order-delivery-option-name">Retrait en magasin</span>
                            <div className="d-flex">
                                <span className="order-delivery-store-name mr-2">Intersport Pessac</span> <span className="form-minor-info"><Link to="/commande/choix-magasin">Modifier</Link></span>
                            </div>
                            <div className="order-delivery-price">GRATUIT</div>
                        </div>
                        <div onClick={() => this.changeSelectedDeliveryMode('store-pickup')} className="align-self-center ml-auto">
                            {this.state.selectedDeliveryMode === 'store-pickup' ? (
                                <CheckCircle/>
                            ) : (
                                <RadioButtonUnchecked/>
                            )}
                        </div>
                    </div>
                    <div className="d-flex delivery-option">
                        <div className="mr-3">
                            <img src="/images/liv-domicile.png" alt=""/>
                        </div>
                        <div className="d-flex flex-column">
                            <span className="order-delivery-option-name">Livraison à domicile</span>
                            <div className="d-flex">
                                <span className="order-delivery-store-name mr-2">
                                    {(JSON.parse(localStorage.getItem('orderInformations'))['adresse'] !== '') ? (
                                        <>
                                        {JSON.parse(localStorage.getItem('orderInformations'))['adresse'].substring(0,10)}
                                        </>
                                    ) : (
                                        <>
                                        12 impasse toubart
                                        </>
                                    )}
                                    ...
                                </span>
                                <span className="form-minor-info"><Link to="/commande/informations">Modifier</Link></span>
                            </div>
                            <div className="order-delivery-price">5,99 €</div>
                        </div>
                        <div onClick={() => this.changeSelectedDeliveryMode('home-delivery')} className="align-self-center ml-auto">
                            {this.state.selectedDeliveryMode === 'home-delivery' ? (
                                <CheckCircle/>
                            ) : (
                                <RadioButtonUnchecked/>
                            )}
                        </div>
                    </div>
                    <div className="d-flex delivery-option mb-7">
                        <div className="mr-3">
                            <img src="/images/liv-point-relais.png" alt=""/>
                        </div>
                        <div className="d-flex flex-column">
                            <span className="order-delivery-option-name">Livraison en point relais</span>
                            <div className="d-flex">
                                <span className="form-minor-info"><Link to="/commande/livraison">Choisir un point Mondial Relais</Link></span>
                            </div>
                            <div className="order-delivery-price">GRATUIT</div>
                        </div>
                        <div onClick={() => this.changeSelectedDeliveryMode('relay-pickup')} className="align-self-center ml-auto">
                            {this.state.selectedDeliveryMode === 'relay-pickup' ? (
                                <CheckCircle/>
                            ) : (
                                <RadioButtonUnchecked/>
                            )}
                        </div>
                    </div>
                </div>
                <div className="order-bottom-banner text-center">
                    <span className="delivery-estimation">Livraison estimée entre <span className="bold">jeudi</span> 6 et <span className="bold">lundi 12 juillet</span></span>
                    <div className="text-center">
                        <button className="btn-quatary mt-4 mb-3" onClick={() => this.toggleKeepGoingPopup()}>
                            Continuer
                        </button>
                    </div>
                </div>
                <div className={this.state.keepGoingPopupOpen ? 'popup d-block' : 'popup d-none'}>
                    <div className="popup-filter" onClick={() => this.toggleKeepGoingPopup()}>
                    </div>
                    <div className="popup-container">
                        <div className="container fix-fixed-bottom">
                            <div className="row px-3">
                                <div className="col py-3 pb-8">
                                    <div className="close-popup" onClick={() => this.toggleKeepGoingPopup()}>
                                        <span>IGNORER</span>
                                        <img src="/images/close.png" alt=""/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="order-delivery-popup-title mb-1">Voulez vous créer un compte ?</span>
                                        <span className="order-delivery-popup-subtitle mb-4">Gérez plus facilement le suivi de votre commande avec un compte Intersport.</span>
                                        <SimplifiedRegister/>
                                        <div className="text-center">
                                            <Link to="/commande/paiement">
                                            <button className="btn-secondary my-3 px-4 btn-same-width">Continuer</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-bottom-banner text-center d-flex flex-column align-items-center pb-5">
                            <Link to="/commande/paiement">
                            <button className="btn-ternary px-3 btn-same-width">Continuer en tant qu'invité</button>
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderDeliveryPage)