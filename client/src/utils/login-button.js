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

export default function LoginButton(props) {
    const classes = useStyles();

    return (
        <div>
            <Button variant="outlined" className={classes.button}>
                {props.loggedUser ? (
                    <div id="logout" onClick={props.handleLogout}>Logout</div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </Button>
        </div>
    );
}