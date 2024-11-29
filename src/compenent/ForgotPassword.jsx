import  { useState } from "react";
import axios from "axios";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/forgot-password", {
                email,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error sending reset link");
        }
    };

    return (
        <form
  onSubmit={handleSubmit}
  className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto"
>
  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
    Forgot Password
  </h2>
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
  />
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
  >
    Send Reset Link
  </button>
  <p className="text-sm text-gray-600 mt-4 text-center">{message}</p>
</form>

    );
}

export default ForgotPassword;
