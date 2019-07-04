import React from "react";
import './Footer.scss'
import LocalShipping from '@material-ui/icons/LocalShippingOutlined'
import Headset from '@material-ui/icons/HeadsetMicOutlined'
import ImportExport from '@material-ui/icons/ImportExport'
import Store from '@material-ui/icons/Store'

export default class Footer extends React.Component {
    render() {
        return (
            <>
            <div id="reasurance" className="d-flex flex-column align-items-start py-3 my-2">
                <div className="d-flex justify-content-around w-100 align-items-start">
                    <div className="reasurance-wrapper-logo">
                        <LocalShipping/>
                        <span className="logo-description">Livraison en 48h</span>
                    </div>
                    <div className="reasurance-wrapper-logo">
                        <Headset/>
                        <span className="logo-description">Service client</span>
                    </div>
                </div>
                <div className="d-flex justify-content-around w-100 align-items-start mt-4">
                    <div className="reasurance-wrapper-logo">
                        <ImportExport/>
                        <span className="logo-description">Satisfait ou remboursé</span>
                    </div>
                    <div className="reasurance-wrapper-logo">
                        <Store/>
                        <span className="logo-description">Retrait gratuit en magasin</span>
                    </div>
                </div>
            </div>
            <div id="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col py-3">
                            <p className="newsletter-title d-flex flex-column">
                                <span>Inscrivez-vous à notre</span>
                                <span className="bold">newsletter</span>
                            </p>
                            <p className="newsletter-description">Des offres et promotions avant tout le monde, mais aussi des conseils et idées pour toutes vos envies.</p>
                            <label htmlFor="newsletter-email">ADRESSE MAIL</label>
                            <input name="newsletter-email" type="text"/>
                            <button className="d-flex mt-4 mx-auto btn-ternary">Je m'inscris</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="our-stores" className="container">
                <div className="row">
                    <div className="col py-3">
                        <p className="section-title">Nos magasins</p>
                        <button className="btn-primary">Voir la carte</button>
                    </div>
                </div>
            </div>
            <div id="follow-us" className="container">
                <div className="row">
                    <div className="col d-flex flex-column py-3">
                        <p className="section-title">Suivez-nous</p>
                        <div className="d-flex">
                            <img src="/images/facebook.png" alt=""/>
                            <img src="/images/instagram.png" alt=""/>
                            <img src="/images/twitter.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-links">
                <ul>
                    <li>Besoin d'aide ?
                        <img src="/images/down-arrow.png" alt=""/>
                    </li>
                    <li>à propos d'Intersport
                        <img src="/images/down-arrow.png" alt=""/>
                    </li>
                    <li>Les cartes Intersport
                        <img src="/images/down-arrow.png" alt=""/>
                    </li>
                    <li>Informations légales
                        <img src="/images/down-arrow.png" alt=""/>
                    </li>
                </ul>
            </div>
            <div id="chat">
                <img src="/images/chat.png" alt=""/>
            </div>
            </>
        );
    }
}