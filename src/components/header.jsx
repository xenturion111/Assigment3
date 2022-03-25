import React from 'react';
import profile from '../assets/img/profile.jpg'
import './header.css'

const SideNav = () => {
    return (
        <div className="sidenav">
        <img id="profile" src={profile} alt="Profile" />;
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Experiences</a>
            <a href="#">Skills</a>
            <a href="#">Interest</a>
            <a href="#">Awards</a>
        </div>
    );
};

export default SideNav;