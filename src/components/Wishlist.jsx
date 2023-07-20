import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

function wishlist({wishlist,setWishlist}) {
    //remove item
    const removeProduct = (product) =>
    {
        const exist = wishlist.find((item) =>{
           return item.id===product.id
        })
        if(exist){
            setWishlist(wishlist.filter((item) => 
            {
                return item.id !== product.id
            }))
        }
    }

return (
        <>
            {wishlist.length === 0 && 
            <div className='text-center py-5'>
            <h2>Your wishlist is Empty!</h2>
            <Link to='/QuickCart/product'><Button variant="info" className='m-3'>Shop Now!</Button></Link>
            </div>
            }
            <div className='d-flex'>
                <div className='m-3'>
                    {   
                        wishlist.map((newItem,index) => 
                        {
                            return(
                                <div key={index} className='d-flex mb-4 mx-4'>
                                    <div>
                                        <img src={newItem.image} alt={newItem.title}></img>
                                    </div>
                                    <div className='mx-4'>
                                        <h4>{newItem.category}</h4>
                                        <h3>{newItem.title}</h3>
                                        <p>Price: ₹ {newItem.price}.00</p>
                                        <div className='d-flex align-items-center user-select-none' >
                                            <span onClick={()=>removeProduct(newItem)} className='text-danger'>Remove from Wishlist</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default wishlist;
