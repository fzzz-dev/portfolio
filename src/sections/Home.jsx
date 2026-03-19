/**
 * sections/Home.jsx
 * Hero section — the first thing visitors see.
 *
 * ✏️ Edit:
 *  - WORDS array        → rotating role titles
 *  - Name heading       → search "YOUR NAME HERE"
 *  - Tagline paragraph  → below the name
 *  - Stats row          → numbers at the bottom
 *  - Profile image      → replace the placeholder <div> with an <img>
 */

import { useState, useEffect } from "react";
import Section from "../components/Section";
import Icon from "../components/Icon";

// ✏️ Edit: role words that cycle in the hero
const WORDS = ["Developer", "Designer", "Creator", "Engineer"];

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % WORDS.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <Section id="home" style={{ display: "flex", alignItems: "center" }}>

      {/* ── Decorative background rings ── */}
      <div
        style={{
          position: "absolute", top: "50%", right: "10%",
          transform: "translateY(-50%)",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100,100,100,0.06) 0%, transparent 70%)",
          border: "1px solid rgba(100,100,100,0.1)",
          pointerEvents: "none",
          animation: "pulse-glow 4s ease-in-out infinite",
        }}
      >
        <div style={{ position: "absolute", inset: 20, borderRadius: "50%", border: "1px solid rgba(80,80,80,0.15)" }}>
          <div style={{ position: "absolute", inset: 30, borderRadius: "50%", border: "1px solid rgba(60,60,60,0.2)" }} />
        </div>
      </div>

      {/* ── Hero text ── */}
      <div style={{ maxWidth: 700, animation: "fade-up 0.8s 0.2s both" }}>

        <div className="section-label">
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--chrome-3)" }}>
            SYS::INIT.PORTFOLIO
          </span>
        </div>

        <div style={{ marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--chrome-3)", letterSpacing: "2px" }}>
            Hello, I am
          </span>
        </div>

        {/* ✏️ Edit: your name */}
        <h1
          className="section-title chrome-text"
          style={{ marginBottom: 8, fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          Abdul Malik
        </h1>

        {/* Role rotator */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, height: 48 }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(16px, 2.5vw, 24px)", fontWeight: 400,
              color: "var(--chrome-2)", letterSpacing: "2px",
            }}
          >
            Full-Stack
          </span>
          <div
            style={{
              padding: "4px 16px",
              background: "rgba(180,180,180,0.08)",
              border: "1px solid rgba(180,180,180,0.2)",
              borderRadius: 4,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: 600,
                color: "var(--accent-bright)", letterSpacing: "2px",
                transition: "all 0.4s ease",
              }}
            >
              {WORDS[wordIdx]}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)", fontSize: "20px",
                color: "var(--chrome-2)",
                animation: "blink 1s step-end infinite",
                marginLeft: 2,
              }}
            >
              |
            </span>
          </div>
        </div>

        {/* ✏️ Edit: your tagline */}
        <p
          style={{
            fontFamily: "var(--font-body)", fontSize: "16px", fontWeight: 300,
            lineHeight: 1.8, color: "var(--text-muted)",
            maxWidth: 520, marginBottom: 40,
          }}
        >
          I build practical AI and web applications by turning ideas into real working products. Passionate about learning, experimenting, 
          and creating solutions that are simple and useful.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <button
            className="btn-chrome"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Icon name="projects" size={14} /> View My Work
          </button>
          <button
            className="btn-chrome"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{ background: "transparent", border: "1px solid rgba(120,120,120,0.4)" }}
          >
            <Icon name="send" size={14} /> Get In Touch
          </button>
        </div>

        {/* ✏️ Edit: your stats */}
        <div
          style={{
            display: "flex", gap: 40,
            marginTop: 56, paddingTop: 32,
            borderTop: "1px solid rgba(80,80,80,0.3)",
          }}
        >
          {[["10+", "Projects"], ["8+", "Technologies"],].map(([n, l]) => (
            <div key={l}>
              <div
                className="chrome-text"
                style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 700 }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)", fontSize: "10px",
                  letterSpacing: "2px", color: "var(--chrome-3)", marginTop: 4,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

    </Section>
  );
}
