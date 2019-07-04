import React from 'react';
import SasList from '../components/product/SasList';
import './ProductPage.scss';
import './HomePage.scss';
import SimplifiedFooter from "../components/block/SimplifiedFooter";
import ExpandMore from '@material-ui/icons/ExpandMore';
import Layout2 from '../components/block/Layout2';

export const SasProductPage = (props) => (
    <Layout2>
    <div className="sas-page">
        <div className="d-flex product-options mt-2">
            <div className="color-option">
                <span>Filtre</span>
            </div>
            <div className="size-option d-flex justify-content-between">
                <span>Trier</span>
                <ExpandMore/>
            </div>
        </div>
        <SasList {...props}/>
        <div className="text-center">
            <button className="btn-secondary">
                Voir plus
            </button>
        </div>
        <div id="newsletter" className="mt-4">
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
                        <button className="d-flex mt-2 mx-auto btn-ternary">Je m'inscris</button>
                    </div>
                </div>
            </div>
        </div>
        <SimplifiedFooter/>
    </div>
    </Layout2>

)
