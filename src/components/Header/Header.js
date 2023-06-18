import React from 'react';
import './Header.css';
import Logo from '../../../src/images/Logo.svg';

const Header = () => {
    return (
        <nav>
            <a href=""><img src={Logo} alt="" /></a>
            <ul>
                <li><a href="">Order</a></li>
                <li><a href="">Order Review</a></li>
                <li><a href=""> Inventory</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;