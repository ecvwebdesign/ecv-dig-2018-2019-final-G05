import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


export default function FavoriteCheckbox() {
    return (
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" color="primary" inputProps={{
                'aria-label': 'favorite checkbox',
            }}/>
    );
}
