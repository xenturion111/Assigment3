import React, { Component } from 'react';
import SideNav from '../components/navbar/index';
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Awards from "../components/awards/Awards";
import Experience from "../components/experience/Experience";
import Interest from '../components/interest/Interest'; 
import Skills from '../components/skills/Skils'; 

export default class Pages extends Component { 
    render() {
        return (
            <div className="container">
              <SideNav />
              <Routes>
                <Route exact  path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Awards" element={<Awards />} />
                <Route path="/Experience" element={<Experience />} />
                <Route path="/Interest" element={<Interest />} />
                <Route path="/Skills" element={<Skills />} />
              </Routes>
          </div>
        )
    }
}
