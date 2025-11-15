"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Recycle, Users, ShoppingBag, MessageCircle, BarChart3, BadgeCheck, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Standardized hover classes for main navigation links
  // NOTE: Reduced horizontal padding (px-2) for compactness and set text size (text-sm) for a slightly smaller font.
  const navLinkClasses = "flex items-center space-x-1 text-sm text-foreground hover:bg-orange-600 hover:text-white rounded-full px-2 py-1 h-full transition-all whitespace-nowrap";
  const mobileNavLinkClasses = "flex items-center space-x-2 px-3 py-2 text-foreground hover:bg-orange-600 hover:text-white rounded-full transition-all";

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={goHome}
            className="flex items-center space-x-2 cursor-pointer flex-shrink-0"
          >
            <Recycle className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground whitespace-nowrap">EcoTransform</span>
          </div>

          {/* Desktop Navigation - Menu Links: Ensure items-center and flex-nowrap */}
          <div className="hidden md:flex items-center space-x-2 flex-nowrap overflow-x-auto scrollbar-hide h-full">

            {/* Links use the updated navLinkClasses */}
            <Link to="/sell-waste" className={navLinkClasses}>
              <Recycle className="h-4 w-4" />
              <span>Sell Waste</span>
            </Link>
            <Link to="/artisans" className={navLinkClasses}>
              <Users className="h-4 w-4" />
              <span>Artisans</span>
            </Link>
            <Link to="/marketplace" className={navLinkClasses}>
              <ShoppingBag className="h-4 w-4" />
              <span>Marketplace</span>
            </Link>
            <Link to="/community" className={navLinkClasses}>
              <MessageCircle className="h-4 w-4" />
              <span>Community</span>
            </Link>
            <Link to="/impact" className={navLinkClasses}>
              <BarChart3 className="h-4 w-4" />
              <span>Impact</span>
            </Link>
            <Link to="/nft-certificate" className={navLinkClasses}>
              <BadgeCheck className="h-4 w-4" />
              <span>NFT Certificate</span>
            </Link>

          </div>

          {/* CTA Buttons: Ensure flex-nowrap and items-center for vertical alignment */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0 flex-nowrap">
            {/* Profile Button - Adjusted size to small and removed margin on icon for compact fit */}
            <Link to="/profile" className="flex-shrink-0"> 
              <Button 
                className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-amber-500 hover:to-orange-500 transition-all px-4 py-2 whitespace-nowrap text-sm"
                aria-label="Profile"
              >
                <User className="h-4 w-4 mr-1" /> {/* Reduced mr-2 to mr-1 */}
                Profile
              </Button>
            </Link>
            
            {/* Get Started Button - Adjusted size to small */}
            <Button className="rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors whitespace-nowrap flex-shrink-0 text-sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation remains the same */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              <Link to="/sell-waste" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>
                <Recycle className="h-4 w-4" />
                <span>Sell Waste</span>
              </Link>
              <Link to="/artisans" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>
                <Users className="h-4 w-4" />
                <span>Artisans</span>
              </Link>
              <Link to="/marketplace" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>
                <ShoppingBag className="h-4 w-4" />
                <span>Marketplace</span>
              </Link>
              <Link to="/community" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>
                <MessageCircle className="h-4 w-4" />
                <span>Community</span>
              </Link>
              <Link to="/impact" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>
                <BarChart3 className="h-4 w-4" />
                <span>Impact</span>
              </Link>
              <Link to="/nft-certificate" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>
                <BadgeCheck className="h-4 w-4" />
                <span>NFT Certificate</span>
              </Link>

              <div className="flex flex-col space-y-2 px-3 py-2">
                <Link to="/profile" onClick={() => setIsOpen(false)}>
                  <Button 
                    className="w-full justify-start rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-amber-500 hover:to-orange-500 transition-all px-4 py-2" 
                    size="sm"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>

                <Button 
                  size="sm" 
                  className="w-full rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}