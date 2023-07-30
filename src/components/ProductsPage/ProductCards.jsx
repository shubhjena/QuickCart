import {SuitHeartFill, Cart4, EyeFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


function ProductCards({products,view,addToCart,addToWishlist}) {

  return (
    <>
       {products.map((product,index)=>(
          <div key={index} className='bg-alpha rounded-lg m-auto my-3 w-72 shadow ' onClick={()=>{view(product)}}>
            <div className='m-auto flex flex-col p-3'>
              <Link to="/dp" className='m-auto flex flex-col text-black no-underline'>
                <img src={product.image} className='rounded' />
                <span className=' text-lg font-semibold'>{product.title}</span>
                <span className='text-muted'>{product.category}</span>
              </Link>
              <div className='flex gap-3 text-gamma text-lg font-semibold cursor-pointer'>
                <span className=' text-accent font-bold mr-auto'>₹ {product.price}.00</span>
                {/*on click call addToCart function in App.js which appends product to cart state*/}
                <span onClick={()=>{addToCart(product)}} className='my-auto' title="Add to cart"><Cart4/></span>

                {/*on click call addToWishlist function in App.js which appends product to wishlist state*/}
                <span onClick={()=>{addToWishlist(product)}} className='my-auto' title="Wish list"><SuitHeartFill/></span>

                {/*Link loads ViewProduct component*/}
                <Link to="/dp" className="text-gamma no-underline my-auto" title="View"><EyeFill/></Link>
              </div>
            </div>
          </div>

            //  Placeholder 
            // <Card key={index} style={{ width: '18rem' }} className='m-auto my-3'>
            //   <Card.Body>
            //   <Image src={product.image} rounded />
            //     <Placeholder as={Card.Title} animation="wave">
            //       <Placeholder xs={9} />
            //     </Placeholder>
            //     <Placeholder as={Card.Subtitle} animation="wave" >
            //       <Placeholder xs={3} className="mb-2 text-muted"/> <Placeholder xs={4} className="mb-2 text-muted" /> 
            //       <Placeholder xs={5} />
            //     </Placeholder>
            //     <Placeholder as={Card.Text} animation="wave">
            //       <Placeholder xs={1} /> <Placeholder xs={3} /> 
            //     </Placeholder>
            //     <Placeholder as={Card.Link} animation="wave">
            //       <Placeholder xs={5} /> <Placeholder xs={4} />
            //     </Placeholder>
            //   </Card.Body>
            // </Card>
        ))}
    </>
  );
}

export default ProductCards;