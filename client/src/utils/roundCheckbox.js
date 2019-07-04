import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircle from '@material-ui/icons/CheckCircle'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUncheckedOutlined'

export default function RoundCheckbox() {
    return (
        <Checkbox icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircle />} value="checkedH" color="primary" inputProps={{
            'aria-label': 'round checkbox',
        }}/>
    );
}
