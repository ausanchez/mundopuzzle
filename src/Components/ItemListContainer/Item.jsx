import React from 'react';
import './Item.jsx'
import { Link } from 'react-router-dom';

const Item = ({id, title, description, price, pictureURL }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={pictureURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-title">Precio: ${price}</h6>
                <Link to = {`/item/${id}`} className="btn btn-primary">Ver mas...</Link>
            </div>
        </div>
    );
}

export default Item;
