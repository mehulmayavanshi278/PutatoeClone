import React from 'react'
import { NavLink } from 'react-router-dom'

function Gas() {
  return (
    <>
       <div className='elect'>
    <div className='navBarFullAdd  py-3 px-2'>
      <NavLink to="/"> <i class="fa-solid fa-left-long text-white"></i> </NavLink> 
      <div className='d-flex justify-content-between align-items-center px-2'>
      <div className='h4 m-0 p-0 text-white'>water Bill</div>
      </div>      
   </div>
   <div className='inputboxx px-1 mt-2'>
    <input className='w-100 px-3' type="text"placeholder='Search Your Provider'/>
   </div>
   <div className='electScroll'>
 
   <div className='providers h4 mt-3'>Vadodara water</div>
   <div className='providers h4'>Unique Central Piped wateres</div>
   <div className='providers h4'>Tripura Natural water</div>
   <div className='providers h4'>Siti Energy</div>
   <div className='providers h4'>Sanswariya water Limited</div>
   <div className='providers h4'>Naveriya water Pvt Ltd</div>
   <div className='providers h4'>Megha water</div>
   <div className='providers h4'>Mahrashtra Natural water</div>
   <div className='providers h4'>Mahanagar water</div>
   <div className='providers h4'>IRM Energy</div>
   <div className='providers h4'>Indian OIL</div>
   <div className='providers h4'>Adani water</div>
   <div className='providers h4'>Gujarat water Compny</div>
   <div className='providers h4'>Gail india Limited</div>
   <div className='providers h4'>Central water Compny</div>
   <div className='providers h4'>Adani water</div>
   <div className='providers h4'>Adani water</div>
   <div className='providers h4'>AArvantika water</div>
 
   </div>
    </div>
    </>
  )
}

export default Gas
