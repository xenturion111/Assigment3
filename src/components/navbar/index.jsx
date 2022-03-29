import React from 'react';
import profile from '../../assets/image/profile.jpg'
import './navbar.css'
import { Link } from "react-router-dom";


const SideNav = () => {
    return (

        <div className="sidenav">
            <Link className="logo" to='/'> 
                <img id="profile" src={profile} alt="Profile"/>
            </Link>
            <Link  activeClassName="active" exact="true" to="/"></Link> 
            <Link  activeClassName="active" className="about-link" exact="true" to="/About">About</Link> 
            <Link  activeClassName="active" className="experience-link" exact="true" to="/Experience">Experiences</Link>
            <Link  activeClassName="active" className="skills-link" exact="true" to="/Skills">Skills</Link>
            <Link  activeClassName="active" className="interest-link" exact="true" to="/Interest">Interest</Link>
            <Link  activeClassName="active" className="awards-link" exact="true" to="/Awards">Awards</Link>
        </div>
    );
};

export default SideNav;