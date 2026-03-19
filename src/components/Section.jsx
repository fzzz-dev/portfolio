// Generic wrapper for every page section.
// Provides consistent min-height and padding.
export default function Section({ id, children, style }) {
  return (
    <section
      id={id}
      style={{
        minHeight: "100vh",
        padding: "100px 48px 60px",
        position: "relative",
        ...style,
      }}
    >
      {children}
    </section>
  );
}
