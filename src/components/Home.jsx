import React, { lazy, useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { datacontext } from '../App';
import {PMG ,  HD , reslestate , ISP ,BS , AID , EEA , FS ,  BH , courier , EM , Laundry2 , construction2 , sportss , FB , Education ,  Health ,DM , TT , HMIR , CHN , sports , Laundry, consultency , construction , dailyneeds  } from './Data'
function Home() {
  const history = useNavigate();
  let x=390;
  let count=0;
  const {location , setLocation} = useContext(datacontext);

  setInterval(()=>{

    count=count+1;  
   
    const element = document.querySelector(".HomeImages")
    const a = document.querySelectorAll(".circle1");
    if(x===1560){
      x=0;
      count=0
      a[3].style.backgroundColor="";
    }else{

    }
    element.scrollLeft =x;
    x=x+390;
    a[count].style.backgroundColor="red";
    a[count-1].style.backgroundColor="";
    console.log(count);

  },[2500])






  // const showFullLocation =()=>{
  //   document.querySelector(".fullAddress").style="left:0%";
  // }
  // const goToFulllocn=()=>{
  //   h
  // }

  useEffect(()=>{
   
  },[])
  return (
    <>
    {/* <div className='dummy'> */}

 
     <div className='sideBar py-2'>
      <div className='text-center'>
      <i class="fa-solid fa-house-user"></i>
      <div className='h5'>Home</div>
      </div>
     <div className='text-center'>
     <i class="fa-solid fa-user"></i>
     <div className='h5'>Profile</div>
     </div>
     <div className='text-center'>
     <i class="fa-solid fa-list"></i>
     <div className='h5'>Follow List</div>
     </div>
    <div className='text-center'>
    <i class="fa-solid fa-comment-medical"></i>
    <div className='h5'>Chat</div>
    </div>
    
      </div>
      {/* </div> */}
    <div className='navBar'>
   
    <i className="fa-solid fa-location-dot text-white"></i>
      <div className='location mx-2'> 
     <NavLink to="/fulllocn">
     <p className='h6 m-0 p-0  text-white'onClick={()=>{history("/fulllocn")}}>
      {location.slice(0,31)}...
      </p>
     </NavLink> 
   </div>
   <div className='icons'>
   <i className="fa-solid fa-bell text-white"onClick={()=>{history("/notify")}}></i>
    <i className="fa-solid fa-cart-plus text-white"onClick={()=>{history("/cart")}}></i>
    <div className='circle d-flex justify-content-center align-items-center bg-danger text-white'onClick={()=>{history("/notify")}}>2</div>
   </div>
    
    </div>
    <div className='navBar2'>
      <div className='box1 px-1'>
      <i className="fa-solid fa-magnifying-glass text-muted"></i>
      <div className='inputBox'>
        <input className='w-100' type="text" placeholder='Search Products Here...'name=""/>
        {/* <i className="fa-solid fa-magnifying-glass text-muted"></i> */}
      </div>
      
      </div>
      <i className="fa-solid fa-microphone text-white"></i>
    </div>


    <div className='HomeImages'>

    <div className='imagess id="imagesss'>
    <div className='Images'>
       <img src="./images/first.png"alt=""/>
  
      </div>
      <div className='Images'>
        <img src="./images/second.jpg"alt=""/>
      </div>
      <div className='Images'>
      <img src="./images/four.jpg"alt=""/>
    
      </div>
      <div className='Images'>
      <img src="./images/third.jpg"alt=""/>
    </div>
    </div>
    </div>
    <div className='m-0 mx-auto circles d-flex justify-content-around'>
      <div className='circle1'></div>
      <div className='circle1'></div>
      <div className='circle1'></div>
      <div className='circle1'></div>
    </div>
 
   <div className='options mt-3 bg-white'>
   <div className='opt'>
   <div className='opt1'onClick={()=>{history("/mrecharge")}}>
    <i class="fa-solid fa-mobile"></i>
    <p>Prepaid</p>
    <p>Mobile</p>
    <p>Recharge</p>
    </div>
    <div className='opt1'onClick={()=>{history("./dthrecharge")}}>
    <i class="fa-solid fa-tv"></i>
    <p> DTH</p>
    <p> Recharge</p>
    </div>
    <div className='opt1'onClick={()=>{history("/loan")}}>
    <i class="fa-solid fa-indian-rupee-sign"></i>
    <p>Loans</p>
    </div>
    <div className='opt1'>
    <i class="fa-solid fa-rectangle-ad"></i>
    <p>Promotions</p>
    </div>
   </div>

   <div className='opt'>
   <div className='opt1'>
   <i class="fa-solid fa-newspaper"></i>
    <p>News</p>
    </div>
    <div className='opt1'>
    <i class="fa-solid fa-blog"></i>
    <p> Blog</p>
    </div>
    <div className='opt1'>
    <i class="fa-solid fa-user-doctor"></i>
    <p>Jobs</p>
    </div>
    <div className='opt1'>
    <i class="fa-solid fa-comment"></i>
    <p>Anonymous</p>
    <p>feedback</p>
    </div>
   </div>

   <div className='opt'>
   <div className='opt1'onClick={()=>{history("/elect")}}>
   <i class="fa-solid fa-lightbulb"></i>
    <p>Electricity </p>
    <p>Bill</p>
    </div>
    <div className='opt1'onClick={()=>{history("/water")}}>
    <i class="fa-solid fa-droplet"></i>
    <p> Water Bill</p>
    </div>
    <div className='opt1'onClick={()=>{history("/gas")}}>
   <i class="fa-solid fa-fire-flame-simple"></i>
    <p>Gas </p>
    <p> Booking </p>
    </div>
    <div className='opt1'onClick={()=>{history("/seemore")}}>
    <i class="fa-solid fa-angle-right"></i>
    <p>See more</p>
    </div>
   </div>

   </div>
 
 <div className='PopulerHeading h3 b my-2 py-3 text-muted text-center'> 
   Populer Service Products 
 </div>
<div className='Populer'>
    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Daily Needs</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>

   
    {dailyneeds.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Construction</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {construction.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>
    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Consultency</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {consultency.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>


    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Health</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
     
    {Health.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}

    </div>
    </div>


    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Laundry</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>

    {Laundry.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}

    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Sports</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
     
    {sports.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}

    </div>
    </div>
</div>

<div className='PopulerHeading h3 b my-2 py-3 text-muted text-center'> 
  All Populer Service Providers
 </div>
<div className='Populer'>
    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Cleaning and HouseHold Needs</div>
      <div className='roww'></div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>

    {CHN.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
  
   
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr  mx-auto text-center text-muted overflowx-hidden'>House Maintentence and Item Repairing</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>

    {HMIR.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}

    </div>
    </div>
    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Tour And Travel</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {TT.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>


    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Daily Needs</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
  
    {dailyneeds.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}

    </div>
    </div>


    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Dance And Music</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {DM.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Health</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    
    {Health.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}

    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Education</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {Education.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Food And Bevarages</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {FB.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Sports</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>

    {sportss.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}

    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Construction</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    
    {construction2.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}

    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Laundry</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {Laundry2.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Event Management</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {EM.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Courier</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    
    {courier.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}

    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Consultency</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {consultency.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>
</div>


<div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Beauty And Hygiene</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {BH.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Furniture And Supplies</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {FS.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Electronics and Electricals Applieance</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {EEA.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Architacture And Interior Designer</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    
    {AID.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.images}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}

    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Book And Stationary</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>

    {BS.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}


    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Internet Service Provider</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {ISP.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Real Estate</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    
    {reslestate.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}

    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Hendicrafts And DecoRatives</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {HD.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>

    <div className='ProductsHeading d-flex justify-content-center '>
      <div className='h4 m-0 p-0 py-2 borderr mx-auto text-center text-muted overflowx-hidden'>Packaing Meachine And Goods</div>
    </div>
    <div className='rows mt-2'>
    <div className='forScroll'>
    {PMG.map((elm,id)=>{
    return(
      <>
      <div className='product bg-white'>
    <div className='productImg bg-white'>
      <img className='w-100 bg-white' src={elm.image}alt=""/>
      </div>
      <div className='p text-center'>{elm.name}</div>
    </div>
      </>
    )
   })}
    </div>
    </div>
  
    <div className='PopulerHeading h3 b my-2 py-3 text-muted text-center'> 
     Service We Provide
 </div>
  
  <div className='rowww'>
    <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>

   <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>
  </div>

 
  <div className='rowww'>
    <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>

   <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>
  </div>

  <div className='rowww'>
    <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>

   <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>
  </div>

  <div className='rowww'>
    <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>

   <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>
  </div>

  <div className='rowww'>
    <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>

   <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>
  </div>

  <div className='rowww'>
    <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>

   <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>
  </div>

  <div className='rowww mb-5'>
    <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>

   <div className='item1'>
  
  <div className='d-flex justify-content-end mt-1'>
   <div className='off h4 text-center text-white'> 20% Off</div>
  </div>  
   
      <div className='itemImg mt-1'>
        <img className='w-100 h-100 ' src="./images/four.jpg"/>
        <h4 className='text-white DESC text-center'>Descriptions</h4>
      </div>
    </div>
  </div>
    </>
  )
}

export default Home
