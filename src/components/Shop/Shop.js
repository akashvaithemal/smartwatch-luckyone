
import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
      fetch('data.json')
      .then(res=> res.json())
      .then(data =>console.log(data))
    })
    return (
        <div>
            <div>
                <h3>This is for products</h3>
            </div>
            <div>
                <h3>This is for orders</h3>
            </div>
        </div>
    );
};

export default Shop;