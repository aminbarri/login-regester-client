
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./compenent/Login";
import Register from "./compenent/Register";
import Dashboard from "./compenent/Dashboard";
import ChangePassword from "./compenent/ChangePassword";
import ForgotPassword from "./compenent/ForgotPassword";
import ResetPassword from "./compenent/ResetPassword";

function App() {
  return (
    <Router>
  <div className='min-h-screen  bg-gray-100'>
    {/* Navigation Bar */}
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link
            to="/login"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/change-password"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Change Password
          </Link>
        </li>
       
      </ul>
    </nav>
    <div className="pt-14 min-h-full		 pb-14 flex items-center justify-center">
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/change-password" element={<ChangePassword />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
  </Routes>
</div>

    {/* Routes */}
    
  </div>
</Router>

  );
}

/* Inline styles for the navbar */

export default App;
