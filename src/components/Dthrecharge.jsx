import React from 'react'
import { NavLink } from 'react-router-dom'

function Dthrecharge() {
  return (
    <>
       <div className='baseClass'>
    <div className='fullAddress'>
   
      <div className='navBarFullAdd py-3 px-2'>
      <NavLink to="/"> <i class="fa-solid fa-left-long text-white"></i> </NavLink> 
      <div className='d-flex justify-content-between align-items-center px-2'>
      <div className='h4 m-0 p-0 text-white'>DTH Recharge</div>
      </div>      
   </div>
   <div className='disk'></div>
    </div>
    
    </div>
    </>
  )
}

export default Dthrecharge
