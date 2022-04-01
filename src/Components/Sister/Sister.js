import React, { useContext } from 'react';
import { Spacial } from '../GrandPa/GrandPa';

const Sister = ({ house }) => {
    const offer = useContext(Spacial);
    return (
        <div>
            <h1>Sister</h1>
            <p><small>{ house } {offer}</small></p>
            <p><small>Gift: {offer}</small></p>
        </div>
    );
};

export default Sister;