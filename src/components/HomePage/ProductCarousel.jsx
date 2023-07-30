import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { ArrowRight } from 'react-bootstrap-icons';


function ProductCarousel() {
  return (
    <Carousel>
      <Carousel.Item className='bg-body-secondary'>
      <img src="https://source.unsplash.com/1900x600/?Nature,Lightning" alt='Nature,Lightning'/>
        <Carousel.Caption>
          <h3>The Grandeur of Nature</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="primary" size="lg" className='mt-4 mb-5 px-5'>
              <span>Explore</span> <ArrowRight className='inline'/>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://source.unsplash.com/1900x600/?flower,dark" alt='flower,dark'/>
        <Carousel.Caption>
          <h3>Flower Fiesta</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="primary" size="lg" className='mt-4 mb-5 px-5'>
              <span>Explore</span> <ArrowRight className='inline'/>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://source.unsplash.com/1900x600/?dark" alt='dark'/>   
        <Carousel.Caption>
          <h3>Dark is Nigh</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="primary" size="lg" className='mt-4 mb-5 px-5'>
              <span>Explore</span> <ArrowRight className='inline'/>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;