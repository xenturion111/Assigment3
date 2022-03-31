import React, { Component } from 'react';
import profile from '../../assets/image/profile.jpg'
import './navbar.css'
import { HashLink as Link} from 'react-router-hash-link';

export default class SideNav extends Component {
    render() {
        return (   
            <div>
                <nav>
                    <ul>
                        <li className="sidenav">
                            <Link  className="logo" to='/'> 
                                <img id="profile" src={profile} alt="Profile"/>
                            </Link>
                            <Link smooth to="/About">About</Link> 
                            <Link smooth to="/Experience">Experiences</Link>
                            <Link smooth to="/Skills">Skills</Link>
                            <Link smooth to="/Interest">Interest</Link>
                            <Link smooth to="/Awards">Awards</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
