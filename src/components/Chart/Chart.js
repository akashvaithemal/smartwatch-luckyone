import React from 'react';
import './Chart.css'

const Chart = ({chart,suggestProduct,suggest,product,removeChart}) => {
  
    
    return (
        <div className='main-chart'>
            <h2>Order Summery</h2>
            <div className='chart-suggest'>
                {
                    chart.map(items => <div className='chart-example' key={items.id}>
                    <img src={items.picture}   alt="" /> 
                    <p>{items.name}</p> 
                    </div>)
                 }
           
                {
                    suggest.map(items => <div className='suggest-example' key={items[Math.floor(Math.random() * product.length)].id}>
                    <img src={items[Math.floor(Math.random() * product.length)].picture}   alt="" /> 
                     
                    </div>)
                 }
                  </div>
                 <div className='two-button'>
                     <button onClick={ () =>suggestProduct(product)} className='btn-suggestion'>Random Pick</button>
                     <button onClick={ () =>removeChart()}className='btn-again'>Pick Again</button>
                 </div>
           
            
           
        </div>
    );
};


export default Chart;