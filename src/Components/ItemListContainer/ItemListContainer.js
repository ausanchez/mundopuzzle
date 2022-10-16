import React, {useEffect, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { getArray } from '../helpers/getArray';
import { arrayPuzzles } from '../../data/data';
import ItemList from './ItemList';
import './itemListContainer.css'


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArray(arrayPuzzles)
        .then(res => setProducts(res))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])
    
    
    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} unidades de este producto a tu carrito`)
    }




    return (
        <div id='itemListContainer'>
            {
                loading ? <div className="lds-facebook"><div></div><div></div><div></div></div> :  <ItemList items = {products} />
            }
        
        </div>
    )

    {/* <ItemCount iniciar={1} stock={10} onAdd={onAdd}/> */}

    }
export default ItemListContainer
