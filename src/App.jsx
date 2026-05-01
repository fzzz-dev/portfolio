
import "./styles/global.css";

import { useState } from "react";

import ParticleField   from "./components/ParticleField";
import ScrollProgress  from "./components/ScrollProgress";
import Header          from "./components/Header";
import Sidebar         from "./components/Sidebar";

import Home       from "./sections/Home";
import About      from "./sections/About";
import Skills     from "./sections/Skills";
import Projects   from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact    from "./sections/Contact";

import useActiveSection from "./hooks/useActiveSection";

/* ── Footer ── */
// ✏️ Edit: social links array + your name
const SOCIAL_LINKS = ["GitHub", "LinkedIn", "Twitter"];

function Footer() {
  return (
    <footer
      style={{
        padding: "32px 48px",
        borderTop: "1px solid rgba(60,60,60,0.4)",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 16,
        background: "rgba(14,14,14,0.8)",
      }}
    >
      <span
        className="chrome-text"
        style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, letterSpacing: "3px" }}
      >
        ABDUL MALIK {/* ✏️ Edit */}
      </span>

      <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--chrome-3)", letterSpacing: "1px" }}>
        © {new Date().getFullYear()} · Built with React · All rights reserved
      </span>

      <div style={{ display: "flex", gap: 16 }}>
        {SOCIAL_LINKS.map((l) => (
          <span /* ✏️ Replace <span> with <a href="..."> */
            key={l}
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--chrome-3)", letterSpacing: "1px", cursor: "pointer", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--chrome-1)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--chrome-3)")}
          >
            {l}
          </span>
        ))}
      </div>
    </footer>
  );
}

/* ── App ── */
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <>
      <ParticleField />
      <ScrollProgress />

      <Header setSidebarOpen={setSidebarOpen} />
      <Sidebar
        open={sidebarOpen}
        activeSection={activeSection}
        onNavigate={() => setSidebarOpen(false)}
      />

      <main style={{ position: "relative", zIndex: 1, paddingTop: "var(--header-h)" }}>
        <Home />
        <div className="divider" style={{ margin: 0 }} />
        <About />
        <div className="divider" style={{ margin: 0 }} />
        <Skills />
        <div className="divider" style={{ margin: 0 }} />
        <Projects />
        <div className="divider" style={{ margin: 0 }} />
        <Experience />
        <div className="divider" style={{ margin: 0 }} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
