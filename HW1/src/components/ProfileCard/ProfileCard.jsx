import React from "react";
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className="div-wrapper">
            <div className='div-content'>
                <h2>Hello, React!</h2>
                <p>Это простой одностраничный сайт, собранный из отдельных компонентов.</p>
            </div>
        </div>
    );
};

export default ProfileCard;