import React, { useEffect, useState, useHistory } from 'react'

function SignIn1() {
const[email, setEmail] = useState('')
const[password, setPassword] = useState('')

// const history = useHistory();
useEffect(()=>{
  if(localStorage.getItem('user-info')){
    history.push("/add")
  }
  
},[])

async function SignIn1(){
  console.warn(email, password);
  let items =  {email, password}
 let result = await fetch("https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1",{
  method: "POST",
headers: {
"Content-Type":"application/json",
"Accept":"application/json"
},


body:JSON.stringify(items)



 })

 result = await result.JSON();
 localStorage.setItem( "user-info",JSON.stringify(result))
 history.pushState("/add")
     
      
    }



  return (
    <div className="bg-gray-800  h-screen">
    <div className=" mt-4 flex   items-center justify-center ">
      {/* <div className=' w-12'>
          <img src={logo} /></div> */}
      <div className=" ">
        <p className="items-center flex justify-center font-bold text-xl text-white">
          Sign In
        </p>
        <div className="">
          <p className="ms-30 text-white ">Get access to your account</p>
          <div className="mt-10 text-slate-950  ">
            <button
              type="text"
              readOnly
              placeholder="sign with the google  "
              className=" cursor-pointer h-10 px-53 bg-slate-300 rounded "
            />
          </div>

          <div className="mt-3 text-slate-950  ">
            <button
              type="text"
              readOnly
              placeholder="sign with the facebook  "
              className="h-10 px-53  cursor-pointer
               bg-slate-300 rounded "
            />
          </div>

          <p className="mt-4 justify-center items-center flex text-white ">
            or use Email
          </p>

          <div>
            <label className="text-white">Email address:</label>
            <br />
            <input
              type="email"
              onChange={(e) =>{setEmail(e.target.value)}}
              placeholder="name @example.com"
              className="h-10 px-30  read-only:
               bg-slate-300 rounded "
            />
          </div>
          <div>
            <label className="text-white">Password:</label>
            <br />
            <input
              type="password"
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              placeholder="Password"
              className="h-10 px-30
               bg-slate-300 rounded "
            />
          </div>
          <div className="justify-between flex mt-3">
            <input type="checkbox" className="mt-3" />
            <p className="me-45 mt-3 text-sky-500">Remember me</p>{" "}
            <span className="text-sky-500 mt-3">forgot Password</span>
          </div>
        </div>

        <button className="bg-sky-500 w-100 h-9 rounded"onClick={SignIn1} >Sign In </button>
      </div>
    </div>

    <div className="text-sky-600 ms-150 mt-3 cursor-pointer ">
      Create an Account
    </div>
 
  </div>



  )
}

export default SignIn1