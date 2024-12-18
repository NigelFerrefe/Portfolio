import { Routes, Route } from "react-router-dom";
import './App.css'

/*Pages*/
// import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ArtPage from "./pages/ArtPage";
import ErrorPage from "./pages/ErrorPage";

function App() {


  return (
    <div>
      <Routes>
        <Route path="*" element={<ErrorPage/>} />
        {/* <Route path="/" element={<HomePage/>} /> */}
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/art" element={<ArtPage/>} />
      </Routes>
    </div>
  )
}

export default App
