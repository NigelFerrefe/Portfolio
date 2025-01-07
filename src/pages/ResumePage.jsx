import Navigation from "../components/Navigation.jsx";
import arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";
import "./ResumePage.css";
import CV from "../assets/CV.png";
function ResumePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };

  return (
    <>
      <Navigation />
      <div className="resume-main-container">
        <h1>Resume</h1>
        <section>
          <article className="resume-container">
            <a href="/CVEng.pdf" target="_blank" rel="noopener noreferrer">
              <img src={CV} alt="CV png" className="CV" />
            </a>
          </article>
        </section>
        <section className="next">
          <button onClick={handleNavigate}>
            <p>Ready to work together ?</p>
            <img src={arrow} alt="white arrow" />
          </button>
        </section>
      </div>
    </>
  );
}

export default ResumePage;
