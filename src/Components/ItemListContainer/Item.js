import React from 'react';
import './Item.js'

const Item = ({ title, description, price, pictureURL }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={pictureURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-title">Precio: ${price}</h6>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Ver mas...</a>
            </div>
        </div>
    );
}

export default Item;
