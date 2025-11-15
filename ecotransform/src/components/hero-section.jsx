import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Upload, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-12 animate-in slide-in-from-left duration-700">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 backdrop-blur-sm animate-in fade-in duration-1000 delay-200">
                  <Sparkles className="w-4 h-4 text-amber-600 mr-2 animate-pulse" />
                  <span className="text-sm font-medium text-amber-800">
                    Eco-Friendly Innovation
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-[0.9] animate-in slide-in-from-bottom duration-700 delay-300">
                  Transform{" "}
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    Waste
                  </span>{" "}
                  into{" "}
                  <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Wonder
                  </span>
                </h1>

                <p className="text-xl text-amber-800/70 text-pretty max-w-xl leading-relaxed animate-in slide-in-from-bottom duration-700 delay-500">
                  Connect with skilled artisans to turn your waste materials
                  into beautiful, sustainable products. Join our community of
                  creators.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom duration-700 delay-700">
                <Link to="/sell-waste">
                  <Button
                    size="lg"
                    className="text-base px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-0 rounded-full font-medium"
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    Start Selling Waste
                    
                  </Button>
                </Link>

                <Link to="/wallet">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base px-6 py-4 bg-white/40 backdrop-blur-sm border border-amber-200/60 text-amber-800 hover:bg-white/60 transition-all duration-300 transform hover:scale-105 rounded-full font-medium"
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Explore Marketplace
                  </Button>
                </Link>
              </div>

              {/* Showcase Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 animate-in slide-in-from-bottom duration-700 delay-900">
                {/* Earn Waste Tokens */}
                <Link
                  to="/sell-waste"
                  className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm border border-amber-200/50 rounded-2xl shadow-lg hover:scale-105 transform transition-transform duration-300"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    💰
                  </div>
                  <div className="mt-2 text-amber-800 font-medium text-center">
                    AI Waste Evaluator
                  </div>
                </Link>

                {/* NFT Certificates */}
                <Link
                  to="/Tokens"
                  className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm border border-amber-200/50 rounded-2xl shadow-lg hover:scale-105 transform transition-transform duration-300"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    🖼️
                  </div>
                  <div className="mt-2 text-amber-800 font-medium text-center">
                    NFT Certificates
                  </div>
                </Link>

                {/* Marketplace */}
                <Link
                  to="/Marketplace"
                  className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-sm border border-amber-200/50 rounded-2xl shadow-lg hover:scale-105 transform transition-transform duration-300"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    🛒
                  </div>
                  <div className="mt-2 text-amber-800 font-medium text-center">
                    Marketplace
                  </div>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 animate-in slide-in-from-bottom duration-700 delay-1000">
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent transition-transform group-hover:scale-110 duration-300">
                    10K+
                  </div>
                  <div className="text-sm text-amber-700/60 font-medium">
                    Waste Items Sold
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent transition-transform group-hover:scale-110 duration-300">
                    500+
                  </div>
                  <div className="text-sm text-amber-700/60 font-medium">
                    Active Artisans
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent transition-transform group-hover:scale-110 duration-300">
                    2.5M
                  </div>
                  <div className="text-sm text-amber-700/60 font-medium">
                    Kg Waste Diverted
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-in slide-in-from-right duration-700 delay-400">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg"
                  alt="Waste Transformation Hero"
                  className="w-full h-[600px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-orange-900/10" />

                {/* Animated overlay pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-6 shadow-xl animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-amber-800">
                    Live Collaboration
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-6 shadow-xl animate-pulse delay-500">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    ₹2,500
                  </div>
                  <div className="text-amber-700/60 text-sm font-medium">
                    Earned Today
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-4 shadow-lg animate-pulse delay-1000">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
