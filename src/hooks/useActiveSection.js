import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../data/nav";

// Tracks which section is currently in the viewport
// and drives the active highlight in the Sidebar.
export default function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.id);

    const observers = ids
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const obs = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) setActive(id); },
          { threshold: 0.3 }
        );
        obs.observe(el);
        return obs;
      })
      .filter(Boolean);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
