import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { list, reset } from '../../actions/product/list';
import { addToCart } from '../../actions/cart/cart'
import {authentication} from '../../services/authentication';
import FavoriteCheckbox from '../../utils/favoriteCheckbox';
import numberPrint from '../../utils/numberPrint';

class HomeListSimplified extends Component {
    static propTypes = {
        retrieved: PropTypes.object,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.string,
        eventSource: PropTypes.instanceOf(EventSource),
        deletedItem: PropTypes.object,
        list: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.list(
            this.props.match.params.page &&
            decodeURIComponent(this.props.match.params.page)
        );
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.page !== nextProps.match.params.page)
            nextProps.list(
                nextProps.match.params.page &&
                decodeURIComponent(nextProps.match.params.page)
            );
    }

    componentWillUnmount() {
        this.props.reset(this.props.eventSource);
    }

    addToCart = (product) => {
        this.props.addToCart(product);
    }

    render() {
        return (
            <div>
                {/*{this.props.loading && (*/}
                {/*<div className="alert alert-info">Loading...</div>*/}
                {/*)}*/}
                {this.props.deletedItem && (
                    <div className="alert alert-success">
                        {this.props.deletedItem['@id']} deleted.
                    </div>
                )}
                {this.props.error && (
                    <div className="alert alert-danger">{this.props.error}</div>
                )}
                <div id="selectioned" className="container py-3 my-2">
                    <div className="row">
                        <div className="col-12">
                            <p className="section-title">
                                    Ventes privées
                            </p>
                        </div>
                        <div className="selectionned-products d-flex">
                            {this.props.retrieved &&
                            this.props.retrieved['hydra:member'].reverse().map(item => (
                                <div className="product" key={item['@id']}>
                                    <div className="d-flex flex-column">
                                        <div className="img-wrapper">
                                            <Link to={`products/show/${encodeURIComponent(item['@id'])}`}>
                                                {(item.discount !== null && item.discount !== 0) &&
                                                <div className="corner-ribbon top-left red">-{item.discount}%</div>
                                                }
                                                <img className="product-img" src={'/images/' + item['image']} alt=""/>
                                            </Link>
                                            <FavoriteCheckbox/>
                                        </div>
                                        <Link to={`products/show/${encodeURIComponent(item['@id'])}`}>
                                            <div className="d-flex flex-column">
                                                <span className="product-brand">{item.brand}</span>
                                                <span className="product-desc">
                                                    {item['name'].length > 20 ? (
                                                        item.name.substring(0,20) + '...'
                                                    ) : (
                                                        item.name
                                                    )}
                                                </span>
                                                {(item.discount !== null && item.discount !== 0) ? (
                                                    <div className="text-center">
                                                        <span className="product-original-price">{numberPrint(item.price)} €</span>
                                                        <span className="product-price ml-2">{numberPrint(item.discountedPrice)} €</span>
                                                    </div>
                                                ) : (
                                                    <span className="product-price not-discounted mr-2">{numberPrint(item.price)} €</span>
                                                )
                                                }
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    pagination() {
        const view = this.props.retrieved && this.props.retrieved['hydra:view'];
        if (!view) return;

        const {
            'hydra:first': first,
            'hydra:previous': previous,
            'hydra:next': next,
            'hydra:last': last
        } = view;

        return (
            <nav aria-label="Page navigation">
                <Link
                    to="."
                    className={`btn btn-primary${previous ? '' : ' disabled'}`}
                >
                    <span aria-hidden="true">&lArr;</span> First
                </Link>
                <Link
                    to={
                        !previous || previous === first ? '.' : encodeURIComponent(previous)
                    }
                    className={`btn btn-primary${previous ? '' : ' disabled'}`}
                >
                    <span aria-hidden="true">&larr;</span> Previous
                </Link>
                <Link
                    to={next ? encodeURIComponent(next) : '#'}
                    className={`btn btn-primary${next ? '' : ' disabled'}`}
                >
                    Next <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                    to={last ? encodeURIComponent(last) : '#'}
                    className={`btn btn-primary${next ? '' : ' disabled'}`}
                >
                    Last <span aria-hidden="true">&rArr;</span>
                </Link>
            </nav>
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

const mapStateToProps = state => {
    const {
        retrieved,
        loading,
        error,
        eventSource,
        deletedItem
    } = state.product.list;
    return { retrieved, loading, error, eventSource, deletedItem };
};

const mapDispatchToProps = dispatch => ({
    list: page => dispatch(list(page)),
    reset: eventSource => dispatch(reset(eventSource)),
    addToCart: product => dispatch(addToCart(product))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeListSimplified);
