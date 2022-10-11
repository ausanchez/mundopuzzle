import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './itemListContainer.css'

const ItemListContainer = ({greeting}) => {
    
    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} unidades de este producto a tu carrito`)
    }
    
    return (
        <>
         <div className='greeting'>{greeting}</div>
         <ItemCount iniciar={1} stock={10} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;
