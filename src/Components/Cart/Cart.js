import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let price = 0
        let items = 0
        cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        });

        setTotalPrice(price)
        setTotalItems(items)
    }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice])
    console.log(cart)
    return (
        <div className='row'>
            <div className='col-md-10'>
                {
                    cart.map(item => <CartItem key={item.id} item={item}></CartItem>)
                }
            </div>
            <div className='col-md-2 bg-dark '>
                <h3 className='text-white pt-2'>Total Item: {totalItems}</h3>
                <h3 className='text-white pt-2'>Total Price: {totalPrice}$</h3>
            </div>
        </div>
    );
};

const maoStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(maoStateToProps)(Cart);