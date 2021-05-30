import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Shopping/Shopping-actions';

const SingleItem = ({currentItem, addToCart}) => {
    return (
        <div className='text-center m-5 bg-light p-5'>
            <img className='img-fluid ' style={{borderRadius:'50%', width:'20%'}} src={currentItem?.image} alt="" />
            <h1>{currentItem?.name}</h1>
            <p style={{color:'gray'}}>{currentItem?.dis}</p>
            <button class="btn btn-outline-dark" onClick={() => addToCart(currentItem.id)}>Add To Cart</button>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        currentItem: state.shop.currentItem
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (SingleItem);