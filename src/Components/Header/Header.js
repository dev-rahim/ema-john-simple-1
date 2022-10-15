import React from 'react';
import './Header.css'
import logo from './../../images/logo.png'

const Header = () => {
    return (
        <div>
            <img className='logo' src={logo} alt="" />
            <nav>
                <a href="./home">Home</a>
                <a href="./review">Order Review</a>
                <a href="./Inventory">Manage Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;