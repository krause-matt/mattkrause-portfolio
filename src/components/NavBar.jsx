import "./navbar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <ul className="links">
          <li>
            <a href="#about-anchor">about</a>
          </li>
          <li>
            <a href="#skills-anchor">skills</a>
          </li>
          <li>
            <a href="#projects-anchor">projects</a>
          </li>
          <li>
            <a href="#about-anchor">resume</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
