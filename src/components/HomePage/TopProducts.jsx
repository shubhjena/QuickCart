import React from 'react'
import ProductCards from '../ProductsPage/ProductCards'
import { Container } from 'react-bootstrap';

function TopProducts({view, addToCart, addToWishlist}) {

    const products = [
        {
          title: 'Laptop',
          category: 'Computers',
          price: 999,
          image: 'https://source.unsplash.com/256x256/?laptop'
        },
        {
          title: 'Smartphone',
          category: 'Mobile',
          price: 799,
          image: 'https://source.unsplash.com/256x256/?smartphone'
        },
        {
          title: 'Headphones',
          category: 'Audio',
          price: 199,
          image: 'https://source.unsplash.com/256x256/?headphones'
        },
        {
          title: 'Camera',
          category: 'Photography',
          price: 1299,
          image: 'https://source.unsplash.com/256x256/?camera'
        },
        {
          title: 'Smartwatch',
          category: 'Wearables',
          price: 299,
          image: 'https://source.unsplash.com/256x256/?smartwatch'
        },
        {
          title: 'Gaming Console',
          category: 'Gaming',
          price: 499,
          image: 'https://source.unsplash.com/256x256/?gaming'
        },
        {
          title: 'Monitor',
          category: 'Computers',
          price: 399,
          image: 'https://source.unsplash.com/256x256/?monitor'
        },
        {
          title: 'Wireless Speaker',
          category: 'Audio',
          price: 149,
          image: 'https://source.unsplash.com/256x256/?speaker'
        }
      ];
      
  return (
    <div>
        <h2 className='d-flex justify-content-center'>Top Products</h2>
        <Container className='d-flex flex-wrap justify-content-center'>
            <ProductCards products={products} view={view} addToCart={addToCart} addToWishlist={addToWishlist}/>
        </Container>
    </div>
  )
}

export default TopProducts
