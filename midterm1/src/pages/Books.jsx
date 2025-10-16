import React, { useState, useEffect, useCallback } from 'react';
import BookCard_ from '../components/BookCard/BookCard';
import './Books.css';

const STORAGE_KEY = 'miniLibraryBooks';

function Books() {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [genreFilter, setGenreFilter] = useState('all');

    useEffect(() => {
        const savedBooks = localStorage.getItem(STORAGE_KEY);
        if (savedBooks) {
            try {
                const parsedBooks = JSON.parse(savedBooks);
                setBooks(parsedBooks);
            } catch (error) {
                console.error('Ошибка при загрузке книг из localStorage:', error);
            }
        }
    }, []);

    useEffect(() => {
        if (books.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
        } else {
            localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        }
    }, [books]);

    const handleDelete = useCallback((bookId) => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
    }, []);

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGenre = genreFilter === 'all' || book.genre === genreFilter;
        return matchesSearch && matchesGenre;
    });

    return (
        <div className="books-page">
            <h1>Библиотека книг</h1>

            <div className="filters">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Поиск по названию..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="genre-filter">
                    <label htmlFor="genre-select">Жанр:</label>
                    <select
                        id="genre-select"
                        value={genreFilter}
                        onChange={(e) => setGenreFilter(e.target.value)}
                        className="genre-select"
                    >
                        <option value="all">Все</option>
                        <option value="fiction">Fiction</option>
                        <option value="nonfiction">Nonfiction</option>
                        <option value="tech">Tech</option>
                    </select>
                </div>
            </div>

            {filteredBooks.length === 0 ? (
                <div className="no-books">
                    <p>
                        {books.length === 0
                            ? 'В библиотеке пока нет книг. Добавьте первую книгу!'
                            : 'По вашему запросу книг не найдено.'}
                    </p>
                </div>
            ) : (
                <div className="books-grid">
                    {filteredBooks.map(book => (
                        <BookCard_
                            key={book.id}
                            book={book}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Books;