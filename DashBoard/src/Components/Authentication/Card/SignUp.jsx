import React from 'react'

function SignUp() {
  return (

    <>

 <div className='text-justify text-center h-screen flex w-65 h-65'>
  <div>
    <h3>Sign Up</h3>
    <p>Create your account today</p>
    <div>
      <label>label</label>
      <input type="text" 
      className='' placeholder='enter the email'
      
      />
    </div>
    <div>
      <label>password</label>
      <input type="pasword" 
      className='' placeholder='enter the ps'

      
      />
    </div>
    <div>
      <input type="checkbox"
       />
       <label for = "remember">remenber for 30 days</label>
    </div>
    <button>forgot password</button>
      </div>
 </div>
  
 </>
  )
}

export default SignUp