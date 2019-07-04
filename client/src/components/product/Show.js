import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { retrieve, reset } from '../../actions/product/show';
import { del } from '../../actions/product/delete';
import { addToCart } from '../../actions/cart/cart'
import AlsoMayLikeList from './AlsoMayLikeList';
import Map from '@material-ui/icons/MapOutlined';
import RoundCheckbox from '../../utils/roundCheckbox';
import CustomCheckbox from '../../utils/checkbox';
import CheckCircle from '@material-ui/icons/CheckCircleOutlined'
import numberPrint from '../../utils/numberPrint';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

class Show extends Component {
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
          addToCartActive: false,
          localizeStoreActive: false,
          userInformationActive: false,
          confirmationActive: false,
          newProduct: {}
        };
        this.newProduct = this.newProduct.bind(this);
    }

  componentDidMount() {
     window.scrollTo(0, 0)
    if (
        this.state.addToCartActive ||
        this.state.localizeStoreActive ||
        this.state.userInformationActive ||
        this.state.confirmationActive
    ) {
        document.body.classList.toggle('modal-open');
    } else if (
        !this.state.addToCartActive &&
        !this.state.localizeStoreActive &&
        !this.state.userInformationActive &&
        !this.state.confirmationActive &&
        document.body.classList.contains('modal-open')) {
        document.body.classList.toggle('modal-open');
    }
    this.props.retrieve(decodeURIComponent(this.props.match.params.id));
  }

  componentDidUpdate() {
      if (
          this.state.addToCartActive ||
          this.state.localizeStoreActive ||
          this.state.userInformationActive ||
          this.state.confirmationActive
      ) {
          document.getElementsByClassName('product-add-to-cart-sticky-cta')[0].classList.add('hide-bottom-fixed')
      } else if (
          !this.state.addToCartActive &&
          !this.state.localizeStoreActive &&
          !this.state.userInformationActive &&
          !this.state.confirmationActive
      ) {
          if (document.getElementsByClassName('product-add-to-cart-sticky-cta')[0]) {
              document.getElementsByClassName('product-add-to-cart-sticky-cta')[0].classList.remove('hide-bottom-fixed')
          }
      }
  }
  componentWillUnmount() {
    this.props.reset(this.props.eventSource);
  }

  del = () => {
    if (window.confirm('Are you sure you want to delete this item?'))
      this.props.del(this.props.retrieved);
  };


  newProduct = (product) => {
      this.setState({
          newProduct: product
      })
  }
  toggleAddToCartPopUp = () => {
      document.body.classList.toggle('modal-open');
      this.setState({
          addToCartActive: !this.state.addToCartActive
      })
  }

    toggleLocalizeStorePopUp = () => {
        if (!this.state.localizeStoreActive && !document.body.classList.contains('modal-open')) {
            document.body.classList.toggle('modal-open');
        }
        this.setState({
            localizeStoreActive: !this.state.localizeStoreActive,
            addToCartActive: false

        })
    }
    toggleUserInformationPopUp = () => {
        this.setState({
            userInformationActive: !this.state.userInformationActive,
            localizeStoreActive: false,
        })
    }
    toggleConfirmationPopUp = () => {
        this.setState({
            confirmationActive: !this.state.confirmationActive,
            userInformationActive: false
        })
    }

  addToCart = (product) => {
      this.toggleAddToCartPopUp();
      this.props.addToCart(product);
  }

  submitReservationInformations = () => {
      const inputs = document.getElementsByTagName('input');
      const inputValues = {}
      Array.from(inputs).forEach(function (input) {
          inputValues[input.name] = input.value

      })
      localStorage.setItem('reservationInformations', JSON.stringify(inputValues))
      this.toggleConfirmationPopUp();
  }


  render() {
    if (this.props.deleted) return <Redirect to=".." />;

    const item = this.props.retrieved;
    return (
        <>
          {item && (
            <>
              <div className="container">
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
                  <p className="product-fidelity-count mt-3">Ce produit vous fait gagner <span className="red">
                      {item.discountedPrice ?
                          (
                              Math.floor(item.discountedPrice)
                          ) : (
                              Math.floor(item.price)
                          )}
                      </span> points dans votre cagnotte fidélité.</p>
                  <div className="d-flex product-options">
                    <div className="color-option  d-flex justify-content-between">
                      <span>Couleur</span>
                        <ExpandMore/>

                    </div>
                    <div className="size-option  d-flex justify-content-between">
                      <span>Taille</span>
                        <ExpandMore/>

                    </div>
                  </div>
                  <div className="text-center product-add-to-cart-sticky-cta top-grey-border">
                    <button className="btn-secondary mt-4 mb-2" onClick={() => this.addToCart(item)}>AJOUTER AU PANIER</button>
                    <button className="btn-primary mb-2" onClick={() => this.toggleLocalizeStorePopUp()}>RÉSERVER EN MAGASIN</button>
                    <p className="product-closest-disponibility">Ce produit est disponible dans le magasin Intersport Pessac</p>
                    <div className="product-removal-options d-flex flex-column">
                      <span>RETRAIT EN MAGASIN : <span className="disponibility">DISPONIBLE*</span></span>
                      <span>RETRAIT À DOMICILE : <span className="disponibility">DISPONIBLE*</span></span>
                    </div>
                  </div>
                  <div className="product-details">
                    <div className="detail-section d-flex jus">
                      <span>Description</span>
                        <span className="ml-auto">
                        <ExpandLess/>
                      </span>
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
                    <div className="detail-section  d-flex justify-content-between">
                      <span>Infos techniques</span>
                       <ExpandMore/>
                    </div>
                    <div className="detail-section d-flex align-items-end">
                      <span className="mr-2">Avis</span>
                      <div className="d-flex align-items-end">
                        <ul className="star-display mb-0 mr-1">
                          <li><div className="stars"><div className="percent" style={{width: '90%'}}></div></div></li>
                        </ul>
                        <span className="product-rate-number">105 avis</span>
                      </div>
                        <span className="ml-auto">
                        <ExpandMore/>
                      </span>
                    </div>
                  </div>
                  <AlsoMayLikeList {...this.props} newProduct={() => this.newProduct()}/>
                </div>
              </div>
            <div id="add-to-cart-popup" className={this.state.addToCartActive ? 'd-block' : 'd-none'}>
              <div className="personalization-filter" onClick={() => this.toggleAddToCartPopUp()}>
              </div>
              <div className="add-to-cart-popup-content container">
                <div className="row">
                  <div className="col px-3 pt-3">
                    <div className="close-personalization" onClick={() => this.toggleAddToCartPopUp()}>
                      <span></span>
                      <img src="/images/close.png" alt=""/>
                    </div>
                      <span className="add-to-cart-title">Hop dans mon panier !</span>
                      <div className="d-flex mt-2 mb-3">
                        <div className=" mr-3">
                          <img className="popup-product-img" src={'/images/' + item.image} alt=""/>
                        </div>
                        <div className="d-flex flex-column w-100">
                          <span className="product-brand">{item.brand}</span>
                          <span className="product-name">{item.name}</span>
                          <div className="d-flex">
                            <span className="mr-4">Taille : {item.size}</span>
                            <span>Couleur : {item.color}</span>
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
                      <div className="d-flex justify-content-between mb-3">
                        <button onClick={() => this.props.openCartSlide()} className="btn-secondary mr-2 px-3 w-50 btn-tiny-font">Voir mon panier</button>
                        <button className="btn-primary px-1 w-50 btn-tiny-font" onClick={() => this.toggleAddToCartPopUp()}>Continuer mes achats</button>
                      </div>
                      <div className="d-flex flex-column add-to-cart-disponibility pb-7">
                        <p className="mb-2 text-center">Ce produit est disponible dans votre magasin</p>
                        <span className="store-name-disponibility mb-3 text-center">INTERSPORT PESSAC</span>
                        <div className="text-center">
                          <button className="btn-ternary" onClick={() => this.toggleLocalizeStorePopUp()}>Réserver en magasin</button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="add-to-cart-popup" className={this.state.localizeStoreActive ? 'd-block' : 'd-none'}>
              <div className="personalization-filter" onClick={() => this.toggleLocalizeStorePopUp()}>
              </div>
              <div className="add-to-cart-popup-content store-reservation container">
                <div className="row">
                  <div className="col px-3 pt-3">
                    <div className="close-personalization" onClick={() => this.toggleLocalizeStorePopUp()}>
                      <span></span>
                      <img src="/images/close.png" alt=""/>
                    </div>
                    <div className="search-wrapper">
                      <input type="text" placeholder="Recherche"/>
                      <img className="logo-search" src="/images/search.png" alt=""/>
                    </div>
                    <div className="d-flex my-3">
                      <Map/>
                      <span className="ml-2">Me localiser</span>
                    </div>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mr-3">
                          <div className="align-self-center ml-auto">
                            <RoundCheckbox/>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="store-name">
                            INTERSPORT PESSAC
                          </span>
                          <span className="store-address">Avenue de la Tuileranne</span>
                          <span className="store-postal-code">33600 Pessac</span>
                          <span className="store-see-more">Voir plus d'infos sur le magasin</span>
                        </div>
                        <span className="store-available ml-auto">DISPONIBLE</span>
                      </div>
                      <div className="d-flex align-items-start mt-4">
                        <div className="mr-3">
                          <div className="align-self-center ml-auto">
                            <RoundCheckbox/>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="store-name">
                            INTERSPORT PESSAC
                          </span>
                          <span className="store-address">Avenue de la Tuileranne</span>
                          <span className="store-postal-code">33600 Pessac</span>
                          <span className="store-see-more">Voir plus d'infos sur le magasin</span>
                        </div>
                        <span className="store-available ml-auto">DISPONIBLE</span>
                      </div>
                      <div className="d-flex align-items-start store-unavailable mt-4">
                        <div className="mr-3">
                          <div className="align-self-center ml-auto">
                            <RoundCheckbox/>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="store-name">
                            INTERSPORT PESSAC
                          </span>
                          <span className="store-address">Avenue de la Tuileranne</span>
                          <span className="store-postal-code">33600 Pessac</span>
                          <span className="store-see-more">Voir plus d'infos sur le magasin</span>
                        </div>
                        <span className="store-available ml-auto">INDISPONIBLE</span>
                      </div>
                    </div>
                    <div className="text-center mt-4 pb-7">
                      <button className="btn-secondary" onClick={() => this.toggleUserInformationPopUp()}>Valider</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="add-to-cart-popup" className={this.state.userInformationActive ? 'd-block' : 'd-none'}>
              <div className="personalization-filter" onClick={() => this.toggleUserInformationPopUp()}>
              </div>
              <div className="add-to-cart-popup-content">
                  <div className="">
                    <div className="close-personalization" onClick={() => this.toggleUserInformationPopUp()}>
                      <span></span>
                      <img src="/images/close.png" alt=""/>
                    </div>
                    <div className="order-delivery order-informations d-flex flex-column">
                      <span className="order-section-title">Mes coordonnées</span>
                      <div className="d-flex flex-column payment-form">
                        <div className="form-group d-flex">
                          <div className="d-flex flex-column input-duo pr-2">
                            <label htmlFor="firstname">PRÉNOM</label>
                            <input type="text" name="firstname"/>
                          </div>
                          <div className="d-flex flex-column input-duo pl-1">
                            <label htmlFor="name">NOM</label>
                            <input type="text" name="name"/>
                          </div>
                        </div>
                        <div className="form-group d-flex flex-column">
                          <label htmlFor="mail">ADRESSE MAIL</label>
                          <input placeholder="ex : nom@mail.fr" type="text" name="mail"/>
                        </div>
                        <div className="d-flex flex-column form-group">
                          <label htmlFor="phone">TÉLÉPHONE</label>
                          <input placeholder="ex : 0631107695" type="text" name="phone"/>
                        </div>
                        <div className="d-flex form-group">
                          <CustomCheckbox/>
                          <span className="checkbox-label">J’accepte de recevoir des offres promotionnelles par mail et/ou par message.</span>
                        </div>
                      </div>
                      <div className="text-center pb-7">
                        <button className="btn-secondary" onClick={() => this.submitReservationInformations()}>
                          Confirmer ma reservation
                        </button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div id="add-to-cart-popup" className={this.state.confirmationActive ? 'd-block' : 'd-none'}>
              <div className="personalization-filter" onClick={() => this.toggleConfirmationPopUp()}>
              </div>
              <div className="add-to-cart-popup-content reservation-confirmation container">
                <div className="row">
                  <div className="col px-3 pt-3">
                    <div className="close-personalization" onClick={() => this.toggleConfirmationPopUp()}>
                      <span></span>
                      <img src="/images/close.png" alt=""/>
                    </div>
                    <div className="d-flex flex-column">
                      <div className="mt-3 text-center">
                        <CheckCircle style={{ fontSize: 60, color: '#00CC50' }}/>
                      </div>
                      <span className="reservation-confirmation-info my-3">Super ! Votre produit est mis de coté pendant 24 heures au magasin <span>Intersport Pessac.</span></span>
                      <span className="reservation-confirmation-mail-sent mb-4">
                        Un mail de confirmation vient de vous être envoyé à l’adresse <span>
                          {(JSON.parse(localStorage.getItem('reservationInformations')) && JSON.parse(localStorage.getItem('reservationInformations'))['mail'] !== '') ? (
                              <>
                              {JSON.parse(localStorage.getItem('reservationInformations'))['mail']}
                              </>
                          ) : (
                              <>
                              {'chloe.lebooeuf@gmail.com'}
                              </>
                          )}
                          </span>.
                      </span>
                      <div className="text-center mb-3 mt-2">
                        <img src="/images/qrcode.png" alt=""/>
                      </div>
                      <span className="qr-code-info">
                      Vous y trouverez un QR Code que vous pourrez présenter en magasin.
                    </span>
                    </div>
                    <div className="text-center pb-7 mt-4">
                      <button className="btn-secondary px-5" onClick={() => this.toggleConfirmationPopUp()}>
                        Fermer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
          )}
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
)(Show);
