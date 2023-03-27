import React from 'react';
import './product.css'
import { addToStorage } from '../utilies/addToStorage';

const Product = ({product}) => {
    // console.log(product);
    // console.log(Object.keys(product));
    const clickHandler = (id) =>{
        
        addToStorage(id)
    };
    
    return (
        <div className='div'>
            {product.name} : {product.eyeColor}
            <button onClick={()=>clickHandler(product._id)}>Add to card</button>
        </div>
    );
};

export default Product;