import React from 'react'
import { NavLink } from 'react-router-dom'

function Mrecharge() {

    const closePopUp = ()=>{
        document.querySelector(".popup").style="display:none"
        document.querySelector(".rHistory").style="display:none"
    }
    const showPopUp = ()=>{
        document.querySelector(".popup").style="display:block"
        document.querySelector(".rHistory").style="display:block"
    }
  return (
    <>
       <div className='baseClass'>
    <div className='fullAddress'>
    <div className='popup'>
       
    </div>
    <div className='rHistory'>
            <div className='h4 m-0 p-0 text-center bg-light '>Recharge History</div>
            <div className=''></div>
            <div className='closeBtn text-center text-white'onClick={closePopUp}>CLOSE</div>
        </div>
      <div className='navBarFullAdd py-3 px-2'>
      <NavLink to="/"> <i class="fa-solid fa-left-long text-white"></i> </NavLink> 
      <div className='d-flex justify-content-between align-items-center px-2'>
      <div className='h4 m-0 p-0 text-white'>Mobile Recharge</div>
      <button className='btn btn-primary bg-white text-muted'onClick={showPopUp}>History</button>
      </div>
   </div>

   <div className='h4 m-0 p-0 mx-2 text-muted mt-2'>Please complete the fields below</div>
   <div className='p m-0 p-0 px-2 mt-2'>Mobile Number</div>
   <div className='MobileInput mt-2'>
    <input className='px-2' type="text" placeholder='Enter Number'name=""/>
    <i className="fa-solid fa-address-book ms-2 text-muted"></i>
   </div>
   <div className='btnn mt-2'>
    <button className='text-muted'>Operatar</button>
    <button className='text-muted'>Circle</button>
   </div>
   <div className='warning text-center mt-2 text-muted'>
    Enter your Number to get the plans
   </div>
    </div>
    
    </div>
    </>
  )
}

export default Mrecharge
