 import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

import Main from './Components/MainDash/Main'
import Sidebar from './Components/Siderbar/Sidebar';
 import Layout from './Components/Layouts/Layout';
import SignIn1 from './Components/Authentication/SignIn1';
import SignUp2 from './Components/Authentication/SignUp2';
import Forget from './Components/Authentication/Forget';
import ResetPassword from './Components/Authentication/ResetPassword';
import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Auth from "./Components/Authentication/Auth";
import { ToastContainer } from 'react-toastify';




// import Api from './Components/Api/Api';
// import Fetch from './Components/Api/fetch';


 

function App() {
  // const isAuthenticated = !!localStorage.getItem("token"); // Example authentication check


  

  return (


    <>
    <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Router>
      <nav>
      <Link to="/">Layout</Link>
     <Link to="/signIn1">SignIn1</Link>

</nav>
        <Sidebar />
        <SignIn1/>
           <Routes>
    
    
                {/* <Route path="sign-up" element={<SignUp2 />} /> */}
                <Route path="forget" element={<Forget />} />
         
          <Route path="/Layout" element={<Layout />} />
          <Route path="/sign-in" element={<SignIn1 />} />
          
        
          
         
       
          {/* Protected Routes */}
          {/* <Route element={<Auth isAuthenticated={isAuthenticated} />}> */}
         
            <Route path="/crm" element={<ResetPassword />} />
            <Route path="/" element={<Main />}/>
            
            {/* </Route> */}
        
        </Routes>
      
        
      </Router>

  

    </>
  );
}


export default App;