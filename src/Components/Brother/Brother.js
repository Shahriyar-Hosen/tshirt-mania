import React from 'react';
import './Brother.css'

const Brother = ({ house }) => {
    return (
        <div>
            <h1>Brother</h1>
            <p><small>{ house }</small></p>
        </div>
    );
};

export default Brother;