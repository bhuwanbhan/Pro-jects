
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

  const Routers = [
    { path: "/home",element:<Main/> },
    { path: "/sign-in",element:<SignIn1/> },
    { path: "/sign-up",element:<SignUp2/> },
    { path: "/forget",element:<Forget/> },
    { path: "/crm",element:<ResetPassword/> },
  ]

  return (
  <>
  <Router>
            <Sidebar />
            {Routers.map((item,index)=>(

              <Routes>
              <Route key={index} path={item.path} element={item.element} />
         </Routes>
            ))}
         <Footer />
         </Router>
    </>  
     
    
  )
}

export default App