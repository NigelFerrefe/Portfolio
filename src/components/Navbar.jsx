import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="text-container">
        <section className="title fade-in">
          <h3>Nigel Ferreres</h3>
          <p>Full Stack Developer</p>
        </section>
        <section className="description fade-in">
          <p>
            With a background in History and a Masters in Digital Humanities, I
            bring the past into the future through technology.
          </p>
          <p>
            My background includes a deep dive into 3D animation and interactive
            design, and now, as a full stack developer, I combine creativity
            with coding to shape the digital world.
          </p>
        </section>
      </div>
      <section className="nav-links fade-in">
        <Link to="/about" className="nav-link">
          <h1 data-name="About">About</h1>
        </Link>
        <Link to="/projects" className="nav-link">
          <h1 data-name="Projects">Projects</h1>
        </Link>
        <Link to="/contact" className="nav-link">
          <h1 data-name="Contact">Contact</h1>
        </Link>
      </section>
    </div>
  );
}

export default Navbar;
