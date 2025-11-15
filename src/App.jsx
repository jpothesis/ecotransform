import React from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop"; // ✅ ADDED

import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import FeatureSection from "./components/features-section";
import CommunitySection from "./components/community-section";
import Footer from "./components/footer";
import MarketPlaceSection from "./components/marketplace-section";

import SellWaste from "./components/SellWastePage";
import Artisans from "./components/ArtisansPage";
import CommunityPage from "./components/CommunityPage";

import NftCertificates from "./components/NftCertificates";
import ProfilePage from "./components/ProfilePage";

import GetStarted from "./components/GetStarted";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      {/* Scroll to Top on Route Change */}
      <ScrollToTop />   {/* ✅ WORKS GLOBALLY */}

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
        <Route path="/nft-certificate" element={<NftCertificates />} />
        <Route path="/profile-page" element={<ProfilePage />} />

      </Routes>
    </>
  );
}

export default App;
