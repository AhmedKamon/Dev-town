import React, { useState } from 'react';
import { connect } from 'react-redux';
import { adjustQty, removeFromCart } from '../../../Redux/Shopping/Shopping-actions';

const CartItem = ({ item, removeFromCart,  adjustQty}) => {

    const [input, setInput] = useState(item.qty)

    const onChangeHandler = (e) => {
        setInput(e.target.value)
        adjustQty(item.id, e.target.value)
    }

    return (
        <div className='row m-5 bg-light shadow p-3 mb-5 bg-body rounded'>
            <div className='col-md-2'>
                <img style={{ borderRadius: '50%' }} className='img-fluid' src={item.image} alt="" />
            </div>
            <div className='col-md-6'>
                <h3>{item.name}</h3>
                <p>{item.dis}</p>
                <h2>{item.price} $</h2>
            </div>
            <div className='col-md-4 p-2'>
                <label htmlFor="qty">quantity</label><br />
                <input onChange={onChangeHandler} min='1' type="number" id='qty' name='qty' value={input} /><br />
                <button onClick={() => removeFromCart(item.id)} class="btn btn-dark mt-2">delete</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id,value) => dispatch(adjustQty(id,value))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);