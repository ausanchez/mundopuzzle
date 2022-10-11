import React from 'react';
import { useState, useEffect } from 'react';

import './itemCount.css';

const ItemCount = ({iniciar,stock,onAdd}) => {

    const [count, setCount] = useState(parseInt(iniciar));
    
    const decrementar = () => {
        setCount(count - 1)
    }

    const incrementar = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(iniciar))
    }, [iniciar]);

    return (
        <div className='contador'>
            <button disabled={count <= 1} onClick={decrementar}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={incrementar}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;
