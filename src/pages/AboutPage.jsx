import AboutMe from "../components/AboutMe.jsx";
import NigelPic from "../assets/Nigel.png";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-main-container">
      <section className="page-title">
        <h1>About</h1>
      </section>
      <section className="header-container">
        <h3>Hey, I&apos;m Nigel</h3>
        <img
          width={100}
          src={NigelPic}
          alt="pic about me"
          className="mobile-pic"
        />
      </section>
      <div className="description-container">
        <div className="left-section">
          <section>
            <AboutMe />
          </section>
        </div>
        <div className="right-section">
          {/* <img width={100} src={NigelPic} alt="pic about me" className="desktop-pic" /> */}
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
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
