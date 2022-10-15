import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        // console.log(products);
    }, [])
    const [cart, setCart] = useState([])
    const handleAddToCart = (pd) => {
        setCart([...cart, pd])
        // console.log(cart);
        // console.log("clicked");
    }

    return (
        <div className="Store">
            <div className='Product-container'>
                {
                    products.map(pd => <Product key={pd.key} handleAddToCart={handleAddToCart} product={pd} />)
                }
            </div>
            <div>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Store;