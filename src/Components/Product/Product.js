import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product.name);
    const { name, price, seller, stock, img } = props.product;
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className='add-to-cart-btn'>add to cart</button>
            </div>
        </div>
    );
};

export default Product;