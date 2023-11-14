import React from 'react';
import './BodyBar.css';

function BodyBar(props) {
  
  return (
    <div className='body'>
        
        {props.productInput.map(x=> {
        return(
        <div className='item1'>
        <div onClick={() => {
          props.clickOnproduct(x);
        }}>
            <h3><span>{x.title}</span></h3>
            <h3><span>{x.type}</span></h3>
            <h4><span>Rs.{x.price}</span></h4>
            <h4><span>Rating:{x.rating}</span></h4>
          </div>
      </div>)
        })}
    </div>
  )
}

export default BodyBar

