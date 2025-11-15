import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/hero-section";
import FeatureSection from "./components/features-section";
import CommunitySection from "./components/community-section";
import ImpactSection from "./components/impact-section";
import Footer from "./components/footer";
import MarketPlaceSection from "./components/marketplace-section";

import TokensPage from "./components/TokensPage";
import SellWaste from "./components/SellWastePage";
import Artisans from "./components/ArtisansPage";
import CommunityPage from "./components/CommunityPage";

// ✅ Newly added pages
import ImpactPage from "./components/ImpactPage";
import NftCertificates from "./components/NftCertificates";

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
        <Route path="/tokens" element={<TokensPage />} />
        <Route path="/sell-waste" element={<SellWaste />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/marketplace" element={<MarketPlaceSection />} />
        <Route path="/community" element={<CommunityPage />} />

        {/* ✅ Newly Added */}
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/nft-certificate" element={<NftCertificates />} /> {/* Path matches Navbar link */}

      </Routes>
    </>
  );
}

export default App;
