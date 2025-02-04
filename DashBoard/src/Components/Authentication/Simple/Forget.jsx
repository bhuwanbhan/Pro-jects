import React from 'react'
import logo from './logo.png';

function Forget() {
  return (
    <div className='bg-gray-950 text-white'>
      <div className='flex   items-center  justify-center h-screen '>
      <div className='text-2xl'> Forgot your password?
      <p className='text-xl'>Enter your email below and we will send
      you a reset link</p>
      <input type="text"  placeholder='Email '  className=' cursor-pointer h-10 px-20 bg-gray-700 rounded text-black ' />
      <button className=' m-3 bg-sky-700 rounded w-20 h-10'>Send</button>
      <p className='text-xl ms-40'>Still having problems?</p>
      </div>
     
      </div>
      </div>
    
     
    

  )
}

export default Forget;