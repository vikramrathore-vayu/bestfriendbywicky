"use client";

import { useEffect, useState } from "react";

const quotes = [
  {
    text: "Dosti ki hai, nibhani toh padegi. Agar thodi galti ho gayi hai, toh maaf toh karni padegi! 🥺 Sorry na!",
    author: "Your Best Friend",
  },
  {
    text: "A true friend is someone who reaches for your hand and touches your heart. You are my true friend. ❤️",
    author: "Wicky",
  },
  {
    text: "Ek sachha dost hamari chup rehne ki wajah ko samajh leta hai. Mujhe pta hai tum gussa ho, par ab maan bhi jao! ✨",
    author: "Bestie Bond",
  },
  {
    text: "Sometimes, I make mistakes. But my friendship with you is the truest thing in my life. Let's make things right. 🤝",
    author: "Wicky",
  },
  {
    text: "Jaipur ki hawa, aur tumhari dosti dono hi lajawab hain! Palaces se sundar humari yaari hai. 🏰💖",
    author: "Wicky",
  },
  {
    text: "Best friends don't let each other stay angry for long. Maaf kar do ab, chalo aage badhte hain! 😉",
    author: "Friendship Rules",
  }
];

export default function QuotesCarousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFade(true);
      }, 500); // match transition time
    }, 6000); // change quote every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const nextQuote = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setFade(true);
    }, 500);
  };

  const prevQuote = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
      setFade(true);
    }, 500);
  };

  return (
    <div className="quotes-card" style={{ position: "relative" }}>
      <div
        style={{
          transition: "opacity 0.5s ease, transform 0.5s ease",
          opacity: fade ? 1 : 0,
          transform: fade ? "translateY(0)" : "translateY(10px)",
        }}
      >
        <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>💬</span>
        <p className="quote-text">"{quotes[index].text}"</p>
        <p className="quote-author">— {quotes[index].author}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginTop: "1.5rem",
          zIndex: 10,
        }}
      >
        <button
          onClick={prevQuote}
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            border: "none",
            color: "white",
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.3)")}
          onMouseLeave={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.15)")}
        >
          ‹
        </button>
        <button
          onClick={nextQuote}
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            border: "none",
            color: "white",
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.3)")}
          onMouseLeave={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.15)")}
        >
          ›
        </button>
      </div>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "1rem" }}>
        {quotes.map((_, i) => (
          <div
            key={i}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: i === index ? "var(--primary)" : "rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
