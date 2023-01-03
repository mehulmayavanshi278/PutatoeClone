import React from 'react'
import { NavLink } from 'react-router-dom'

function Cart() {
  return (
    <>
      <div className='cart'>
      <div className='notifyNav px-3'>
       <NavLink to="/"> <i class="fa-solid fa-left-long text-white"></i> </NavLink> 
        <div className='h1 text-white m-0 p-0'>Your Cart</div>
        </div>
        <div className='cartBody'>
             <div className='boxCart'>
                <div className='h1'>Your Cart is empty</div>
             </div>
        </div>
      </div>
    </>
  )
}

export default Cart
