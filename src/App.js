import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import Login from "./compenent/Login";
import Register from "./compenent/Register";
import Dashboard from "./compenent/Dashboard";
import ChangePassword from "./compenent/ChangePassword";
import ForgotPassword from "./compenent/ForgotPassword";
import ResetPassword from "./compenent/ResetPassword";

// Create Auth Context
const AuthContext = createContext();

// Custom hook to use AuthContext
const useAuth = () => useContext(AuthContext);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check token on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          {/* Navigation Bar */}
          <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 justify-center">
              {!isAuthenticated && (
                <>
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
                </>
              )}
              {isAuthenticated && (
                <>
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
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-white hover:text-blue-400 transition duration-300"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Routes */}
          <div className="pt-14 min-h-full pb-14 flex items-center justify-center">
            <Routes>
              <Route
                path="/login"
                element={
                  !isAuthenticated ? <Login /> : <Navigate to="/dashboard" />
                }
              />
              <Route
                path="/register"
                element={
                  !isAuthenticated ? <Register /> : <Navigate to="/dashboard" />
                }
              />
              <Route
                path="/dashboard"
                element={
                  isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/change-password"
                element={
                  isAuthenticated ? (
                    <ChangePassword />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
export { useAuth } 
