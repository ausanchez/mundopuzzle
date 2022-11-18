import React from 'react';
import Item from './Item';
import '../styles/itemList.css'


const ItemList = ({items = []}) => {
    return (

        items.map(item => <Item key={item.id} info= {item} />)

    );
}

export default ItemList;
