import './App.css'
import react from "react";
import SideNav from './components/navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Experience from "./pages/Experience";
import Interest from './pages/Interest'; 
import Skills from './pages/Skils'; 

function App() {
  return (
    <div className="App">
      <SideNav />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Awards" element={<Awards />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Interest" element={<Interest />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </div>
  )
}

export default App
