import React from 'react'
import Home from './HomePage/Home'
import Product from './ProductsPage/Product'
import ViewProduct from './ProductsPage/ViewProduct'
import Contact from './Contact'
import About from './About'
import {Routes,Route} from 'react-router-dom'
import Cart from './Cart'

const route = ({product,setProduct,show,setShow,view,cart,setCart,addToCart}) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home view={view} addToCart={addToCart}/>}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} show={show} setShow={setShow} view={view} addToCart={addToCart}/>}/>
        <Route path='/dp' element={<ViewProduct show={show} setShow={setShow}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default route
