import React from 'react';
import './OrderHeader.scss';
import { Link }from 'react-router-dom';

export default class DeliveryHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    backToHome = () => {
        this.props.history.push('/');
    }

    render() {
        return(
            <>
            <div className="d-flex justify-content-between cart-header align-items-center">
                <img src="/images/logo_intersport.png" alt=""/>
                <div  className="d-flex align-items-center" onClick={() => this.backToHome()}>
                    <span>QUITTER</span>
                    <i className="material-icons">close</i>
                </div>
            </div>
            <div id="order-header" className="d-flex align-items-center mb-4 current-step-3 justify-content-between">
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
                    <span className="step current-step">3</span>
                </div>
                <span className="step-name">LIVRAISON</span>
                <hr className="horizontal-line"/>
                <div>
                    <span className="step ml-0 mr-0">4</span>
                </div>
            </div>
            </>
        );
    }
}
