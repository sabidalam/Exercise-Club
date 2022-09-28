import React from 'react';
import logo from '../../images/favicon.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1>Exercise-Club</h1>

        </div>
    );
};

export default Header;