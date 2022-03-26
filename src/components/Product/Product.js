import React from 'react';

const Product = (props) => {
    // console.log(props.product)
    const {name, picture, price} = props.product;
    return (
        <div className='product'>
           <img src={picture} alt=""></img>
           <div>
               <p className='product-name'>{name}</p>
               <p>Price:{price}Tk</p>
           </div>
        </div>
    );
};

export default Product;
