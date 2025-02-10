import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Main from './Components/MainDash/Main';
import Sidebar from './Components/Siderbar/Sidebar';
import SignIn1 from './Components/Authentication/SignIn1';
import SignUp2 from './Components/Authentication/SignUp2';
import Forget from './Components/Authentication/Forget';
import ResetPassword from './Components/Authentication/ResetPassword';
import Footer from './Components/Footer/Footer';

import AuthUser from './Components/Authentication/AuthUser';

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const { getToken } = AuthUser();
  return getToken() ? element : <Navigate to="/sign-in" replace />;
};

function App() {
  const { getToken } = AuthUser();
  const isAuthenticated = !!getToken(); // Check if user is authenticated

  return (
    <Router>
      {/* Only show Sidebar if authenticated */}
      {isAuthenticated && <Sidebar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/sign-in" element={<SignIn1 />} />
        <Route path="/sign-up" element={<SignUp2 />} />
        <Route path="/forget" element={<Forget />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute element={<Main />} />} />
        <Route path="/crm" element={<ProtectedRoute element={<ResetPassword />} />} />

        {/* Catch-all Route */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/sign-in"} replace />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
