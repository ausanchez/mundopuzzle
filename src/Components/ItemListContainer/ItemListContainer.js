import React from 'react';
import './itemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <>
         <div className='greeting'>{greeting}</div>
        </>
    );
}

export default ItemListContainer;
