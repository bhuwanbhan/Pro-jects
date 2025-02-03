import React from 'react'
import logo from './logo.png';

function Forget() {
  return (
    <div>
    {/* <div>  <img src= {logo}  className='w-15 ms-30'/><div> */}
     <div className=' h-screen flex items-center justify-center'>
     <div className=' text-2xl font-bold'>
        Forgot your password?</div>
  <br />
        <div>
        Enter your email below and we will send
        you a reset link

        <input type="text" placeholder='Email ' className='h-10' />
        </div>
     </div>
     <div>
   
     </div>
     </div>


  )
}

export default Forget;