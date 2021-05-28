import React from 'react';
import jhankerSir from '../../../image/jhankerSir.png'

const Product = ({productData}) => {
    return (
        <div className='row bg-light mt-5'>
            <div className='col-md-3 '>
                <img className=' d-flex align-items-center' style={{ width: '55%' }} src={productData.image} alt="" />
            </div>
            <div className='col-md-7 mt-2'>
                <h3>Name: {productData.name}</h3>
                <p>Skills: {productData.Skills}</p>
                <p>Type: {productData.type}</p>
            </div>
            <div className='col-md-2 text-center '>
                {/* <button className='btn btn-outline-dark mt-2'>About</button>
                <button className='btn btn-outline-dark mt-2'>Add To Cart</button> */}
                <button type="button" class="btn btn-primary  btn-info mt-3">About</button>
                <button type="button" class="btn btn-secondary  btn-dark mt-3">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;