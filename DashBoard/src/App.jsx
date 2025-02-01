import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



import './App.css'
import Main from './Components/MainDash/Main'
import Header from './Components/Header/Header'
import Sidebar from './Components/Siderbar/Sidebar';
import Layout from './Components/Layouts/Layout';
import SignIn from './Components/Authentication/Card/SignIn';
import SignUp from './Components/Authentication/Card/SignUp';


function App() {
  

  return (
  <>
    {/* <Header/>
    <Sidebar/>
     <Main/>
     <Layout/>
     */}
    

{/* <SignIn/> */}
        
<div className='flex w-full h-screen'>
    <div className='w-full flex items-centre justify-center lg:w-1/2 '>
<SignUp/>
</div>

<div className='hidden lg:flex h-full justify-center items-center w-1/2 bg-gray-700'>
 <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 rounded-full'>
  

</div>
</div>
</div>





     

  
</>  
     
    
  )
}

export default App
