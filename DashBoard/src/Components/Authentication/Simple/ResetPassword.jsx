import React from 'react'
import logo from './logo.png'

function ResetPassword() {
  return (
    <div className='bg-gray-800 text-white '>
    <div className=' h-screen flex justify-center items-center  '>
      {/* <div className='h-10 w-auto  ms- h-auto'><img src={logo} /> */}
     <div> 
   <p className='ms-30 text-2xl'>Reset new password</p>
    <p className='text-xl ms-30  gap-0'>Type your new password</p>
    <div className='mt-10 text-slate-950 me-30 '>
                <input type="text"  placeholder='type new password'  className=' cursor-pointer h-10 px-30 bg-slate-600 rounded ' />
                </div>
    <div className='mt-3 text-slate-950  '>
                <input type="text"  placeholder='confirm password '  className=' cursor-pointer h-10 px-30 bg-slate-600 rounded ' />
                </div>
     </div>
     
 
       </div>
       </div>
      
     
   
  
   
  )
}

export default ResetPassword