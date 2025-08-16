import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="text-container">
          <section className="title">
            <h3>Nigel Ferreres</h3>
            <p>Full Stack Developer</p>
          </section>
          <section className="description">
            <p>
              As a <span className="color">Full Stack Developer</span> with a
              strong focus on frontend, I build efficient, user-friendly
              applications while continuously expanding my technical skills and
              embracing new tools and challenges.
            </p>
          </section>
        </div>
        <section className="nav-links">
          <Link to="/about" className="nav-link">
            <h1 data-name="About">About</h1>
          </Link>
          <Link to="/projects" className="nav-link">
            <h1 data-name="Projects">Projects</h1>
          </Link>
          <Link to="/resume" className="nav-link">
            <h1 data-name="Resume">Resume</h1>
          </Link>
          <Link to="/contact" className="nav-link">
            <h1 data-name="Contact">Contact</h1>
          </Link>
        </section>
      </div>
    </>
  );
}

export default Navbar;
