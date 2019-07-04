import React from 'react';
import './cart-order.scss';
import { Link }from 'react-router-dom';
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity } from '../actions/cart/cart'
import DeliveryHeader from "../components/order/DeliveryHeader";

class OrderChooseStore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="">
                <DeliveryHeader {...this.props} />
                <div className="order-delivery order-choose-store d-flex flex-column">
                    <Link to="/commande/livraison">
                    <div className="d-flex mb-3 align-items-center">
                        <i className="material-icons ml-1" >chevron_left</i>
                        <span className="order-choose-store-back">Mode de livraison</span>
                    </div>
                    </Link>
                    <span>Retrait en magasin</span>
                    <div className="search-wrapper">
                        <input type="text" placeholder="Recherche"/>
                        <img className="logo-search" src="/images/search.png" alt=""/>
                    </div>
                    <div className="d-flex my-3">
                        <span>Me localiser</span>
                    </div>
                    <div className="g-map">
                        <img src="/images/gmap.png" alt=""/>
                    </div>
                </div>
                <div className="submit-wrapper">
                    <Link to="/commande/livraison">
                    <button className="btn-ternary">
                        Continuer
                    </button>
                    </Link>
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderChooseStore)