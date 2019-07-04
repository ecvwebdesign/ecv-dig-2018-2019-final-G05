import React from 'react';
import { Link }from 'react-router-dom';
import './Header.scss'
import LocationOn from '@material-ui/icons/LocationOnOutlined'
import Person from '@material-ui/icons/PersonOutlined'
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined'
import Dehaze from '@material-ui/icons/Dehaze';

export default function SimplifiedHeader(props) {
    return (
        <div id="header" className="d-flex flex-column">
            <div className="d-flex justify-content-between header-list">
                <div className="d-flex">
                    <Link to="/"><img className="logo-intersport" src="/images/intersport-logo-seul.png" alt=""/></Link>
                </div>
                <div className="d-flex flex-column justify-content-end align-items-center">
                    <LocationOn/>
                    <span className="icon-description">MAGASINS</span>
                </div>
                <div className="d-flex flex-column justify-content-end align-items-center">
                    <Person/>
                    <span className="icon-description">COMPTE</span>
                </div>
                <div className="d-flex flex-column justify-content-end align-items-center" onClick={() => props.openCartSlide()}>
                    <ShoppingCart/>
                    <span className="icon-description">PANIER</span>
                </div>
                <div className="d-flex flex-column justify-content-end align-items-center">
                    <Dehaze/>
                    <span className="icon-description">MENU</span>
                </div>
            </div>
        </div>
    );
}
