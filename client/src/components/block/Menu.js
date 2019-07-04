import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './Menu.scss';
import Person from '@material-ui/icons/PersonOutlined';
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfiedOutlined';
import LiveHelp from '@material-ui/icons/LiveHelpOutlined';
import Phone from '@material-ui/icons/PhoneOutlined';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Menu(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <div className="d-flex justify-content-between cart-header align-items-center">
                <span>MENU</span>
                <div className="d-flex align-items-center" onClick={() => props.closeMenuSlide()}>
                    <span>FERMER</span>
                    <i className="material-icons">close</i>
                </div>
            </div>
            <AppBar position="static">
                <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                    <LinkTab label="Default" href="/drafts" />
                    <LinkTab label="Sports" href="/drafts" />
                    <LinkTab label="Homme" href="/trash" />
                    <LinkTab label="Femme" href="/spam" />
                </Tabs>
            </AppBar>
            {value === 0 && <TabContainer>
                <div className="menu-list">
                    <div className="menu-list-item">
                        <span>Tours les sports</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item item-promotions">
                        <span>Promotions</span>
                    </div>
                    <div className="menu-list-item">
                        <span>Marques</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Magasins</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Locations matériels</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                </div>
                <div className="menu-icons">
                    <div className="menu-icon">
                        <Person/>
                        <span className="ml-2">Compte</span>
                    </div>
                    <div className="menu-icon">
                        <SentimentSatisfied/>
                        <span className="ml-2">Conseils</span>
                    </div>
                    <div className="menu-icon">
                        <Phone/>
                        <span className="ml-2">Contact</span>
                    </div>
                    <div className="menu-icon">
                        <FavoriteBorder/>
                        <span className="ml-2">Favoris</span>
                    </div>
                    <div className="menu-icon">
                        <LiveHelp/>
                        <span className="ml-2">Questions</span>
                    </div>
                </div>
            </TabContainer>}
            {value === 1 && <TabContainer>
                <div className="menu-list">
                    <Link to="/produits/football">
                    <div className="menu-list-item">
                        <span>Football</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    </Link>
                    <div className="menu-list-item">
                        <span>Vélo</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Running</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Training / Fitness</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Randonnée</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Natation</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Basket-ball</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item item-other-sports">
                        <span>Autres sports</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item item-promotions">
                        <span>Promotions</span>
                    </div>
                </div>
                <div className="menu-icons">
                    <div className="menu-icon">
                        <Person/>
                        <span className="ml-2">Compte</span>
                    </div>
                    <div className="menu-icon">
                        <SentimentSatisfied/>
                        <span className="ml-2">Conseils</span>
                    </div>
                    <div className="menu-icon">
                        <Phone/>
                        <span className="ml-2">Contact</span>
                    </div>
                    <div className="menu-icon">
                        <FavoriteBorder/>
                        <span className="ml-2">Favoris</span>
                    </div>
                    <div className="menu-icon">
                        <LiveHelp/>
                        <span className="ml-2">Questions</span>
                    </div>
                </div>
            </TabContainer>}
            {value === 2 && <TabContainer>
                <div className="menu-list">
                    <div className="menu-list-item">
                        <span>Chaussures</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Haut</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Bas</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Maillot de bain</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Accessoires</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item item-promotions">
                        <span>Promotions</span>
                    </div>
                    <div className="menu-list-item">
                        <span>Marques</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Magasins</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Locations matériel</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                </div>
                <div className="menu-icons">
                    <div className="menu-icon">
                        <Person/>
                        <span className="ml-2">Compte</span>
                    </div>
                    <div className="menu-icon">
                        <SentimentSatisfied/>
                        <span className="ml-2">Conseils</span>
                    </div>
                    <div className="menu-icon">
                        <Phone/>
                        <span className="ml-2">Contact</span>
                    </div>
                    <div className="menu-icon">
                        <FavoriteBorder/>
                        <span className="ml-2">Favoris</span>
                    </div>
                    <div className="menu-icon">
                        <LiveHelp/>
                        <span className="ml-2">Questions</span>
                    </div>
                </div>
            </TabContainer>}
            {value === 3 && <TabContainer>
                <div className="menu-list">
                    <div className="menu-list-item">
                        <span>Chaussures</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Haut</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Bas</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Maillot de bain</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Accessoires</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item item-promotions">
                        <span>Promotions</span>
                    </div>
                    <div className="menu-list-item">
                        <span>Marques</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Magasins</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                    <div className="menu-list-item">
                        <span>Locations matériel</span>
                        <i className="material-icons">chevron_right</i>
                    </div>
                </div>
                <div className="menu-icons">
                    <div className="menu-icon">
                        <Person/>
                        <span className="ml-2">Compte</span>
                    </div>
                    <div className="menu-icon">
                        <SentimentSatisfied/>
                        <span className="ml-2">Conseils</span>
                    </div>
                    <div className="menu-icon">
                        <Phone/>
                        <span className="ml-2">Contact</span>
                    </div>
                    <div className="menu-icon">
                        <FavoriteBorder/>
                        <span className="ml-2">Favoris</span>
                    </div>
                    <div className="menu-icon">
                        <LiveHelp/>
                        <span className="ml-2">Questions</span>
                    </div>
                </div>
            </TabContainer>}
        </div>
    );
}