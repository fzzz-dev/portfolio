import { useState } from "react";
import Section from "../components/Section";
import Icon from "../components/Icon";

// ✏️ Updated: your real contact details
const CONTACT_LINKS = [
  { 
    label: "Email",       
    value: "abdul951371@gmail.com",      
    href: "mailto:abdul951371@gmail.com" 
  },
  { 
    label: "LinkedIn",    
    value: "/in/abdul-malik-280b55309",      
    href: "https://www.linkedin.com/in/abdul-malik-280b55309" 
  },
  { 
    label: "GitHub",      
    value: "@fzzz-dev",        
    href: "https://github.com/fzzz-dev" 
  },
];

/* ── Styled input / textarea ── */
function Input({ label, type = "text", placeholder, multiline }) {
  const [focused, setFocused] = useState(false);

  const baseStyle = {
    width: "100%",
    background: focused ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
    border: `1px solid ${focused ? "rgba(180,180,180,0.3)" : "rgba(80,80,80,0.3)"}`,
    borderRadius: 8,
    padding: multiline ? "14px 16px" : "12px 16px",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "14px", fontWeight: 300,
    outline: "none", transition: "all 0.2s ease",
    resize: multiline ? "vertical" : "none",
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: "block",
        fontFamily: "var(--font-mono)", fontSize: "10px",
        letterSpacing: "2px", color: "var(--chrome-3)",
        textTransform: "uppercase", marginBottom: 8,
      }}>
        {label}
      </label>

      {multiline ? (
        <textarea
          rows={5}
          placeholder={placeholder}
          style={baseStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          style={baseStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Connect EmailJS or Formspree to make it work)");
  };

  return (
    <Section
      id="contact"
      style={{ background: "linear-gradient(180deg, transparent, rgba(20,20,20,0.5))" }}
    >
      <div className="section-label"><span>05 // CONTACT</span></div>
      <h2 className="section-title chrome-text" style={{ marginBottom: 16 }}>
        Get In Touch
      </h2>

      {/* ✏️ Updated intro text */}
      <p style={{
        color: "var(--text-muted)",
        fontSize: "15px",
        fontWeight: 300,
        maxWidth: 500,
        marginBottom: 48,
        lineHeight: 1.8
      }}>
        I’m always open to opportunities, collaborations, or just a good tech conversation.
        Feel free to reach out — I’ll get back to you as soon as possible.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 40, maxWidth: 900 }}>

        {/* ── Left: contact links ── */}
        <div>
          <div style={{ marginBottom: 32 }}>
            {CONTACT_LINKS.map(({ label, value, href }) => (
              <div
                key={label}
                style={{
                  marginBottom: 20,
                  paddingBottom: 20,
                  borderBottom: "1px solid rgba(60,60,60,0.4)"
                }}
              >
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "var(--chrome-3)",
                  marginBottom: 6,
                  textTransform: "uppercase"
                }}>
                  {label}
                </div>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "var(--chrome-1)",
                    textDecoration: "none"
                  }}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div className="glass-card" style={{ padding: "20px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#4ade80", boxShadow: "0 0 8px #4ade80"
              }} />
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--chrome-2)",
                letterSpacing: "1px"
              }}>
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "var(--text-muted)",
              fontWeight: 300
            }}>
              Open to internships, freelance work, and collaborations in AI, Web Development, and UI/UX.
            </p>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="glass-card metal-border" style={{ padding: 32 }}>
          <form onSubmit={handleSubmit}>
            <Input label="Your Name" placeholder="Your Name" />
            <Input label="Email Address" type="email" placeholder="your@email.com" />
            <Input label="Subject" placeholder="Subject..." />
            <Input label="Message" placeholder="Write your message..." multiline />

            <button
              type="submit"
              className="btn-chrome"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "14px",
                fontSize: "12px",
                letterSpacing: "2px"
              }}
            >
              <Icon name="send" size={14} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}