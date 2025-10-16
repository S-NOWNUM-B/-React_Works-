import React from 'react';
import './styles/global.css';
import UserCard from './components/UserCard/UserCard.jsx';

const App = () => {
    const users = [
        {name: 'Stas', email: 'mamayev.stas@gmail.com'},
        {name: 'Radmir', email: 'radmir@gmail.com'},
        {name: 'Why', email: 'why@gmail.com'},
    ];

    return (
        <div className="App">
            <h1>User List</h1>
            {users.map((user, index) => (
                <UserCard key={index} name={user.name} email={user.email} />
            ))}
        </div>
    );
};

export default App;