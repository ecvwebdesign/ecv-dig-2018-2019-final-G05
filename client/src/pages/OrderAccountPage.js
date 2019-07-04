import React from 'react';
import './cart-order.scss';
import { Link }from 'react-router-dom';
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity } from '../actions/cart/cart'
import AccountHeader from "../components/order/AccountHeader";
import OrderLogin from "../components/user/OrderLogin";

class OrderAccountPage extends React.Component {
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

    render() {
        return (
            <div className="">
                <AccountHeader {...this.props} />
                <div className="order-account-login d-flex flex-column">
                    <span>J'ai déjà un compte</span>
                    <span className="order-account-login-subtitles mb-3">Se connecter avec ma carte de fidélité</span>
                    <OrderLogin/>
                </div>
                <div className="order-account-signin py-0 d-flex align-items-center justify-content-between">
                    <span I className="text-left">Nouveau<br/> sur Intersport ?</span>
                    <div className="text-center">
                        <Link to="/commande/informations">
                        <button className="btn-quatary mt-4 mb-3">
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderAccountPage)