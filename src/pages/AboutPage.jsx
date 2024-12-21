import AboutMe from "../components/AboutMe.jsx";
import NigelPic from "../assets/Nigel.png";
import "./AboutPage.css"


function AboutPage() {
  return (
    <div className="about-main-container">
      <section className="page-title">
        <h1>About</h1>
      </section>
      <section className="header-container">
        <h3>Hey, I&apos;m Nigel</h3>
        
      </section>
      <div className="description-container">
        <div className="left-section">
          <section>
            <AboutMe />
          </section>
        </div>
        <div className="right-section">
          <img width={100} src={NigelPic} alt="pic about me" />
          <section>
            <article>
              <h4>Skills</h4>
              <p>React</p>
              <p>JavaScript</p>
              <p>CSS</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB</p>
              <p>API Restful</p>
              <p>Cypress</p>
              <p>Git</p>
            </article>
          </section>
          <section>
            <article>
              <button>My CV</button>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
