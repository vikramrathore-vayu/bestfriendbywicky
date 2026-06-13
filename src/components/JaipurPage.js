"use client";

import { useState } from "react";

export default function JaipurPage({ onNext }) {
  const [checkedMemories, setCheckedMemories] = useState({});

  const memories = [
    { id: "m1", label: "Late night gossips & deep talks 💬" },
    { id: "m2", label: "Stupid arguments over small things 🤪" },
    { id: "m3", label: "Sharing screenshots and secrets 🤫" },
    { id: "m4", label: "Teasing each other till we get angry 😈" }
  ];

  const jaipurPlaces = [
    {
      name: "Hawa Mahal",
      desc: "Chaa ki chuski near the palace ☕",
      emoji: "🏰"
    },
    {
      name: "Jal Mahal",
      desc: "Cool evening walks & endless talks 🌅",
      emoji: "🌊"
    },
    {
      name: "Nahargarh Sunset",
      desc: "Watching the golden hour of pink city 🌇",
      emoji: "⛰️"
    }
  ];

  const toggleMemory = (id) => {
    setCheckedMemories((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="glass-card" style={{ padding: "2.5rem 2rem", maxWidth: "600px", textAlign: "left" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: "700" }}>
          Step 3 of 6: Jaipur Diaries
        </span>
        <span style={{ fontSize: "1.5rem" }}>✈️</span>
      </div>

      <h3 className="text-gradient" style={{ fontSize: "1.8rem", marginBottom: "1rem", textAlign: "center" }}>
        Jaipur Diaries & Vibe Check 🏰
      </h3>
      
      <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", textAlign: "center", marginBottom: "2rem" }}>
        A quick checklist of our best memories and future plans in the Pink City!
      </p>

      {/* Memory Check list */}
      <div style={{ marginBottom: "2rem" }}>
        <h4 style={{ color: "var(--secondary)", fontSize: "1.1rem", marginBottom: "1rem", fontFamily: "var(--font-serif)" }}>
          ✅ Our Vibe Check (Tick the ones you agree with)
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          {memories.map((m) => (
            <label
              key={m.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "1.05rem",
                color: checkedMemories[m.id] ? "#f472b6" : "var(--text-secondary)",
                textDecoration: checkedMemories[m.id] ? "line-through" : "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                userSelect: "none"
              }}
            >
              <input
                type="checkbox"
                checked={!!checkedMemories[m.id]}
                onChange={() => toggleMemory(m.id)}
                style={{
                  width: "18px",
                  height: "18px",
                  accentColor: "var(--primary)",
                  cursor: "pointer"
                }}
              />
              {m.label}
            </label>
          ))}
        </div>
      </div>

      {/* Jaipur Polaroid Grid */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h4 style={{ color: "#ec4899", fontSize: "1.1rem", marginBottom: "1rem", fontFamily: "var(--font-serif)" }}>
          📍 Upcoming Jaipur Roadtrip Wishlist
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {jaipurPlaces.map((place, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "0.8rem 1rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <span style={{ fontSize: "2rem" }}>{place.emoji}</span>
              <div>
                <h5 style={{ color: "#fff", fontWeight: "700", margin: 0 }}>{place.name}</h5>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="btn btn-yes" onClick={onNext} style={{ padding: "0.7rem 1.8rem" }}>
          Read Wicky's Letter ➔
        </button>
      </div>
    </div>
  );
}
