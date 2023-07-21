import Col from 'react-bootstrap/Col';
import Products from './ProductDetails';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ProductCards from './ProductCards';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
//product section of the website
function Product({product, setProduct, view, addToCart, addToWishlist}) {
    
    //functions to filter products based on selection in side menu
    const filtterproduct = (filterCategory) =>
    {
        const update = Products.filter((currProduct) => 
        {
           return currProduct.category === filterCategory;
        })
        setProduct(update);
    }
    const AllProducts = () => 
    {
        setProduct(Products)
    }

  return (
    <div>
      <h1 className='flex mx-5 text-base'>
        #Products
      </h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row >
        <Col sm={3} >
            <ListGroup className='ps-5'>
                <h3>Categories</h3>
                <ListGroup.Item onClick={() => AllProducts ()}>All Products</ListGroup.Item>
                <ListGroup.Item onClick={() => filtterproduct ("Tablet")}>Tablet</ListGroup.Item>
                <ListGroup.Item onClick={() => filtterproduct ("Smart Watch")}>Smart Watch</ListGroup.Item>
                <ListGroup.Item onClick={() => filtterproduct ("Headphone")}>Headphone</ListGroup.Item>
                <ListGroup.Item onClick={() => filtterproduct ("Camera")}>Camera</ListGroup.Item>
                <ListGroup.Item onClick={() => filtterproduct ("Gaming")}>Gaming</ListGroup.Item>
            </ListGroup>
        </Col>
        <Col sm={9}>
            {(product.length ===0)&&
              <div className='m-auto d-flex flex-column justify-content-center'>
                <h4 className='m-auto'>Oops! no match found!</h4>
                <Button variant="warning" className='mx-auto my-4' onClick={() => AllProducts ()}>Continue Shopping</Button>
              </div>
            }
            <Container className='d-flex flex-wrap w-100 '>
                <ProductCards products={product} view={view} addToCart={addToCart} addToWishlist={addToWishlist}/>
            </Container>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default Product
