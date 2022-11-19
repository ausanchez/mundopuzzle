import React from 'react';
import { useCartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import { addDoc, getFirestore, collection } from 'firebase/firestore'


const Cart = () => {


    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Augusto',
            email: 'augusto@gmail.com',
            address: 'Buenos Aires 123',
            phone: '1187954321'
        },
        Items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        Total: totalPrice()
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }


if (cart.length === 0) {
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
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>
            Total: ${totalPrice()}
        </p>
        <button onClick={handleClick}>CheckOut</button>
    </>
);

}
export default Cart;
