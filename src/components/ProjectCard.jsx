import Icon from "./Icon";

// ✏️ Props: title, desc, tags (array), github (url), demo (url), num (1-based index)
export default function ProjectCard({ title, desc, tags, github, demo, num }) {
  return (
    <div
      className="hover-lift"
      style={{
        background: "linear-gradient(135deg, rgba(35,35,35,0.8) 0%, rgba(22,22,22,0.9) 100%)",
        border: "1px solid rgba(80,80,80,0.25)",
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s ease",
      }}
    >
      {/* Chrome top accent bar */}
      <div
        style={{
          height: 3,
          background: "linear-gradient(90deg, var(--chrome-3), var(--chrome-1), var(--chrome-3))",
        }}
      />

      {/* Project Preview */}
      <div
        style={{
          height: 160,
          background: "linear-gradient(135deg, rgba(50,50,50,0.5), rgba(25,25,25,0.7))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid rgba(80,80,80,0.2)",
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "48px",
            fontWeight: 900,
            color: "rgba(80,80,80,0.3)",
            letterSpacing: "4px",
          }}
        >
          {String(num).padStart(2, "0")}
        </span>

        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            color: "rgba(120,120,120,0.5)",
          }}
        >
          [ {title} ]
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "24px 24px 20px" }}>
        
        {/* ✅ Title only if exists */}
        {title && (
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "var(--chrome-1)",
              marginBottom: 12,
            }}
          >
            {title}
          </h3>
        )}

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "var(--text-muted)",
            marginBottom: 20,
            marginTop: title ? 0 : 10, // adjust spacing if no title
          }}
        >
          {desc}
        </p>

        {/* Tech tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 20,
          }}
        >
          {tags?.map((t) => (
            <span
              key={t}
              style={{
                padding: "3px 10px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(80,80,80,0.3)",
                borderRadius: 4,
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--chrome-3)",
                letterSpacing: "0.5px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 10 }}>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="btn-chrome"
              style={{
                flex: 1,
                justifyContent: "center",
                padding: "8px 12px",
              }}
            >
              <Icon name="github" size={13} /> GitHub
            </a>
          )}

          {demo && demo !== "#" && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="btn-chrome"
              style={{
                flex: 1,
                justifyContent: "center",
                padding: "8px 12px",
                background: "transparent",
                border: "1px solid rgba(120,120,120,0.3)",
              }}
            >
              <Icon name="external" size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}