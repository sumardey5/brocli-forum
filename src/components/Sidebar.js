// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                Brocli
            </div>
            <div className="sidebar-container">
                <Link 
                    to="/forums" 
                    className={`sidebar-item ${location.pathname === '/forums' ? 'sidebar-item-active' : ''}`}>
                    <i className="sidebar-item-icon">🏠</i>
                    <span>Forums</span>
                </Link>
                <Link 
                    to="/athletic-clubs" 
                    className={`sidebar-item ${location.pathname === '/athletic-clubs' ? 'sidebar-item-active' : ''}`}>
                    <i className="sidebar-item-icon">🏋️‍♂️</i>
                    <span>Find an Athletic Club</span>
                </Link>
                <Link 
                    to="/dietitians-trainers" 
                    className={`sidebar-item ${location.pathname === '/dietitians-trainers' ? 'sidebar-item-active' : ''}`}>
                    <i className="sidebar-item-icon">🍏</i>
                    <span>Find a Dietitian and Personal Trainer</span>
                </Link>
                <Link 
                    to="/inbox" 
                    className={`sidebar-item ${location.pathname === '/inbox' ? 'sidebar-item-active' : ''}`}>
                    <i className="sidebar-item-icon">✉️</i>
                    <span>Inbox</span>
                </Link>
                <Link 
                    to="/account" 
                    className={`sidebar-item ${location.pathname === '/account' ? 'sidebar-item-active' : ''}`}>
                    <i className="sidebar-item-icon">👤</i>
                    <span>My Account</span>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;