import React, {useState, useEffect} from "react";
import Nav from './components/Nav.jsx'
import RouteComponent from './components/RouteComponent.jsx';
import Footer from "./components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import Products from "./components/ProductsPage/ProductDetails"
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  //auth0
  const { loginWithRedirect, logout, user, isAuthenticated  } = useAuth0();
  
  //wishlist
  const[wishlist, setWishlist] = useState([]);
  const addToWishlist = (product)=>
  {
    const exist = wishlist.find((item)=>{
      return item.id===product.id
    })
      if(exist){
        alert('Item already added to wishlist!')
      }
      else{
        setWishlist([...wishlist,{...product}])
        alert('Success! Product added to wishlist.')
      }
  }

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
  
  //parsing cart and wishlist from localstorage
  useEffect(()=>{
    const oldCart = window.localStorage.getItem(`QUICKCARTCART`);
    const oldWishlist = window.localStorage.getItem('QUICKCARTWISHLIST');
    const oldShow = window.localStorage.getItem('QUICKCARTSHOW');
    if(oldCart!==null) setCart(JSON.parse(oldCart))
    if(oldWishlist!==null) setWishlist(JSON.parse(oldWishlist))
    if(oldShow!==null) setShow(JSON.parse(oldShow))
  },[]);
  
  //local storage for the cart and wishlist
  useEffect(()=>{
    window.localStorage.setItem(`QUICKCARTCART`,JSON.stringify(cart))
  },[cart])
  ;
  useEffect(()=>{
    window.localStorage.setItem('QUICKCARTWISHLIST',JSON.stringify(wishlist))
  },[wishlist]);

  useEffect(()=>{
    window.localStorage.setItem('QUICKCARTSHOW',JSON.stringify(show))
  },[show]);


  return (
    <div>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} loginWithRedirect={loginWithRedirect} logout={logout} user={user} isAuthenticated={isAuthenticated} />
        <RouteComponent product = {product} setProduct = {setProduct} show={show} view={view} cart={cart} setCart={setCart} addToCart={addToCart} wishlist={wishlist} setWishlist={setWishlist} addToWishlist={addToWishlist}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
