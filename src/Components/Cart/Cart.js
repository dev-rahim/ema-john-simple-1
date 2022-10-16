import React from 'react';
import './Cart.css'

const Card = (props) => {
    const { cart } = props;
    // console.log(props);

    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        total = (total + product.price);
    }
    console.log(total);
    console.log(quantity);
    console.log(cart);
    const shipping = 17;
    const tax = (total / 8);
    const finalTOtal = total + shipping + tax;
    return (
        <div>
            <div>
                <h3>Order Summary </h3>
                <h4>Items ordered: {quantity}</h4>
            </div>
            <div className='cart-content'>
                <p>Total: <span>${total.toFixed(2)}</span></p>
                <p>Shipping & Handling:	 <span>${shipping}</span></p>
                <p>Total before tax: <span>${(total + shipping).toFixed(2)}</span></p>
                <p>Estimated Tax: <span>${tax.toFixed(2)}</span></p>
                <h4 className='total-order'>Order Total:<span>${finalTOtal.toFixed(2)}</span></h4>
            </div>
        </div>
    );
};

export default Card;