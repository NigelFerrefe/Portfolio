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
          <h3>Hello there</h3>
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
                <p className="skill">Next.js</p>
                <p className="skill">React Native</p>
                <p className="skill">JavaScript</p>
                <p className="skill">TypeScript</p>
                <p className="skill">Node.js</p>
                <p className="skill">Express.js</p>
                <p className="skill">MongoDB</p>
                <p className="skill">CSS</p>
                <p className="skill">Tailwind CSS</p>
                <p className="skill">C#</p>
                <p className="skill">API Restful</p>
              </article>
            </section>

            <section>
              <h3>Tools</h3>
              <article className="skills">
                <p className="skill">Git</p>
                <p className="skill">Cypress</p>
                <p className="skill">Jira</p>
                <p className="skill">Zustand</p>
                <p className="skill">Tamagui</p>
                <p className="skill">Expo</p>
                <p className="skill">TanStack Query</p>
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
