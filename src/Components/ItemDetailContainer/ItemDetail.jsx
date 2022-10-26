import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ title, description, price, pictureURL }) => {

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} unidades de este producto a tu carrito`)
    }

    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: '680px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pictureURL} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text">${price}</p>
                            <ItemCount iniciar={1} stock={10} onAdd={onAdd}/>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}





export default ItemDetail;
