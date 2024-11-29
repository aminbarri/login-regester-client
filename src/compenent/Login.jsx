import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/login", {
                email,
                password,
            });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard"); // Navigate without reloading
        } catch (error) {
            alert("Invalid login details");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-md w-full max-w-sm bg-white"
        >
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
                Login
            </button>
            <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Forgot Password?
            </Link>
        </form>
    );
}

export default Login;
