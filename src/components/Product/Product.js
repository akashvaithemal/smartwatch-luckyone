import React from 'react';
import './Product.css'

const Product = ({product,handleAddToChart}) => {
    // console.log(props.product)
   
    const {name, picture, price} = product;
    
    
    
    return (
        <div className='product'>
           <img src={picture} alt=""></img>
           <div>
               <p className='product-name'>{name}</p>
               <p className='product-price'>Price:{price}Tk</p>
           </div>
           <button onClick={ () =>handleAddToChart(product)} className='btn-chart'>
               <p>Add to chart</p>
              
           </button>
        </div>
    );
};

export default Product;
