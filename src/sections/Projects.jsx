/**
 * sections/Projects.jsx
 * Responsive grid of project cards.
 *
 * ✏️ Edit: project data in src/data/projects.js
 */

import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      style={{ background: "linear-gradient(180deg, transparent, rgba(30,30,30,0.2), transparent)" }}
    >
      <div className="section-label"><span>03 // PROJECTS</span></div>
      <h2 className="section-title chrome-text" style={{ marginBottom: 48 }}>Featured Work</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 980,
        }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} {...project} num={i + 1} />
        ))}
      </div>
    </Section>
  );
}
