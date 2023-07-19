import React from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom'
import {PlusSquareFill, DashSquareFill } from 'react-bootstrap-icons';

function Cart({cart,setCart}) {
    //remove item
    const removeProduct = (product) =>
    {
        const exist = cart.find((item) =>{
           return item.id===product.id
        })
        if(exist){
            setCart(cart.filter((item) => 
            {
                return item.id !== product.id
            }))
        }
    }

    //decrease qty
    const decreaseQty = (product)=>
    {
        const exist = cart.find((item) =>{
            return item.id===product.id
         })
        if(exist.qty>1){
            setCart(cart.map((item)=>
            {
                return item.id===product.id?{...product, qty: product.qty-1}: item
            }))
        }
    }

    //increase qty
    const increaseQty = (product)=>
    {
        setCart(cart.map((item)=>
        {
            return item.id===product.id?{...product, qty: product.qty+1}: item
        }))
    }

    //total amount and quantity
    const totalAmount = cart.reduce((price,item)=>price+item.price*item.qty,0)
    const totalQuantity = cart.reduce((quantity,item)=>quantity+item.qty,0)

    //checkout
    const checkout = ()=>{
        alert('Thank you for shopping with us! Please visit again.');
        setCart([]);
    };
return (
        <>  {/*Empty cart section */}
            {cart.length === 0 && 
            <div className='text-center py-5'>
            <h2>Your Cart is Empty!</h2>
            <Link to='/product'><Button variant="info" className='m-3'>Shop Now</Button></Link>
            </div>
            }
            {/*product section */}
            <div className='d-flex'>
                <div className='m-3'>
                    {   
                        cart.map((newItem,index) => 
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
                                            <span className='me-2'>Quantity:</span>
                                            <DashSquareFill size={23} onClick={()=>decreaseQty(newItem)}/>
                                            <Badge bg="warning" text="dark" className='p-2 mx-1'>{newItem.qty}</Badge>
                                            <PlusSquareFill size={23} onClick={()=>increaseQty(newItem)}/>
                                            <span onClick={()=>removeProduct(newItem)} className='text-danger mx-3'>Remove</span>
                                        </div>
                                        <h5 className='mt-4'>Subtotal: ₹ {newItem.price*newItem.qty}.00</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/*Checkout section */}
                {cart.length !== 0 && 
                <div className='m-3 p-4 bg-light'>
                    <h4>Total ({totalQuantity} items): ₹ {totalAmount} </h4>
                    <div className="d-grid gap-2 my-4">
                        <Button variant="warning" size="md" onClick={()=>checkout()}>
                           Checkout
                        </Button>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default Cart
