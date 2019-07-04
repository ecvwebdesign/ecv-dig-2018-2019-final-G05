import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function CustomCheckbox() {
    const [state, setState] = React.useState({
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <div>
            <Checkbox
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="primary"
                inputProps={{
                    'aria-label': 'secondary checkbox',
                }}
            />
        </div>
    );
}