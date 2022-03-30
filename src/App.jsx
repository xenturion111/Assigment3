import './App.css'
import React, { Component } from 'react';
import SideNav from './components/navbar/index';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Awards from "./pages/awards/Awards";
import Experience from "./pages/experience/Experience";
import Interest from './pages/interest/Interest'; 
import Skills from './pages/skills/Skils'; 

class App extends Component {
  render() {
    return (
      <div className="container">
        <SideNav />
        <Routes>
        <Route index path="/" element={<Home />} />
          <Route id="/About" path="/About" element={<About />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Interest" element={<Interest />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </div>
    )
  }
} 
 


export default App
