import React from 'react'
import { NavLink } from 'react-router-dom'

function Notify() {
    
  return (
    <>
     <div className='notify'>
        <div className='notifyNav px-3'>
       <NavLink to="/"> <i class="fa-solid fa-left-long text-white"></i> </NavLink> 
        <div className='h1 text-white m-0 p-0'>Notification</div>
        </div>
        <div className='boxxx'>
        <div className='notifycircle'>
         </div>
         <div className='notification p-1'>
            <div className='boxnotify p-2'>
              <div className='boxnotify1 px-2 py-3'>
              <i className="fa-solid fa-cart-plus text-muted"></i>
              <div className=''>
              <div className='p text-danger'> 5 Rewarde Point Added For Visiting Our Platform</div>
              <p className='p-0 m-0'>02 Jan,2023 - 12:37 pm</p>
              </div>      
              </div>

              <div className='boxnotify1 px-2 py-3 mt-2'>
              <i className="fa-solid fa-cart-plus text-muted"></i>
              <div className=''>
              <div className='p text-danger'> 5 Rewarde Point Added For Visiting Our Platform</div>
              <p className='p-0 m-0'>02 Jan,2023 - 12:37 pm</p>
              </div>      
              </div>
            </div>
         </div>
        </div>
       
     </div>
    </>
  )
}

export default Notify
