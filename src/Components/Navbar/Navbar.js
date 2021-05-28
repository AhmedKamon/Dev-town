import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light ">
                <div class="container-fluid">
                    <Link to='/'> <h1 style={{ fontWeight:'bold' }} class="navbar-brand">Dev Town</h1></Link>
                    <form class="d-flex">
                        <Link to='cart'>
                            <button class="btn btn-outline-dark" type="submit">Total Developers <img
                                style={{ width: '10%', }}
                                src="https://image.flaticon.com/icons/svg/102/102276.svg"
                                alt="shopping cart"
                            /></button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;