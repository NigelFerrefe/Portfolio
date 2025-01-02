import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import projectsData from "../data/projects.json";
import bookquestImage from "../assets/projects/Bookquest.png";
import isibcnImage from "../assets/projects/IsiBcn.png";
import ironhubImage from "../assets/projects/Ironhub.png";
import "./ProjectsPage.css";
import Navigation from "../components/Navigation";
import arrow from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  const imageMap = {
    "Bookquest.png": bookquestImage,
    "IsiBcn.png": isibcnImage,
    "Ironhub.png": ironhubImage,
  };

  useEffect(() => {
    setProjects(projectsData); // Set the projects data in state
  }, []);
  const navigate = useNavigate();
  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };
  return (
    <>
      <Navigation />
      <div className="projects-main-container">
        <h1>Projects</h1>
        <section className="header-container">
          <p>
            Explore the projects I have created, each presented with a
            comprehensive case study that delves into their core features,
            design, and functionality.
          </p>
        </section>
        <section>
          <ul className="projects-container">
            {projects.map((project) => (
              <li key={project._id} className="projects-items">
                <img src={imageMap[project.image]} alt={project.title} />
                <div className="info">
                  <h3>{project.title}</h3>
                  <Link to={`/projects/${project._id}`} className="main-btn">
                    View Case Study
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="next">
          <button onClick={handleNavigate}>
            <p>Ready to work together?</p>
            <img src={arrow} alt="white arrow" />
          </button>
        </section>
      </div>
    </>
  );
}

export default ProjectsPage;
