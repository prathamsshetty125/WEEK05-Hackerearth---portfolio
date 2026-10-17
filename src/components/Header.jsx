function Header({ name, theme, onToggle }) {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#top" className="brand">{name}</a>
        <nav className="nav" aria-label="Main">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-btn"
          onClick={onToggle}
          aria-label="Switch to dark or light mode"
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;
