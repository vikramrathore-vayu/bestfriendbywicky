"use client";

import { useEffect } from "react";

export default function ThankYouPage() {
  
  // Continuous heart generator on mount
  useEffect(() => {
    const interval = setInterval(() => {
      createHeartParticle(
        Math.random() * window.innerWidth,
        window.innerHeight + 50
      );
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const createHeartParticle = (x, y) => {
    if (typeof document === "undefined") return;
    
    const heart = document.createElement("div");
    heart.className = "floating-particle";
    const items = ["❤️", "💖", "✨", "🌸", "💕"];
    heart.innerText = items[Math.floor(Math.random() * items.length)];
    
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    
    const size = 15 + Math.random() * 25;
    heart.style.fontSize = `${size}px`;
    
    const duration = 2.5 + Math.random() * 2.5;
    heart.style.animationDuration = `${duration}s`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  };

  const handleScreenClick = (e) => {
    createHeartParticle(e.clientX, e.clientY);
  };

  return (
    <div 
      className="glass-card" 
      onClick={handleScreenClick}
      style={{ 
        padding: "3.5rem 2rem", 
        maxWidth: "600px", 
        cursor: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='font-size:16px'><text y='16'>💖</text></svg>\"), auto"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: "700" }}>
          Step 6 of 6: Celebration
        </span>
        <span style={{ fontSize: "1.5rem" }}>🎉</span>
      </div>

      <div style={{ fontSize: "5rem", marginBottom: "1.5rem", animation: "wobble 2s infinite" }}>
        🏆💝
      </div>

      <h2 className="text-gradient" style={{ fontSize: "2.8rem", marginBottom: "1.5rem", fontWeight: "800" }}>
        Thank You, Bestie!
      </h2>

      <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "2rem" }}>
        Maaf karne ke liye aur meri baaton ko samajhne ke liye bahut bahut thank you. 
        <br />
        <strong style={{ color: "var(--secondary)" }}>You are the best friend ever!</strong>
      </p>

      <div 
        style={{ 
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          padding: "1.5rem",
          display: "inline-block",
          margin: "0 auto 1rem auto"
        }}
      >
        <p style={{ fontStyle: "italic", fontSize: "1rem", color: "var(--text-muted)", margin: 0 }}>
          "Dosti me no sorry, no thank you bolte hain...\nPar jab dil se sorry aur thank you nikle,\ntoh dosti aur gehri ho jaati hai." ✨
        </p>
      </div>

      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "2rem" }}>
        Tap anywhere on the screen to shower more hearts! 💖
      </p>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-5deg) scale(1.05); }
          75% { transform: rotate(5deg) scale(1.05); }
        }
      `}} />
    </div>
  );
}
