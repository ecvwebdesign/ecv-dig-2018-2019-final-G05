import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link }from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function primaryButton(props) {
    const classes = useStyles();

    return (
        <div>
            <Button variant="contained" color="primary" className={classes.button}>
                Se connecter
            </Button>
        </div>
    );
}