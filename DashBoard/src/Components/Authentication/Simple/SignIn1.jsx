import React from 'react'
import logo from './logo.png'

function SignIn1() {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-700'>
        <div className=' mt-4 flex   items-center justify-center  h-full'>

         {/* <div className=' w-12'>
            <img src={logo} /></div> */}
               <div className=' '>
                <p className='items-center flex justify-center font-bold text-xl text-white'>Sign In</p>
              <div className=''>
                <p className='ms-30 text-white '>Get access to your account</p>
                <div className='mt-10 text-slate-950  '>
                <input type="text" readOnly placeholder='sign with the google  '  className=' cursor-pointer h-10 px-30 bg-slate-300 rounded ' />
                </div>
               
                <div className='mt-3 text-slate-950  '>
                <input type="text" readOnly placeholder='sign with the facebook  ' className='h-10 px-30  cursor-pointer
                 bg-slate-300 rounded bg-amber-400' />
                </div>

                <p className='mt-4 justify-center items-center flex text-white '>or use Email</p>

                <div>
                  <label className='text-white'>Email address:</label>
                  <br />
                  <input type="text" placeholder='name @example.com' className='h-10 px-30  read-only:
                 bg-slate-300 rounded bg-amber-400' />
                </div>
                <div>
                  <label className='text-white'>Password:</label>
                  <br />
                  <input type="text" placeholder='Password' className='h-10 px-30
                 bg-slate-300 rounded bg-amber-400' />
                </div>
                <div className='justify-between flex mt-3'>
                   
            <input type="checkbox"  /><p className='me-45 mt-3 text-sky-500'>Remember me</p>  <span className='text-sky-500 mt-3' >forgot Password</span>
            </div>
              </div>


             

              <button className='bg-sky-500 w-100 h-9 rounded'>Sign In </button>
              </div>
              </div>
              
              
      

           
           <div className='text-sky-600 ms-150 mt-3 cursor-pointer '>Create an Account</div>
        </div>
   
  )
}

export default SignIn1