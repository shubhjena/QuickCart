import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';

function Example({show,setShow,addToCart}){

return(
    <div>
      {
        show.map((displayProduct,index)=>(
          <div key={index} className='d-flex p-5'>
            <img src={displayProduct.image}/>
            <div className='px-4 py-5'>
              <h2>{displayProduct.title}</h2>
              <h5>{displayProduct.category}</h5>
              <h4>₹ {displayProduct.price}</h4>
              <Button variant="warning" className='me-3' onClick={()=>{addToCart(displayProduct)}}>Buy now</Button>
              <Button variant="secondary" onClick={()=>{addToCart(displayProduct)}}>Add to Cart</Button>
            </div>
          </div>
        ))
        
      }
    </div>
  )
}

export default Example;