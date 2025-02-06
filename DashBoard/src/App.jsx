
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

import Main from './Components/MainDash/Main'
// import Header from './Components/Header/Header'
import Sidebar from './Components/Siderbar/Sidebar';
// import Layout from './Components/Layouts/Layout';
import SignIn1 from './Components/Authentication/SignIn1';
import SignUp2 from './Components/Authentication/SignUp2';
import Forget from './Components/Authentication/Forget';
import ResetPassword from './Components/Authentication/ResetPassword';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


 
function App() {
  return (
  <>
  <Router>
            <Sidebar />
            <Routes>
              <Route path='/home' element={<Main/>} />
              <Route path='/sign-in' element={<SignIn1 />} />
              <Route path='/sign-up' element={<SignUp2 />} />
              <Route path='/forget' element={<Forget />} />
         </Routes>
         <Footer />
         </Router>
    </>  
     
    
  )
}

export default App