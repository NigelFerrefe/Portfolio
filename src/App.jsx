import { Routes, Route } from "react-router-dom";
import './App.css'

/*Pages*/
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectCard from "./components/ProjectCard";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/projects/:projectId" element={<ProjectCard/>} />
        <Route path="/resume" element={<ResumePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default App
