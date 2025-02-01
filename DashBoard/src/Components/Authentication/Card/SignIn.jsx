import React from 'react'
import logo from './logo.jpg'


function SignIn() {
  return (
 

      <div className='  fixed w-full h-full bg-gray-950 text-white '>

    

      <div className='ms-150'>
          <img src={logo} alt="" className='w-15 mt-3 ' />
            <h4 className='mt-3'>Sign In</h4>
           

      </div>
      <div className='ms-135    '>
      <p className=''>Get access to your account</p>
      <input type="text" placeholder='sign in with the google' className='  space-y-10 rounded border gap-4 
      ms-120 text-xl fill-gray-600 h-8 w-70 shadow '/>
     <br />
      <input type="text" placeholder='sign in with the facebook' className='border ms-120 text-xl fill-gray-600 h-8 w-70 shadow '/>

      <p className=''>Or use a Email</p>
      <p className=''>Email address</p>
      <input type="text" placeholder='sign in with the google' className='  space-y-10 rounded border gap-4 
      ms-120 text-xl fill-gray-600 h-8 w-70 shadow '/>
      <p>Password</p>
      <input type="text" placeholder='sign in with the google' className='  space-y-10 rounded border gap-4 
      ms-120 text-xl h-8 w-70 shadow-amber-800 '/>
      </div>
      </div>
  )
    
}

export default SignIn