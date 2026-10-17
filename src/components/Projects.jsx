import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  const [filter, setFilter] = useState("All");

  const tags = ["All", ...new Set(projects.flatMap((p) => p.tags))];
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2>Projects</h2>

        <div className="tabs">
          {tags.map((tag) => (
            <button
              key={tag}
              className={"tab" + (tag === filter ? " active" : "")}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
