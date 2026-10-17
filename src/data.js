export const profile = {
  name: "Pratham S Shetty",
  role: "Aspiring AIML Engineer",
  location: "Udupi, Karnataka",
  bio: [
    "I'm a student learning to build for the web. I started with plain HTML and CSS, and now I'm moving into JavaScript and React.",
    "I like turning small ideas into working pages, and I'm currently focused on writing cleaner, reusable code.",
  ],
  email: "prathamsshetty125@gmail.com",
  github: "https://github.com/prathamsshetty125",
  linkedin: "https://linkedin.com/in/pratham-s-shetty-13317a375",
};

export const skillGroups = [
  {
    group: "Frontend",
    items: [
      { name: "HTML", level: 90, note: "Semantic markup and forms." },
      { name: "CSS", level: 80, note: "Flexbox, grid and responsive layouts." },
      { name: "JavaScript", level: 70, note: "DOM, events, array methods, fetch." },
      { name: "React", level: 55, note: "Components, props, state and hooks." },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", level: 60, note: "Commits, branches and pull requests." },
      { name: "GitHub", level: 65, note: "Hosting repos and project pages." },
      { name: "VS Code", level: 85, note: "My daily editor." },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Developer Profile (HTML/CSS)",
    description: "The first version of this portfolio, built with plain HTML and CSS.",
    tags: ["HTML", "CSS"],
    link: "#",
  },
  {
    id: 2,
    title: "To-Do List",
    description: "Add, complete and delete tasks. Saves tasks in the browser.",
    tags: ["JavaScript"],
    link: "#",
  },
  {
    id: 3,
    title: "Weather Checker",
    description: "Search for a city and see the current weather from a public API.",
    tags: ["JavaScript", "API"],
    link: "#",
  },
  {
    id: 4,
    title: "Quiz App",
    description: "Multiple-choice quiz with a score and restart button.",
    tags: ["React"],
    link: "#",
  },
];
