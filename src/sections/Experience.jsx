/**
 * sections/Experience.jsx
 * Animated vertical timeline of work history.
 *
 * ✏️ Edit: experience data in src/data/experience.js
 */

import Section from "../components/Section";
import { EXPERIENCE } from "../data/experience";

/* ── Single timeline entry ── */
function TimelineItem({ role, company, period, desc, isLast }) {
  return (
    <div style={{ display: "flex", gap: 24, position: "relative" }}>

      {/* Spine */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 20 }}>
        {/* Pulsing dot */}
        <div
          style={{
            width: 14, height: 14, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--chrome-1), var(--chrome-3))",
            boxShadow: "0 0 12px rgba(200,200,200,0.3)",
            border: "2px solid var(--bg-dark)",
            flexShrink: 0, marginTop: 4,
            animation: "timeline-dot 3s ease-in-out infinite",
          }}
        />
        {/* Connecting line (hidden on last item) */}
        {!isLast && (
          <div
            style={{
              width: 1, flex: 1, minHeight: 40,
              background: "linear-gradient(180deg, var(--chrome-dim), transparent)",
              margin: "6px 0",
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="glass-card hover-lift"
        style={{ padding: "24px 28px", marginBottom: 20, flex: 1, maxWidth: 680 }}
      >
        <div
          style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-start", marginBottom: 8,
            flexWrap: "wrap", gap: 8,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600,
                letterSpacing: "1.5px", color: "var(--chrome-1)", textTransform: "uppercase",
              }}
            >
              {role}
            </h3>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--chrome-2)", fontWeight: 500 }}>
              {company}
            </span>
          </div>

          {/* Period badge */}
          <span
            style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--chrome-3)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(100,100,100,0.2)",
              padding: "4px 12px", borderRadius: 4,
              letterSpacing: "1px", whiteSpace: "nowrap",
            }}
          >
            {period}
          </span>
        </div>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 300, lineHeight: 1.8, color: "var(--text-muted)" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience">
      <div className="section-label"><span>04 // EXPERIENCE</span></div>
      <h2 className="section-title chrome-text" style={{ marginBottom: 48 }}>Work History</h2>

      <div>
        {EXPERIENCE.map((entry, i) => (
          <TimelineItem
            key={entry.role + entry.company}
            {...entry}
            isLast={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
