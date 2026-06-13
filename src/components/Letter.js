"use client";

import { useEffect, useRef, useState } from "react";

const letterText = `Pyaari Best Friend,

Sabse pehle, I am really really sorry. Mera wo matlab bilkul nahi tha jo maine kaha, aur mujhe sach me bahut bura laga ki meri baaton se tum hurt hui. 🥺

Humari dosti mere liye sabse pyaari hai. Tumse ladna, tumko pareshaan karna aur fir saath me hansna—ye sab meri life ka best part hai. Jaipur ki palaces ghumne ka humara plan ho ya roz ki faltu baatein, tumhare bina sab boring hai!

Tumse achha aur samajhdaar dost mujhe kabhi nahi mil sakta. Main promise karta hoon ki aage se aisi koi baat nahi bolunga jisse tumhein dukh pahuche. 

Please mujhe maaf kar do aur wapas se pehle jaise bestie ban jao! ❤️

Always your best friend,
Wicky`;

export default function Letter() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < letterText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + letterText[index]);
        setIndex((prev) => prev + 1);
      }, 30); // type speed
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="letter-paper">
      <div style={{ whiteSpace: "pre-line", minHeight: "350px", textAlign: "left" }}>
        {displayedText}
        {index < letterText.length && (
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.2em",
              backgroundColor: "#2c2518",
              marginLeft: "2px",
              animation: "blink-cursor 0.7s infinite alternate",
            }}
          />
        )}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink-cursor {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}} />
    </div>
  );
}
