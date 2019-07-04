import React from 'react';
import { Link }from 'react-router-dom';
import CustomCheckbox from '../../utils/checkbox';

export default class ChooseUniverse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hommeUniverseSelected: false,
            femmeUniverseSelected: false,
            garconUniverseSelected: false,
            filleUniverseSelected: false
        };
    }

    handleUniverseClick = (universeName) => {
        if (universeName === 'homme') {
            this.setState({
                hommeUniverseSelected: !this.state.hommeUniverseSelected
            })
        } else if (universeName === 'femme') {
            this.setState({
                femmeUniverseSelected: !this.state.femmeUniverseSelected
            })
        } else if (universeName === 'garcon') {
            this.setState({
                garconUniverseSelected: !this.state.garconUniverseSelected
            })
        } else if (universeName === 'fille') {
            this.setState({
                filleUniverseSelected: !this.state.filleUniverseSelected
            })
        }
    }

    saveUniverse = () => {
        const selectedUniverses = [];
        if (this.state.hommeUniverseSelected) {
            selectedUniverses.push('homme')
        }
        if (this.state.femmeUniverseSelected) {
            selectedUniverses.push('femme')
        }
        if (this.state.garconUniverseSelected) {
            selectedUniverses.push('garcon')
        }
        if (this.state.filleUniverseSelected) {
            selectedUniverses.push('fille')
        }
        localStorage.setItem('universe', selectedUniverses.join(','))
    }

    render() {
        return(
            <div id="universe" className="container">
                <div className="row">
                    <div className="col">
                        <p className="personalization-section-title">Commencez par choisir vos univers</p>
                    </div>
                </div>
                <div className="d-flex flex-wrap universe-wrapper">
                    <div className={this.state.hommeUniverseSelected ? 'universe d-flex flex-column selected' : 'universe d-flex flex-column '}>
                        <div className="m-auto">
                            <img src="/images/homme.png" alt=""/>
                        </div>
                        <div className="mt-auto d-flex align-items-center">
                            <span onClick={() => this.handleUniverseClick('homme')}><CustomCheckbox/></span><span className="universe-name">HOMME</span>
                        </div>
                    </div>
                    <div className={this.state.femmeUniverseSelected ? 'universe d-flex flex-column selected' : 'universe d-flex flex-column '}>
                        <div className="m-auto">
                            <img src="/images/femme.png" alt=""/>
                        </div>
                        <div className="mt-auto d-flex align-items-center">
                            <span onClick={() => this.handleUniverseClick('femme')}><CustomCheckbox/> </span><span className="universe-name">FEMME</span>
                        </div>
                    </div>
                    <div className={this.state.garconUniverseSelected ? 'universe d-flex flex-column selected' : 'universe d-flex flex-column '}>
                        <div className="m-auto">
                            <img src="/images/garçon.png" alt=""/>
                        </div>
                        <div className="mt-auto d-flex align-items-center">
                            <span onClick={() => this.handleUniverseClick('garcon')}><CustomCheckbox/></span> <span className="universe-name">GARÇON</span>
                        </div>
                    </div>
                    <div className={this.state.filleUniverseSelected ? 'universe d-flex flex-column selected' : 'universe d-flex flex-column '}>
                        <div className="m-auto">
                            <img src="/images/fille.png" alt=""/>
                        </div>
                        <div className="mt-auto d-flex align-items-center">
                            <span onClick={() => this.handleUniverseClick('fille')}><CustomCheckbox/></span> <span className="universe-name">FILLE</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center mt-5">
                        <Link to="/personnalisation-sports"><button className="btn-secondary" onClick={() => this.saveUniverse()}>Choisir mes sports</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}
