import githubLogo from "../assets/github.png";
import linkedInLogo from "../assets/linkedin.png";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-container">
      <section className="left-container">
        <h1>Oops! This Page is Under Construction 🛠️</h1>
      </section>
      <section className="right-container">
        <h4>
          I am currently building this website to make it awesome! While I am working hard to create something special, you can still get to know me
          better
        </h4>
        
        <div className="social-logos">
          <a href="https://github.com/NigelFerrefe" target="_blank">
            <img src={githubLogo} alt="github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/nigel-ferreres-f%C3%A9lix/"
            target="_blank"
          >
            <img src={linkedInLogo} alt="linkedin logo" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage;
