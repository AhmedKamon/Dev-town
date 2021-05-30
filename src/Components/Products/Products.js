import React from 'react';
import { connect } from 'react-redux';
import Product from './Product/Product';

const Products = ({products}) => {
    return (
        <div >
            
            {
                products.map((product) => (<Product key={product.id} productData={product}></Product>))
            }
            
        </div>
    );
};

const mapStateToProps = state =>{
return{
    products: state.shop.products,
}
}

export default connect(mapStateToProps)(Products);