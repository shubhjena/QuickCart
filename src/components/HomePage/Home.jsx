import React from 'react'
import ProductCarousel from './ProductCarousel'
import CategoryCards from './CategoryCards'
import TopProducts from './TopProducts'

const Home = ({view, addToCart, addToWishlist}) => {
  return (
    <div>

     <ProductCarousel />
     <CategoryCards />
     <TopProducts view={view} addToCart={addToCart} addToWishlist={addToWishlist}/>
    </div>
  )
}

export default Home
