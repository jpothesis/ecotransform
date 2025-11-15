import React from "react";
import { Recycle, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";


export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">EcoTransform</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transforming waste into wonder through community collaboration and sustainable innovation.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sell" className="text-muted-foreground hover:text-primary transition-colors">
                  Sell Waste
                </a>
              </li>
              <li>
                <a href="#artisans" className="text-muted-foreground hover:text-primary transition-colors">
                  Find Artisans
                </a>
              </li>
              <li>
                <a href="#marketplace" className="text-muted-foreground hover:text-primary transition-colors">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#impact" className="text-muted-foreground hover:text-primary transition-colors">
                  Impact Tracker
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

{/* Newsletter */}
<div className="space-y-4">
  <h3 className="font-semibold">Stay Updated</h3>
  <p className="text-sm text-muted-foreground">Get the latest sustainability tips and platform updates.</p>
  <div className="flex space-x-2">
    <input
      type="email"
      placeholder="Enter your email"
      className="border rounded px-3 py-2 w-full text-sm"
    />
    <button className="px-4 py-2 bg-primary text-white rounded">Subscribe</button>
  </div>
  <div className="space-y-2 text-xs text-muted-foreground">
    <div className="flex items-center space-x-2">
      <Mail className="h-3 w-3" />
      <span>hello@ecotransform.com</span>
    </div>
    <div className="flex items-center space-x-2">
      <Phone className="h-3 w-3" />
      <span>+91 98765 43210</span>
    </div>
    <div className="flex items-center space-x-2">
      <MapPin className="h-3 w-3" />
      <span>Mumbai, India</span>
    </div>
  </div>
</div>

        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 EcoTransform. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-muted-foreground">Made with</span>
            <Recycle className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">for a sustainable future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
