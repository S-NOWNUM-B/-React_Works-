import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <div className="columns">
                    <div className="column">
                        <h4>О сайте</h4>
                        <p>Онлайн библиотека — ваш удобный источник знаний и литературы в любое время.</p>
                    </div>
                    <div className="column">
                        <h4>Навигация</h4>
                        <ul className="nav-links">
                            <li><a href="/">Главная</a></li>
                            <li><a href="/story">Библиотека</a></li>
                            <li><a href="/authors">Авторы</a></li>
                            <li><a href="/about">О нас</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Контакты</h4>
                        <p>Email: mamayev.sts@gmail.com</p>
                        <p>Тел: +7 (701) 952 70 93</p>
                    </div>
                </div>
                <div className="copyright">
                    © 2025 Online библиотека. Все права защищены.
                </div>
            </div>
        </footer>
    );
};

export default Footer;