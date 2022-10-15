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
    return (
        <div className="Store">
            <div>
                {
                    products.map(pd => <Product key={pd.key} product={pd} />)
                }
            </div>
            <div>
                <Cart />
            </div>
        </div>
    );
};

export default Store;