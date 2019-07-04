import React from 'react';
import { Link }from 'react-router-dom';
import './Header.scss'
import { logout } from '../../actions/user/authentication';
import { connect } from 'react-redux';
import LocationOn from '@material-ui/icons/LocationOnOutlined'
import Person from '@material-ui/icons/PersonOutlined'
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined'
import Dehaze from '@material-ui/icons/Dehaze';
import Badge from '@material-ui/core/Badge';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.props.logout();
    }


    resetPersonalization = () => {
        localStorage.removeItem('sports');
    }

    render() {
        return (
            <div id="header" className="d-flex flex-column">
                <div className="d-flex justify-content-between header-list">
                    <div className="d-flex mr-auto">
                        <Link to="/"><img className="logo-intersport" src="/images/intersport-logo-seul.png" alt=""/></Link>
                    </div>
                    <div className="ml-4 mr-2 d-flex flex-column justify-content-end align-items-center">
                        <LocationOn/>
                        <span className="icon-description">MAGASINS</span>
                    </div>
                    <div className="ml-4 mr-2 d-flex flex-column justify-content-end align-items-center" onClick={() => this.resetPersonalization()}>
                        <Person/>
                        <span className="icon-description">COMPTE</span>
                    </div>
                    <div className="ml-4 mr-2 d-flex flex-column justify-content-end align-items-center" onClick={() => this.props.openCartSlide()}>
                        {Array.from(this.props.addedItems).length > 0 ? (
                            <Badge badgeContent={Array.from(this.props.addedItems).length} color="primary">
                                <ShoppingCart/>
                            </Badge>
                        ) : (
                            <ShoppingCart/>
                        )}
                        <span className="icon-description">PANIER</span>
                    </div>
                    <div className="ml-4 mr-2 d-flex flex-column justify-content-end align-items-center" onClick={() => this.props.openMenuSlide()}>
                        <Dehaze/>
                        <span className="icon-description">MENU</span>
                    </div>
                </div>
                <div className="search-wrapper">
                    <input type="text" placeholder="Recherche"/>
                    <img className="logo-search" src="/images/search.png" alt=""/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedUser: state.user.authentication.authentication.loggedUser,
    addedItems: state.cart.addedItems
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
