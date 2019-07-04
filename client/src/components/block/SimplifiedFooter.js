import React from "react";
import './Footer.scss'

export default class SimplifiedFooter extends React.Component {
    render() {
        return (
            <>
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