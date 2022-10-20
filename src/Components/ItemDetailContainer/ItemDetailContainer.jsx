import React from 'react';
import ItemDetail from './ItemDetail';
import { useState } from 'react';
import { useEffect } from 'react';
import { getArray } from '../helpers/getArray';
import { arrayPuzzles } from '../../data/data';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams()
    
    useEffect(() => {
       getArray(arrayPuzzles)
        .then(res => {
            const item = res.find((item) => item.id === Number(itemId))
            setProduct(item)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [itemId])


    return (
        <>
        {
         loading ? <Loader/> : <ItemDetail {...product}/>
        }
        </>
    );
}

export default ItemDetailContainer;
