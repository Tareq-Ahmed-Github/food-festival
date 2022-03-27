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

    const selectedCart = Math.round(Math.random()*cart.length)%cart.length +1;
    return (
        <div className='shop-total'>
            <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =><Product product={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Carts cart={cart}></Carts>

                <div>
                <button className='choose-btn' onClick={selectedCart}>Choose 1 for me</button>

                <button className='choose-btn' onClick={removeCart}>Choose again</button>
            </div>
            </div>
            
        </div>
        <div className="questions">
                <div>
                    <h3>How React work?</h3>
                    <p>Components are made of two main things which are useState and props. These things mean Components can be organized in a hierarchical structure that confirms a one-way data flow (through props) so we only have one state. This structure is called a tree, and by this we can assign responsibility for a state to a Component.</p>
                </div>
                <div>
                    <h3>Difference between Props and State</h3>
                    <p>We use Props to pass data from component to component. A state is a local data storage which is local to the component (only) and it cannot be passed to a different component.</p>
                </div>
            </div>
        </div>
        
    );
};

export default Shop;