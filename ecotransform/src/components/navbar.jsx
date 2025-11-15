"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Recycle, Users, ShoppingBag, MessageCircle, BarChart3 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div
            onClick={goHome}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Recycle className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">EcoTransform</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/sell-waste" className="flex items-center space-x-1 text-foreground hover:bg-orange-600 hover:text-white rounded-full px-3 py-1 transition-all">
              <Recycle className="h-4 w-4" />
              <span>Sell Waste</span>
            </Link>

            <Link to="/artisans" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Users className="h-4 w-4" />
              <span>Artisans</span>
            </Link>

            <Link to="/marketplace" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <ShoppingBag className="h-4 w-4" />
              <span>Marketplace</span>
            </Link>

            {/* ✅ Community (Correct Link to CommunityPage.jsx) */}
            <Link to="/community" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>Community</span>
            </Link>

            <Link to="/impact" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <BarChart3 className="h-4 w-4" />
              <span>Impact</span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/tokens">
              <Button className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-amber-500 hover:to-orange-500 transition-all px-4 py-2">
                Tokens
              </Button>
            </Link>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">

              <Link to="/sell-waste" className="flex items-center space-x-2 px-3 py-2 text-foreground hover:bg-orange-600 hover:text-white rounded-full transition-all">
                <Recycle className="h-4 w-4" />
                <span>Sell Waste</span>
              </Link>

              <Link to="/artisans" className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary transition-colors">
                <Users className="h-4 w-4" />
                <span>Artisans</span>
              </Link>

              <Link to="/marketplace" className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary transition-colors">
                <ShoppingBag className="h-4 w-4" />
                <span>Marketplace</span>
              </Link>

              {/* ✅ Mobile Community Link */}
              <Link to="/community" className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>Community</span>
              </Link>

              <Link to="/impact" className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-primary transition-colors">
                <BarChart3 className="h-4 w-4" />
                <span>Impact</span>
              </Link>

              <div className="flex flex-col space-y-2 px-3 py-2">
                <Link to="/tokens">
                  <Button className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-amber-500 hover:to-orange-500 transition-all px-4 py-2" size="sm">
                    Tokens
                  </Button>
                </Link>

                <Button size="sm">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
