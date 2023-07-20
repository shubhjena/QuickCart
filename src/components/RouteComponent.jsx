import React from 'react'
import Home from './HomePage/Home'
import Product from './ProductsPage/Product'
import ViewProduct from './ProductsPage/ViewProduct'
import Contact from './Contact'
import About from './About'
import {Routes,Route} from 'react-router-dom'
import Cart from './Cart'
import Wishlist from './Wishlist'

const route = ({product,setProduct,show,view,cart,setCart,addToCart,wishlist,setWishlist,addToWishlist}) => {
  return (
    <div>
      <Routes>
        <Route exact path='/QuickCart/' element={<Home view={view} addToCart={addToCart} addToWishlist={addToWishlist}/>}/>
        <Route exact path='/QuickCart/product' element={<Product product={product} setProduct={setProduct} view={view} addToCart={addToCart} addToWishlist={addToWishlist}/>}/>
        <Route exact path='/QuickCart/dp' element={<ViewProduct show={show} addToCart={addToCart}/>}/>
        <Route exact path='/QuickCart/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route exact path='/QuickCart/wishlist' element={<Wishlist wishlist={wishlist} setWishlist={setWishlist}/>}/>
        <Route exact path='/QuickCart/contact' element={<Contact/>}/>
        <Route exact path='/QuickCart/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default route
