import AboutMe from "../components/AboutMe.jsx";
import "./AboutPage.css";
import Navigation from "../components/Navigation.jsx";
import arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";
function AboutPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigate("/projects");
  };
  return (
    <>
      <Navigation />
      <div className="about-main-container">
        <section className="page-title">
          <h1>About</h1>
        </section>
        <section className="header-container">
          <h3 >Hey, I&apos;m Nigel</h3>
        </section>
        <div className="description-container">
          <div className="left-section">
            <section>
              <AboutMe />
            </section>
          </div>
          <div className="right-section">
            <section>
              <h3>Skills</h3>
              <article className="skills">
                <p className="skill">React</p>
                <p className="skill">JavaScript</p>
                <p className="skill">C#</p>
                <p className="skill">CSS</p>
                <p className="skill">Node.js</p>
                <p className="skill">Express.js</p>
                <p className="skill">MongoDB</p>
                <p className="skill">API Restful</p>
                <p className="skill">Cypress</p>
                <p className="skill">Git</p>
              </article>
            </section>
            <section className="next">
              <button onClick={handleNavigate}>
                <p>Continue to Projects</p>
                <img src={arrow} alt="white arrow" />
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
