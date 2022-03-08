import "./navbar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <ul className="links">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#about">resume</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
