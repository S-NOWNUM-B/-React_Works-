import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './AddBook.css';

const STORAGE_KEY = 'miniLibraryBooks';

// Схема валидации Yup
const bookValidationSchema = Yup.object({
    title: Yup.string()
        .min(2, 'Название должно содержать минимум 2 символа')
        .required('Название обязательно'),
    author: Yup.string()
        .required('Автор обязателен'),
    genre: Yup.string()
        .oneOf(['fiction', 'nonfiction', 'tech'], 'Выберите жанр из списка')
        .required('Жанр обязателен'),
    rating: Yup.number()
        .min(0, 'Рейтинг не может быть меньше 0')
        .max(5, 'Рейтинг не может быть больше 5')
        .required('Рейтинг обязателен')
});

function AddBook() {
    const navigate = useNavigate();

    const initialValues = {
        title: '',
        author: '',
        genre: '',
        rating: ''
    };

    const handleSubmit = (values) => {
        // Создаем новую книгу с уникальным ID
        const newBook = {
            id: Date.now(),
            title: values.title,
            author: values.author,
            genre: values.genre,
            rating: parseFloat(values.rating)
        };

        // Получаем существующие книги из localStorage
        const savedBooks = localStorage.getItem(STORAGE_KEY);
        const books = savedBooks ? JSON.parse(savedBooks) : [];

        // Добавляем новую книгу
        books.push(newBook);

        // Сохраняем обратно в localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));

        // Переходим на страницу /books
        navigate('/books');
    };

    return (
        <div className="add-book-page">
            <h1>Добавить новую книгу</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={bookValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="book-form">
                        <div className="form-group">
                            <label htmlFor="title">Название книги *</label>
                            <Field
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Введите название книги"
                                className="form-input"
                            />
                            <ErrorMessage name="title" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="author">Автор *</label>
                            <Field
                                type="text"
                                id="author"
                                name="author"
                                placeholder="Введите имя автора"
                                className="form-input"
                            />
                            <ErrorMessage name="author" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="genre">Жанр *</label>
                            <Field
                                as="select"
                                id="genre"
                                name="genre"
                                className="form-input"
                            >
                                <option value="">Выберите жанр</option>
                                <option value="fiction">Fiction</option>
                                <option value="nonfiction">Nonfiction</option>
                                <option value="tech">Tech</option>
                            </Field>
                            <ErrorMessage name="genre" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="rating">Рейтинг (0-5) *</label>
                            <Field
                                type="number"
                                id="rating"
                                name="rating"
                                placeholder="Введите рейтинг от 0 до 5"
                                step="0.1"
                                min="0"
                                max="5"
                                className="form-input"
                            />
                            <ErrorMessage name="rating" component="div" className="error-message" />
                        </div>

                        <div className="form-actions">
                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                Добавить книгу
                            </button>
                            <button
                                type="button"
                                className="cancel-btn"
                                onClick={() => navigate('/books')}
                            >
                                Отмена
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddBook;