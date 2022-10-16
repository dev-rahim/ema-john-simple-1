import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

    useEffect(() => {
        if (products.length) {
            const savedCartKeys = getStoredCart()
            // console.log(savedCart);
            const savedProducts = []
            for (const key in savedCartKeys) {
                const addedProducts = products.find(product => product.key === key);
                savedProducts.push(addedProducts);
            }
            setCart(savedProducts);

        }
    }, [products])


    const [cart, setCart] = useState([])
    const handleAddToCart = (pd) => {
        setCart([...cart, pd])
        // console.log(cart);
        // console.log("clicked");
        addToDb(pd.key);
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