import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <h3>Nigel Ferreres</h3>
      <div className="nav-links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/art">3D Art</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
