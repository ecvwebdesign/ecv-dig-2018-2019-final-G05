import React from 'react';
import './HomePage.scss';
import './PersonalizationPage.scss';
import ChooseUniverse from "../components/personalization/ChooseUniverse";
import PersonalizationHeader1 from "../components/personalization/PersonalizationHeader1";

export const PersonalizationPage1 = (props) => (
    <>
        <PersonalizationHeader1/>
        <ChooseUniverse/>
    </>
)
