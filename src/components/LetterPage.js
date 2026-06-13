"use client";

import Letter from "./Letter";

export default function LetterPage({ onNext }) {
  return (
    <div className="glass-card" style={{ padding: "2.5rem 2rem", maxWidth: "600px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: "700" }}>
          Step 4 of 6: Handwritten Letter
        </span>
        <span style={{ fontSize: "1.5rem" }}>📬</span>
      </div>

      <h3 className="text-gradient" style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
        A Letter From Wicky 📝
      </h3>

      <div style={{ marginBottom: "2rem" }}>
        <Letter />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="btn btn-yes" onClick={onNext} style={{ padding: "0.7rem 1.8rem" }}>
          See Promises ➔
        </button>
      </div>
    </div>
  );
}
