"use client";

import { useState } from "react";

export default function ApologyCard({ onAccept }) {
  const [noButtons, setNoButtons] = useState([
    { id: 1, x: null, y: null, text: "Nahi 😢" }
  ]);

  const noTexts = [
    "Nahi 😢",
    "Ek baar aur soch lo 🤔",
    "Are click nahi hoga! 😜",
    "Galat button dabaya ❌",
    "Nahi bol sakte 🤐",
    "Try again! 😂",
    "Wicky is sorry, please! 🙏",
    "Haan wala button daba do! 👉",
    "Koshish bekaar hai! 😎",
    "No way! 🙅‍♀️",
    "Bilkul nahi! 😤",
    "Soch lo fir se! 👀"
  ];

  const getRandomCoordinates = () => {
    if (typeof window !== "undefined") {
      const padding = 60;
      const maxX = window.innerWidth - 160;
      const maxY = window.innerHeight - 60;
      const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
      const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
      return { x: randomX, y: randomY };
    }
    return { x: 100, y: 100 };
  };

  const handleInteraction = (id) => {
    // 1. Move the hovered button
    const coords = getRandomCoordinates();
    const newText = noTexts[Math.floor(Math.random() * noTexts.length)];

    setNoButtons((prevButtons) => {
      let updated = prevButtons.map((btn) => {
        if (btn.id === id) {
          return { ...btn, x: coords.x, y: coords.y, text: newText };
        }
        return btn;
      });

      // 2. Spawn a new button if total is less than 50
      if (updated.length < 50) {
        const spawnCoords = getRandomCoordinates();
        const spawnText = noTexts[Math.floor(Math.random() * noTexts.length)];
        updated.push({
          id: Date.now() + Math.random(),
          x: spawnCoords.x,
          y: spawnCoords.y,
          text: spawnText
        });
      }

      return updated;
    });
  };

  return (
    <div className="glass-card" style={{ padding: "3rem 2rem" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1.5rem", animation: "pulse 2s infinite" }}>
        🥺
      </div>
      
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: "700" }}>
        Mujhe maaf kar diya kya?
      </h2>
      
      <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
        I know I was wrong, and I'm really sorry. Please click "Yes" to forgive me.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          minHeight: "80px",
          position: "relative"
        }}
      >
        <button className="btn btn-yes" onClick={onAccept} style={{ zIndex: 10 }}>
          Yes, Maaf Kiya! ❤️
        </button>

        {noButtons.map((btn) => {
          const isInline = btn.x === null;
          const buttonStyle = isInline
            ? {}
            : {
                position: "fixed",
                left: `${btn.x}px`,
                top: `${btn.y}px`,
                zIndex: 9999,
                transition: "all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.2)"
              };

          return (
            <button
              key={btn.id}
              className="btn btn-no"
              style={buttonStyle}
              onMouseEnter={() => handleInteraction(btn.id)}
              onTouchStart={(e) => {
                e.preventDefault(); // Stop mobile double taps and zoom
                handleInteraction(btn.id);
              }}
              onFocus={() => handleInteraction(btn.id)}
              onClick={(e) => {
                e.preventDefault();
                handleInteraction(btn.id); // Fail-safe
              }}
            >
              {btn.text}
            </button>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); filter: drop-shadow(0 0 10px rgba(217, 70, 239, 0.6)); }
          100% { transform: scale(1); }
        }
      `}} />
    </div>
  );
}
