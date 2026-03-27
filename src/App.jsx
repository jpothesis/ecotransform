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

// ------------------------------
// ProtectedRoute Component (FIXED)
// ------------------------------
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/get-started" replace />; // ✅ fixed redirect
  }

  return children;
};

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
        <Route path="/buy-waste" element={<BuyWaste />} /> {/* ✅ fixed URL */}
        <Route path="/cart" element={<Cart />} />

        {/* ---------------- PROFILE (FIXED) ---------------- */}
        <Route
          path="/profile"   // ✅ fixed route name
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* ---------------- FALLBACK ---------------- */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;