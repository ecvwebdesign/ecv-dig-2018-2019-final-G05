import React from 'react';
import './OrderHeader.scss';
import { Link }from 'react-router-dom';

export default class AccountHeader extends React.Component {
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
            <div id="order-header" className="d-flex align-items-center mb-4 current-step-2 justify-content-between">
                <div>
                    <Link to="/commande/recapitulatif">
                        <span className="step ml-0">1</span>
                    </Link>
                </div>
                <hr className="horizontal-line"/>
                <div>
                    <span className="step current-step">2</span>
                </div>
                <span className="step-name">COMPTE</span>
                <hr className="horizontal-line"/>
                <div>
                    <span className="step">3</span>
                </div>
                <hr className="horizontal-line"/>
                <div>
                    <span className="step mr-0">4</span>
                </div>
            </div>
            </>
        );
    }
}
