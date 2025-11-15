import { useState } from "react";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
        setIsLoading(false);
        // Add success/error handling here
    }, 2000);
  };

  return (
    // Added padding bottom to ensure content doesn't stick to the bottom edge
    <div className="min-h-screen py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        
        {/* Main Card with Subtle Transition */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-amber-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-amber-700 text-lg">
              Sign in to continue your sustainability journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-orange-500 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  // Enhanced focus styles for visual feedback
                  className="pl-12 py-3 border-2 border-amber-200 rounded-xl w-full text-amber-900 
                             focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-orange-500 transition-colors" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  // Enhanced focus styles for visual feedback
                  className="pl-12 py-3 border-2 border-amber-200 rounded-xl w-full text-amber-900 
                             focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 
                         hover:from-orange-600 hover:to-orange-700 
                         text-white py-3 rounded-xl font-bold text-lg 
                         shadow-lg shadow-orange-300/50 hover:shadow-xl transition-all duration-300
                         flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-amber-200" />
            <span className="text-amber-600 text-sm font-medium">or continue with</span>
            <div className="flex-1 h-px bg-amber-200" />
          </div>

          {/* Alternative Login */}
          <div className="space-y-3">
            <Button 
                variant="outline" 
                className="w-full border-2 border-amber-200 text-amber-800 hover:bg-amber-50 transition-colors duration-300 rounded-xl py-3"
            >
              Sign in with Google
            </Button>
            <Button 
                variant="outline" 
                className="w-full border-2 border-amber-200 text-amber-800 hover:bg-amber-50 transition-colors duration-300 rounded-xl py-3"
            >
              Sign in with GitHub
            </Button>
          </div>

          {/* Footer */}
          <p className="text-center text-amber-700 mt-8">
            Don't have an account?{" "}
            <Link to="/get-started" className="text-orange-600 font-bold hover:text-orange-700 transition-colors duration-300">
              Sign up here
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}