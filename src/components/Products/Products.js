import React from 'react';
import './Products.css'
const Product = (props) => {
    const { picture, name, price } = props.product;
    
    return (
        <div className='product'>
                <img src={picture} alt="" />
                <div className="product-details">
                    <h5>{name}</h5>
                    <small>Price: {price}</small>
                </div>
                <button onClick={() => props.addToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
            </button>
            
        </div>
    );
};

export default Product;