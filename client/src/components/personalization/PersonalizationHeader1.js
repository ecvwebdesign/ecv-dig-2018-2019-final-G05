import React from 'react';
import './PersonalizationHeader.scss';
import { Link }from 'react-router-dom';

export default class PersonalizationHeader1 extends React.Component {
    render() {
        return(
            <div id="personalization-header" className="d-flex align-items-center mb-4 current-step-1 justify-content-between">
                <div>
                    <span className="step current-step">1</span>
                </div>
                <span className="step-name">UNIVERS</span>
                <hr className="horizontal-line"/>
                <div>
                    <span className="step">2</span>
                </div>
                <hr className="horizontal-line"/>
                <div>
                    <span className="step">3</span>
                </div>
                <div>
                    <Link to="/"><img src="/images/close.png" alt=""/></Link>
                </div>
            </div>
        );
    }
}
