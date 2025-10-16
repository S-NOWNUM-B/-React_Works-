import React from 'react';
import Button from '../Button/Button.jsx';
import './UserCard.css';

const UserCard = ({ name, email}) => {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>{email}</p>
            <Button text="Нажать"/>
        </div>
    );
};

export default UserCard;