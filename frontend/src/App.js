import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MyNavbar from "./components/Navbar";
import AboutMe from './pages/AboutMePage';
import Certifications from './pages/CertificationsPage';
import Projects from './pages/ProjectsPage';

function App() {
  return (
    <Router>
      <MyNavbar />
      <br />
      <Routes>
        <Route path='/' element={<AboutMe />} ></Route>
        <Route path='/certifications' element={<Certifications />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
