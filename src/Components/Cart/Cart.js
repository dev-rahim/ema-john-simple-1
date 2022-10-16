import React from 'react';
import './Cart.css'

const Card = (props) => {
    const { cart } = props;
    // console.log(cart);

    let total = 0;
    for (const product of cart) {
        total += product.price;
    }
    return (
        <div>
            <div>
                <h3>Order Summary</h3>
                <h4>Items ordered: {cart.length}</h4>
            </div>
            <div className='cart-content'>
                <p>Total: <span>${total.toFixed(2)}</span></p>
                <p>Shipping & Handling:	 <span>${(cart.length * 3.5).toFixed(2)}</span></p>
                <p>Total before tax: <span>${(total + (cart.length * 3.5)).toFixed(2)}</span></p>
                <p>Estimated Tax: <span>${(total / 8).toFixed(2)}</span></p>
                <h4 className='total-order'>Order Total:	<span>${((total + (cart.length * 3.5)) + (total / 8)).toFixed(2)}</span></h4>
            </div>
        </div>
    );
};

export default Card;