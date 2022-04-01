import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>This is header page</h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
                <CustomLink to='/grandpa'>Grand Pa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;