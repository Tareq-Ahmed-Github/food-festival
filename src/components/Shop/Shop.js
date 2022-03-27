import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Product from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('productData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addToCart = (product) => {
        if(cart.length >= 4){
            return;
        }
        const newCart = [...cart, product];
        setCart(newCart);
    };
    const removeCart = () => {
        setCart([]);
    };
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =><Product product={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Carts cart={cart}></Carts>

                <div>
                <button className='choose-btn'>Choose 1 for me</button>

                <button className='choose-btn' onClick={removeCart}>Choose again</button>
            </div>
            </div>
            
        </div>
    );
};

export default Shop;