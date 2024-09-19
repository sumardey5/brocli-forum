import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Placeholder from './pages/placeholder'; // Universal placeholder page

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Sidebar />
                <Routes>
                    <Route path="/forum" element={<Placeholder />} />
                    <Route path="/account" element={<Placeholder />} />
                    <Route path="/inbox" element={<Placeholder />} />
                    {/* Add other placeholder routes as needed */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
