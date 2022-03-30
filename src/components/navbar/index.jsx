import React from 'react';
import profile from '../../assets/image/profile.jpg'
import './navbar.css'
import { Link } from "react-router-dom";


const SideNav = () => {
    return (

        <div>
            <ul>
                <li className="sidenav">
                    <Link className="logo" to='/'> 
                        <img id="profile" src={profile} alt="Profile"/>
                    </Link>
                    <Link  to="/About">About</Link> 
                    <Link  to="/Experience">Experiences</Link>
                    <Link  to="/Skills">Skills</Link>
                    <Link  to="/Interest">Interest</Link>
                    <Link  to="/Awards">Awards</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;