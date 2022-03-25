import React from 'react';
import 'header.css'

const SideNav = (props) => {
    return (
        <div className="sidenav">
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