function ProjectCard({ project }) {
  const { title, description, tags, link } = project;
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tags">
        {tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <a href={link} className="card-link">View project</a>
    </article>
  );
}

export default ProjectCard;
