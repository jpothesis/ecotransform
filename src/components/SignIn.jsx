import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make sure to include `withCredentials: true` to allow session cookie
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      // Backend should return success: true or user info
      if (res.data.success) {
        navigate("/profile-page"); // redirect after successful login
      } else {
        setErrorMsg(res.data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <form onSubmit={handleLogin} className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-amber-900">Sign In</h2>
        {errorMsg && <p className="text-red-600">{errorMsg}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg border-amber-200"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg border-amber-200"
          required
        />
        <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl">
          Login
        </button>
      </form>
    </div>
  );
}
