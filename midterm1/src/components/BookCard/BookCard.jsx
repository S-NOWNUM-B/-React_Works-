import React from 'react';
import './BookCard.css';

const BookCard_ = React.memo(({ book, onDelete }) => {
    return (
        <div className='book-card'>
            <div className='book-info'>
                <h3 className='book-title'>{book.title}</h3>
                <p className='book-author'>Автор: {book.author}</p>'
                <p className="book-genre">Жанр:{book.genre}</p>
                <p className='book-reiting'>Рейтинг: * {book.reiting}</p>
            </div>
            <button
                className='delete-btn'
                onClick={() => onDelete(book.id)}>Удалить</button>
        </div>
    );
});

BookCard_.displayName = 'BookCard';
export default BookCard_;