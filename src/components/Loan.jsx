import React from 'react'
import { NavLink } from 'react-router-dom'

function Loan() {
  return (
    <>
         <div className='notify'>
        <div className='notifyNav px-3'>
       <NavLink to="/"> <i class="fa-solid fa-left-long text-white"></i> </NavLink> 
        <div className='h2 text-white m-0 p-0'>Loans</div>
        </div>
        <div className='boxxx'>
        <div className='notifycircle'>
         </div>
         <div className='notification p-1'>
            {/* <div className='boxnotify'> */}
            <div className='h4 bg-white'>Get Loan ar loweset interest rates</div>
            <div className='p bg-white'>Please Complete The Field Below in Order To Recieve a call back in 48 Hours</div>
            {/* </div> */}
            <div className='name px-2 bg-white mt-4'>
                <div className='h4 m-0 p-0'>Full Name*</div>
                <input className="w-100 ps-2 py-2 mt-1"type="text"placeholder="Enter Full Name"/>
            </div> <div className='name px-2 bg-white mt-4'>
                <div className='h4 m-0 p-0'>Email Id*</div>
                <input className="w-100 ps-2 py-2 mt-1"type="email"placeholder="Enter Your Email"/>
            </div>
            <div className='name px-2 bg-white mt-4'>
                <div className='h4 m-0 p-0'>Mobile Number*</div>
                <input className="w-100 ps-2 py-2 mt-1"type="text"placeholder="Enter Your Phone Number"/>
            </div>
            <div className='name px-2 bg-white mt-4'>
                <div className='h4 m-0 p-0'>Region*</div>
                <select className='py-3 mt-1'>
                    <option>Select State</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Gujarat</option>
                    <option>Rajasthan</option>
                    <option>UP</option>
                    <option>Maharashtra</option>
                    <option>Madhya Pradesh</option>
                </select>

                <select className='py-3 mt-1'>
                    <option>Select District</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Gujarat</option>
                    <option>Rajasthan</option>
                    <option>UP</option>
                    <option>Maharashtra</option>
                    <option>Madhya Pradesh</option>
                </select>
            </div>

            <div className='name px-2 bg-white mt-4'>
                <div className='h4 m-0 p-0'>Employment Type*</div>
                <select className='py-3 mt-1'>
                    <option>Select Employment Type</option>
                    <option>Saleried</option>
                    <option>Self Employed</option>
                </select>
                </div>

                <div className='name px-2 bg-white mt-4'>
                <div className='h4 m-0 p-0'>Annual Income*</div>
                <input className="w-100 ps-2 py-2 mt-1"type="number"placeholder=" ₹ Enter Your Annual Income"/>
            </div>
             
            <div className='name px-2 bg-white mt-4'>
                <div className='h4 m-0 p-0'>Loan Amount*</div>
                <input className="w-100 ps-2 py-2 mt-1"type="number"placeholder=" minimum Loan Amount is 10000₹"/>
            </div>
            <div className='name px-2 bg-white mt-2'>
                <div className='h4 m-0 p-0'>Loan Types*</div>
                <select className='py-3 mt-1'>
                    <option>Select Loan Type</option>
                    <option>Home Loans</option>
                    <option>Credits Cards</option>
                    <option>Personal Loans</option>
                    <option>Business Loans</option>
                    <option>Two Wheeler Loans</option>
                </select>
                </div>
             <div className='text-center'>
                <button className='btn btn-success px-5 py-3 mb-5 mt-2'>SUBMIT</button>
             </div>
         </div>
        </div>

       
     </div>
    </>
  )
}

export default Loan
