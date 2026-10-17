function About({ profile }) {
  return (
    <section id="about" className="section hero">
      <div className="wrap">
        <p className="muted">{profile.role} · {profile.location}</p>
        <h1>Hi, I'm {profile.name}. I build things for the web.</h1>
        {profile.bio.map((para, i) => (
          <p key={i} className="lead">{para}</p>
        ))}
        <div className="links">
          <a className="btn" href="#projects">See my projects</a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default About;
