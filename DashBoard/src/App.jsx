import Main from "./Components/MainDash/Main";
import Sidebar from "./Components/Siderbar/Sidebar";
import SignIn1 from "./Components/Authentication/SignIn1";
import SignUp2 from "./Components/Authentication/SignUp2";
import Forget from "./Components/Authentication/Forget";
import ResetPassword from "./Components/Authentication/ResetPassword";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Components/Authentication/Auth"; // Import the protected route

function App() {
  const isAuthenticated = !!localStorage.getItem("token"); // Example authentication check

  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/sign-in" element={<SignIn1 />} />
          <Route path="/sign-up" element={<SignUp2 />} />
          <Route path="/forget" element={<Forget />} />
            .
          {/* Protected Routes */}
          <Route element={<Auth isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<Main />} />
            <Route path="/crm" element={<ResetPassword />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;