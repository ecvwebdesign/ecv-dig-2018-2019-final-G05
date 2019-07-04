import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { retrieve, reset } from '../../actions/product/show';
import { del } from '../../actions/product/delete';
import { addToCart } from '../../actions/cart/cart'

class SasProduct extends Component {
    static propTypes = {
        retrieved: PropTypes.object,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.string,
        eventSource: PropTypes.instanceOf(EventSource),
        retrieve: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
        deleteError: PropTypes.string,
        deleteLoading: PropTypes.bool.isRequired,
        deleted: PropTypes.object,
        del: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props)
        this.state = {
            addToCartActive: false
        };
    }

    componentDidMount() {
        if (this.state.addToCartActive) {
            document.body.classList.toggle('modal-open');
        }
        this.props.retrieve(decodeURIComponent(this.props.match.params.id));
    }

    componentWillUnmount() {
        this.props.reset(this.props.eventSource);
    }

    del = () => {
        if (window.confirm('Are you sure you want to delete this item?'))
            this.props.del(this.props.retrieved);
    };


    toggleAddToCartPopUp = () => {
        document.body.classList.toggle('modal-open');
        this.setState({
            addToCartActive: !this.state.addToCartActive
        })
    }

    addToCart = (product) => {
        this.toggleAddToCartPopUp();
        this.props.addToCart(product);
    }


    render() {
        if (this.props.deleted) return <Redirect to=".." />;

        const item = this.props.retrieved;
        return (
            <>
            <div className="container">
                {item && (

                    <div className="col px-0">
                        <div className="text-center product-img-wrapper">
                            {(item.discount !== null && item.discount !== 0) &&
                            <div className="corner-ribbon top-left red">-{item.discount}%</div>
                            }
                            <img src={'/images/' + item['image']} alt=""/>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <span className="product-brand">{item.brand}</span>
                            <span className="product-reference">Ref AH5232 W4E</span>
                        </div>
                        <span className="product-name">{item.name}</span>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-end">
                                <ul className="star-display mb-0 mr-1">
                                    <li><div className="stars"><div className="percent" style={{width: '90%'}}></div></div></li>
                                </ul>
                                <span className="product-rate-number">105 avis</span>
                            </div>
                            <div className="d-flex align-items-end">
                                {(item.discount !== null && item.discount !== 0) ? (
                                    <>
                                    <span className="product-price mr-2">{numberPrint(item.discountedPrice)} €</span>
                                    <span className="product-original-price">{numberPrint(item.price)} €</span>
                                    </>
                                ) : (
                                    <span className="product-price not-discounted mr-2">{numberPrint(item.price)} €</span>
                                )
                                }
                            </div>
                        </div>
                    </div>
                )}

                <div className="text-center product-add-to-cart-sticky-cta">
                    <button className="btn-secondary mt-4 mb-2" onClick={() => this.addToCart(item)}>AJOUTER AU PANIER</button>
                    <button className="btn-primary mb-2">RÉSERVER EN MAGAIN</button>
                    <p className="product-closest-disponibility">Ce produit est disponible dans le magasin Bordeaux Lac</p>
                    <div className="product-removal-options d-flex flex-column">
                        <span>RETRAIT EN MAGASIN : <span className="disponibility">DISPONIBLE*</span></span>
                        <span>RETRAIT À DOMICILE : <span className="disponibility">DISPONIBLE*</span></span>
                    </div>
                </div>
                <div className="product-details">
                    <div className="detail-section">
                        <span>Description</span>
                    </div>
                    <div className="product-detailed-description">
                        <span>
                            À la hauteur du jeu et de leur nom, les chaussures de basket pour homme Nike Air Versitile III vous emmènent dans la raquette quel que soit votre style de jeu. Un coussinet à mi-pied stabilise votre pied quand vous pliez la basket vers l'avant tandis qu'une unité Air-Sole Nike amortit le pied lors d'impacts puissants.
                        </span>
                        <ul className="ml-3 mt-2">
                            <li>
                                Unité Air-Sole visible au niveau du talon
                            </li>
                            <li>
                                Coussinet à mi-pied
                            </li>
                            <li>
                                Motif de traction circulaire
                            </li>
                        </ul>
                    </div>
                    <div className="detail-section">
                        <span>Infos techniques</span>
                    </div>
                    <div className="detail-section d-flex align-items-end">
                        <span className="mr-2">Avis</span>
                        <div className="d-flex align-items-end">
                            <ul className="star-display mb-0 mr-1">
                                <li><div className="stars"><div className="percent" style={{width: '90%'}}></div></div></li>
                            </ul>
                            <span className="product-rate-number">105 avis</span>
                        </div>
                    </div>
                </div>
                <div className="also-may-like mt-4 mb-4">
                    <div className="d-flex justify-content-between mb-2">
                        <span className="also-may-like-title">Vous aimerez aussi</span>
                        <span className="also-may-like-product-number">6 produits</span>
                    </div>
                    <div className="d-flex also-may-like-slider">
                        <div className="d-flex flex-column text-center also-may-like-product">
                            <img src="/images/maillot1.png" alt=""/>
                            <span className="product-brand mt-2">NIKE</span>
                            <span className="product-name">{'Maillot Equipe France 2019'.substring(0,20) + '...'}</span>
                            <span className="product-price">89,99 €</span>
                        </div>
                        <div className="d-flex flex-column text-center also-may-like-product">
                            <img src="/images/maillot1.png" alt=""/>
                            <span className="product-brand mt-2">NIKE</span>
                            <span className="product-name">{'Maillot Equipe France 2019'.substring(0,20) + '...'}</span>
                            <span className="product-price">89,99 €</span>
                        </div>
                        <div className="d-flex flex-column text-center also-may-like-product">
                            <img src="/images/maillot1.png" alt=""/>
                            <span className="product-brand mt-2">NIKE</span>
                            <span className="product-name">{'Maillot Equipe France 2019'.substring(0,20) + '...'}</span>
                            <span className="product-price">89,99 €</span>
                        </div>
                        <div className="d-flex flex-column text-center also-may-like-product">
                            <img src="/images/maillot1.png" alt=""/>
                            <span className="product-brand mt-2">NIKE</span>
                            <span className="product-name">{'Maillot Equipe France 2019'.substring(0,20) + '...'}</span>
                            <span className="product-price">89,99 €</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    }

    renderLinks = (type, items) => {
        if (Array.isArray(items)) {
            return items.map((item, i) => (
                <div key={i}>{this.renderLinks(type, item)}</div>
            ));
        }

        return (
            <Link to={`../${type}/show/${encodeURIComponent(items)}`}>{items}</Link>
        );
    };
}

const mapStateToProps = state => ({
    retrieved: state.product.show.retrieved,
    error: state.product.show.error,
    loading: state.product.show.loading,
    eventSource: state.product.show.eventSource,
    deleteError: state.product.del.error,
    deleteLoading: state.product.del.loading,
    deleted: state.product.del.deleted
});

const mapDispatchToProps = dispatch => ({
    retrieve: id => dispatch(retrieve(id)),
    del: item => dispatch(del(item)),
    reset: eventSource => dispatch(reset(eventSource)),
    addToCart: product => dispatch(addToCart(product))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SasProduct);
