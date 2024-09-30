import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TopSection from './components/TopSection';
import Placeholder from './pages/placeholder';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <div style={{ display: 'flex', width: '100%' }}>
                    <Sidebar />
                    <div style={{ flex: 1 }}>
                        <TopSection />
                        <Routes>
                            <Route path="/forum" element={<Placeholder />} />
                            <Route path="/account" element={<Placeholder />} />
                            <Route path="/inbox" element={<Placeholder />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
