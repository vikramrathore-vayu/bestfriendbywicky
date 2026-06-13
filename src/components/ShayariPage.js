"use client";

import { useState } from "react";

const shayaris = [
  {
    hindi: "Dosti koi khoj nahi hoti,\nYe har kisi se roz nahi hoti,\nApni zindagi me hume bojh mat samajhna,\nKyunki dosti hamari kabhi aam nahi hoti. 🌟",
    translation: "Friendship is not something to search, it doesn't happen with everyone daily. Never consider my presence a burden, because our bond is truly special."
  },
  {
    hindi: "Galti hui hai toh saza bhi de do,\nPar is tarah se muh na phero,\nMaan jao ab aur thoda muskura do,\nApne best friend ko dil se dua de do. 🥺",
    translation: "If I made a mistake, punish me, but don't turn away like this. Please smile a little now, and bless your best friend from your heart."
  },
  {
    hindi: "Dil se dil badi mushkil se milte hain,\nTufan me saahil badi mushkil se milte hain,\nMil jaate hain log hazaron duniya me,\nPar tum jaise dost badi mushkil se milte hain. ❤️",
    translation: "Hearts connect with great difficulty, shores are hard to find in storms. Thousands of people can be met, but a friend like you is found once in a lifetime."
  }
];

export default function ShayariPage({ onNext }) {
  const [activeShayari, setActiveShayari] = useState(0);

  const handleNextShayari = () => {
    if (activeShayari < shayaris.length - 1) {
      setActiveShayari(activeShayari + 1);
    } else {
      onNext();
    }
  };

  return (
    <div className="glass-card" style={{ padding: "2.5rem 2rem", maxWidth: "600px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: "700" }}>
          Step 2 of 6: Shayari
        </span>
        <span style={{ fontSize: "1.5rem" }}>📖</span>
      </div>

      <h3 className="text-gradient" style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
        Dosti Ki Pyaari Shayari ✨
      </h3>

      <div
        style={{
          minHeight: "180px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "16px",
          padding: "1.5rem",
          marginBottom: "2rem",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.02)"
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.35rem",
            lineHeight: "1.7",
            fontStyle: "italic",
            whiteSpace: "pre-line",
            color: "#fff",
            marginBottom: "1rem"
          }}
        >
          {shayaris[activeShayari].hindi}
        </p>
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            lineHeight: "1.4",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "0.8rem"
          }}
        >
          {shayaris[activeShayari].translation}
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Pagination Dots */}
        <div style={{ display: "flex", gap: "6px" }}>
          {shayaris.map((_, idx) => (
            <div
              key={idx}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: idx === activeShayari ? "var(--primary)" : "rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease"
              }}
            />
          ))}
        </div>

        <button className="btn btn-yes" onClick={handleNextShayari} style={{ padding: "0.7rem 1.8rem" }}>
          {activeShayari === shayaris.length - 1 ? "Start Journey ➔" : "Agli Shayari ➔"}
        </button>
      </div>
    </div>
  );
}
