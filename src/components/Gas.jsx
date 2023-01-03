import React from 'react'
import { NavLink } from 'react-router-dom'

function Gas() {
  return (
    <>
       <div className='elect'>
    <div className='navBarFullAdd  py-3 px-2'>
      <NavLink to="/"> <i class="fa-solid fa-left-long text-white"></i> </NavLink> 
      <div className='d-flex justify-content-between align-items-center px-2'>
      <div className='h4 m-0 p-0 text-white'>Gas Booking</div>
      </div>      
   </div>
   <div className='inputboxx px-1 mt-2'>
    <input className='w-100 px-3' type="text"placeholder='Search Your Provider'/>
   </div>
   <div className='electScroll'>
 
   <div className='providers h4 mt-3'>Vadodara Gas</div>
   <div className='providers h4'>Unique Central Piped Gases</div>
   <div className='providers h4'>Tripura Natural Gas</div>
   <div className='providers h4'>Siti Energy</div>
   <div className='providers h4'>Sanswariya Gas Limited</div>
   <div className='providers h4'>Naveriya Gas Pvt Ltd</div>
   <div className='providers h4'>Megha Gas</div>
   <div className='providers h4'>Mahrashtra Natural Gas</div>
   <div className='providers h4'>Mahanagar Gas</div>
   <div className='providers h4'>IRM Energy</div>
   <div className='providers h4'>Indian OIL</div>
   <div className='providers h4'>Adani GAS</div>
   <div className='providers h4'>Gujarat Gas Compny</div>
   <div className='providers h4'>Gail india Limited</div>
   <div className='providers h4'>Central Gas Compny</div>
   <div className='providers h4'>Adani Gas</div>
   <div className='providers h4'>Adani Gas</div>
   <div className='providers h4'>AArvantika Gas</div>
 
   </div>
    </div>
    </>
  )
}

export default Gas
