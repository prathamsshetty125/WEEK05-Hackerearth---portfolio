import { useState } from "react";

function SkillItem({ skill, isOpen, onClick }) {
  return (
    <li>
      <button className="skill" onClick={onClick} aria-expanded={isOpen}>
        <span className="skill-top">
          <span>{skill.name}</span>
          <span className="muted">{skill.level}%</span>
        </span>
        <span className="bar">
          <span className="bar-fill" style={{ width: skill.level + "%" }} />
        </span>
      </button>
      {isOpen && <p className="skill-note">{skill.note}</p>}
    </li>
  );
}

function Skills({ groups }) {
  const [activeGroup, setActiveGroup] = useState(groups[0].group);
  const [openSkill, setOpenSkill] = useState(null);

  const current = groups.find((g) => g.group === activeGroup);

  const pickGroup = (name) => {
    setActiveGroup(name);
    setOpenSkill(null);
  };

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <h2>Skills</h2>
        <p className="muted">Pick a group, then tap a skill for details.</p>

        <div className="tabs">
          {groups.map((g) => (
            <button
              key={g.group}
              className={"tab" + (g.group === activeGroup ? " active" : "")}
              onClick={() => pickGroup(g.group)}
            >
              {g.group}
            </button>
          ))}
        </div>

        <ul className="skill-list">
          {current.items.map((skill) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              isOpen={openSkill === skill.name}
              onClick={() =>
                setOpenSkill(openSkill === skill.name ? null : skill.name)
              }
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
