import React, { useEffect, useState, useHistory } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import AuthUser from './AuthUser';
import { toast } from "react-toastify";



function SignIn1() {

  const {http,setToken} = AuthUser();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

    const submitForm = () =>{
    

      http.post('',{email:email,password:password})
      .then((res)=>{

          setToken(res.data.data.user_role,res.data.data.access_token
          );
        
      })

      if(email=='' || email== null || password == '' || email == '' ){
        alert("please enter the cre")
      
      }
      
}
    
    

// toast("please enter the creditials");
  
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
              className="h-10 px-30  
               bg-slate-300 rounded "
            />
          </div>
          <div>
            <label className="text-white">Password:</label>
            <br />
            <input
              type="password"
              onChange={(e)=>{
                setPassword(e.target.value)}}
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

        <button className="bg-sky-500 w-100 h-9 rounded" onClick={submitForm} >Sign In </button>
      </div>
    </div>

    <div className="text-sky-600 ms-150 mt-3 cursor-pointer ">
      Create an Account
    </div>
 
  </div>
)
}

export default SignIn1