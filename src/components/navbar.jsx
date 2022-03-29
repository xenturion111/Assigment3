import React from 'react';
import profile from '../assets/img/profile.jpg'
import './navbar.css'
import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <div className="sidenav">
        <img id="profile" src={profile} alt="Profile" />;
            <Link to="/pages/About">About</Link> 
            <Link to="../pages/Experience">Experiences</Link>
            <Link to="../pages/Skills">Skills</Link>
            <Link to="../pages/Interest">Interest</Link>
            <Link to="../pages/Awards">Awards</Link>
        </div>
    );
};

export default SideNav;