/**
 * sections/Skills.jsx
 * Two-column skill bar cards + grouped tech chip rows.
 *
 * ✏️ Edit skills in src/data/skills.js
 */

import Section from "../components/Section";
import {
  SKILL_BARS_PRIMARY,
  SKILL_BARS_SECONDARY,
  SKILL_CATEGORIES,
} from "../data/skills";

/* ── Skill bar component ── */
function SkillBar({ name, level }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--text-primary)",
            fontWeight: 500,
          }}
        >
          {name}
        </span>

        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--chrome-3)",
          }}
        >
          {level}%
        </span>
      </div>

      <div
        style={{
          height: 4,
          background: "rgba(80,80,80,0.3)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${level}%`,
            background:
              "linear-gradient(90deg, var(--chrome-3), var(--chrome-1))",
            borderRadius: 2,
            boxShadow: "0 0 8px rgba(200,200,200,0.3)",
          }}
        />
      </div>
    </div>
  );
}

/* ── Skill chip component ── */
function SkillChip({ name }) {
  return (
    <div
      style={{
        padding: "8px 16px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(100,100,100,0.2)",
        borderRadius: 6,
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: "0.5px",
        color: "var(--chrome-2)",
        cursor: "default",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.07)";
        e.currentTarget.style.borderColor = "rgba(180,180,180,0.3)";
        e.currentTarget.style.color = "var(--accent-bright)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        e.currentTarget.style.borderColor = "rgba(100,100,100,0.2)";
        e.currentTarget.style.color = "var(--chrome-2)";
      }}
    >
      {name}
    </div>
  );
}

/* ── Main Skills Section ── */
export default function Skills() {
  return (
    <Section id="skills">
      <div className="section-label">
        <span>02 // SKILLS</span>
      </div>

      <h2
        className="section-title chrome-text"
        style={{ marginBottom: 48 }}
      >
        Skills & Tech
      </h2>

      {/* Skill bar cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          maxWidth: 900,
          marginBottom: 40,
        }}
      >
        {/* Primary Skills */}
        <div className="glass-card metal-border" style={{ padding: 32 }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--chrome-3)",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Core Proficiencies
          </h3>

          {SKILL_BARS_PRIMARY.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        {/* Secondary Skills */}
        <div className="glass-card metal-border" style={{ padding: 32 }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--chrome-3)",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Secondary Skills
          </h3>

          {SKILL_BARS_SECONDARY.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      {/* Skill categories */}
      {SKILL_CATEGORIES.map((category) => (
        <div key={category.title} style={{ marginBottom: 24 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--chrome-3)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            {category.title}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            {category.skills.map((skill) => (
              <SkillChip key={skill} name={skill} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}