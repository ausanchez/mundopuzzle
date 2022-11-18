import React from 'react';
import { useCartContext } from '../../CartContext/CartContext';

const ItemCart = ({product}) => {

  const {removeProduct} = useCartContext()

  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.pictureURL} className="img-fluid rounded-start" alt={product.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Cantidad: {product.quantity}</p>
              <p className="card-text">Precio: ${product.price}</p>
              <p className="card-text"><small className="text-muted">Subtotal: ${product.quantity * product.price}</small></p>
              <button className='btn btn-secondary' onClick={() => removeProduct(product.id)} >Eliminar</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ItemCart;
