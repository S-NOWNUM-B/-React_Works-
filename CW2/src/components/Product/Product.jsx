import React from 'react';

const Product = ({ title, price, inStock, description, rating, tags }) => {
    const discountPrice = tags.includes("Скидка") ? price * 0.9 : price;

    return (
        <div className="product">
            <h2>{title}</h2>
            <p>{description}</p>
            <p className={inStock ? "price" : "out-of-stock"}>
                {inStock ? `Цена: ${discountPrice.toFixed(0)}₸` : "Нет в наличии"}
            </p>
            <div className="rating">
                Рейтинг: {"⭐".repeat(rating)}
            </div>
            <div>
                {tags && tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
        </div>
    );
};

export default Product;