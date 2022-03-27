import React from 'react';
import './Carts.css';
const Carts = ( {cart} ) => {
    return (
        <div className='cart'>
            <h3>Select clothes</h3>
            <p>Selected Items: {cart.length}</p>
            <div>
                {
                    cart.map((item) => {
                        return (
                            <div className='selected-carts'>
                                <div className='cart-img'>
                                    <img src={item.picture} alt="" />
                                </div>
                                <div>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Carts;