import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import bookquestImage from "../assets/projects/Bookquest.png";
import isibcnImage from "../assets/projects/IsiBcn.png";
import ironhubImage from "../assets/projects/Ironhub.png";
import "./ProjectCard.css";
import { useNavigate } from "react-router-dom";



function ProjectCard() {
  const { projectId } = useParams(); // Get the projectId from the URL
  const imageMap = {
    "Bookquest.png": bookquestImage,
    "IsiBcn.png": isibcnImage,
    "Ironhub.png": ironhubImage,
  };
  // Find the project that matches the projectId
  const project = projectsData.find((p) => p._id === projectId);

  if (!project) {
    return <p>Project not found!</p>; // Display an error if no project is found
  }
  const navigate = useNavigate();
  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigate("/projects");
  };

  return (
    <div className="card-main-container">
      <h1>{project.title}</h1>
      <section className="card-container">
        <div className="live-link">
          <h3>See live:</h3>
          <a href={project.link} target="_blank" className="btn">
            Project link
          </a>
        </div>
        <img src={imageMap[project.image]} alt={project.title} className="" />
        <p className="date">Released on: {project.date}</p>
        <div className="info-container">
          <div className="left-card">
            <h3>Description:</h3>
            <div className="description">
              {project.description.map((des, index) => (
                <p key={index}>{des}</p>
              ))}
            </div>
          </div>
          <div className="right-card">
            <h3>Tools used:</h3>
            <div className="tools">
              {project.technologies.map((tech, index) => (
                <p className="tool" key={index}>
                  {tech}
                </p>
              ))}
            </div>
            <div className="live-link">
              <h3>See live:</h3>
              <a href={project.link} target="_blank" className="btn">
                Project link
              </a>
              <button onClick={handleNavigate} className="secondary-btn"><p>Go Back</p></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectCard;
