import '../styles/item.css'
import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ info }) => {

  
  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <img src={info.pictureURL} className="card-img-top" alt={info.title} />
        <div className="card-body">
          <h5 className="card-title">{info.title}</h5>
          <p className="card-text">
            $ {info.price}
          </p>
          <button className="btn btn-secondary " > <Link className='link-detail' to={`/item/${info.id}`}>Ver Detalles...</Link> </button>
        </div>
      </div>
    </>
  );
}

export default Item;
