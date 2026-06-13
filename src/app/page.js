"use client";

import { useEffect, useState } from "react";
import ApologyCard from "@/components/ApologyCard";
import ShayariPage from "@/components/ShayariPage";
import JaipurPage from "@/components/JaipurPage";
import LetterPage from "@/components/LetterPage";
import PromisesPage from "@/components/PromisesPage";
import ThankYouPage from "@/components/ThankYouPage";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [step, setStep] = useState(1);
  const [mounted, setMounted] = useState(false);

  // Ensure client-side only rendering to avoid server/client hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <main 
      className="app-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "1rem"
      }}
    >
      {/* Background low-opacity Jaipur Palace illustration */}
      <img
        src="/images/jaipur_bg.png"
        className="jaipur-bg"
        alt="Jaipur Palace Backdrop"
      />
      <div className="bg-overlay"></div>

      {/* Floating Ambient Music Trigger */}
      <MusicPlayer />

      {/* Header Brand */}
      <header style={{ marginBottom: "2rem", zIndex: 10, textAlign: "center" }}>
        <h1 
          className="text-gradient" 
          style={{ 
            fontSize: "2.8rem", 
            fontWeight: "800",
            letterSpacing: "1.5px",
            fontFamily: "var(--font-serif)",
            margin: 0
          }}
        >
          Best Friend By Wicky
        </h1>
        <p 
          style={{ 
            color: "var(--text-muted)", 
            fontSize: "0.9rem", 
            letterSpacing: "3px", 
            textTransform: "uppercase",
            marginTop: "0.2rem",
            marginBottom: 0
          }}
        >
          An Unbreakable Bond
        </p>
      </header>

      {/* Step Render Selector */}
      <div style={{ zIndex: 10, width: "100%", display: "flex", justifyContent: "center" }}>
        {step === 1 && <ApologyCard onAccept={handleNextStep} />}
        {step === 2 && <ShayariPage onNext={handleNextStep} />}
        {step === 3 && <JaipurPage onNext={handleNextStep} />}
        {step === 4 && <LetterPage onNext={handleNextStep} />}
        {step === 5 && <PromisesPage onNext={handleNextStep} />}
        {step === 6 && <ThankYouPage />}
      </div>

      {/* Elegant Footer */}
      <footer 
        style={{ 
          marginTop: "3rem", 
          zIndex: 10, 
          textAlign: "center", 
          fontSize: "0.85rem", 
          color: "var(--text-muted)" 
        }}
      >
        Made with ❤️ by Wicky | Jaipur Diaries 🕌
      </footer>
    </main>
  );
}
