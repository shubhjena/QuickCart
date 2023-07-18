import React from 'react'
import ProductCarousel from './ProductCarousel'
import CategoryCards from './CategoryCards'
import TopProducts from './TopProducts'

const Home = ({view, addToCart}) => {
  return (
    <div>

     <ProductCarousel />
     <CategoryCards />
     <TopProducts view={view} addToCart={addToCart}/>
    </div>
  )
}

export default Home
