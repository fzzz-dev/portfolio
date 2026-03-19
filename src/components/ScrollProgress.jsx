import { useState, useEffect } from "react";

// Thin chrome bar below the header that fills as you scroll down the page.
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: "var(--header-h)",
      left: 0, right: 0,
      height: 2,
      zIndex: 200,
      background: "rgba(40,40,40,0.6)",
    }}>
      <div style={{
        height: "100%",
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--chrome-3), var(--chrome-1))",
        boxShadow: "0 0 8px rgba(200,200,200,0.4)",
        transition: "width 0.1s linear",
      }} />
    </div>
  );
}
