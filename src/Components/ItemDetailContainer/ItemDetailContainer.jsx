import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import {getFirestore, doc, getDoc} from 'firebase/firestore'

    
const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'puzzles', itemId)
        getDoc(queryDoc)
        .then(res => setProduct({id: res.id, ...res.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [itemId]);

    return (
        <div>
            {
                loading ? <Loader/> : <ItemDetail data= {product} />
            }
        </div>
    );
}

export default ItemDetailContainer;
