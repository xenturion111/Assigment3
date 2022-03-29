import React from 'react';
import profile from '../assets/img/profile.jpg'
import './navbar.css'
import { Link } from "react-router-dom";

const SideNav = () => {
    return (
        <div className="sidenav">
        <img id="profile" src={profile} alt="Profile" />;
            <Link to="/pages/About">About</Link> 
            {/* <Link to="../pages/About">Experiences</Link>
            <Link to="../pages/About">Skills</Link>
            <Link to="../pages/About">Interest</Link>
            <Link to="../pages/About">Awards</Link> */}
        </div>
    );
};

export default SideNav;