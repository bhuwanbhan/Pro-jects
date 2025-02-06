
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

import Main from './Components/MainDash/Main'
// import Header from './Components/Header/Header'
import Sidebar from './Components/Siderbar/Sidebar';
// import Layout from './Components/Layouts/Layout';
import SignIn1 from './Components/Authentication/Simple/SignIn1';
import SignUp2 from './Components/Authentication/Simple/SignUp2';
import Forget from './Components/Authentication/Simple/Forget';
import ResetPassword from './Components/Authentication/Simple/ResetPassword';
import Footer from './Components/Footer/Footer';


 
function App() {
  return (
  <>

            <Sidebar />
       {/* <Header /> */}
            {/* <Layout/> */}
         
      
           <Main />
          <SignIn1 />
        <SignUp2 />
         <Forget />
         <ResetPassword />
         <Footer />
         
    </>  
     
    
  )
}

export default App
