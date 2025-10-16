import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import './styles/global.css';

function App() {
    return (
        <div className="app-container">
            <header className="app-header">
                <nav className="nav-menu">
                    <h1 className="app-title">MiniLibrary</h1>
                    <div className="nav-links">
                        <Link to="/books" className="nav-link">Книги</Link>
                        <Link to="/add-book" className="nav-link">Добавить книгу</Link>
                    </div>
                </nav>
            </header>

            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Navigate to="/books" replace />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <footer className="app-footer">
                <p>&copy; 2025 MiniLibrary. Ваша персональная библиотека.</p>
            </footer>
        </div>
    );
}

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Страница не найдена</p>
            <Link to="/books" className="back-link">Вернуться к книгам</Link>
        </div>
    );
}

export default App;