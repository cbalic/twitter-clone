import React from 'react';
import Navbar from './Navbar';

import './App.css';
import '../styles/style.css';
import '../styles/main.css';
import '../styles/usersFeed.css';

import Sidebar from './Sidebar';
import Users from './UsersFeed.js';
import MainFeed from './MainFeed';

const App = () => {
    return (
        <div>
            <Navbar />

            <div className="grid-wrapper">
                <Sidebar /> 
                <Users />
                <MainFeed />
            </div>
        </div>
    )
};

export default App;