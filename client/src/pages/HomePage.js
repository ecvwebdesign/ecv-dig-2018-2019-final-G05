
import React from 'react';
import HomeList from '../components/product/HomeList';
import HomeListSimplified from '../components/product/HomeListSimplified';
import HomeCategoryList from '../components/product/HomeCategoryList';
import Layout from "../components/block/Layout";
import './HomePage.scss';
import { Link }from 'react-router-dom';
import {authentication} from '../services/authentication';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            personalizationActive: true
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    togglePersonalization = () => {
        document.body.classList.toggle('modal-open');
        this.setState({
            personalizationActive: !this.state.personalizationActive
        })
    }

    render() {
        if (localStorage.getItem('sports') && this.state.personalizationActive) {
            this.setState({
                personalizationActive: false
            })
        }
        if (this.state.personalizationActive && !document.body.classList.contains('modal-open')) {
            document.body.classList.toggle('modal-open');
        }
        if (!this.state.personalizationActive && document.body.classList.contains('modal-open')) {
            document.body.classList.toggle('modal-open');
        }

        return (
            <>
            <Layout>
                <div>
                    <div id="news">
                        {(localStorage.getItem('sports') || authentication.getCurrentUserValue) ?
                            (
                                <>
                                <div className="news-item">
                                    <div className="img-wrapper">
                                        <div className="dark-blue-shade"></div>
                                        <img src="/images/chaussures.png" alt=""/>
                                        <span className="news-content">
                                        <span className="news-title">
                                            NOUVEAUTÉS
                                        </span><br/>
                                        <span className="news-description">
                                            Découvrez la nouvelle Nike Air Pegasus à un prix imbatable
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div className="news-item">
                                    <div className="img-wrapper">
                                        <div className="dark-blue-shade"></div>
                                        <img src="/images/fille-chaussure-slider.jpg" alt=""/>
                                        <span className="news-content">
                                        <span className="news-title">
                                            CONSEILS
                                        </span><br/>
                                        <span className="news-description">
                                            Comment bien s'étirer avant et après une séance de running.
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div className="news-item">
                                    <div className="img-wrapper">
                                        <div className="dark-blue-shade"></div>
                                        <img src="/images/fille-foot-slider.png" alt=""/>
                                        <span className="news-content">
                                        <span className="news-title">
                                            CONSEILS
                                        </span><br/>
                                        <span className="news-description">
                                            Apprendre à bien travailler en équipe
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                </>
                            ) : (
                                <>
                                <div className="news-item">
                                    <div className="img-wrapper">
                                        <div className="dark-blue-shade"></div>
                                        <img src="/images/bmx-slider.png" alt=""/>
                                        <span className="news-content">
                                        <span className="news-title">
                                            NOUVEAUTÉ
                                        </span><br/>
                                        <span className="news-description">
                                            Découvrez le nouvel ensemble de VTT Cross !
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div className="news-item">
                                    <div className="img-wrapper">
                                        <div className="dark-blue-shade"></div>
                                        <img src="/images/athlétisme-slider.jpg" alt=""/>
                                        <span className="news-content">
                                        <span className="news-title">
                                            CONSEILS
                                        </span><br/>
                                        <span className="news-description">
                                            Apprendre à bien respirer lors d'un marathon.
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div className="news-item">
                                    <div className="img-wrapper">
                                        <div className="dark-blue-shade"></div>
                                        <img src="/images/yoga-slider.jpg" alt=""/>
                                        <span className="news-content">
                                        <span className="news-title">
                                            ACTIVITÉS
                                        </span><br/>
                                        <span className="news-description">
                                            Venez participer à nos nouveaux cours de yoga !
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                </>
                            )
                        }
                    </div>
                    {/*<List {...props}/>*/}
                    <HomeList {...this.props}/>
                    <div id="promos">
                        <img src="/images/promos.png" alt=""/>
                        <button className="btn-ternary">C'est parti !</button>
                    </div>
                    <HomeListSimplified {...this.props}/>
                    <div id="promos">
                        <img src="/images/piscine.jpg" alt=""/>
                    </div>
                    <HomeCategoryList {...this.props}/>
                    <div id="personalization" className={this.state.personalizationActive ? 'd-block' : 'd-none'}>
                        <div className="personalization-filter" onClick={() => this.togglePersonalization()}>
                        </div>
                        <div className="personalization-popup container">
                            <div className="row">
                                <div className="col py-3">
                                    <div className="close-personalization" onClick={() => this.togglePersonalization()}>
                                        <span>IGNORER</span>
                                        <img src="/images/close.png" alt=""/>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="personalization-title">Profitez d'une nouvelle expérience personnalisée</span>
                                        <div className="ml-auto">
                                            <Link to="/personnalisation-univers"><button className="btn-secondary">C'est parti !</button></Link>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p className="personalization-description">Découvrez le site Intersport comme vous ne l’avez jamais vue avec des offres rien que pour vous et des conseils répondant vraiment à vos besoins.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            </>
        )
    }
}