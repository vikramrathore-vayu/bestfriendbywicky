"use client";

import { useState } from "react";

export default function PromisesPage({ onNext }) {
  const [activePromises, setActivePromises] = useState({});

  const promises = [
    { id: 1, text: "Humesha reply time par karna 📱" },
    { id: 2, text: "Ladaai hone par pehle sorry bolna 🥺" },
    { id: 3, text: "Tumhari gossip chup-chap sunna 🤫" },
    { id: 4, text: "Jaipur me Hawa Mahal ke paas treat dena 🏰☕" },
    { id: 5, text: "Faltu jokes par bhi zabardasti hasna 😂" },
    { id: 6, text: "Har situation me best friend bankar rehna 🤝" }
  ];

  const togglePromise = (id) => {
    setActivePromises((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="glass-card" style={{ padding: "2.5rem 2rem", maxWidth: "600px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: "700" }}>
          Step 5 of 6: Promise Wall
        </span>
        <span style={{ fontSize: "1.5rem" }}>🤝</span>
      </div>

      <h3 className="text-gradient" style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
        Wicky's Promise Wall 💖
      </h3>
      
      <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
        Click to lock these promises! I will keep them forever as a token of our friendship.
      </p>

      <div className="promise-grid" style={{ marginBottom: "2.5rem" }}>
        {promises.map((p) => (
          <button
            key={p.id}
            className={`promise-tag ${activePromises[p.id] ? "active" : ""}`}
            onClick={() => togglePromise(p.id)}
            style={{ fontSize: "1rem", padding: "0.75rem 1.4rem" }}
          >
            {activePromises[p.id] ? "🔒 " : ""}
            {p.text}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="btn btn-yes" onClick={onNext} style={{ padding: "0.7rem 1.8rem" }}>
          Finish Journey ➔
        </button>
      </div>
    </div>
  );
}
