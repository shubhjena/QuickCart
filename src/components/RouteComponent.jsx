import React from 'react'
import Home from './HomePage/Home'
import Product from './ProductsPage/Product'
import ViewProduct from './ProductsPage/ViewProduct'
import Contact from './Contact'
import About from './About'
import {Routes,Route} from 'react-router-dom'
import Cart from './Cart'
import Wishlist from './Wishlist'

const route = ({product,setProduct,show,setShow,view,cart,setCart,addToCart,wishlist,setWishlist,addToWishlist}) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home view={view} addToCart={addToCart} addToWishlist={addToWishlist}/>}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} show={show} setShow={setShow} view={view} addToCart={addToCart} addToWishlist={addToWishlist}/>}/>
        <Route path='/dp' element={<ViewProduct show={show} setShow={setShow} addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/wishlist' element={<Wishlist wishlist={wishlist} setWishlist={setWishlist}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default route
