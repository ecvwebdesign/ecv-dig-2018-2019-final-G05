import React from 'react';
import Header from "./Header.jsx";
import { authentication } from '../../services/authentication';
import Footer from "./Footer";
import {default as CartSlide} from 'cheeseburger-menu'
import {default as MenuSlide} from 'cheeseburger-menu'
import Cart from '../cart/Cart';
import Menu from './Menu';

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: null,
            loaded: false,
            notificationsTotal: null,
            refresh: null,
            cartSlideOpen: false,
            menuSlideOpen: false
        };
        this.openMenuSlide = this.openMenuSlide.bind(this);
        this.openCartSlide = this.openCartSlide.bind(this);
        this.openLoginModal = this.openLoginModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    openLoginModal = () => {
        this.setState({
            loginModalActive: true,
        });
    }

    handleChange = () => {
        this.setState({
            refresh: true
        })
    }

    closeLoginModal = () => {
        this.setState({
            loginModalActive: false,
        });
    };

    handleLogin = () => {
        if (authentication.currentUserValue) {
            this.setState({
                currentUser: authentication.currentUserValue['@id']
            })
        }
    };

    handleLogout = () => {
        this.setState({
            currentUser: null
        })
    };

    openCartSlide = () => {
        this.setState({ cartSlideOpen: true })
    }

    closeCartSlide = () => {
        this.setState({ cartSlideOpen: false })
    }

    openMenuSlide = () => {
        this.setState({ menuSlideOpen: true })
    }

    closeMenuSlide = () => {
        this.setState({ menuSlideOpen: false })
    }

    render() {
        return(
            <div>
                <div className="only-mobile-display">
                    <span>Hé pas si vite ! Ce prototype est seulement mobile ;)</span>
                </div>
                <CartSlide width={400} right={true} isOpen={this.state.cartSlideOpen} closeCallback={() => this.closeCartSlide()}>
                    <Cart closeCartSlide={() => this.closeCartSlide()}/>
                </CartSlide>
                <MenuSlide right={true} width={400} isOpen={this.state.menuSlideOpen} closeCallback={() => this.closeMenuSlide()}>
                    <div className="menu">
                        <Menu closeMenuSlide={() => this.closeMenuSlide()} />
                    </div>
                </MenuSlide>
                <Header openMenuSlide={() => this.openMenuSlide()} openCartSlide={() => this.openCartSlide()}/>
                {React.cloneElement(this.props.children, {openCartSlide: () => this.openCartSlide()})}
                <Footer/>
            </div>
        );
    }
}