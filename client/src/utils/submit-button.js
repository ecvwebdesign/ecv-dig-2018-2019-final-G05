import React from 'react';
import Button from '@material-ui/core/Button';


export default function SubmitButton(props) {

    return (
        <div>
            <Button type="submit" disabled={props.disabled} variant="contained" color="primary" className="btn-secondary text-center">
                {props.text}
            </Button>
        </div>
    );
}