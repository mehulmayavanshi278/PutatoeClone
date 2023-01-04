import React from 'react'
import { NavLink , useNavigate } from 'react-router-dom'

function Seemore() {

  const history = useNavigate();
  return (
    <>
          <div className='notify'>
        <div className='notifyNav px-3'>
       <NavLink to="/"> <i class="fa-solid fa-left-long text-white"></i> </NavLink> 
        <div className='h2 text-white m-0 p-0'>Reacharge and bill Payments</div>
        </div>
        <div className='boxxx'>
        <div className='notifycircle'>
         </div>
         <div className='notification p-1'>
            <div className='boxnotify p-2'>
              {/* <div className='boxnotify1 px-2 py-3'>
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
              </div> */}
  <div className='h6'>Recharge</div>
  <div className='opt'>
   <div className='opt1'onClick={()=>{history("/mrecharge")}}>
   <i class="fa-solid fa-mobile"></i>
    <p> Prepaid </p>
    <p>Recharge</p>
    </div>
    <div className='opt1'onClick={()=>{history("/mrecharge")}}>
    <i class="fa-solid fa-mobile-retro"></i>
    <p>Postpaid</p>
    <p>Mobile</p>
    <p>Recharge</p>
    </div>
    <div className='opt1'onClick={()=>{history("/dthrecharge")}}>
    <i class="fa-solid fa-tv"></i>
    <p> DTH</p>
    <p> Recharge</p>
    </div>
    <div className='opt1'>
    <i class="fa-solid fa-bolt"></i>
    <p>Fast Tag</p>
    <p>Recharge</p>
    </div>
   </div>
  <div className='opt'>
   <div className='opt1'>
   <i class="fa-solid fa-file-invoice"></i>
    <p>Data Card</p>
    <p>Reacharge</p>
    </div>
    <div className='opt1'>
    <i class="fa-solid fa-train"></i>
    <p>Metro</p>
    <p>Recharge</p>
    </div>

   </div>
 
  <div className='bg-white'>
     <div className='h6'>Bill Payments</div>
  <div className='opt'>
   <div className='opt1'onClick={()=>{history("/gas")}}>
   <i class="fa-solid fa-fire-flame-simple"></i>
    <p>Gas </p>
    <p> Booking </p>

    </div>
    <div className='opt1'onClick={()=>{history("/elect")}}>
   <i class="fa-solid fa-lightbulb"></i>
    <p>Electricity </p>
    <p>Bill</p>
    </div>
    <div className='opt1'onClick={()=>{history("/water")}}>
    <i class="fa-solid fa-droplet"></i>
    <p> Water Bill</p>
    </div>
    <div className='opt1'>
    <i class="fa-solid fa-credit-card"></i>
    <p>Chalaan </p>
    <p> Payments</p>
    </div>
   </div>
  <div className='opt'>

  
    <div className='opt1'>
    <i class="fa-solid fa-user-doctor"></i>
    <p>Jobs</p>
    </div>
  
   </div>
  </div>

  <div className='bg-white'>
     <div className='h6'>Finincial Service and Taxes</div>
  <div className='opt'>

    <div className='opt1'>
    <i class="fa-solid fa-newspaper"></i>
    <p>Municiple</p>
    <p>service</p>
    </div>
    <div className='opt1'>
    <i class="fa-solid fa-id-card"></i>
    <p>Life</p>
    <p>insurence</p>
    </div>
    <div className='opt1'>
    <i class="fa-solid fa-user-nurse"></i>
    <p>Health </p>
    <p> insurence</p>
    </div>
    <div className='opt1'onClick={()=>{history("/loan")}}>
    <i class="fa-solid fa-indian-rupee-sign"></i>
    <p>Loans</p>
    </div>
   </div>
  <div className='opt'>
   </div>
  </div>
              
            </div>
         </div>
        </div>
       
     </div>
    </>
  )
}

export default Seemore
