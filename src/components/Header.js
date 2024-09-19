// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="dashboard-header">
            <div className="header-logo">Brocli</div>  {/* Logo to appear in mobile */}
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search..." />
                <button className="search-button">🔍</button>
            </div>
        </header>
    );
};

export default Header;
