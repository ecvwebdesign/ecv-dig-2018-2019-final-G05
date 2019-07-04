import React from 'react';
import './HomePage.scss';
import './PersonalizationPage.scss';
import PersonalizationHeader3 from "../components/personalization/PersonalizationHeader3";
import Ready from "../components/personalization/Ready";

export const PersonalizationPage3 = (props) => (
    <>
    <PersonalizationHeader3/>
    <Ready {...props}/>
    </>
)
