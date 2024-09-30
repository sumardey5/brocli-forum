// src/components/TopSection.js
import React from 'react';
import './TopSection.css';

const TopSection = () => {
    const highlights = [
        { title: 'Top Discussion', description: 'Explore engaging topics!' },
        { title: 'Upcoming Event', description: 'Don’t miss our next event!' },
        { title: 'New Group', description: 'Join our new book lovers group!' },
        { title: 'New Group', description: 'Join our new book lovers group!' },
        { title: 'Top Discussion', description: 'Explore engaging topics!' },
        { title: 'Upcoming Event', description: 'Don’t miss our next event!' },
        { title: 'New Group', description: 'Join our new book lovers group!' },
        { title: 'New Group', description: 'Join our new book lovers group!' }

    ];

    return (
        <div className="top-section">
            {highlights.map((highlight, index) => (
                <div key={index} className="highlight">
                    <div className="highlight-title">{highlight.title}</div>
                    <p className="highlight-description">{highlight.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TopSection;
