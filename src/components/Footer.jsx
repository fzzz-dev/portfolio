// ✏️ Edit: social links array and your name
const SOCIAL_LINKS = [
  { label: "GitHub",   href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter",  href: "#" },
];

export default function Footer() {
  return (
    <footer style={{
      padding: "32px 48px",
      borderTop: "1px solid rgba(60,60,60,0.4)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 16,
      background: "rgba(14,14,14,0.8)",
    }}>
      <span className="chrome-text" style={{
        fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, letterSpacing: "3px",
      }}>
        Abdul Malik {/* ✏️ Edit */}
      </span>

      <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--chrome-3)", letterSpacing: "1px" }}>
        © {new Date().getFullYear()} · Built with React ·
      </span>

      <div style={{ display: "flex", gap: 16 }}>
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a key={label} href={href} style={{
            fontFamily: "var(--font-mono)", fontSize: "11px",
            color: "var(--chrome-3)", letterSpacing: "1px",
            cursor: "pointer", transition: "color 0.2s",
            textDecoration: "none",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--chrome-1)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--chrome-3)")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
