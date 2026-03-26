"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import PortfolioGrid from "./PortfolioGrid";
import ContactSection from "./ContactSection";
import WelcomeAnimation from "./WelcomeAnimation";
import MouseAnimation from "./MouseAnimation";

export default function LandingPage() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowMainContent(true);
  };

  return (
    <div className="relative">
      {!showMainContent && (
        <WelcomeAnimation onAnimationComplete={handleAnimationComplete} />
      )}

      {showMainContent && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Navbar />
          <PortfolioGrid />
          <ContactSection />
          <MouseAnimation />
        </motion.div>
      )}
    </div>
  );
}
