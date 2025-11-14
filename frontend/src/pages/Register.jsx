// src/pages/Register.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  // State for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    console.log("Register data:", { username, email, password });
    // TODO: Later we will call backend API
    // axios.post("/api/auth/register", { username, email, password })
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6">
      
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4 text-center">
        Create Account
      </h2>
      
      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Username Input Field */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>

        {/* Email Input Field */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Password Input Field */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-sm text-center mt-2">
          Already have an account?{" "}
          <Link 
            to="/login" 
            className="text-red-500 hover:underline"
          >
            Login
          </Link>
        </p>
        
      </form>
    </div>
  );
}