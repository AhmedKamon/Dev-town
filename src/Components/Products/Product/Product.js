import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, loadCurrentItem } from '../../../Redux/Shopping/Shopping-actions';
import  './Product.css';

const Product = ({productData, addToCart, loadCurrentItem}) => {
    return (
        <div className='row bg-light mt-5 shadow-sm p-3 mb-5 bg-body rounded'>
            <div className='col-md-3 image-res '>
                <img className=' d-flex align-items-center' style={{ width: '55%' }} src={productData.image} alt="" />
            </div>
            <div className='col-md-7 mt-2'>
                <h4>Name: {productData.name}</h4>
                <h6>Skills: {productData.Skills}</h6>
                <h6>Type: {productData.type}</h6>
                <h6>Price: {productData.price} $</h6>
            </div>
            <div className='col-md-2 text-center'>
                {/* <button className='btn btn-outline-dark mt-2'>About</button>
                <button className='btn btn-outline-dark mt-2'>Add To Cart</button> */}
                 <Link to={`/product/${productData.id}`}><button onClick={() => loadCurrentItem(productData)} type="button" class="btn btn-outline-dark mt-3">About {productData.name}</button></Link> <br />
                <button onClick={ () => addToCart(productData.id)} type="button" class="btn btn-secondary  btn-dark mt-3">Hire Per Month</button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch =>{
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps) (Product);