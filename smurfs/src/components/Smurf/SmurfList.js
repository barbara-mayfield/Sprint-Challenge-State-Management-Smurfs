import React from 'react';

import Smurf from './Smurf'

const SmurfList = ({ smurfs }) => {
    return (
        <div>
            {smurfs.map(smurf => (
                <Smurf />
            ))}
        </div>
    )
}

export default SmurfList