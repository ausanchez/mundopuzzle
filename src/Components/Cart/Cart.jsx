import React from 'react';
import { useCartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {

    const {cart, totalPrice} = useCartContext();


    if(cart.length === 0 ) {
        return (
        <div>
            <p> No hay productos dentro del carrito </p>
            <button className='btn btn-secondary'> <Link className='link-detail' to={`/`}>Hacer Compras</Link></button>
        </div>

        );
    }
    
    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} /> )
        }
        <p>
            Total: ${totalPrice()}
        </p>
        </>
    );
}

export default Cart;
