import Icon from "./Icon";
import { NAV_ITEMS } from "../data/nav";

export default function Sidebar({ open, activeSection, onNavigate }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onNavigate();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onNavigate}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 89,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
          backdropFilter: open ? "blur(2px)" : "none",
        }}
      />

      {/* Panel */}
      <nav style={{
        position: "fixed",
        top: "var(--header-h)", left: 0, bottom: 0,
        width: "var(--sidebar-w)",
        zIndex: 90,
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        background: "linear-gradient(180deg, rgba(20,20,20,0.98) 0%, rgba(16,16,16,0.98) 100%)",
        backdropFilter: "blur(20px)",
        borderRight: "1px solid rgba(100,100,100,0.15)",
        boxShadow: open ? "4px 0 40px rgba(0,0,0,0.6)" : "none",
        display: "flex", flexDirection: "column",
        padding: "24px 0",
      }}>

        {/* Decorative top line */}
        <div style={{
          height: 2,
          background: "linear-gradient(90deg, transparent, var(--chrome-2), transparent)",
          margin: "0 20px 24px",
          opacity: 0.4,
        }} />

        {/* Nav items */}
        <div style={{ padding: "0 12px", flex: 1 }}>
          {NAV_ITEMS.map((item, i) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  width: "100%",
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "13px 16px", marginBottom: 4,
                  borderRadius: 8,
                  border: isActive ? "1px solid rgba(180,180,180,0.15)" : "1px solid transparent",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(80,80,80,0.25) 0%, rgba(40,40,40,0.25) 100%)"
                    : "transparent",
                  color: isActive ? "var(--accent-bright)" : "var(--chrome-3)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  animation: open ? `slide-in-left 0.4s ${i * 0.06}s both` : "none",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.color = "var(--chrome-1)";
                    e.currentTarget.style.borderColor = "rgba(100,100,100,0.15)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--chrome-3)";
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}
              >
                {/* Active left bar */}
                {isActive && (
                  <span style={{
                    position: "absolute", left: 0, top: "20%", bottom: "20%",
                    width: 3, borderRadius: "0 2px 2px 0",
                    background: "linear-gradient(180deg, var(--chrome-1), var(--chrome-3))",
                  }} />
                )}

                <Icon name={item.icon} size={16} />

                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "11px",
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}>
                  {item.label}
                </span>

                {/* Active pulse dot */}
                {isActive && (
                  <span style={{
                    marginLeft: "auto",
                    width: 5, height: 5,
                    borderRadius: "50%",
                    background: "var(--chrome-2)",
                    boxShadow: "0 0 6px var(--chrome-2)",
                    animation: "pulse-glow 2s ease-in-out infinite",
                  }} />
                )}
              </button>
            );
          })}
        </div>

        {/* ✏️ Edit: availability status */}
        <div style={{
          padding: "16px 28px",
          borderTop: "1px solid rgba(80,80,80,0.2)",
          marginTop: 8,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 8px #4ade80",
              animation: "pulse-glow 2s ease-in-out infinite",
            }} />
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--chrome-3)",
              letterSpacing: "1px",
            }}>
              AVAILABLE FOR WORK
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
