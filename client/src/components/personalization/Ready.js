import React from 'react';
import { Link }from 'react-router-dom';
import Register from "../user/Register";

export default class Ready extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }


    render() {
        return (
            <div id="ready" className="container">
                <div className="row">
                    <div className="col mb-2">
                        <p className="personalization-section-title">Vous êtes prêt !</p>
                        <p className="personalization-section-description">Conservez vos choix pour une prochaine visite en vous inscrivant rapidement</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col ready-form pt-3">
                        <Register {...this.props} />
                        <div className="text-center">
                            <Link to="/"><button className="btn-primary btn-280 px-3 mb-5">Continuer en tant qu'invité</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
