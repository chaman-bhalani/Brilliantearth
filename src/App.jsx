import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EngagementRings from "./pages/EngagementRings";
import WeddingRings from "./pages/WeddingRings";
import Diamonds from "./pages/Diamonds";
import Gemstone from "./pages/Gemstone";
import Jewellery from "./pages/Jewellery";
import Gift from "./pages/Gift";
import About from "./pages/About";
import ReadyToShip from "./pages/ReadyToShip";
import SignatureCollections from "./pages/SignatureCollections";
import TopTwentyEngagementRings from "./pages/TopTwentyEngagementRings";
import CustomEngagementRing from "./pages/CustomEngagementRing";
import WeveGotYouCovered from "./pages/WeveGotYouCovered";
import DiamondInnovation from "./pages/DiamondInnovation";
import RecycledGold from "./pages/RecycledGold";
import WomensWeddingBandStyleGuide from "./pages/WemensWeddingBandStyleGuide";
import Engraving from "./pages/Engraving";
import WeddingRingTrends from "./pages/WeddingRingTrends";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/engagement-rings" element={<EngagementRings />} />
        <Route path="/ready-to-ship" element={<ReadyToShip />} />
        <Route
          path="/signature-collection"
          element={<SignatureCollections />}
        />
        <Route path="/top-20" element={<TopTwentyEngagementRings />} />
        <Route
          path="/custom-engagement-rings"
          element={<CustomEngagementRing />}
        />
        <Route path="/weve-got-you-covered" element={<WeveGotYouCovered />} />

        <Route path="/diamond-innovation" element={<DiamondInnovation />} />
        <Route path="/recycled-gold" element={<RecycledGold />} />
        <Route
          path="/womens-weddingband-style-guide"
          element={<WomensWeddingBandStyleGuide />}
        />
        <Route path="/ring-engraving-giude" element={<Engraving />} />
        <Route
          path="/2025-wedding-ring-trends"
          element={<WeddingRingTrends />}
        />

        <Route path="/wedding-rings" element={<WeddingRings />} />
        <Route path="/diamonds" element={<Diamonds />} />
        <Route path="/gemstones" element={<Gemstone />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
