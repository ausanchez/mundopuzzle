import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext/CartContext';
import '../styles/cartWidget.css'

const CartWidget = () => {

    const { totalProducts } = useCartContext();

    return (
        <>
        <Link to='/cart'><i className="bi bi-cart cartIcon" /></Link>
        <span className='cartBubble'>{totalProducts() || 0}</span>
        </>
    );

}


export default CartWidget;
