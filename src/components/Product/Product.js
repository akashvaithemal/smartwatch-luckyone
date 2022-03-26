import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



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
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              
           </button>
        </div>
    );
};

export default Product;
