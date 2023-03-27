import React from 'react';
import Product from './Product'

const Products = ({products}) => {
     
    return (
        <div>
            
            {products.map(product => <Product key={product._id} product={product}></Product>) }
            welcome from product 
            
        </div>
    );
};

export default Products;