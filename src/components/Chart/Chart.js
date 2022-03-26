import React from 'react';


const Chart = ({chart,suggestProduct,suggest,product,removeChart}) => {
  
    
    return (
        <div className=''>
            <h2>Order summery</h2>
            <div>
                {
                    chart.map(items => <div className='chart-example' key={items.id}>
                    <img src={items.picture}   alt="" /> 
                    <p>{items.name}</p> 
                    </div>)
                 }
           
                {
                    suggest.map(items => <div className='chart-example' key={items[Math.floor(Math.random() * product.length)].id}>
                    <img src={items[Math.floor(Math.random() * product.length)].picture}   alt="" />  
                    </div>)
                 }
                  </div>
                 <div>
                     <button onClick={ () =>suggestProduct(product)}>Random Pick</button>
                     <button onClick={ () =>removeChart()}>Delete All</button>
                 </div>
           
            
           
        </div>
    );
};


export default Chart;