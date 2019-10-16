import React from 'react';

const Tweet = () => {
    return (
        <div className="tweet">
            <h2>Tweet</h2>
            <div className="tweet-box">
                <img className="profile__image" src="https://i.pravatar.cc/50" />
                <input type="text" placeholder="Enter tweet" />
            </div>
        </div>
    );
}

export default Tweet;