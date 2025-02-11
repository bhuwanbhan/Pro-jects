import React from "react";

function SignUp2() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700">
      <div className=" mt-4 flex   items-center justify-center  h-full">
        {/* <div className=' w-12'>
                <img src={logo} /></div> */}
        <div className=" ">
          <p className="items-center flex justify-center font-bold text-xl text-white">
            Sign Up
          </p>
          <div className="">
            <p className="ms-30 text-white ">create the account today</p>
            <div className="mt-10 text-slate-950  ">
              <button
                type="text"
                readOnly
                placeholder="sign with the google  "
                className=" cursor-pointer h-10 px-50 bg-slate-300 rounded "
              />
            </div>

            <div className="mt-3 text-slate-950  ">
              <button
              
           
                placeholder="sign with the facebook"
                className="h-10 px-50   cursor-pointer
                     bg-slate-300 rounded">
                     </button>

              
            </div>

            <p className="mt-4 justify-center items-center flex text-white ">
              or use Email
            </p>

            <div>
              <label className="text-white">Name:</label>
              <br />
              <input
                type="text"
                placeholdece="Name"
                className="h-10 px-30  read-only:
                     bg-slate-300 rounded "
              />
            </div>
            <div>
              <label className="text-white">Email Address:</label>
              <br />
              <input
                type="text"
                placeholder="name@ gmail.com"
                className="h-10 px-30
                     bg-slate-300 rounded"
              />
            </div>

            <label className="text-white">Password:</label>
            <br />

            <input
              type="text"
              placeholder="Password"
              className="h-10  px-30
                     bg-slate-300 rounded "
            />

            <div>
              <label className="text-white ">Confirm Password:</label>
              <br />

              <input
                type="text"
                placeholder="Confirm Password"
                className="h-10 px-30
                     bg-slate-300 rounded"
              />
            </div>

            <div className="justify-between flex mt-3">
              <input type="checkbox" className="" />{" "}
              <span className="text-white me-38">
                I accept the terms and privacy policy
              </span>
            </div>
          </div>

          <button className="bg-sky-500 w-100 h-9 rounded mt-3">
            Sign In{" "}
          </button>
        </div>
      </div>

      <div className="text-sky-600 ms-150 mt-2 cursor-pointer ">
        Sign in to an existing account
      </div>
    </div>
  );
}

export default SignUp2;
