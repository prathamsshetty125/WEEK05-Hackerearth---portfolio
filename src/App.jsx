import { useState, useEffect } from "react";
import { profile, skillGroups, projects } from "./data";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      <Header name={profile.name} theme={theme} onToggle={toggleTheme} />
      <main>
        <About profile={profile} />
        <Skills groups={skillGroups} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  );
}

export default App;
