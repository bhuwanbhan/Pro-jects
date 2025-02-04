
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Main from './Components/MainDash/Main'
import Header from './Components/Header/Header'
import Sidebar from './Components/Siderbar/Sidebar';
import Layout from './Components/Layouts/Layout';
import SignIn1 from './Components/Authentication/Simple/SignIn1';
import SignUp2 from './Components/Authentication/Simple/SignUp2';
import Forget from './Components/Authentication/Simple/Forget';
import ResetPassword from './Components/Authentication/Simple/ResetPassword';
import Footer from './Components/Footer/Footer';
import { Routes, BrowserRouter, Route } from "react-router-dom";

 
function App() {
  return (
  <>


<BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Header />}>
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="main" element={<Main />} />
            <Route path="layout" element={<Layout />} />
            <Route path="footer" element={<Footer />} />
          </Route>
          
          <Route path="signin" element={<SignIn1 />} />
          <Route path="signup" element={<SignUp2 />} />
          <Route path="forget" element={<Forget />} />
          <Route path="resetpassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>













{/* 
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path ="/sidebar" element={<Sidebar/>} />
          <Route path="/signin" element={<SignIn1 />} />
          <Route path="/main " element={<Main />} />
          <Route path="/layout " element={<Layout/>} />
          <Route path="/signUp2" element={<SignUp2 />} />
          <Route path="/forget" element={<Forget/>} />
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/footer" element={<Footer/>}/>
          
          
        </Route>
      </Routes>
    </BrowserRouter> */}






    
</>  
     
    
  )
}

export default App
