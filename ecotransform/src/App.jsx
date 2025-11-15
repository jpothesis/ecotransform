import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/hero-section";
import FeatureSection from "./components/features-section";
import CommunitySection from "./components/community-section";
import ImpactSection from "./components/impact-section";
import Footer from "./components/footer";
import MarketPlaceSection from "./components/marketplace-section";

import SellWaste from "./components/SellWastePage";
import Artisans from "./components/ArtisansPage";
import CommunityPage from "./components/CommunityPage";
import BuyWaste from "./components/buy_waste";

<Route path="/buy_waste" element={<BuyWaste />} />



// Newly added pages

import NftCertificates from "./components/NftCertificates";

// ✅ Import ProfilePage
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
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
              <ImpactSection />
              <Footer />
            </>
          }
        />

        {/* Existing Routes */}
        <Route path="/sell-waste" element={<SellWaste />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/marketplace" element={<MarketPlaceSection />} />
        <Route path="/community" element={<CommunityPage />} />

        {/* Newly Added */}
        
        <Route path="/nft-certificate" element={<NftCertificates />} />
        
        <Route path="/buy_waste" element={<BuyWaste />} />    

        {/* ✅ Profile Page Route */}
        <Route path="/profile-page" element={<ProfilePage />} />

      </Routes>
    </>
  );
}

export default App;
