import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {

    const [cartCounter, setCartCounter] = useState(0);

    useEffect(() => {
        let count = 0
        cart.forEach(item => {
            count += item.qty
        })
        setCartCounter(count)
    }, [cart, cartCounter])

    return (
        <div>
            <nav class="navbar navbar-light ">
                <div class="container-fluid">
                    <Link to='/'> <h1 style={{ fontWeight: 'bold' }} class="navbar-brand">Dev Town</h1></Link>
                    <form class="d-flex">
                        <Link to='/cart'>
                            <button class="btn btn-outline-dark" type="submit"><img
                                style={{ width: '20%', fontWeight:'bold' }}
                                src="https://image.flaticon.com/icons/svg/102/102276.svg"
                                alt="shopping cart"
                            /><h5>{cartCounter}</h5></button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Navbar);