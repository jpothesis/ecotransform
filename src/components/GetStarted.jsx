import { ArrowRight, Leaf, Users, Zap, Mail, Lock, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/ui/button"; // adjust path if needed

export default function GetStarted() {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
            Start Your Eco Journey
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Join thousands of sustainable contributors transforming waste into wonder
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">

          {/* Left Section */}
          <div>
            {/* Steps */}
            <div className="space-y-4 mb-8">
              {[
                { step: 1, title: "Sign Up", description: "Create your account in seconds" },
                { step: 2, title: "Connect", description: "Link with artisans and the community" },
                { step: 3, title: "Impact", description: "Earn certificates and track your change" }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 
                                  rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg">{item.title}</h3>
                    <p className="text-amber-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sign Up Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Create Your Account</h2>

              <form className="space-y-4">

                <div>
                  <label className="block text-sm font-semibold text-amber-900 mb-2">Full Name</label>
                  <div className="flex items-center border-2 border-amber-200 rounded-lg px-4 py-3">
                    <User className="w-5 h-5 text-amber-600 mr-3" />
                    <input type="text" placeholder="Your name"
                      className="flex-1 outline-none bg-transparent text-amber-900 placeholder-amber-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-amber-900 mb-2">Email Address</label>
                  <div className="flex items-center border-2 border-amber-200 rounded-lg px-4 py-3">
                    <Mail className="w-5 h-5 text-amber-600 mr-3" />
                    <input type="email" placeholder="your@email.com"
                      className="flex-1 outline-none bg-transparent text-amber-900 placeholder-amber-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-amber-900 mb-2">Password</label>
                  <div className="flex items-center border-2 border-amber-200 rounded-lg px-4 py-3">
                    <Lock className="w-5 h-5 text-amber-600 mr-3" />
                    <input type="password" placeholder="Create a strong password"
                      className="flex-1 outline-none bg-transparent text-amber-900 placeholder-amber-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-amber-900 mb-2">Confirm Password</label>
                  <div className="flex items-center border-2 border-amber-200 rounded-lg px-4 py-3">
                    <Lock className="w-5 h-5 text-amber-600 mr-3" />
                    <input type="password" placeholder="Confirm your password"
                      className="flex-1 outline-none bg-transparent text-amber-900 placeholder-amber-400" />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="w-4 h-4 accent-orange-500 cursor-pointer" />
                  <label htmlFor="terms" className="text-sm text-amber-700 cursor-pointer">
                    I agree to the <span className="font-semibold text-amber-900">Terms of Service</span> and
                    <span className="font-semibold text-amber-900"> Privacy Policy</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
                             text-white py-3 text-lg rounded-lg font-bold flex items-center justify-center gap-2">
                  Create Account <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              {/* Login Link */}
              <div className="mt-6 pt-6 border-t border-amber-200">
                <p className="text-center text-amber-700 mb-3">Already a member?</p>
                <Link to="/login">
                  <button className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50 py-3 text-lg rounded-lg font-bold flex items-center justify-center gap-2">
                    <LogIn className="w-5 h-5" /> Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">

            {/* Why Join */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Why Join EcoTransform?</h3>
              <ul className="space-y-4">
                {[
                  "Support skilled artisans and sustainable crafts",
                  "Earn valuable NFT certificates for every contribution",
                  "Track measurable environmental impact in real-time",
                  "Connect with an eco-conscious global community"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-orange-600 text-2xl font-bold mt-1">✓</span>
                    <span className="text-amber-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Stats */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Community Impact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-4xl font-bold">12.4K</p>
                  <p className="text-orange-100">Kg Waste Recycled</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">892</p>
                  <p className="text-orange-100">Artisans Supported</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">4,250</p>
                  <p className="text-orange-100">Active Contributors</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
