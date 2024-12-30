import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="text-container">
          <section className="title fade-in">
            <h3>Nigel Ferreres</h3>
            <p>Full Stack Developer</p>
          </section>
          <section className="description fade-in">
            <p>
              As a Full Stack Developer with a Master’s in Digital Humanities
              and 3D design expertise, I create dynamic, user-friendly
              applications that blend technology and creativity.
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

    </>
  );
}

export default Navbar;
