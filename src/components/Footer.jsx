import React from 'react'
import { Link } from 'react-router-dom';
import {Facebook,Instagram,Twitter,Youtube} from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className="bg-gray-300 w-full shadow-inner">
    <div className="b-example-divider"></div>
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 p-5 border-top">
        <div className="col mb-3">
        <Link to="/" className=' text-black no-underline font-extrabold text-4xl '>
            QuickCart
        </Link>
        <p className="text-muted mt-2">&copy;2023, Shubhashish Jena</p>
        <i className='mt-3 flex flex-wrap gap-4'>
            <a href='https://www.facebook.com/' target='blank' className=' text-black'><Facebook size={25}/></a>
            <a href='https://www.instagram.com/' target='blank' className=' text-black'><Instagram size={25}/></a>
            <a href='https://www.twitter.com/' target='blank' className=' text-black'><Twitter size={25}/></a>
            <a href='https://www.youtube.com/' target='blank' className=' text-black'><Youtube size={25}/></a>
        </i>
        </div>
        <div className="col ">

        </div>
        <div className="col ">

        </div>
        
        <div className="col mb-3">
        <h5>My Account</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Account</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Orders</Link></li>
            <li className="nav-item mb-2"><Link to="/cart" className="nav-link p-0 text-muted">Cart</Link></li>
            <li className="nav-item mb-2"><Link to="/wishlist" className="nav-link p-0 text-muted">Wishlist</Link></li>
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Shipping</Link></li>
        </ul>
        </div>

        <div className="col mb-3">
        <h5>Pages</h5>
        <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
            <li className="nav-item mb-2"><Link to="/product" className="nav-link p-0 text-muted">Products</Link></li>
            <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
            <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-muted">Contacts</Link></li>
            {/* <li className="nav-item mb-2"><Link to="//" className="nav-link p-0 text-muted">FAQs</Link></li>
            <li className="nav-item mb-2"><Link to="//" className="nav-link p-0 text-muted">Terms & Conditions</Link></li> */}
        </ul>
        </div>
    </footer>
    </div>
  )
}

export default Footer
