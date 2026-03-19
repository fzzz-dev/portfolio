import Icon from "./Icon";

// ✏️ Edit YOUR NAME and the quote string below.
export default function Header({ setSidebarOpen }) {
  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      height: "var(--header-h)",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 28px",
      background: "linear-gradient(180deg, rgba(18,18,18,0.98) 0%, rgba(22,22,22,0.92) 100%)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(100,100,100,0.2)",
      boxShadow: "0 4px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
    }}>

      {/* ── Left: hamburger + name ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 36, height: 36, borderRadius: 6,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "var(--chrome-2)",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "var(--accent-bright)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "var(--chrome-2)"; }}
        >
          <Icon name="menu" size={16} />
        </button>

        <div>
          {/* ✏️ Your name */}
          <span className="chrome-text" style={{
            fontFamily: "var(--font-display)",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}>
            ABDUL MALIK
          </span>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "2px",
            color: "var(--chrome-3)",
            display: "block",
            marginTop: 1,
          }}>
           . PORTFOLIO .
          </span>
        </div>
      </div>

      {/* ── Right: quote ── */}
      {/* ✏️ Your quote or tagline */}
      <div style={{
        fontFamily: "var(--font-body)",
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "13px",
        color: "var(--chrome-3)",
        letterSpacing: "0.5px",
        maxWidth: 360,
        textAlign: "right",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}>
        <span style={{ width: 24, height: 1, background: "var(--chrome-dim)", flexShrink: 0 }} />
        <span>"Jack Of All The Trades"</span>
      </div>
    </header>
  );
}
