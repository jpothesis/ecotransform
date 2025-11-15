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
import SignIn from "./components/SignIn";

// ------------------------------
// ProtectedRoute Component
// ------------------------------
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check if user is logged in
  if (!token) {
    return <Navigate to="/login" />; // redirect to login if not logged in
  }
  return children;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Home Route */}
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

        {/* Authentication Routes */}
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<SignIn />} />

        {/* Other Routes */}
        <Route path="/sell-waste" element={<SellWaste />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/marketplace" element={<MarketPlaceSection />} />
        <Route path="/community" element={<CommunityPage />} />

        {/* New routes */}
        <Route path="/nft-certificate" element={<NftCertificates />} />
        <Route path="/buy_waste" element={<BuyWaste />} />
        <Route path="/cart" element={<Cart />} />

        {/* Protected Profile Route */}
        <Route
          path="/profile-page"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
