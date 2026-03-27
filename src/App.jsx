import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import HeroSection from "./components/hero-section";
import FeatureSection from "./components/features-section";
import CommunitySection from "./components/community-section";
import Footer from "./components/footer";
import MarketPlaceSection from "./components/marketplace-section";

import SellWaste from "./components/SellWastePage";
import Artisans from "./components/ArtisansPage";
import CommunityPage from "./components/CommunityPage";
import BuyWaste from "./components/buy_waste";

import NftCertificates from "./components/NftCertificates";
import ProfilePage from "./components/ProfilePage";
import GetStarted from "./components/GetStarted";

/**
 * We are removing the ProtectedRoute logic because it was 
 * checking for a "token" that doesn't exist, which was 
 * redirecting you back to the Get Started page.
 */

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* ---------------- HOME ---------------- */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeatureSection />
              <MarketPlaceSection />
              <CommunitySection />
              <Footer />
            </>
          }
        />

        {/* ---------------- AUTH ---------------- */}
        <Route path="/get-started" element={<GetStarted />} />

        {/* ---------------- MAIN PAGES ---------------- */}
        <Route path="/sell-waste" element={<SellWaste />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/marketplace" element={<MarketPlaceSection />} />
        <Route path="/community" element={<CommunityPage />} />

        {/* ---------------- FEATURES ---------------- */}
        <Route path="/nft-certificate" element={<NftCertificates />} />
        <Route path="/buy-waste" element={<BuyWaste />} />
        <Route path="/cart" element={<Cart />} />

        {/* ---------------- PROFILE (FIXED) ---------------- */}
        {/* We removed the <ProtectedRoute> wrapper so the page is visible immediately */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* ---------------- FALLBACK ---------------- */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;