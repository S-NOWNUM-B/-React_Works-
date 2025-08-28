import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-wrapper">
            <div className="header-content">
                <a href="/" className="logo-section">
                    <div className="logo-icon">📚</div>
                    <span className="logo-text">Online библиотека</span>
                </a>

                <nav className="nav-links">
                    <a href="/library">Библиотека</a>
                    <a href="/authors">Авторы</a>
                    <a href="/about">О нас</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
