import React, {useEffect, useState} from 'react';
import { getArray } from '../helpers/getArray';
import { arrayPuzzles } from '../../data/data';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loader from '../Loader/Loader';
import './itemListContainer.css'


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        getArray(arrayPuzzles)
        .then(res =>{
            categoryId ? setProducts(res.filter((item)=> item.category === categoryId)) : setProducts(res)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[categoryId])
    

    return (
        <div id='itemListContainer'>
            {
                loading ? <Loader/> :  <ItemList items = {products} />
            }
        </div>
    )
    }
export default ItemListContainer
