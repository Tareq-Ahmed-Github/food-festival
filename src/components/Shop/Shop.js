import React, { useEffect, useState } from 'react';
import Cart from '../Carts/Carts';
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
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =><Product product={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                {/* <Cart cart={cart}></Cart> */}
            </div>
        </div>
    );
};

export default Shop;