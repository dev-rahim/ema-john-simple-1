import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    return (
        <div className="Products">
            <Product />
            <Cart />
        </div>
    );
};

export default Store;