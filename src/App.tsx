import './App.css';
import { useState } from "react";
import HeroSection from './components/HeroSection';
import FeaturesSection from "./components/FeaturesSection";
import DemoSection from "./components/DemoSection";
import WhoIsItForSection from "./components/WhoIsItForSection";
import WhatAICanDoSection from "./components/WhatAICanDoSection";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import CompareAgentsSection from "./components/CompareAgentsSection";
import ProvenResultsSection from "./components/ProvenResultsSection";
import DataCollectionVisual from "./components/DataCollectionVisual";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



function App() {
  const [demoMode, setDemoMode] = useState<"chat" | "calling">("chat");
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <HeroSection mode={demoMode} setMode={setDemoMode}/>
        <DemoSection mode={demoMode}/>
        <FeaturesSection />
        <WhoIsItForSection />
        <WhatAICanDoSection/>
        <AnalyticsDashboard />
        <CompareAgentsSection />
        <ProvenResultsSection />
        <DataCollectionVisual/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
