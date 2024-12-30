import { useNavigate } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");

  return (
    <div className="navigation-container">
      <section className="home">
        <button onClick={handleNavigate} className="home-btn">
          Home
        </button>
        <div className="nav-line"></div>
      </section>
      <section className="social-links">
        <a
          href="https://www.linkedin.com/in/nigel-ferreres-f%C3%A9lix/"
          target="_blank"
        >
          <p>LI</p>
        </a>
        <a href="https://github.com/NigelFerrefe" target="_blank">
          <p>GIT</p>
        </a>
      </section>
    </div>
  );
}

export default Navigation;
