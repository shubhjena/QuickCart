import React, {useState} from "react";
import Nav from './components/Nav.jsx'
import RouteComponent from './components/RouteComponent.jsx';
import Footer from "./components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import Products from "./components/ProductsPage/ProductDetails"
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Productdetail from "./components/ProductsPage/ProductDetails";

const App = () => {
  //add to cart
  const [cart,setCart] = useState([]);
  const addToCart = (product) => 
  { const exist = cart.find((item)=>{
    return item.id===product.id
  })
    if(exist){
      alert('Item already added to cart!')
    }
    else{
      setCart([...cart,{...product,qty:1}])
      alert('Success! Product added to cart.')
    }
  }

  //filter products on product page
  const[product,setProduct] = useState(Products);
  const searchbtn = (searchCategory) =>
  {
    const update = Products.filter((currProduct) => 
    {
      return currProduct.category === searchCategory;
    })
    setProduct(update);
  };

  //display product using view product component
  const [show, setShow] = useState([]);
  const view = (product) => setShow([product]);
  
  return (
    <div>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <RouteComponent product = {product} setProduct = {setProduct} show={show} setShow={setShow} view={view} cart={cart} setCart={setCart} addToCart={addToCart}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
