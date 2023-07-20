import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
//component to show the detailed view of selected product
function Example({show,addToCart}){

return(
    <div>
      { //display products within show state
        show.map((displayProduct,index)=>(
          <div key={index} className='d-flex p-5'>
            <img src={displayProduct.image} alt={displayProduct.title}/>
            <div className='px-4 py-5'>
              <h2>{displayProduct.title}</h2>
              <h5>{displayProduct.category}</h5>
              <h4>₹ {displayProduct.price}</h4>
              <Link to='/QuickCart/cart'><Button variant="warning" className='me-3' onClick={()=>{addToCart(displayProduct)}}>Buy now</Button></Link>
              <Button variant="secondary" onClick={()=>{addToCart(displayProduct)}}>Add to Cart</Button>
            </div>
          </div>
        ))
        
      }
    </div>
  )
}

export default Example;