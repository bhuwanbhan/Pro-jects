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

import SignIn1 from './Components/Authentication/Simple/SignIn1';
import SignUp2 from './Components/Authentication/Simple/SignUp2';
import Forget from './Components/Authentication/Simple/Forget';


function App() {
  

  return (
  <>
    {/* <Header/>
    <Sidebar/>
     <Main/>
     <Layout/>
     */}
    

{/* <SignIn/>
         */}

{/* <SignIn1/> */}

{/* <SignUp2/> */}


<Forget/>


     

  
</>  
     
    
  )
}

export default App
