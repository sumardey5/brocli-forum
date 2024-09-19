// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="dashboard-header">
            <div className="header-logo">Brocli</div>  {/* Logo to appear in mobile */}
            <input type="text" placeholder="Search..." className="search-bar" />
            <button className="search-button">Search</button>
        </header>
    );
};

export default Header;
