/**
 * sections/About.jsx
 */

import Section from "../components/Section";

// ✏️ Updated: your personal details
const INFO_ROWS = [
  { label: "Location",     value: "Tiruppur, Tamil Nadu, India" },
  { label: "Education",    value: "B.Tech AI & Data Science (3rd Year)" },
  { label: "Current Role", value: "Student" },
  { label: "Interests",    value: "AI · Web Development · UI/UX · Fitness" },
  { label: "Languages",    value: "English · Tamil" },
];

export default function About() {
  return (
    <Section
      id="about"
      style={{ background: "linear-gradient(180deg, transparent, rgba(30,30,30,0.3), transparent)" }}
    >
      <div className="section-label"><span>01 // ABOUT</span></div>
      <h2 className="section-title chrome-text" style={{ marginBottom: 48 }}>About Me</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 900 }}>

        {/* ── Bio card ── */}
        <div className="glass-card metal-border hover-lift" style={{ padding: 32 }}>
          <h3
            style={{
              fontFamily: "var(--font-display)", fontSize: "13px",
              letterSpacing: "2px", color: "var(--chrome-2)",
              marginBottom: 20, textTransform: "uppercase",
            }}
          >
            Who I Am
          </h3>

          {/* ✏️ Bio paragraph */}
          <p style={{ fontWeight: 300, lineHeight: 1.9, color: "var(--text-muted)", fontSize: "15px" }}>
            I’m an Artificial Intelligence and Data Science student currently in my third year. I enjoy building practical projects in machine learning and web development, focusing more on implementation and real-world use rather than just theory.
          </p>

          <div className="divider" />

          {/* ✏️ Bio paragraph */}
          <p style={{ fontWeight: 300, lineHeight: 1.9, color: "var(--text-muted)", fontSize: "15px" }}>
            I’m someone who learns by building. From ML-based applications like disease prediction systems to full-stack web apps, I like exploring how ideas turn into working products. Currently, I’m improving my skills in AI, UI/UX, and development with the goal of becoming an AI Engineer.
          </p>
        </div>

        {/* ── Info cards ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {INFO_ROWS.map(({ label, value }) => (
            <div
              key={label}
              className="glass-card hover-lift"
              style={{
                padding: "16px 24px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                borderLeft: "2px solid rgba(150,150,150,0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)", fontSize: "11px",
                  letterSpacing: "1px", color: "var(--chrome-3)", textTransform: "uppercase",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)", fontSize: "13px",
                  color: "var(--text-primary)", textAlign: "right", maxWidth: "55%",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}