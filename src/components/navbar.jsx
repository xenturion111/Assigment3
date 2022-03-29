import React from 'react';
import profile from '../assets/img/profile.jpg'
import './navbar.css'
import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <div className="sidenav">
        <img id="profile" src={profile} alt="Profile" />;
            <Link to="/About">About</Link> 
            <Link to="/Experience">Experiences</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Interest">Interest</Link>
            <Link to="/Awards">Awards</Link>
        </div>
    );
};

export default SideNav;