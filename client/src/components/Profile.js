import React from 'react';
import Sky from '../images/sky.png';

const Profile = () => {
    return (
        <div className="profile">
            <img className="profile__background" src={Sky} />
            <div className="profile-box" >
                <img
                    className="profile__image"
                    src="https://i.pravatar.cc/75"
                />
                <ul>
                    <li>Tweets: </li>
                    <li>10 </li>
                    <li>Following: </li>
                    <li>5 </li>
                    <li>Followers: </li>
                    <li>20 </li>
                </ul>
            </div>

        </div>
    );
}

export default Profile;