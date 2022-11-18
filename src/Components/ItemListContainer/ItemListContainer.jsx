import React, {useEffect, useState} from 'react';
import Loader from '../Loader/Loader';
import ItemList from './ItemList';
import '../../Components/styles/itemListContainer.css'
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams()

    useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'puzzles');
    if(categoryId) {
    const queryFilter = query(queryCollection, where('category', '==', categoryId))
    getDocs(queryFilter)
    .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
    } else {
      getDocs(queryCollection)
    .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
    }
  
  }, [categoryId]);


    return (
        <div className='itemListContainer'>
          {
            loading ? <Loader/> : <ItemList items= {products} />
          }  
        </div>
    );
}

export default ItemListContainer;
