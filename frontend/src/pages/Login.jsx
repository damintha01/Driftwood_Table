// src/pages/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    
    console.log("Login data:", { email, password });
    // TODO: Later we will call backend API
    // axios.post("/api/auth/login", { email, password })
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6">
      
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4 text-center">
        Login
      </h2>
      
      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
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
          Login
        </button>

        {/* Registration Link */}
        <p className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <Link 
            to="/register" 
            className="text-red-500 hover:underline"
          >
            Register
          </Link>
        </p>
        
      </form>
    </div>
  );
}