import { Routes, Route } from "react-router-dom";
import './App.css'

/*Pages*/
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default App
