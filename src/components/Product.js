import React from 'react';
import './product.css'
import { addToStorage } from '../utilies/addToStorage';
import { removeFromStorage } from '../utilies/removeFromStorage';

const Product = ({product}) => {
    // console.log(product);
    // console.log(Object.keys(product));
    const clickHandler = (id) =>{
        addToStorage(id)
    };

    const clickToRemove = (id) =>{
        removeFromStorage(id)
    }
    
    return (
        <div className='div'>
            {product.name} : {product._id}
            <button onClick={()=>clickHandler(product._id)}>Add to card</button>
            <button onClick={()=>clickToRemove(product._id)}>Remove</button>
        </div>
    );
};

export default Product;