import React from 'react';
import './OrderHeader.scss';
import { Link }from 'react-router-dom';

export default class PaymentHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }


    render() {
        return(
            <>
            <div className="d-flex justify-content-between cart-header align-items-center">
                <img src="/images/logo_intersport.png" alt=""/>
                <Link to="/">
                    <div  className="d-flex align-items-center">
                        <span>QUITTER</span>
                        <i className="material-icons">close</i>
                    </div>
                </Link>
            </div>
            <div id="order-header" className="d-flex align-items-center mb-4 current-step-4 justify-content-between">
                <div>
                    <Link to="/commande/recapitulatif">
                    <span className="step ml-0">1</span>
                    </Link>
                </div>
                <hr className="horizontal-line"/>
                <div>
                    <Link to="/commande/compte">
                    <span className="step">2</span>
                    </Link>
                </div>
                <hr className="horizontal-line"/>
                <div>
                    <Link to="/commande/livraison">
                    <span className="step">3</span>
                    </Link>
                </div>
                <hr className="ml-0 mr-1 horizontal-line"/>
                <div>
                    <span className="step current-step ml-0">4</span>
                </div>
                <span className="step-name mr-0">PAIEMENT SÉCURISÉ</span>
            </div>
            </>
        );
    }
}
