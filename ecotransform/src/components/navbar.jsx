"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Recycle, Users, ShoppingBag, MessageCircle, BarChart3, BadgeCheck, User, ArrowBigDown, ArrowBigDownIcon, ArrowBigLeft } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinkClasses =
    "flex items-center space-x-1 text-foreground hover:bg-orange-600 hover:text-white rounded-full px-3 py-1 transition-all whitespace-nowrap";

  const mobileNavLinkClasses =
    "flex items-center space-x-2 px-3 py-2 text-foreground hover:bg-orange-600 hover:text-white rounded-full transition-all";

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

{/* Logo */}
<div
  onClick={goHome}
  className="flex items-center space-x-2 cursor-pointer -ml-12"
>
  <Recycle className="h-8 w-8 text-primary" />
  <span className="text-xl font-bold text-foreground whitespace-nowrap">EcoTransform</span>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 flex-nowrap overflow-x-auto scrollbar-hide">
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

            <Link to="/buy_waste" className={navLinkClasses}>
              <ArrowBigDown className="h-4 w-4" />
              <span>Buy Waste</span>
            </Link> 
            <Link to="/nft-certificate" className={navLinkClasses}>
               <BadgeCheck className="h-4 w-4" />
               <span>NFT Certificate</span>


            </Link> 
            
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0 flex-nowrap">

            {/* UPDATED: ProfilePage link */}
            <Link to="/profile-page" className="flex-shrink-0">
              <Button
                className="flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-amber-500 hover:to-orange-500 transition-all px-4 py-2 whitespace-nowrap"
                aria-label="Profile"
              >
                <User className="h-4 w-4 mr-2" />
                <span>Profile</span>
              </Button>
            </Link>

            <Button className="rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors whitespace-nowrap flex-shrink-0">
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

        {/* Mobile Menu */}
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


              <Link to="/nft-certificate" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>
                <BadgeCheck className="h-4 w-4" />
                <span>NFT Certificate</span>
              </Link>

              {/* UPDATED: ProfilePage link in mobile */}
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Link to="/profile-page" onClick={() => setIsOpen(false)}>
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
