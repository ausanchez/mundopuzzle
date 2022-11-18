import React, { useState } from 'react';
import '../styles/itemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../CartContext/CartContext';


const ItemDetail = ({ data }) => {

  const [gotocart, setGotocart] = useState(false);
  const {addProduct} = useCartContext()
  

  const onAdd = (quantity) => {
    setGotocart(true);
    addProduct(data, quantity)
  }

  return (

    <div className="card" style={{ width: '18rem', margin: '5rem auto'}}>
      <img src={data.pictureURL} className="card-img-top" alt={data.title} />
      <div className="card-body">
        <h3 className="card-title">{data.title}</h3>
        <h5>{data.category}</h5>
        <p className="card-text">{data.description}</p>
        <p><span>${data.price}</span></p>
        </div>
         {gotocart ? <Link to='/cart'> Finalizar compra</Link> : <ItemCount initial={1} stock={5} onAdd={onAdd}/>}
         <div className="data-price-btn">
      </div>
    </div>
  );
}

export default ItemDetail;