import React from 'react';
import Product from './components/Product/Product.jsx';

import './styles/global.css';

const App = () => {
    const products = [
        {
            title: "Товар 1",
            price: 1000,
            inStock: true,
            description: "Описание товара 1",
            rating: 3,
            tags: ["Новинка"]
        },
        {
            title: "Товар 2",
            price: 1500,
            inStock: false,
            description: "Описание товара 2",
            rating: 3,
            tags: ["Скидка"]
        },
        {
            title: "Товар 3",
            price: 2000,
            inStock: true,
            description: "Описание товара 3",
            rating: 5,
            tags: ["Скидка"]
        }
    ];

    return (
        <div className="products-list">
            {products.map((product, index) => (
                <Product key={index} {...product} />
            ))}
        </div>
    );
};

export default App;