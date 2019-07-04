import React from 'react';
import './cart-order.scss';
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity } from '../actions/cart/cart'
import DeliveryHeader from "../components/order/DeliveryHeader";
import CustomCheckbox from '../utils/checkbox';

class OrderInformationsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    submitOrderInformations = () => {
        const inputs = document.getElementsByTagName('input');
        const inputValues = {}
        Array.from(inputs).forEach(function (input) {
            inputValues[input.name] = input.value

        })
        localStorage.setItem('orderInformations', JSON.stringify(inputValues))

        this.props.history.push('/commande/livraison')
    }

    render() {
        return (
            <div className="">
                <DeliveryHeader {...this.props} />
                <div className="order-delivery order-informations d-flex flex-column">
                    <span className="order-section-title">Mes coordonnées</span>
                    <div className="d-flex flex-column payment-form">
                        <div className="form-group d-flex">
                            <div className="d-flex flex-column input-duo pr-2">
                                <label htmlFor="firstname">PRÉNOM</label>
                                <input type="text" name="firstname"/>
                            </div>
                            <div className="d-flex flex-column input-duo pl-1">
                                <label htmlFor="name">NOM</label>
                                <input type="text" name="name"/>
                            </div>
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label htmlFor="adresse">ADRESSE</label>
                            <input type="text" name="adresse"/>
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label htmlFor="adress-complement">COMPLÉMENT D'ADRESSE <span className="form-minor-info">(Facultatif)</span></label>
                            <input type="text" name="adress-complement"/>
                        </div>
                        <div className="form-group d-flex">
                            <div className="d-flex flex-column input-duo pr-2">
                                <label htmlFor="postal-code">CODE POSTAL</label>
                                <input type="text" name="postal-code"/>
                            </div>
                            <div className="d-flex flex-column input-duo pl-1">
                                <label htmlFor="country">PAYS</label>
                                <input type="text" name="country"/>
                            </div>
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label htmlFor="town">VILLE</label>
                            <input type="text" name="town"/>
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label htmlFor="mail">ADRESSE MAIL</label>
                            <input placeholder="ex : nom@mail.fr" type="text" name="mail"/>
                        </div>
                        <div className="d-flex flex-column form-group">
                            <label htmlFor="phone">TÉLÉPHONE</label>
                            <input placeholder="ex : 0631107695" type="text" name="phone"/>
                        </div>
                        <div className="d-flex form-group">
                            <CustomCheckbox/>
                            <span className="checkbox-label">J’accepte de recevoir des offres promotionnelles par mail et/ou par message.</span>
                        </div>
                    </div>
                    <div className="submit-wrapper">
                        <button className="btn-ternary" onClick={() => this.submitOrderInformations()}>
                            Continuer
                        </button>
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderInformationsPage)