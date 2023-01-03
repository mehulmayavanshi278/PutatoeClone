import React, { useContext, useEffect } from 'react'
import { datacontext } from '../App'

function Fulllocn() {

  const animateMe=()=>{
    document.querySelector(".fullAddress").style="left:0%";
  }
  // animateMe()

  useEffect(()=>{
 
    animateMe();
 
  },[])
    const {location , setLocation} = useContext(datacontext);
  return (
    <>
    <div className='baseClass'>
    <div className='fullAddress'>
      <div className='navBarFullAdd py-2 px-1'>
      <i className="fa-solid fa-location-dot text-white"></i>
      <div className='h4 m-0 p-0 text-white'>{location}</div>
      </div>
     <div className='inputLocation px-1 mt-3'>
  
     <input type="text m-0 p-0" placeholder='Enter Address'name=""/>

      
      <i className="fa-solid fa-magnifying-glass text-muted p-0 m-0"></i>
     </div>
     <div className='YourLocn mt-3 px-2'>
     <i class="fa-solid fa-location-crosshairs"></i>
     <div className='p'>Your Current Location</div>
     </div>
    </div>
    </div>
   
    
    </>
  )
}

export default Fulllocn
