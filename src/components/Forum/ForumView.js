// src/components/Forum.js
import React from 'react';
import './ForumView.css';

const Forum = () => {
    const topics = [
        {
            title: 'Ask A Coach',
            description: 'Get advice from professional coaches and experienced runners.',
            comments: 34,
            lastUpdated: '1h ago'
        },
        {
            title: 'Long Run Fuel',
            description: 'Discuss the best nutrition practices for long runs.',
            comments: 28,
            lastUpdated: '3h ago'
        },
        // Add more topics as needed
    ];

    return (
        <div className="forum">
            {topics.map((topic, index) => (
                <div key={index} className="forum-topic">
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                    <small>{topic.comments} comments - Last updated {topic.lastUpdated}</small>
                </div>
            ))}
        </div>
    );
};

export default Forum;
