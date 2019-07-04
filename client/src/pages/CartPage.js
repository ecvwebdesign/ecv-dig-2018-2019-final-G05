import React from 'react';
import Cart from '../components/cart/Cart';
import './cart-order.scss';
import { Link }from 'react-router-dom';

export default class CartPage extends React.Component {
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
            <div className="cart-page">
                <Cart {...this.props}/>
                <div className="cart-page-total">
                    <div className="d-flex justify-content-between">
                        <span>TOTAL <span className="cart-tax-indicator">TTC</span></span>
                        <span className="cart-total-amount">88,89 €</span>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <Link to="/commande/recapitulatif">
                    <button className="btn-quintary">
                        Commander
                    </button>
                    </Link>
                </div>
            </div>
        )
    }
}
