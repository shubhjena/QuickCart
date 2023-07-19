import Col from 'react-bootstrap/Col';
import Products from './ProductDetails';
import ViewProduct from './ViewProduct';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ProductCards from './ProductCards';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

function Product({product, setProduct, show, setShow,view, addToCart, addToWishlist}) {
    

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
      <h1 className='d-flex mx-5'>
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
