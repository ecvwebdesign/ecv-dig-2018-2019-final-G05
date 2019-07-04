import React from 'react';
import { Link }from 'react-router-dom';
import filterList from '../../utils/filterList';
import CheckCircle from '@material-ui/icons/CheckCircleOutlined'

export default class ChooseSports extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSports: []
        };
    }


    filterList = () => {
        filterList('list-filter', 'sport-list')
    }

    addSelectedSport = (item) => {
        if (this.state.selectedSports.includes(item)) {
            this.setState({selectedSports: this.state.selectedSports.filter(function(sport) {
                return sport !== item
            })});
        } else {
            this.setState({ selectedSports: [...this.state.selectedSports, item] })
        }
    }

    saveSports = () => {
        localStorage.setItem('sports', this.state.selectedSports.join(','))
    }

    render() {
        const sports = ['Football', 'Running', 'Rugby', 'Natation', 'Danse', 'Trottinette', 'Basket-ball', 'Vélo', 'Tennis', 'Boxe']
        return (
            <div id="choose-sports" className="container">
                <div className="row">
                    <div className="col">
                        <p className="personalization-section-title">Sélectionez les sports que vous pratiquez</p>
                    </div>
                </div>
                <div className="search-wrapper">
                    <input id="list-filter" onKeyUp={() => this.filterList()} type="text" placeholder="Recherche"/>
                    <img className="logo-search" src="/images/search.png" alt=""/>
                </div>
                <ul id="sport-list" className="sport-list mt-4">
                    {sports.map(item => (
                        <li className={this.state.selectedSports.includes(item) ? 'color-red d-flex justify-content-between' : 'd-flex justify-content-between'} onClick={() => this.addSelectedSport(item)}>
                            {item}
                            {this.state.selectedSports.includes(item) &&
                                <CheckCircle/>
                            }
                        </li>
                    ))}
                </ul>
                <div className="text-center mt-4">
                    <button onClick={() => this.saveSports()} className="btn-secondary"><Link to="/personnalisation-finalisation">Valider mes choix</Link></button>
                </div>
            </div>
        );
    }
}
