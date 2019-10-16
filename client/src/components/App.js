import React from 'react';
import Navbar from './Navbar';

import '../styles/App.css';
import '../styles/style.css';
import '../styles/sidebar.css';
import '../styles/main.css';
import '../styles/mainfeed.css';
import '../styles/usersFeed.css';
import '../styles/profile.css';
import '../styles/tweet.css';

import Sidebar from './Sidebar';
import Users from './UsersFeed.js';
import MainFeed from './MainFeed';
import Profile from './Profile';
import Tweet from './Tweet';

const App = () => {
    return (
        <div>
            <Navbar />

            <div className="grid-wrapper">
                <Profile />
                <MainFeed /> 
                <Sidebar />
                <Users />
                
            </div>
        </div>
    )
};

export default App;