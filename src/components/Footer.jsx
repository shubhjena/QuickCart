import React from 'react'
import {Facebook,Instagram,Twitter,Youtube} from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className="container">
    <div className="b-example-divider"></div>
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <img 
              src="https://source.unsplash.com/1900x600/?logo"
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="E-commerce logo"
            />
        </a>
        <p className="text-muted">&copy; 2023, Shubhashish Jena</p>
        <i className='mt-3 d-flex flex-wrap gap-4'>
            <a href='https://www.facebook.com/' target='blank'><Facebook size={25}/></a>
            <a href='https://www.instagram.com/' target='blank'><Instagram size={25}/></a>
            <a href='https://www.twitter.com/' target='blank'><Twitter size={25}/></a>
            <a href='https://www.youtube.com/' target='blank'><Youtube size={25}/></a>
        </i>
        </div>
        <div className="col mb-3">

        </div>
        <div className="col mb-3">

        </div>
        
        <div className="col mb-3">
        <h5>My Account</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Account</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Orders</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Cart</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Shipping</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Return</a></li>
        </ul>
        </div>

        <div className="col mb-3">
        <h5>Pages</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contacts</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms & Conditions</a></li>
        </ul>
        </div>
    </footer>
    </div>
  )
}

export default Footer
