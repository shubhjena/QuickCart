import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
// import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from 'react-router-dom';


function ProductCards({products,view,addToCart,addToWishlist}) {

  return (
    <>
       {products.map((product,index)=>(
        <Card key={index} style={{ width: '18rem' }} className='m-auto my-3' onClick={()=>{view(product)}}>
                <Card.Body>
                <Image src={product.image} rounded />
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
                    <Card.Text>₹ {product.price}.00</Card.Text>

                    {/*on click call addToCart function in App.js which appends product to cart state*/}
                    <Card.Text onClick={()=>{addToCart(product)}}>Add to cart</Card.Text>

                    {/*on click call addToWishlist function in App.js which appends product to wishlist state*/}
                    <Card.Text onClick={()=>{addToWishlist(product)}}>Wishlist</Card.Text>

                    {/*Link loads ViewProduct component*/}
                    <Link to="/dp" className="mx-3">View</Link>
                </Card.Body>
            </Card>

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