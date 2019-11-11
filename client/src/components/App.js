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

class App extends React.Component {
    state = { data: null };

    componentDidMount() {
        this.callServerAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    };

    callServerAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="grid-wrapper">
                    <Profile />
                    <MainFeed />
                    <Tweet />
                    <Sidebar />
                    <Users />
                    <p className="fetched-data">{this.state.data}</p>
                </div>
            </div>
        );
    };
};

export default App;