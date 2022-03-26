
import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [chart, setChart] = useState([]);
    const [suggest, setSuggest] = useState([]);

    useEffect( () =>{
      fetch('products.json')
      .then(res=> res.json())
      .then(data =>setProducts(data))
      
    }, [])
    const handleAddToChart = (product) =>{
        // console.log(product);
        const newChart = [...chart, product];
        setChart(newChart);
    }
    const suggestProduct = (products) =>{
        const newChart = [products];
        setSuggest(newChart);
    }
    

 return (
    
        
           <div className='shop-container'>
            <div className='products-container'>
               {
                   products.map(product=><Product
                    key={product.id}
                 product={product}
                 handleAddToChart={handleAddToChart}
                   ></Product>)
               }
               
            </div>

            <div className='chart-container'>
             <Chart
              chart={chart}
              product={products}
              suggest={suggest}
              suggestProduct={suggestProduct}
             ></Chart>      
          
            </div>
        </div>
    
        
    );
            }; 

export default Shop;