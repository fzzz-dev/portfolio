// Fixed ambient background: floating particles + subtle grid overlay.
// Sits behind all content via z-index: 0.

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left:     `${Math.random() * 100}%`,
  delay:    `${Math.random() * 20}s`,
  duration: `${15 + Math.random() * 20}s`,
  size:     `${1 + Math.random() * 2}px`,
  opacity:  0.1 + Math.random() * 0.4,
}));

export default function ParticleField() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {/* Floating dots */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            bottom: "-10px",
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: `rgba(200,200,200,${p.opacity})`,
            animation: `particle-drift ${p.duration} ${p.delay} linear infinite`,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(80,80,80,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(80,80,80,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />
    </div>
  );
}
