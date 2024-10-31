import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import AboutMe from './pages/AboutMePage';
import Certifications from './pages/CertificationsPage';
import Projects from './pages/ProjectsPage';

function App() {
  return (
    <HashRouter>
      <MyNavbar />
      <br />
      <Routes>
        <Route path='/' element={<AboutMe />} ></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
